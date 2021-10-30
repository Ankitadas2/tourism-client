import React from 'react';
import abt1 from '../../images/abt1.jfif'
import abt2 from '../../images/abt2.jpg'
import abt3 from '../../images/abt3.jfif'

const About = () => {
    return (
        <div>
            <h1 className="text-center text-danger fs-1">About us</h1>
            <div class="row row-cols-1 row-cols-md-3  g-4 pt-5 mt-5 px-5 mx-5 about">
  <div class="col">
    <div class="card h-50">
      <img className="w-150" src={abt1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-success fs-2">VIP sit</h5>
        <p class="card-text px-4 fs-4">You can book your ticket with some offer.You also enjoy</p>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-50">
      <img className="w-100" src={abt2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-success fs-2">Our service</h5>
        <p class="card-text px-4 fs-5">All tickets are available at a time.You must try for your tour</p>
      </div>
      
    </div>
  </div>
  <div class="col ">
    <div class="card h-50">
      <img className="w-100" src={abt3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-success fs-2">Destination</h5>
        <p class="card-text px-4 fs-5">Our all services booked for travel.You feel very enjoy</p>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default About;