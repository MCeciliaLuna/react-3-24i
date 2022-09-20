import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const resp = await fetch('http://localhost:8000/login', {
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
      <label for="exampleInputEmail2" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="email" {...register("email")} required/>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword2" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword2" {...register("password")} required/>
    </div>
    <button type="submit" className="btn btn-info">Submit</button>
  </form>
  );
};

export default Login;