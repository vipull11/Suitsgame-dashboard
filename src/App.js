 
import './App.css';
import { Buffer } from 'buffer';
import Home from './components/Home';
import { UserProvider } from '../src/services/useContext';
global.Buffer = Buffer;

function App() {
  return (
    <div  >
      <UserProvider>
      <Home/>
      </UserProvider>
    </div>
  );
  }
export default App;
