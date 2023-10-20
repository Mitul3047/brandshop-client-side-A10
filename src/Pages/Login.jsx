// import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


// const auth = getAuth(app);

const Login = () => {
    // const { logIn, googleLogIn, logOut } = useContext(AuthContext);
    const {logIn, googleLogIn, logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();
    // const emailRef = useRef(null);

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError('');
        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire(
                    'Success!',
                    'Login successful',
                    'success'
                );

                // Reset the form fields
                e.target.email.value = '';
                e.target.password.value = '';

                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                if (error.message === "Firebase: Error (auth/invalid-login-credentials).") {
                    Swal.fire(
                        'Oops!',
                        'Invalid user or password',
                        'error'
                    );
                    return logOut();
                } else {
                    setError(error.message);
                }
            });
    }

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user);
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.error(error));
    }

    // const handleForgetPass = () => {
    //     const email = emailRef.current.value;
    //     if (!email) {
    //         Swal.fire(
    //             'Oops!',
    //             'Please enter your email address.',
    //             'error'
    //         );
    //         return;
    //     }

    //     sendPasswordResetEmail(auth, email)
    //         .then(() => {
    //             Swal.fire(
    //                 'Email Sent!',
    //                 'A password reset email has been sent to your email address.',
    //                 'success'
    //             );
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             Swal.fire(
    //                 'Oops!',
    //                 'Failed to send password reset email. Please try again later.',
    //                 'error'
    //             );
    //         });
    // }

    return (
        <div>
            {/* <Helmet>
                <title>
                    FestiveFusion | Login
                </title>
            </Helmet> */}
          
            <p className="text-center text-red-600">{error}</p>
            <div className="max-h-screen- py-4">
                <div className="container mx-auto ">
                    <div className=" shadow-xl flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden">
                       
                        <div className="w-full lg:w-1/2 py-10 px-12 " style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
                            <h2 className="text-3xl mb-4 text-center">Login</h2>
                            <p className="mb-4 text-center">
                                Welcome back! Login to your account for quick access.
                            </p>
                            <form onSubmit={handlelogin} >
                                <div className="mt-5">
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        // ref={emailRef}
                                        placeholder="Email"
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="Password"
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5"></div>
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 text-center rounded text-white">Login Now</button>
                                    <div className="flex text-sm justify-between items-center mt-5">
                                        <p className="tmt-2">New To The Website? <Link to={'/register'}><span className="btn-link font-medium text-purple-500">Register</span></Link></p>
                                        <p className="btn-link cursor-pointer" >Forgot password?</p>
                                    </div>
                                </div>
                            </form>
                            <div className="divider">or</div>
                            <div className="space-y-3">
                                <h4 onClick={handleGoogleLogin}  className="cursor-pointer w-full bg-purple-500 py-3 text-center rounded text-white">Login In With Google</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
