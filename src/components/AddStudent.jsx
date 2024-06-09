import React, { useState } from 'react'
import Navbar from './Navbar'


const AddStudent = () => {
    const [data,setData]=useState(
     {
       "firstname":"",
        "lastname":"",
        "college":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "address":""
        
     }
 )
    const inputHandler=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
       <Navbar/> 
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-control">FIRST NAME</label>
                        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">LAST NAME</label>
                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">COLLEGE</label>
                    <input type="text" className="form-control" name='college'value={data.college} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">DOB</label>
                    <input type="text" className="form-control"  name='dob' value={data.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">COURSE</label>
                    <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">MOBILE</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">EMAIL</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-control">ADDRESS</label>
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
