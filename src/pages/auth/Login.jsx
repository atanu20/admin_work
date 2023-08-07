import React, { useState } from 'react'
import './Auth.css'
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Login = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const his=useHistory()

  
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coll, setColl] = useState(false);
  const [msg, setMsg] = useState('');
 

    const onSub=async(e)=>{
      setLoading(true)
        e.preventDefault();



        const data={
          
            email,
            password
        }

        if(email=='admin@gmail.com' && password=="admin")
        {
          localStorage.setItem("user_login",true)
          setTimeout(() => {
            setLoading(false);
            his.push("/")
          }, 2000);

        }else{
          setMsg("Wrong credentials")
          setStatus(true)
          setTimeout(() => {
            setLoading(false);
            
          }, 2000);
        }

        

    }
  return (
    <>
    <div className="auth">

        <div className="container">
            <div className="col-lg-6 col-md-8 col-12 mx-auto">
                <div className="card p-3">
                    <h3 className='text-center pb-3'>Login</h3>
                {status ? (
                  <>
                    <div
                      className={
                        coll
                          ? 'alert alert-success alert-dismissible'
                          : 'alert alert-warning alert-dismissible'
                      }
                    >
                      <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={() => setStatus(false)}
                      >
                        &times;
                      </button>
                      {msg}
                    </div>
                  </>
                ) : null}
                    <form onSubmit={onSub}>
                    
                  <div className="form-group ">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control"
                      name="lname"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="off"
                    />
                  </div>
                 
                  <div className="text-center ">
                    <button
                      type="submit"
                      className={
                        loading ? 'dis btn btn-primary' : 'btn btn-primary'
                      }
                      disabled={loading}
                    >
                      Login Now
                    </button>
                  </div>
                  {loading && (
                    <div className="text-center p-2">
                      <CircularProgress  size={45} />
                    </div>
                  )}
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Login