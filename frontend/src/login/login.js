import React, { useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const[useremail,setUseremail] = useState('');
  const[userpassword,setUserpassword] = useState('');
  const navigate = useNavigate();


  const handleUserlogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: useremail, password: userpassword })
      });

      const data = await response.json();

      if (response.ok) {
          // Login successful, redirect to "/user" page
          navigate('/monitor');
      } else {
          // Login failed, display error message
          alert("Invalid Credentials");
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred, please try again later.');
  }
  }


  return (
    <div className='login'>
        <div className='loginbox'>
            <form onSubmit={handleUserlogin}>
                <h1 className='loginheading'>LOGIN</h1>
                <label>EMAIL</label>
                <input type="email" placeholder='Enter Email' value={useremail} onChange={(e) => setUseremail(e.target.value)} required/>
                <br />
                <label>PASSWORD</label>
                <input type="password" placeholder='Enter Password' value={userpassword} onChange={(e) => setUserpassword(e.target.value)} required/>
                <br />
                <button type="submit" className='signinbtn'>SIGN IN</button>
               <p className="accreg">Does Have an Account?<a href="/register" className='regspan'> Register</a> Here.</p> 
            </form>
        </div>
    </div>
  )
}

export default Login