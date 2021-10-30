import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'


const Booking = () => {
  const {user} =useAuth()
    const {serviceId}=useParams()
    const [use,setUser]=useState([]);
    
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/newOrder',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
if(result.insertedId){
  alert('Order successfully proceed.Now you can go your order')
  reset()
}
    })

    
  }
  useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
         .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    
  
    return (
      <div>
      <h1 className="text-success">Submit this form for information</h1>
        <div className="d-flex align-items-center">
          
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />

<input defaultValue={user.email} {...register("email", { required: true })} />

<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />

<input type="submit" />
</form>
        <div className=" mb-5 my-4 pb-5">
        <img className="w-50" src={use?.img} alt="" />
        <h1>{use?.name}</h1>
        <h3>Price: <span>$</span> {use?.price}</h3>
        <p>{use?.description}</p>
        
       
       
        </div>
       
     </div>
     </div>
    );
};

export default Booking;