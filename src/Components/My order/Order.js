import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Order = () => {
const {user}=useAuth()

const [orders,setOrders]=useState([])

const email=user.email
    useEffect(()=>{
   fetch(`https://peaceful-reaches-09410.herokuapp.com/myOrders/${email}`)
   .then(res=>res.json())
   .then(data=>setOrders(data))

    },[])
    const handleDelete=(id)=>{
        const proceed=window.confirm('Are you sure,You want to delete?')
        if(proceed){
            fetch(`https://peaceful-reaches-09410.herokuapp.com/myOrders/${id}`,{
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
                  <h3 className="text-danger">{service.status}</h3>
                <button className="bg-primary px-4 py-2 text-light " onClick={()=>handleDelete(service._id)}>Delete</button>
            </div>)
                       
                    }  
                </div>
            </div>
        </div>
    );
};

export default Order;