import React,{useState} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import logo from './Images/Artboard – 6.png';
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom';

function Navbar(){

    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const  history=useHistory()

    function validate(e){
        e.preventDefault();
        if(username=='Admin' && password=='React')
         {
            swal('Login Successful','Congratulations your login Successful','success');
            alert('Success');
            localStorage.setItem('loggedin','loggedin');
            history.push('/Company');
            window.location.reload(true);
         }
         else
         {
             swal('Invalid Username/Password','Check your credentials once more','error')
         }
     
    }
  function logout(){
      localStorage.removeItem('loggedin');
      history.push('/');
      window.location.reload(true);
  }

return <div>
    
    <div className='row nav'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='col-md-7'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" width="130" height="24" className="d-inline-block align-text-top"></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Company">Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/clients">Clients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Payments</a>
                            </li>
                        </ul>

                    </div>
                </div>


            </div>

            <div className='col-md-5'>
                <div className="container-fluid">
                    {
                        (()=>{
                            if(localStorage.getItem('loggedin'))
                            {
                                return <button className='btn btn-danger' onClick={logout}>Logout</button>
                            
                            }
                            else
                            {
                                return <div>
                                             <form onSubmit={validate}>
                                             <input type='text' placeholder='username' value={username} 
                                                                     onChange={(e)=>{setusername(e.target.value)}}/>
                                                <input type='text' placeholder='password' value={password}
                                                                     onChange={(e)=>{setpassword(e.target.value)}}/>
                                             <input type='submit' className='btn btn-danger'/>
                                             </form>
                                    </div>
                            }

                        })()
                    }
               
                    
                    
                </div>

            </div>
        </nav>
    </div>
</div>

}

export default Navbar;