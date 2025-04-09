
import Logo from '../logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/api';
import { useEffect } from 'react';
// interface formProps{
//     name : string,
//     password : string
// }
const SignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            navigate('/products');
        }
    }, [navigate]);

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        formData.forEach((value, key) => {
        console.log(key, value);
        });
        

        await authenticateUser(formData).then((result)=>{
            //enregistrer les infos et le token
            localStorage.setItem('auth_token', result.token.token);
            localStorage.setItem('user_info', JSON.stringify(result.userInfo));
            console.log(result)
            alert("vous êtes connecté")
            navigate('/products')
        }).catch((error)=>{
            alert(error.response.data.message + " ; " +error.response.data.error)
        })
    }

    return (
<div id='' className='w-full h-screen flex flex-col py-5 px-5 md:px-10 gap-10 md:gap-20'>
  <div id='header' className='w-full h-16 md:h-20 flex flex-row items-center justify-between gap-5 md:gap-10'>
    <Logo className="text-xl md:text-4xl text-[#404A3D] font-bold font-['Titan One']" />
    <div id='logInSection' className='w-auto flex flex-row items-center gap-3 md:gap-10'>
      <p className='text-xs md:text-base text-[#00A602] font-semibold'>Vous n'avez pas de compte?</p>
      <Link
        to={`/signUp`}
        className="h-8 md:h-10 flex justify-center items-center text-xs md:text-sm text-[#5B8C51] border-2 border-[#5B8C51] font-normal bg-none px-2 md:px-4 rounded-lg hover:bg-[#5B8C51] hover:text-white"
      >
        Sign Up
      </Link>
    </div>
  </div>
  <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center items-center gap-5 md:gap-10'>
    <div id="title">
      <p className="font-extrabold text-black leading-10 text-xl md:text-2xl mb-2">Se connecter</p>
    </div>
    <div id='middleSection' className='w-full md:w-3/4 h-auto flex flex-col items-center gap-5'>
      <div id='email' className='w-full md:w-1/2 h-7 flex justify-items-center rounded-md'>
        <input
          className='bg-transparent border-b-2 border-[#658221] w-full h-full p-2 md:p-5 outline-none'
          placeholder='Adresse email'
          type="email"
          name='email'
        />
      </div>
      <div id='password' className='w-full md:w-1/2 h-7 flex justify-items-center rounded-md'>
        <input
          className='bg-transparent border-b-2 border-[#658221] w-full h-full p-2 md:p-5 outline-none'
          placeholder='Mot de passe'
          type="password"
          name='password'
        />
      </div>
    </div>
    <input
      className='bg-[#658221] w-full md:w-1/2 h-10 md:h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black'
      type="submit"
      value="Se connecter"
    />
  </form>
</div>
        
    )
}

export default SignIn