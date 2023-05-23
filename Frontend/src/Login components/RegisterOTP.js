// import React, { useState } from 'react';
// import bgImg from '../assests/img7.jpg';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// //import { Link, useNavigate } from 'react-router-dom';


// const sendOtpEndpoint = 'http://localhost:4000/user/send-otp';
// const verifyOtpEndpoint = 'http://localhost:4000/user/verify-otp';

// const RegisterOTP = ({ history }) => {
//     const [email, setEmail] = useState('');
//     const [otp, setOTP] = useState('');
//     const [isVerified, setIsVerified] = useState(false);
//     //const navigate = useNavigate(); // Access the navigate function for redirection

//     async function sendOTP() {
//         try {
//             const response = await axios.post(sendOtpEndpoint, {
//                 email: email,
//             });

//             if (response.status === 200 && response.data.success) {
//                 console.log('OTP sent successfully');
//                 setIsVerified(false); // Reset verification status
//             } else {
//                 console.log('Failed to send OTP:', response.data.message);
//                 alert(' send OTP Successfull: ' + response.data.message); // Display the error message in an alert
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error.message);
//             alert('Error sending OTP: ' + error.message); // Display the error message in an alert
//         }
//     }

//     async function verifyOTP() {
//         if (!otp) {
//             console.log('Please enter the OTP');
//             return;
//         }

//         try {
//             const response = await axios.post(verifyOtpEndpoint, {
//                 email: email,
//                 otp: otp,
//             });

//             if (response.status === 200 && response.data.success) {
//                 console.log('OTP verification successful');
//                 setIsVerified(true); // Set verification status to true
//                 // Redirect to the dashboard or desired page
//                 history.push('/Dashboard');
//                 //navigate('/Dashboard');

//             } else {
//                 console.log('OTP verification failed:', response.data.message);
//                 setIsVerified(false); // Set verification status to false
//             }
//         } catch (error) {
//             console.error('Error verifying OTP:', error.message);
//             setIsVerified(false); // Set verification status to false
//         }
//     }

//     return (
//         <>
//             <section>
//                 <div className="register sm:register md:register">
//                     <div className="col-1 md:col-1 sm:col-1">
//                         <h2 className="text-2xl md:text-2xl sm:text-2xl font-bold md:font-bold sm:font-bold text-green-600 sm:text-green-600">
//                             Decentralized Voting System Using Blockchain
//                         </h2>
//                         <span>Enter your Email To send OTP Verification</span>
//                         <div className="flex flex-col sm:flex sm:flex-col md:flex-col md:flex">
//                             <div className="Email-field">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     placeholder="First Enter Email"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <div className="py-8">
//                                     <button
//                                         onClick={sendOTP}
//                                         className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
//                                     >
//                                         Send OTP
//                                     </button>
//                                 </div>
//                             </div>
//                             <span>Enter 4-Digit OTP sent via SMS to your Email</span>
//                             <div className="otp-field">
//                                 <input
//                                     type="text"
//                                     name="otpCode"
//                                     id="otp"
//                                     placeholder="OTP code"
//                                     value={otp}
//                                     onChange={(e) => setOTP(e.target.value)}
//                                 />
//                             </div>

//                             <div className="space-x-8">
//                                 {isVerified ? (
//                                     <Link to="/Dashboard">
//                                         <button
//                                             className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
//                                             disabled // Disable the button after successful verification
//                                         >
//                                             Logged in
//                                         </button>
//                                     </Link>
//                                 ) : (
//                                     <button
//                                         onClick={verifyOTP}
//                                         className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
//                                     >
//                                         Login
//                                     </button>
//                                 )}

//                                 <Link to="/Register">
//                                     <button className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl">
//                                         Previous
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-2 md:col-2 sm:col-2">
//                         <img src={bgImg} alt="" />
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default RegisterOTP;
import React, { useState } from 'react';
import bgImg from '../assests/img7.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const sendOtpEndpoint = 'http://localhost:4000/user/send-otp';
const verifyOtpEndpoint = 'http://localhost:4000/user/verify-otp';

const RegisterOTP = ({ history }) => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    async function sendOTP() {
        try {
            const response = await axios.post(sendOtpEndpoint, {
                email: email,
            });

            if (response.status === 200 && response.data.success) {
                console.log('OTP sent successfully');
                setIsVerified(true); // Reset verification status
            } else {
                console.log('send OTP Successfully:', response.data.message);
                alert('send OTP Successfully: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error sending OTP:', error.message);
            alert('Error sending OTP: ' + error.message);
        }
    }

    async function verifyOTP() {
        if (!otp) {
            console.log('Please enter the OTP');
            return;
        }

        try {
            const response = await axios.post(verifyOtpEndpoint, {
                email: email,
                otp: otp,
            });

            if (response.status === 200 && response.data.success) {
                console.log('OTP verification successful');
                setIsVerified(true);
                alert('OTP verification successful');
            } else {
                console.log('OTP verification successfully:', response.data.message);
                setIsVerified(false);
                alert('OTP verification successfully: ' + response.data.message);
            }
        } catch (error) {
            console.error('Error verifying OTP:', error.message);
            setIsVerified(false);
            alert('Error verifying OTP: ' + error.message);
        }
    }

    return (
        <>
            <section>
                <div className="register sm:register md:register">
                    <div className="col-1 md:col-1 sm:col-1">
                        <h2 className="text-2xl md:text-2xl sm:text-2xl font-bold md:font-bold sm:font-bold text-green-600 sm:text-green-600">
                            Decentralized Voting System Using Blockchain
                        </h2>
                        <span>Enter your Email To send OTP Verification</span>
                        <div className="flex flex-col sm:flex sm:flex-col md:flex-col md:flex">
                            <div className="Email-field">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="First Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="py-8">
                                    <button
                                        onClick={sendOTP}
                                        className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
                                    >
                                        Send OTP
                                    </button>
                                </div>
                            </div>
                            <span>Enter 4-Digit OTP sent via SMS to your Email</span>
                            <div className="otp-field">
                                <input
                                    type="text"
                                    name="otpCode"
                                    id="otp"
                                    placeholder="OTP code"
                                    value={otp}
                                    onChange={(e) => setOTP(e.target.value)}
                                />
                            </div>

                            <div className="space-x-8">
                                {isVerified ? (
                                    <Link to="/Dashboard">
                                        <button
                                            className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
                                            disabled
                                        >
                                            Verified
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        onClick={verifyOTP}
                                        className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl"
                                    >
                                        Verify
                                    </button>
                                )}

                                <Link to="/Register">
                                    <button className="text-white rounded-3xl bg-green-600 px-6 py-3 sm:px-6 sm:py-3 sm:bg-green-600 sm:rounded-3xl">
                                        Previous
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 md:col-2 sm:col-2">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default RegisterOTP;
