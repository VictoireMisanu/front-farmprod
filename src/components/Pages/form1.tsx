import React from 'react'
import {useForm} from 'react-hook-form'
// interface formProps{
//     name : string,
//     password : string
// }
const RegisterForm = () => {
    
    const form = useForm();
    const {register} = form
    return (
        <form className='bg-[#FEF3B8] h-screen flex flex-col justify-center items-center'>
            <div id="title">
                <p className="font-extrabold text-[#5B8C51] leading-10 text-2xl mb-2">Create an account</p>
            </div>
            <div>
                <input className='h-44 w-44 rounded-full bg-black' type="file" id="profilePic" {...register('profilePic')}/>
            </div>
            <div id='userName'>
                <input className='border-2 border-black' placeholder='User name' type="text" {...register('username')}/>
            </div>
            <div id='passWord'>
                <input className='border-2 border-black' placeholder='Password'  type="password" {...register('password')}/>
            </div>
            <input className='bg-[#5B8C51]' type="submit" value="Enregistrer" />

        </form>
    )
}

export default RegisterForm