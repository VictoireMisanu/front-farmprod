// import React from 'react'
import {useForm} from 'react-hook-form'
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
// interface formProps{
//     name : string,
//     password : string
// }
const CreateAccount = () => {
    
    const form = useForm();
    const {register} = form
    return (
        <div id='' className='w-full h-screen flex flex-col gap-8 py-5 px-10'>
            <div id='header' className='w-full h-20 flex flex-row items-center justify-between'>
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <div id='logInSection' className='w-auto flex flex-row items-center gap-10'>
                    <p className='text-[#00A602] font-semibold'>Vous avez déjà un compte?</p>
                    <Link to={`/signIn`} className="h-10 flex justify-center items-center text-md text-[#5B8C51] border-2 border-[#5B8C51]  font-normal bg-none p-2 rounded-lg hover:bg-[#5B8C51] hover:text-white">Sign In</Link>
                </div>
            </div>
            <form className='bg-white flex flex-col justify-center items-center gap-10'>
                <div id="title">
                    <p className="font-extrabold text-black leading-10 text-2xl mb-2">S'enregistrer</p>
                </div>
                <div id='middleSection' className='w-3/4 h-auto flex flex-col items-center gap-5'>
                    <div id='profilePic' className="h-44 w-44 rounded-full border-[1px] border-[#658221] flex flex-col justify-items-center">
                        <input className="w-full h-full hover:cursor-pointer opacity-0" type="file" title='Photo de profil' id="profilePic" {...register('profilePic')}/>
                    </div>
                    <div id='userName' className='w-1/2 h-10 flex justify-items-center'>
                        <input className='bg-transparent border-[1px] border-[#658221] w-full h-full p-5 outline-none' placeholder='Prenom et nom' type="text" {...register('username')}/>
                    </div>
                    <div id='emailAddress'className='w-1/2 h-10 flex justify-items-center rounded-md'>
                        <input className='bg-transparent border-[1px] border-[#658221] w-full h-full p-5 outline-none' placeholder='Adresse email' type="email" {...register('email')}/>
                    </div>
                    <div id='password' className='w-1/2 h-10 flex justify-items-center rounded-md'>
                        <input className='bg-transparent border-[1px] border-[#658221] w-full h-full p-5 outline-none' placeholder='Mot de passe'  type="password" {...register('password')}/>
                    </div>
                </div>
                <input className='bg-[#658221] w-1/2 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="S'enregistrer" />

            </form>
        </div>
        
    )
}

export default CreateAccount