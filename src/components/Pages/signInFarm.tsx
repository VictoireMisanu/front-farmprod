// import React from 'react'
import {useForm} from 'react-hook-form'
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
// interface formProps{
//     name : string,
//     password : string
// }
const SignIn = () => {
    
    const form = useForm();
    const {register} = form
    return (
        <div id='' className='w-full h-screen flex flex-col items-center py-5 px-10 gap-20'>
            <div id='header' className='w-full h-20 flex flex-row items-center justify-between gap-10'>
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <div id='logInSection' className='w-auto flex flex-row items-center gap-10'>
                    <p className='text-[#00A602] font-semibold'>Vous n'avez pas de compte?</p>
                    <Link to={`/signUp`} className="h-10 flex justify-center items-center text-md text-[#5B8C51] border-2 border-[#5B8C51]  font-normal bg-none p-2 rounded-lg hover:bg-[#5B8C51] hover:text-white">Sign Up</Link>
                </div>
            </div>
            <form className='w-3/4 flex flex-col justify-center items-center gap-10'>
                <div id="title">
                    <p className="font-extrabold text-[#658221] leading-10 text-2xl mb-2">Se connecter</p>
                </div>
                <div id='middleSection' className='w-full h-auto flex flex-col items-center gap-8'>
                    
                    <div id='emailAddress'className='w-1/2 h-7 flex justify-center items-center rounded-md'>
                        <input className='bg-transparent border-[1px] border-black focus-within:border-2 focus-within:border-[#658221] w-2/3 h-full p-5 outline-none rounded-md' placeholder='Adresse email' type="email" {...register('email')} name='emailAddress'/>
                    </div>
                    <div id='password' className='w-1/2 h-7 flex flex-col justify-center items-center'>
                        <input className='bg-transparent border-[1px] border-black focus-within:border-2 focus-within:border-[#658221] w-2/3 h-full p-5 outline-none rounded-md' placeholder='Mot de passe'  type="password" {...register('password')} name='password'/>
                    </div>
                    <Link to={"#"}><p className='text-[#00A602] font-semibold -ml-52'>Mot de passe oublié?</p></Link>
                </div>
                <input className='bg-[#658221] w-1/3 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="Se connecter" />
                
            </form>

        </div>
        
    )
}

export default SignIn