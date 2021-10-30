import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Order = () => {
const {user}=useAuth()
const [orders,setOrders]=useState([])
const email=user.email
    useEffect(()=>{
   fetch(`http://localhost:5000/myOrders/${email}`)
   .then(res=>res.json())
   .then(data=>setOrders(data))

    },[])
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are you sure,You want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/myOrders/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount){
                    alert("deleted Successfully")
                    const remainingUser=orders.filter(service=>service._id!==id)
                    setOrders(remainingUser)
                }
    
            })
        }
       
    }
    
    return (
        <div>
            <h4>Total order:{orders?.length}</h4>
            <div>
                <div className="service-container">
                    {
                    orders.map(service=>
                        <div className="service pb-5">
           
                <img className="w-75 pt-4 px-5 mx-4 my-4" src={service.img} alt="" />
                <h2 className="px-3 text-center">Destination:{service.name}</h2>
                <h3>Price: <span>$</span>{service.price}</h3>
                <p className="px-5">{service.description}</p>
                  
                <button onClick={()=>handleDelete(service._id)}>Delete</button>
            </div>)
                       
                    }  
                </div>
            </div>
        </div>
    );
};

export default Order;