// src/Components/User/Signup.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signupUser } from '../../Services/User'
import { toast } from 'react-hot-toast'

const Signup = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        toast.promise(
            signupUser({ name, number, email, password }),
            {
                loading: 'Creating your account…',
                success: (res) => {
                    toast.success('Account created! Please log in.')
                    navigate('/login')
                    return ''
                },
                error: (err) => {
                    return 'Signup failed. Try again.'
                }
            }
        )
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                            placeholder="e.g. +1-555-123-4567"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md mt-2"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* LOGIN LINK */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
