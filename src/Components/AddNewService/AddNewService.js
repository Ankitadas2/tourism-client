import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddNewService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
   
      axios.post('http://localhost:5000/services',data)
      .then(res=>{
          if(res.data.insertedId){
            console.log(data);
              alert('Your service is included')
          }
      })
      
  }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("title")}
                placeholder="title"
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2"
                className="p-2 m-2 w-50"
              />
              <br />
              <input
                {...register("Price")}
                placeholder="Price"
                className="p-2 m-2"
                className="p-2 m-2 w-50"
              />
            <br/>
              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2"
                className="p-2 m-2 w-50"
              />
              <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;