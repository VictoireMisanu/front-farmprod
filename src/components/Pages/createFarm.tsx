// import React from 'react'
import {useForm} from 'react-hook-form'
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { BtnIcon } from '../link&btn/btnIcon';
// interface formProps{
//     name : string,
//     password : string
// }
const CreateFarm = () => {
    
    const form = useForm();
    const {register} = form
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) =>{

        const file = event.target.files?.[0]; // Récupérer le premier fichier
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string); // Mettre à jour l'état avec l'URL de l'image
            };
            reader.readAsDataURL(file); // Lire le fichier comme URL de données
        } else {
        setImagePreview(null); // Réinitialiser si aucun fichier
        }
    }
    return (
        <div id='' className='w-full h-screen flex flex-col items-center gap-12 py-5 px-10 '>
            <div id='header' className='w-full h-20 flex flex-row items-center justify-between'>
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <div id='logInSection' className='w-auto flex flex-row items-center gap-10'>
                    <p className='text-[#00A602] font-semibold'>Vous avez déjà un compte fermier?</p>
                    <Link to={`/signIn`} className="h-10 flex justify-center items-center text-md text-[#5B8C51] border-2 border-[#5B8C51]  font-normal bg-none p-2 rounded-lg hover:bg-[#5B8C51] hover:text-white">Sign In</Link>
                </div>
            </div>
            <form className='w-3/4 h-auto flex flex-col justify-center items-center gap-10 mb-10 p-0'>
                <div id="title">
                    <p className="font-extrabold text-[#658221] leading-10 text-2xl mb-2">Informations de la ferme</p>
                </div>
                <div id='middleSection' className='w-3/4 h-auto flex flex-col items-center gap-16'>
                    <div id='profilePic' className="h-44 w-2/3 rounded-md border-[1px] border-slate-800 flex flex-col justify-center items-center bg-[url('/svg/photo.svg')] bg-no-repeat bg-center">
                        <input className="w-full h-full hover:cursor-pointer opacity-0" type="file" accept=".jpeg, .png, .jpg" title='Photo de profil' id="profilePic" onChange={handleFileChange}  name='profilePic'/>
                        {imagePreview &&(<img id='imgPreview' src={imagePreview} alt="" className=' -mt-10 w-full h-full rounded-md'/>)}
                    </div>
                    <div id='farmName' className='w-2/3 h-7 flex flex-row justify-center items-center gap-10'>
                        <input className='bg-transparent border-[1px] border-black focus-within:border-2 focus-within:border-[#658221] w-1/2 h-full p-5 outline-none rounded-md' placeholder='Nom de la ferme' type="text" {...register('farmname')} name='farmName'/>
                        <input className='bg-transparent border-[1px] border-black focus-within:border-2 focus-within:border-[#658221] w-1/2 h-full p-5 outline-none rounded-md' placeholder='Domaine. Ex: Elevage volaille' type="text" {...register('workfield')} name='workField'/>
                    </div>

                    <div id='location' className='w-2/3 h-7 flex flex-row justify-evenly gap-20 items-center'>
                        <input className='bg-transparent border-[1px] border-black focus-within:border-2 focus-within:border-[#658221] w-1/2 h-full p-5 outline-none rounded-md' placeholder='Localisation (Adresse)' type="text" {...register('location')} name='location'/>
                        <BtnIcon to={`#`} className="w-1/2 h-14 bg-[#658221] flex flex-row-reverse justify-center gap-3 items-center hover:bg-[#FFC107] hover:shadow-lg shadow-black lg:md:text-md text-white font-semibold rounded-md">
                            <span>Ajouter</span>
                            <img src="/svg/plus.svg" alt="" />
                        </BtnIcon>
                    </div>

                    <div className='w-2/3 h-44 border-[1px] border-black flex justify-center items-center'>Localisation</div>
                </div>

                <div id='btnSection' className='w-2/3 h-20 flex flex-row items-center justify-around'>
                    <input className='bg-[#8E9091] w-1/6 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="Annuler" />
                    <input className='bg-[#00A602] w-1/6 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="Enregistrer" />
                </div>
            </form>

        </div>
        
    )
}

export default CreateFarm
