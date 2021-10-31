import React from 'react';
import abt1 from '../../images/abt1.jfif'
const ArgentBook = () => {
    return (
        <div>
            <h1 className="text-primary">Argent services</h1>
             <div class="row row-cols-1 row-cols-md-2 g-2">
  <div class="col">
    <div class="card">
      <img className="w-100" src={abt1} class="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div class="col">
    <div class="card mt-5 bg-success ">
      <p className="pt-5 fw-bold">Booking you latest journey.Its a amazing experience.All are feel very enjoy.Tickets are avaiable.urgent buying you ticket.All tickets are available but sloting time is fixed</p>
      <div class="card-body">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bg-primary fw-bold fw-1">
    <p> Booking you latest journey.Its a amazing experience.All are feel very enjoy.Tickets are avaiable.urgent buying you ticket.All tickets are available but sloting time is fixed </p>
      <div class="card-body">
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card bg-primary fw-bold">
    <p> Booking you latest journey.Its a amazing experience.All are feel very enjoy.Tickets are avaiable.urgent buying you ticket.All tickets are available but sloting time is fixed </p>
      <div class="card-body">
        
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
       
    );
};

export default ArgentBook;