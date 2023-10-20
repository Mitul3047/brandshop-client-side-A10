
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';

const Register = () => {
    const [error, setError] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox
    const { createUser, logOut } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
    
        // Validate password
        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult !== true) {
            Swal.fire(
                'Oops!',
                passwordValidationResult,
                'error'
            );
            return;
        }
    
        if (password !== confirmPassword) {
            Swal.fire(
                'Oops!',
                'Password and Confirm Password do not match.',
                'error'
            );
        } else if (!isCheckboxChecked) {
            Swal.fire(
                'Oops!',
                'Please accept the Terms of Use and Privacy Policy.',
                'error'
            );
        } else {
            createUser(email, password)
                .then(r => {
                    console.log(r.user);
                    // You can handle successful registration here
                    Swal.fire(
                        'Success!',
                        'User registration successful.',
                        'success'
                    );
    
                    // Reset the form fields
                    e.target.email.value = '';
                    e.target.password.value = '';
                    e.target.confirmPassword.value = '';
                    setIsCheckboxChecked(false);
    
                    logOut()
                        .then(() => {
                            // Log out success
                        })
                        .catch(error => {
                            console.error(error);
                            // Handle logout error
                        });
                    // navigate(location?.state ? location.state : '/login')
                })
                .catch(error => {
                    console.error(error);
                    // You can handle registration errors here
                    if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                        Swal.fire(
                            'Oops!',
                            'User already exists.',
                            'error'
                        );
                    } else(setError(error.message))
                });
        }
    }
    const validatePassword = (password) => {
        // Check if the password is less than 6 characters
        if (password.length < 6) {
            return 'Password must be at least 6 characters.';
        }

        // Check if the password has at least one capital letter
        if (!/[A-Z]/.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }

        // Check if the password has a special character or number
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?0-9]/.test(password)) {
            return 'Password must contain at least one special character or number.';
        }
        

        // If all individual validations pass, return true
        return true;
    }

    const handleCheckboxChange = (e) => {
        setIsCheckboxChecked(e.target.checked);
    }

    return (
        <div>
            <p className=" text-center text-red-600">{error}</p>
            <div className=" py-4">
                <div className="container mx-auto ">
                    <div className="shadow-xl flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden">

                        <div className="w-full lg:w-1/2 py-11 px-12 " style={{ backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)' }}>
                            <h2 className="text-3xl mb-4">Register</h2>
                            <p className="mb-4">
                                Create your account. It&rsquo;s free and only takes a minute
                            </p>
                            <form onSubmit={handleRegister}>
                                <div className="grid grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Firstname"
                                        required
                                        className="input rounded input-sm" />

                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Surname"
                                        required
                                        className="input rounded input-sm" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        required
                                        className="input rounded input-sm w-full" />
                                </div>
                                <div className="mt-5">
                                    <input
                                        type="checkbox"
                                        className="border border-gray-400 mr-3"
                                        onChange={handleCheckboxChange}
                                         />
                                    <span>
                                        I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <button className="w-full bg-purple-500 py-3 text-center rounded text-white">Register Now</button>
                                    <p className="text-center mt-3">Already Have an Account? <Link to="/login">
                                        <span className="btn-link font-medium text-purple-500">Login</span>
                                    </Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;