import Button from './components/Buttons/Button.js';
import Home from "./screens/Home";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>

      </AuthProvider>
    </div>
  );
}

export default App;
