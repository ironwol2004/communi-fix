import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AuthClient} from '@dfinity/auth-client'
const root = ReactDOM.createRoot(document.getElementById('root'));

const init = async () => { 
  
  const authClient= await AuthClient.create();
  if(await authClient.isAuthenticated()){
    handleauth();
  }
  else{
    await authClient.login({
      identityProvider:"https://identity.ic0.app/#authorize",
      onSuccess:()=>{
        handleauth();
      }
    });
  }
  function handleauth(){
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

init();
