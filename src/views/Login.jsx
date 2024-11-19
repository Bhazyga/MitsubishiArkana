import { Link, } from "react-router-dom";
import axiosClient from "../axios-Client";

import '../index.css';
import { useRef, useState } from "react";
import { useStateContext } from "../context/ContextProvider";


  export default function Login() {
    const emailRef      = useRef();
    const passwordRef      = useRef();
    const [errors, setErrors] = useState();
    const {setUser, setToken} = useStateContext()


  const onSubmit = (ev) => {
    ev.preventDefault()
  const payload = {
    email: emailRef.current.value,
    password: passwordRef.current.value,

  }
  axiosClient.post('/login', payload)
  .then(({data}) => {
    setUser(data.user)
    setToken(data.token)
  })
  .catch(err => {
    const response = err.response;
    if (response && response.status === 422){
      console.log(response.data.message);
      setErrors(response.data.message);
    }
  })
  }

   return (
    <div className="login-signup-form animated fadeInDown mt-12">
      {/* Include an image on the side */}
      <div className="form">
        <div className="form-content">
          <form onSubmit={onSubmit}>
            <h2 className="title">Silahkan Login</h2>

            {errors && (
            <div className="alert text-danger">
              <p>{errors}</p> {/* Display the error message directly */}
            </div>
          )}

            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button className="btn btn-block">Login</button>
            <p className="message">
              Belum daftar ? <Link to="/mitsubishi/register">Buat Akun</Link>
            </p>
          </form>
        </div>

        {/* Add an image on the side */}
        <div className="side-image">
          <img src="../gambar/MitsubishiLogo.png" alt="Side Image" style={{marginLeft:'20px',maxWidth:'251px'}}/>
        </div>
      </div>
    </div>
  );
}
