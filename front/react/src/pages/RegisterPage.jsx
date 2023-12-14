import React from 'react'

import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth'

function RegisterPage() {

    const { register, handleSubmit } = useForm();

  return (
    <section className='contenedor-register'>
      <form className='form-register' onSubmit={handleSubmit( async(values)=> {
        console.log(values);
        const res = await registerRequest(values)
        console.log(res)
      })}>

        <input type="email" 
        {...register("userName", {required: true})} 
        placeholder='emial'/>

        <input type="password" 
        {...register("password", {required: true})}
        placeholder='contraseña'/>

        <input type="text" 
        {...register("firstName", {required: true})}
        placeholder='nombre'/>

        <input type="text" 
        {...register("lastName", {required: true})}
        placeholder='apellido'/>

        <input type="text" 
        {...register("country", {required: true})}
        placeholder='pais'/>

        <button type='submit'>Register</button>

      </form>
    </section>
  )
}

export default RegisterPage
