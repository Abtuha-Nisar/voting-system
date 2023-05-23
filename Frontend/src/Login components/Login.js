import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bgImg from "../assests/img7.jpg";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [cnic, setcnic] = useState("");
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State variable for password visibility
    const history = useHistory();

    async function login(cnic, phonenumber, password) {
        try {
            const response = await axios.post("http://localhost:4000/user/login", {
                cnic: cnic,
                phonenumber: phonenumber,
                password: password
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log('Login successful!');
            // Redirect to the dashboard page
            history.push("/dashboard");
        } catch (error) {
            console.error('Login failed:', error);
        }
    }

    function handleLogin(event) {
        event.preventDefault(); // Prevent form submission

        // Validate CNIC number
        if (cnic.length !== 13) {
            alert('Please enter a valid CNIC number (13 digits).');
            return;
        }

        // Check if any input field is empty
        if (!cnic || !phonenumber || !password) {
            alert('Please enter all the required fields.');
            return;
        }

        // Perform login
        login(cnic, phonenumber, password);
    }

    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <section>
                <div className="register">
                    <div className="col-1 sm:col-1">
                        <h2 className="text-2xl font-bold sm:font-bold sm:text-xl text-green-600">
                            Decentralized Voting System Using Blockchain
                        </h2>
                        <span>Enter your CNIC, phone, and Password</span>
                        <form id='form' className="flex flex-col sm:flex sm:flex-col">
                            <input
                                type="text"
                                value={cnic}
                                placeholder='CNIC'
                                pattern="\d{13}" // Pattern for 13 digits
                                onChange={(e) => setcnic(e.target.value)}
                                className="w-full h-10" // Width: 100%, Height: 10 (pixels)
                            />

                            <input
                                type="tel"
                                value={phonenumber}
                                placeholder='Phone No'
                                onChange={(e) => setPhonenumber(e.target.value)}
                                className="w-full h-10" // Width: 100%, Height: 10 (pixels)
                            />

                            <div className="password-input relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-10 border border-gray-300  px-2" // Width: 100%, Height: 10 (pixels)
                                    style={{ width: '100%', paddingLeft: '8px' }}
                                />
                                <span
                                    className="password-toggle absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                    />
                                </span>
                            </div>

                            <div className='justify-center mt-4'> {/* Added margin-top */}
                                <button
                                    className="rounded-3xl px-8 py-3 bg-green-600 text-white"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </div>

                            <div className='links text-green-600 justify-evenly'>
                                <Link to="/Register">Sign up</Link>
                                <Link to="/ForgetPassword">Forget Password?</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-2 sm:col-2">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
