import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
 const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

   const navigate = useNavigate();
  const location = useLocation();


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    const {email, password } = formData;

    // Validation checks
    if (!email) errors.email = "Email is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) errors.email = "Please enter a valid email";

    if (!password) errors.password = "Password is required";
    if (password && password.length < 6) errors.password = "Password must be at least 6 characters";

    return errors;
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Parse response

 if (data) {
   localStorage.setItem('token', data._id);
   console.log(data);
 }
 
      if (!response.ok) {
        // Check if the server responded with an error message
        if (data.error) {
          if (data.error.includes("password")) {
            toast.error("Invalid password. Please try again.");
          } else if (data.error.includes("email")) {
            toast.error("Invalid email. Please check and try again.");
          } else {
            toast.error(data.error); // General error
          }
        } else {
          toast.error("Login failed. Please try again.");
        }
        throw new Error(data.error || "Login failed");
      }

      // If login is successful
      navigate('/', { state: { toastMessage: "Login successful! 🎉" } });
    } catch (error) {
      console.error("Error:", error);
    }
  }
};


  useEffect(() => {
    // Check if there's a success toast message
    if (location.state && location.state.toastMessage) {
      toast.success(location.state.toastMessage);
    }
  }, []);


  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100">
      <div className="bg-white p-8 md:p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email && "border-red-500"}`}
          />
          {errors.email && <p style={{ marginTop: '0px'}} className="text-red-500 absolute text-xs">{errors.email}</p>}

          {/* Password Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.password && "border-red-500"}`}
          />
{errors.password && <p style={{ marginTop: '0px'}} className="text-red-500 absolute text-xs">{errors.password}</p>}


          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to={'/signup'}><span className="text-red-500 cursor-pointer">Sign up here</span></Link>
        </p>

        <div className="flex items-start mt-4">
          <input type="checkbox" id="terms" className="mr-2 mt-1" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
