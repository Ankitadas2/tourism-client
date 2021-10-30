import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, NavLink } from 'react-router-dom';

import './Service.css'

const Service = ({service}) => {
   
    
    const {_id,name,img,description,price}=service
    return (
        <div className="service pb-5">
           
            <img className="w-75 pt-4 px-5 mx-4 my-4" src={img} alt="" />
            <h2 className="px-3 text-center">Destination:{name}</h2>
            <h3>Price: <span>$</span>{price}</h3>
            <p className="px-5">{description}</p>
              <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary px-5 rounded mx-5 me-5 mt-4 pe-4 w-50 ps-4">Book now</button>
            </Link> 
            
        </div>
    );
};

export default Service;