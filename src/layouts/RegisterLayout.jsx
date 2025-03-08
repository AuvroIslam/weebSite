import { NavLink, useNavigate } from 'react-router-dom';
import sushi from '../assets/sushi.jpg';
import Navbar from '../components/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const RegisterLayout = () => {
    const { createNewUser, setUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate(); 
    const [errors, setErrors] = useState({});

    const handlesubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Number = e.target.Number.value;

        // Reset errors
        setErrors({});
        const newErrors = {};

        // Validate name length
        if (name.length < 5) {
            newErrors.name = 'Name must be at least 5 characters long';
        }

        // Validate phone number length
        if (Number.length !== 11) {
            newErrors.number = 'Phone number must be 11 digits';
        }

        // Validate password
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        createNewUser(email, password)
            .then((result) => {
                updateUserProfile({ displayName: name })
                    .then(() => {
                        setUser(result.user);
                        navigate('/');
                    })
                    .catch((error) => {
                        setErrors({ ...newErrors, firebase: error.message });
                    });
            })
            .catch((error) => {
                setErrors({ ...newErrors, firebase: error.message });
            });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={sushi}
                        className="mx-auto w-30"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign up
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {errors.firebase && (
                        <div className="text-red-500 text-sm mb-4 text-center">
                            {errors.firebase}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handlesubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Number" className="block text-sm font-medium text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Number"
                                    name="Number"
                                    type="number"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors.number && (
                                    <p className="text-red-500 text-xs mt-1">{errors.number}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                            >
                                {loading ? 'Signing up...' : 'Sign up'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <NavLink to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            login
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterLayout;