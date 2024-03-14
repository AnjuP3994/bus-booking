import React, { useEffect, useState } from 'react'
import './busadd.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { addbus, getCatgory } from '../../Services/allAPIs';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../Services/baseURL';

function Busadd() {
  const [busdts, setBusdts] = useState({
    name: '',
    price: '',
    description: '',
    boarding_point: '',
    boarding_time: '',
    dropping_point: '',
    dropping_time: '',
    capacity: '',
    image: '',
    

  })
  const [category, setCategory] = useState([])
  const[categoryId,setCategoryId]=useState('')
  const [profileimg, setProfileimg] = useState('')
  useEffect(() => {
    if (busdts.image) {
      setProfileimg(URL.createObjectURL(busdts.image))
    }
    else {
      setProfileimg("")
    }
  }, [busdts.image])

  console.log(busdts)
  console.log(categoryId)

  const categories = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Token ${token}`
    }
    const result = await getCatgory(reqHeader)
    console.log(result.data)
    setCategory(result.data)
  }
  useEffect(() => {
    categories()

  }, [])


  const handleadd=async()=>{
    const{name,price,description,boarding_point,boarding_time,dropping_point,dropping_time,capacity,image}=busdts
    if(!name || !price || !description || !boarding_point || !boarding_time || !dropping_point || !dropping_time || !capacity || !image){
      Swal.fire({
        title: `incomplete form`,
        text: `Please fill the form completely`,
        icon: "warning"
      });
      
    }else{

      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Token ${token}`
    };
    const reqBody=new FormData()
    reqBody.append("name", name);
    reqBody.append("price", price);
    reqBody.append("description", description);
    reqBody.append("boarding_point", boarding_point);
    reqBody.append("boarding_time", boarding_time);
    reqBody.append("dropping_point", dropping_point);
    reqBody.append("dropping_time", dropping_time);
    reqBody.append("capacity", capacity);
    reqBody.append("image", image);
    const id=categoryId
    console.log(id)
    

    const result=await addbus(id,reqBody,reqHeader)
    console.log(result)

    if(result.status===200){
      Swal.fire({
        title: `successful`,
        text: `${result.data.name} Bus added successfully`,
        icon: "success"
      });

    }else{
      Swal.fire({
        title: `error`,
        text: `something went wrong`,
        icon: "error"
      });

      console.log(result.response.data)

    }


    }
    

  }
  return (
    <div>
      <MDBContainer fluid>
        <Form>

          <MDBRow className='justify-content-center align-items-center m-5 shadow'>

            <MDBCard>
              <MDBCardBody className='px-4'>

                {/* <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3> */}
                <div className='d-flex justify-content-center mb-3'>
                  <label htmlFor="img">
                    <img className='img-fluid' style={{ height: '250px', width: '250px', borderRadius: '50%' }} src={profileimg ? profileimg : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1710232129~exp=1710235729~hmac=597a3373f2badcb3d73e3ee0cc0e4c15e2916d682f93a8261c561f6521b9bac8&w=740'} alt="" />

                  </label>
                  <input type="file" id='img' style={{ display: 'none' }} onChange={(e) => setBusdts({ ...busdts, image: e.target.files[0] })} />


                </div>





                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label=' Name' size='lg' id='form1' type='text' onChange={(e) => setBusdts({ ...busdts, name: e.target.value })} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Price ' size='lg' id='form2' type='text' onChange={(e) => setBusdts({ ...busdts, price: e.target.value })} />
                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='description' size='lg' id='form3' type='text' onChange={(e) => setBusdts({ ...busdts, description: e.target.value })} />
                  </MDBCol>

                  <MDBCol md='6' className='mb-4'>
                    <MDBInput wrapperClass='mb-4' label='Capacity' size='lg' id='form3' type='text' onChange={(e) => setBusdts({ ...busdts, capacity: e.target.value })} />




                  </MDBCol>

                </MDBRow>
                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Boarding Point' size='lg' id='form3' type='text' onChange={(e) => setBusdts({ ...busdts, boarding_point: e.target.value })} />
                  </MDBCol>

                  <MDBCol md='6' className='mb-4'>
                    <MDBInput wrapperClass='mb-4' label='Boarding Time' size='lg' id='form3' type='time' onChange={(e) => setBusdts({ ...busdts, boarding_time: e.target.value })} />


                  </MDBCol>

                </MDBRow>

                <MDBRow>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Droping Point' size='lg' id='form4' type='email' onChange={(e) => setBusdts({ ...busdts, dropping_point: e.target.value })} />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput wrapperClass='mb-4' label='Droping Time' size='lg' id='form5' type='time' onChange={(e) => setBusdts({ ...busdts, dropping_time: e.target.value })} />
                  </MDBCol>

                </MDBRow>
                <label htmlFor="ctgr">Choose your category</label>

                <select id='ctgr' className="form-select" aria-label="Choose your category" onChange={(e) => setCategoryId( e.target.value)} >
                  {category?.length > 0 ? (
                    category.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                  ) : (
                    <option disabled>No categories available yet</option>
                  )}
                </select>



                {/* <MDBSelect
            label='Choose option'
            className='mb-4'
            size='lg'
            data={[
              { text: 'Choose option', value: 1, disabled: true },
              { text: 'Subject 1', value: 2 },
              { text: 'Subject 2', value: 3 },
              { text: 'Subject 3', value: 4 }
            ]}
            /> */}
                <div className='d-flex justify-content-evenly'>
                  <MDBBtn type='button' className='mb-4 btn-danger' size='lg'>Clear</MDBBtn>

                  <MDBBtn type='button' className='mb-4 btn-success' size='lg' onClick={handleadd}>Submit</MDBBtn>
                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBRow>
        </Form>
      </MDBContainer>

    </div>
  )
}

export default Busadd