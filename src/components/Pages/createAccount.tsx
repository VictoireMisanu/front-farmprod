// import React from 'react'
import {useForm} from 'react-hook-form'
import Logo from '../logo/logo';
import { Link, useNavigate  } from 'react-router-dom';
import React, { useState } from "react";
// interface formProps{
//     name : string,
//     password : string
// }
const API_URL = import.meta.env.VITE_API_URL;
const CreateAccount = () => {
    
    interface RegisterFormData {
        userPicture: string;
        userName: string; 
        userEmail: string;
        userPassword: string;
      }
    // const form = useForm();
    // const {register} = form
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

    const uploadToCloudinary = async (file: File | Blob | string) => {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Remplacez par votre upload preset
    
        try {
          const response = await fetch(
            'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', // Remplacez par votre cloud name
            {
              method: 'POST',
              body: formData,
            }
          );
    
          if (!response.ok) {
            throw new Error('Erreur lors de l\'upload');
          }
    
          const data = await response.json();
          return data.secure_url;
        } catch (error) {
          console.error('Erreur upload Cloudinary:', error);
          throw error;
        }
      };

    const { register, handleSubmit } = useForm<RegisterFormData>();
    const navigate = useNavigate();
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: RegisterFormData) => {
      try {
        setIsUploading(true);
        setError(null);
        let imageUrl = '';
        
        if (data.userPicture && data.userPicture.length > 0) {
          const file = data.userPicture[0];
          imageUrl = await uploadToCloudinary(file);
        }
        // const file = data.userPicture?.[0];
        // if (file instanceof File) {
        //   imageUrl = await uploadToCloudinary(file);
        // }
  
        const userData = {
          userName: data.userName,
          userEmail: data.userEmail,
          userPassword: data.userPassword,
          profileImageUrl: imageUrl
        };
  
        const response = await fetch(`${API_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Registration failed');
        }
  
        const responseData = await response.json();
        console.log('Registration successful:', responseData);
        
        // Redirect to login or dashboard
        navigate('/login');
      } catch (error) {
        console.error('Registration error:', error);
        setError(error instanceof Error ? error.message : 'An error occurred during registration');
      } finally {
        setIsUploading(false);
      }
    };
    // const onSubmit = async (data: RegisterFormData) => {
    //     try {
    //       const response = await fetch('http://localhost:3333/signUp', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //       });
    
    //       if (response.ok) {
    //         // Redirection vers la page login après succès
    //         navigate('/signIn');
    //       }
    //     } catch (error) {
    //       console.error('Erreur lors de l\'inscription:', error);
    //     }
    //   };
    return (
        <div id='' className='w-full h-screen flex flex-col py-5 px-10'>
          {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md">
          {error}
        </div>
      )}
            <div id='header' className='w-full h-20 flex flex-row items-center justify-between'>
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <div id='logInSection' className='w-auto flex flex-row items-center gap-10'>
                    <p className='text-[#00A602] font-semibold'>Vous avez déjà un compte?</p>
                    <Link to={`/signIn`} className="h-10 flex justify-center items-center text-md text-[#5B8C51] border-2 border-[#5B8C51]  font-normal bg-none p-2 rounded-lg hover:bg-[#5B8C51] hover:text-white">Sign In</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white flex flex-col justify-center items-center gap-10'>
                <div id="title">
                    <p className="font-extrabold text-black leading-10 text-2xl mb-2">S'inscrire</p>
                </div>
                <div id='middleSection' className='w-3/4 h-auto flex flex-col items-center gap-5'>
                    <div id='profilePic' className="h-32 w-32 rounded-full border-[1px] border-slate-800 flex flex-col justify-center items-center">
                        <input {...register('userPicture')} className="w-full h-full hover:cursor-pointer opacity-0" type="file" accept=".jpeg, .png, .jpg" title='Photo de profil' id="profilePic" onChange={handleFileChange}  name='profilePic'/>
                        {imagePreview &&(<img id='imgPreview' src={imagePreview} alt="" className=' -mt-10 w-full h-full rounded-full'/>)}
                    </div>
                    <div id='userName' className='w-1/2 h-7 flex justify-items-center'>
                        <input {...register('userName')} className='bg-transparent border-b-2 border-b-[#658221] w-full h-full p-5 outline-none' placeholder='Prenom et nom' type="text"  name='userName'/>
                    </div>
                    <div id='emailAddress'className='w-1/2 h-7 flex justify-items-center rounded-md'>
                        <input {...register('userEmail')} className='bg-transparent border-b-2 border-[#658221] w-full h-full p-5 outline-none' placeholder='Adresse email' type="email"  name='userEmail'/>
                    </div>
                    <div id='password' className='w-1/2 h-7 flex justify-items-center rounded-md'>
                        <input {...register('userPassword')} className='bg-transparent border-b-2 border-[#658221] w-full h-full p-5 outline-none' placeholder='Mot de passe'  type="password" name='userPassword'/>
                    </div>
                </div>
                <input className='bg-[#658221] w-1/2 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="S'enregistrer" />
                <div id='socialMedia' className='w-full h-32 flex flex-col gap-5 justify-center items-center'>
                    <div className='w-1/2 h-auto flex flex-row gap-3 justify-center items-center'>
                        <hr className=' border-slate-700 w-1/2'/>
                        <span>Ou</span>
                        <hr className='border-slate-700 w-1/2'/>
                    </div>
                    <div id='socialMedia' className='w-1/2 h-auto flex flex-row items-center justify-center gap-8'>
                        <Link to="#"><img src="/svg/google.svg" alt="Google" title='Créer un compte avec google' /></Link>
                        <Link to="#"><img src="/svg/facebook.svg" alt="Google" title='Créer un compte avec google' /></Link>
                        <Link to="#"><img src="/svg/apple.svg" alt="Google" title='Créer un compte avec google' /></Link>
                    </div>
                </div>
            </form>

        </div>
        
    )
}

export default CreateAccount

// function useState(arg0: null): [any, any] {
//     throw new Error('Function not implemented.');
// }
