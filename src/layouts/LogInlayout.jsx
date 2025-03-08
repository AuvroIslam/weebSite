import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import sushi from '../assets/sushi.jpg';
import Navbar from '../components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const LogInlayout = () => {
  const { login, setUser, loading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
      return <Loading />;
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      setError('');

      login(email, password)
          .then((result) => {
              const user = result.user;
              setUser(user);
              // Navigate to the previous page or the intended destination
              const from = location.state?.from?.pathname || '/';
              const animeState = location.state?.from?.state; // Get the anime data
              navigate(from, { state: animeState }); // Pass the anime data back
          })
          .catch((err) => {
              setError(err.message);
              if (err.code === 'auth/user-not-found') {
                  navigate('/register');
              }
          });
  };
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <div className="text-red-500 text-sm mb-4 text-center">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a 
                    href="#" 
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <NavLink 
              to="/register" 
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInlayout;