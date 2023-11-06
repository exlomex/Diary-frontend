import React from 'react';
import MainPage from "./pages/MainPage/MainPage";
import AuthPage from "./pages/AuthPage";
import {Provider} from "react-redux";
import store from "./store/store";


function App() {
  return (
      <Provider store={store}>
          {/*<MainPage/>*/}
          <AuthPage/>
      </Provider>
  );
}

export default App;

