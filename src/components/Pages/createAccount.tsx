// import React from 'react'
import Logo from '../logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Loader2 } from 'lucide-react';
import { registerAccountInfo } from '../services/api';
import axios from 'axios';
// interface formProps{
//     name : string,
//     password : string
// }
//const API_URL = import.meta.env.VITE_API_URL;
const CreateAccount = () => {

  // interface RegisterFormData {
  //     user_picture: string;
  //     user_name: string; 
  //     user_email: string;
  //     user_password: string;
  //   }
  // const form = useForm();
  // const {register} = form
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {

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

  let cloudinaryUrl = ""

  const uploadToCloudinary = async (file: File | Blob | string): Promise<string> => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME!
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET!
    // console.log(cloudName, uploadPreset)
    const formData = new FormData();
    // console.log(file,"cloudnary")
    formData.append('file', file);
    formData.append('upload_preset', "sekdk8ng");
    formData.append('cloud_name', cloudName);
    //console.log(file,"cloudnary",`https://942951434159474:3nosH8dSJjhYEbLYyQmtfvmdAbI@api.cloudinary.com/v1_1/${cloudName}/resources`)
    try {
      //const response = await axios.post(`https://942951434159474:3nosH8dSJjhYEbLYyQmtfvmdAbI@api.cloudinary.com/v1_1/${cloudName}/resources/image/`)
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/${uploadPreset}`, formData)
      // fetch(
      //   `https://api.cloudinary.com/v1_1/${cloudName}/image/sekdk8ng`,
      //   {
      //     method: 'POST',
      //     body: formData,
      //   }
      // );

      // if (!response.status) {
      //   throw new Error('Erreur lors de l\'upload');
      // }

      const data = await response.data;
      cloudinaryUrl = data.url
      // console.log(data.url, "FROM CLOUDINARY")
      return data.secure_url;
    } catch (error) {
      console.error('Erreur upload Cloudinary:', error);
      throw error;

    }
  };


  // const { register, handleSubmit } = useForm<RegisterFormData>();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      // alert('Compte crée avec succès')
      navigate('/signIn');
    }
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsUploading(true);
      setError(null);
      const data = new FormData(e.currentTarget)
      const imageData = data.get("user_picture")
      // console.log(imageData)

      if (imageData) {
        cloudinaryUrl = (await uploadToCloudinary(imageData)).toString()
        // data.append("user_picture",cloudinaryUrl.toString())
        // console.log('cloudinaryUrl', cloudinaryUrl)
        // console.log('toutes les données du form', data)
      }
      else {
        alert("Veuillez selectioner votre photo en cliquant sur la forme ronde")
        return
      }
      try {
        // console.log("response", data.getAll("user_picture"));
        const response = await registerAccountInfo(data, cloudinaryUrl)

        if (response.status === 201) {
          alert("Votre compte a été créé avec succès")
          navigate('/signIn')
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response && error.response.data) {
          alert('Erreur lors de la création du compte')
          console.log(error.response.data.message + " ; " + error.response.data.error);
        } else {
          alert("Une erreur est survenue");
        }
      }

      // let imageUrl = '';

      // if (data.user_picture && data.user_picture.length > 0) {
      //   const file = data.user_picture[0];
      //   imageUrl = await uploadToCloudinary(file);
      // }
      // const file = data.user_picture?.[0];
      // if (file instanceof File) {
      //   imageUrl = await uploadToCloudinary(file);
      // }
      // const formData = new FormData()
      // const userData = {
      //   user_name: data.user_name,
      //   user_email: data.user_email,
      //   user_password: data.user_password,
      //   profileImageUrl: imageUrl
      // };

      // const response = await fetch(`${API_URL}/signup`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Registration failed');
      // }

      // const responseData = await response.json();
      // console.log('Registration successful:', responseData);

      // // Redirect to login or dashboard
      // navigate('/signIn');
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
<div id='' className='w-full h-screen flex flex-col py-5 px-5 md:px-10'>
  {error && (
    <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm md:text-base">
      {error}
    </div>
  )}
  <div id='header' className='w-full h-16 md:h-20 flex flex-row items-center justify-between'>
    <Logo className="text-xl md:text-4xl text-[#404A3D] font-bold font-['Titan One']" />
    <div id='logInSection' className='w-auto flex flex-row items-center gap-3 md:gap-10'>
      <p className='text-xs md:text-base text-[#00A602] font-semibold'>Vous avez déjà un compte?</p>
      <Link to={`/signIn`} className="h-8 md:h-10 flex justify-center items-center text-xs md:text-sm text-[#5B8C51] border-2 border-[#5B8C51] font-normal bg-none px-2 md:px-4 rounded-lg hover:bg-[#5B8C51] hover:text-white">
        Sign In
      </Link>
    </div>
  </div>
  <form onSubmit={onSubmit} className='bg-white flex flex-col justify-center items-center gap-5 md:gap-10'>
    <div id="title">
      <p className="font-extrabold text-black leading-10 text-xl md:text-2xl mb-2">S'inscrire</p>
    </div>
    <div id='middleSection' className='w-full md:w-3/4 h-auto flex flex-col items-center gap-5'>
      <div id='profilePic' className="h-24 w-24 md:h-32 md:w-32 rounded-full border-[1px] border-slate-800 flex flex-col justify-center items-center">
        <input className="w-full h-full hover:cursor-pointer opacity-0" type="file" accept=".jpeg, .png, .jpg" title='Photo de profil' id="user_picture" onChange={handleFileChange} name='user_picture' />
        {imagePreview && (<img id='imgPreview' src={imagePreview} alt="" className='w-full h-full rounded-full' />)}
      </div>
      <div id='user_name' className='w-full md:w-1/2 h-7 flex justify-items-center'>
        <input className='bg-transparent border-b-2 border-b-[#658221] w-full h-full p-2 md:p-5 outline-none' placeholder='Prenom et nom' type="text" name='user_name' id='user_name' />
      </div>
      <div id='emailAddress' className='w-full md:w-1/2 h-7 flex justify-items-center rounded-md'>
        <input className='bg-transparent border-b-2 border-[#658221] w-full h-full p-2 md:p-5 outline-none' placeholder='Adresse email' type="email" name='user_email' id='user_email' />
      </div>
      <div id='user_password' className='w-full md:w-1/2 h-7 flex justify-items-center rounded-md'>
        <input className='bg-transparent border-b-2 border-[#658221] w-full h-full p-2 md:p-5 outline-none' placeholder='Mot de passe' type="password" name='user_password' />
      </div>
      <div id='user_address' className='w-full md:w-1/2 h-7 flex justify-items-center rounded-md'>
        <input className='bg-transparent border-b-2 border-[#658221] w-full h-full p-2 md:p-5 outline-none' placeholder='Adresse' type="text" name='user_address' />
      </div>
    </div>
    <button
      type="submit"
      disabled={isUploading}
      className='bg-[#658221] w-full md:w-1/2 h-10 md:h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black disabled:bg-green-600'
    >
      {isUploading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Enregistrement en cours
        </>
      ) : (
        'Enregistrement'
      )}
    </button>
  </form>
</div>

  )
}

export default CreateAccount

// function useState(arg0: null): [any, any] {
//     throw new Error('Function not implemented.');
// }
