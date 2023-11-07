import React, {useEffect} from 'react';
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage";
import {checkAuth} from "./slices/AuthSlice";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(dispatch)
        }

    }, []);

  return (
      <>
          {/*<MainPage/>*/}
          <AuthPage/>
      </>

  );
}

export default App;

