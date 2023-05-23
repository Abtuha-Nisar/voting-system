import bgImg from "../assests/img7.jpg";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
const Register = () => {
    const [cnic, setCnic] = useState('');
    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const result = await axios.post("http://localhost:4000/user/register",
                {
                    cnic: cnic,
                    name: name,
                    dob: dob,
                    phonenumber: phonenumber,
                    password: password,
                    confirmpassword: confirmPassword,
                    email: email,
                    metamaskid: "94875945438573"
                }
            );
            console.log("result:", result);
            alert(result.data.msg);

        } catch (error) {
            //setIsError(error.message);
            console.log("error", error);
        }
    };
    return (
        <>
            <section>


                <div className="register" class="flex bg-white">
                    <div class="col-1 flex px-14
                   
                    ">
                        {/* <h2 className="text-xl  md:font-bold sm:text-1xl md:text-1xl text-green-600 px-4 xl:py-6" >Decentralized Voting System Using Blockchain</h2> */}
                        <form id='form' class="flex flex-col md:flex sm:flex md:flex-col sm:flex-col" >
                            <h2 class="text-green-600">Enter your Credentials </h2>

                            <input

                                type="text"
                                placeholder='CNIC'
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                            />


                            <input

                                type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input

                                type="date"
                                class="text-slate-400 hover:text-black"
                                placeholder='date'
                                value={dob}
                                onChange={(e) => setDOB(e.target.value)}
                            />

                            <input

                                type="tel"
                                placeholder='Phone No'
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}


                            />
                            <input

                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}


                            />

                            <input

                                type="password"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input

                                type="password"
                                placeholder='Confirm password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}


                            />
                            <div className='flex'>
                                <div >

                                    <button class="text-white   rounded-3xl bg-green-600  sm:bg-green-600  px-8 py-3 sm:px-8 sm:py-3 " onClick={registerUser}>
                                        register
                                    </button>


                                </div>

                                <div >
                                    <Link to="/FormOTP" >
                                        <button class="text-white   rounded-3xl bg-green-600  sm:bg-green-600  px-8 py-3 sm:px-8 sm:py-3 "  >
                                            Next
                                        </button>
                                    </Link>

                                </div>
                            </div>

                            <div className='links' class="text-green-600 sm:text-green-600 ">
                                <Link to="/Signin" > Already have an account? </Link>
                            </div>
                        </form>

                    </div>

                    <div class="xl:col-2  md:col-2 sm:flex hidden">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Register