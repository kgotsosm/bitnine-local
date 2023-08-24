import logo from "../assets/b_logo.png";
import { Link, useNavigate }  from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function Register() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const registerUser = async (e) => {

        e.preventDefault()

        const {name, email, password} = data

          try {
            const {data} = await axios.post('/', {
                 name, email, password
            })
             if(data.error) {
                 toast.error(data.error)
             }  else {
                 setData({})
                 toast.success("Registered successfully!")
                 navigate("/login")
             }
          } catch(error) {
              console.log(error)
          }
        }

    return (
        <div className="flex flex-col items-center justify-center lg:mb-5 border-solid p-4 shadow-lg p-8 rounded-md bg-slate-200">
            <div className="">
                <img src={logo} alt="Logo" />
            </div>
            <h3 className="text-2xl md:text-3xl my-3">Register</h3>
                <form className="flex flex-col items-center space-y-6 w-full" onSubmit={registerUser}>
                    <div className="mb-3 flex flex-col w-full px-4 py-1">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            autoComplete="off"
                            name="name"
                            className="p-2 focus:outline-none"
                            value={data.name} onChange={(e) => setData({...data, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-3 flex flex-col w-full px-4">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            autoComplete="off"
                            name="email"
                            className="p-2 focus:outline-none"
                            value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-3 flex flex-col w-full px-4">
                        <label htmlFor="Password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Your Password"
                            autoComplete="off"
                            name="password"
                            className="p-2 focus:outline-none"
                            value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                            required
                        />
                    </div>
                    <button type='submit' className="bg-green-600 hover:bg-green-800 text-white w-full rounded-sm mx-4 py-1">
                        Register
                    </button>

                </form>
            <div className="mt-6">
                <Link to="/login">
                    <p className="text-gray-600 hover:text-gray-900 cursor-pointer text-center underline">Already have an account? Login</p>
                </Link>
            </div>
        </div>

);
}