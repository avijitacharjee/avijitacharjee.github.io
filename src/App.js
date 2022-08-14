import Button from './components/Buttons/Button.js';
import Home from "./screens/Home";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <Button/><Home/>
    </div>
  );
}

export default App;
