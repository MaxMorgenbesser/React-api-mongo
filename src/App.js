import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import AddMessage from './Components/AddMessage';

export const userInfoContext=createContext(null)

function App() {
  return (
    <userInfoContext.Provider>
<AddMessage/>
      </userInfoContext.Provider>
     

  );
}

export default App;
