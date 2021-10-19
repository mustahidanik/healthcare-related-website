import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLogIn, setIsLogIn] = useState(false)
    const { user, GoogleSignIn, LoginByEmailPass, UserRegister } = useAuth()


    const handleEmail = (e) => {
        setEmail(e.target.value);

    }
    const handlePassword = (e) => {
        setPassword(e.target.value);

    }
    const toggleLogin = (e) => {
        setIsLogIn(e.target.checked)
        console.log(e.target.checked);

    }

    const handleRegister = () => {
        UserRegister(email, password);
    };
    const hanldeLogin = () => {
        LoginByEmailPass(email, password)
    }

    const handleFormReload = e => {
        e.preventDefault()
    }

    return (
        <div>
            <div>
                <div>
                    {
                        !isLogIn ? <h1 className="">Log in</h1> : <h1 className="">Registation</h1>
                    }

                    <form onSubmit={handleFormReload}>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input onChange={handleEmail} type="email" placeholder="Email" className="form-control w-50 mx-auto input-field" id="inputEmail3" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <input onChange={handlePassword} type="password" placeholder="Password" className="form-control w-50 mx-auto input-field" id="inputPassword3" />
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-12">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label p-2" htmlFor="gridCheck">
                                        Already registard
                                    </label>
                                </div>
                            </div>
                        </div>
                        {
                            !isLogIn ? <button onClick={hanldeLogin} type="submit" className="btn btn-primary w-50 mt-3">Log in</button> : <button onClick={handleRegister} type="submit" className="btn btn-primary w-50 mt-3">Registation</button>
                        }

                    </form>
                    <div className="row mb-3 pt-3">
                        <button onClick={GoogleSignIn} className=" col-sm-12 btn btn-primary w-50 mx-auto">SignIn by Google</button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;