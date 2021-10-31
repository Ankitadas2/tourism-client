import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [order,setOrder]=useState([])
    const [update,setUpdate]=useState('')
    useEffect(()=>{
        fetch('https://peaceful-reaches-09410.herokuapp.com/myOrders')
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])

    // Update:
      const handleUpdate=(id,data)=>{
       fetch(`https://peaceful-reaches-09410.herokuapp.com/update/${id}`,{
           method:"PUT",
           headers:{
               "content-type":'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(result=>{
           
           if(result.modifiedCount===0){
              alert('Updated successfully')
           }
       })
      }


   const handleManageOrder=(id)=>{
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
                        const remainingUser=order.filter(service=>service._id!==id)
                        setOrder(remainingUser)
                    }
        
                })
       }
   
   }
    return (
        <div>
            <h2 className="text-primary pt-4">Manage all orders</h2>
            <h3>Total :{order.length}</h3>
            <div className="service-container">
            {
                order.map(service=>
                    <div className="service pb-5">
           
                    <img className="w-75 pt-4 px-5 mx-4 my-4" src={service.img} alt="" />
                    <h2 className="px-3 text-center">Destination:{service.name}</h2>
                    <h3>Price: <span>$</span>{service.price}</h3>
                    <p className="px-5">{service.description}</p>
                    
                    <h2 className="text-danger mb-3">{service.status}</h2>
                    <button onClick={()=>handleManageOrder(service._id)} className="bg-warning px-4 py-2">Delete</button>
                      <button className="bg-primary mx-3 px-4 py-2" onClick={()=>handleUpdate(service._id)}>Update</button>
                    
                </div>
            
                    )
            }
            </div>
        </div>
    );
};

export default ManageOrder;