import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = async(data) => {
    const resp = await fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const json = await resp.json();

    console.log(json)
  }

  return (
    <form className="m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label for="exampleInputNombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="exampleInputNombre" aria-describedby="nombre" {...register("nombre")} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputApellido" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="exampleInputApellido" aria-describedby="apellido" {...register("apellido")} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="email" {...register("email")} required/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...register("password")} required/>
  </div>
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
  );
};

export default Register;