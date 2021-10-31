import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const {user,isLoading}=useAuth()
    const [services,setServices] =useState([])
    
    useEffect(()=>{
       
        fetch('https://peaceful-reaches-09410.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // Loading spinner for services loading:
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    const handleAdd=(index)=>{
        const data=services[index]
        data.status="pending"
        data.email= user.email
        
        
        fetch("https://peaceful-reaches-09410.herokuapp.com/addOrder",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data),
           
        });
        
    }

   
    return (
        <div id="service">
           <h1 className="text-center text-success">Our Services</h1>
            <div className="service-container">
            
            {
                services.map((service,index)=>
                <div className="service pb-5">
           
                <img className="w-75 pt-4 px-5 mx-4 my-4" src={service.img} alt="" />
                <h2 className="px-3 text-center">Destination:{service.name}</h2>
                <h3>Price: <span>$</span>{service.price}</h3>
                <p className="px-5">{service.description}</p>
                  <Link to={`/booking/${service._id}`}>
                <button onClick={()=>handleAdd(index)} className="btn btn-primary px-5 rounded mx-5 me-5 mt-4 pe-4 w-50 ps-4">Book now</button>
                </Link> 
                
            </div>
                )
            }
        </div>
       </div>
       
            
       
      
    );
    }   


export default Services;