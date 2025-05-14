import { useState }    from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginUser }   from '../../Services/User'
import { toast }       from 'react-hot-toast'

const Login = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const navigate                = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await loginUser({ email, password });
    localStorage.setItem('token', res.data.data.token);
    localStorage.setItem('userName', res.data.data.name);
    toast.success(`Welcome back, ${res.data.data.name}!`);
    navigate('/');
    window.location.reload();
  } catch (err) {
    console.error('Login error:', err.response?.data || err.message);
    toast.error(err.response?.data?.message || 'Login failed');
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
