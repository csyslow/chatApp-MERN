import './App.css'
import SearchInput from './components/Sidebar/SearchInput';
import Home from './pages/HomePage/Home';
import Login from './pages/loginPage/Login';
import SignUp from './pages/signUpPage/SignUp';

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
