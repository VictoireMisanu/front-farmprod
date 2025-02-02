
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
            localStorage.setItem('auth_token', result.token);
            localStorage.setItem('user_info', JSON.stringify(result.userInfo));
            console.log(result)
            alert("vous êtes connecté")
            navigate('/products')
        }).catch((error)=>{
            alert(error.response.data.message + " ; " +error.response.data.error)
        })
    }

    return (
        <div id='' className='w-full h-screen flex flex-col py-5 px-10 gap-20'>
            <div id='header' className='w-full h-20 flex flex-row items-center justify-between gap-10'>
                <Logo className="text-4xl text-[#404A3D] font-bold font-['Titan One']"/>
                <div id='logInSection' className='w-auto flex flex-row items-center gap-10'>
                    <p className='text-[#00A602] font-semibold'>Vous n'avez pas de compte?</p>
                    <Link to={`/signUp`} className="h-10 flex justify-center items-center text-md text-[#5B8C51] border-2 border-[#5B8C51]  font-normal bg-none p-2 rounded-lg hover:bg-[#5B8C51] hover:text-white">Sign Up</Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center items-center gap-10'>
                <div id="title">
                    <p className="font-extrabold text-black leading-10 text-2xl mb-2">Se connecter</p>
                </div>
                <div id='middleSection' className='w-3/4 h-auto flex flex-col items-center gap-5'>
                    
                    <div id='email'className='w-1/2 h-7 flex justify-items-center rounded-md'>
                        <input className='bg-transparent border-b-2 border-[#658221] w-full h-full p-5 outline-none' placeholder='Adresse email' type="email" name='email'/>
                    </div>
                    <div id='password' className='w-1/2 h-7 flex justify-items-center rounded-md'>
                        <input className='bg-transparent border-b-2 border-[#658221] w-full h-full p-5 outline-none' placeholder='Mot de passe'  type="password" name='password'/>
                    </div>
                </div>
                <input className='bg-[#658221] w-1/2 h-12 rounded-md text-white font-bold hover:cursor-pointer hover:text-[#658221] hover:border-[#658221] border-2 hover:bg-transparent hover:shadow-lg shadow-black' type="submit" value="Se connecter" />
                <div id='socialMedia' className='w-full h-32 flex flex-col gap-5 justify-center items-center'>
                    <div className='w-1/2 h-auto flex flex-row gap-3 justify-center items-center'>
                        <hr className=' border-slate-700 w-1/2'/>
                        <span>Ou</span>
                        <hr className='border-slate-700 w-1/2'/>
                    </div>
                    <div id='socialMedia' className='w-1/2 h-auto flex flex-row items-center justify-center gap-8'>
                        <Link to="#"><img src="/svg/google.svg" alt="Google" title='Créer un compte avec google' /></Link>
                        <Link to="#"><img src="/svg/facebook.svg" alt="Facebook" title='Créer un compte avec google' /></Link>
                        <Link to="#"><img src="/svg/apple.svg" alt="Apple" title='Créer un compte avec google' /></Link>
                    </div>
                </div>
            </form>

        </div>
        
    )
}

export default SignIn