import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
  
    console.log(email, password);
    fetch("http://localhost:5002/user/SigninAD", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin"); 
  
        localStorage.setItem("userId", data.user._id); // set user ID in local storage
  
        navigate(`/Acceuil`);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Invalid email or password!");
      });
  }

    return (
      <div className="h-screen bg-gradient-to-b from-grey-900 to-grey-1500 flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-100 animate-pulse blur gradient bg-gradient-to-tr from-purple-500 to-pink-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-gradient-to-b from-blue-500 to-blue-200">
        <h2 className="text-4xl text-white text-center font-bold mb-8 text-shadow-lg">Dashbord Admin</h2>
          <form className="w-full space-y-6 text-center" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Email</label>
              <input
                type="email"
                className="form-control rounded-md shadow-sm p-2 w-full"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-200 mb-2">Password</label>
              <input
                type="password"
                className="form-control rounded-md shadow-sm p-2 w-full"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-white-1500 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </div>
            
            <div>
        <Link
  to="/fpass"
  className="text-sm font-medium text-white hover:text-blue-500 hover:border-b-2 border-blue-500 focus:outline-none"
>
  Forgot your password?
</Link>
</div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
    


    )
}

export default Login;