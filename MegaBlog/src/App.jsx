import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './features/auth/authSlice';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
// import { Provider } from 'react-redux';
// import store from './store'; 

function App() {

  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Appwrite service :: getCurrentUser :: error:", error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);//Dependency array

  //  apply locomotive too

  // conditional rendering
  return (!isLoading) ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
      {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  </div>  ) : (null); // null- display nothing

}

export default App
