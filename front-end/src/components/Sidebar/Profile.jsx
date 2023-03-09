import React, {useState, useEffect} from 'react'
import { FaUser } from 'react-icons/fa'
import ButtonStretch from '../Buttons/ButtonStretch'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dim, setDim] = useState(false);
  const [emailForm, setEmailForm] = useState(false);
  const [passwordForm, setPasswordForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem('Email')
    if(user === null || user === "" || user === undefined){
    }  else {
      setIsLogged(true)
    }
  },[])

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    axios
      .get('/api/checkEmail?email='+email)
      .then((response) => {
        if(response.data.exists)
        {
          setEmailForm(false)
          setPasswordForm(true)
        } else {
          setEmailForm(false)
          setRegisterForm(true)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleRegister = (event) => {
    event.preventDefault();
    axios.post('/api/registerAccount', { email : email, password: password})
      .then((response) => {
        console.log(response.data)
      })
    window.location.reload(false);
  }
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('/api/login', { email : email, password: password})
      .then((response) => {
        if(response.data === null){
          alert("Nhập sai mật khẩu!")
        } else if (response.data.isAdmin) {
          navigate("/admin")
        }
        else {
          window.location.reload(false)
          localStorage.setItem('Email',email)
        }
      })
  }

  function handleProfileClick(){
    setDim(!dim);
    if(passwordForm || registerForm){
      setEmailForm(false);
    } else {
      setEmailForm(!emailForm)
    }
    setPasswordForm(false)
    setRegisterForm(false)
    setEmail("")
    setPassword("")
  }
  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <div className='md:flex hidden items-center' onClick={isLogged? "" : handleProfileClick }>
      <FaUser/> {isLogged? `Hello ${localStorage.getItem('Email')}`:""}
      </div>
      <div className={`w-screen h-full fixed top-0 left-0 bg-black/50 z-50 ${dim? "":"hidden"}`} onClick={handleProfileClick}>  
      </div>
      <div className={`w-full fixed z-50 left-0 top-1/2 flex justify-center items-center ${emailForm? "":"hidden"}`}>
        <div className='w-1/5 bg-white absolute border-box border border-black'>
          <div className='px-4 pt-10 pb-20'>
            <h1 className='text-2xl font-bold'>YOUR ADICLUB BENEFITS AWAIT!</h1>
            <p className='text-sm py-4'>Get free shipping, discount vouchers and members only products when you’re in adiClub</p>
            <h3 className='font-bold'>LOGIN OR SIGN UP {"(IT'S FREE)"}</h3>
            <p className='text-sm py-2'>Enter your email to access or create your account</p>
            <form onSubmit={handleEmailSubmit}>
              <input type="text" placeholder='Email*' value={email} className='p-3 my-2 bg-gray-100 w-full' onChange={handleEmailChange} required></input>
              <button type='submit' className='w-full invert'>
                <ButtonStretch text="CONTINUE"/>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`w-full fixed z-50 left-0 top-1/2 flex justify-center items-center ${registerForm? "":"hidden"}`}>
        <div className='w-1/5 bg-white absolute border-box border border-black'>
          <div className='px-4 pt-10 pb-20'>
            <h1 className='text-2xl font-bold'>SIGN UP FOR FREE</h1>
            <p className='text-sm py-4'>Looks like you are new here. Create a password to set up your adiClub account.</p>
            <h3 className='font-bold text-md'>CREATE PASSWORD</h3>
            <form onSubmit={handleRegister}>
              <input type="text" placeholder='Password*' value={password} className='p-3 my-2 bg-gray-100 w-full' onChange={handlePasswordChange} required></input>
              <button type='submit' className='w-full invert'>
                <ButtonStretch text="REGISTER"/>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={`w-full fixed z-50 left-0 top-1/2 flex justify-center items-center ${passwordForm? "":"hidden"}`}>
        <div className='w-1/5 bg-white absolute border-box border border-black'>
          <div className='px-4 pt-10 pb-20'>
            <h1 className='text-2xl font-bold'>LOG IN</h1>
            <p className='text-sm py-4'>Welcome back! Fill in your password to log in</p>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder='Password*' value={password} className='p-3 my-2 bg-gray-100 w-full' onChange={handlePasswordChange} required></input>
              <button type='submit' className='w-full invert'>
                <ButtonStretch text="LOG IN"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Profile