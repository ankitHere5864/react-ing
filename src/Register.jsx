import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const Register= () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log('Register Data:', data);
    // API call to register user
  };

  return (
    <div className='main-div'>
      <h2>Register</h2>  
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register