import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm"; // Import the combined Login/Logout form
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "672690374803-2cfaejd10p0uk8flvflls9jmm4ugl586.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  return (
    <div>
      {/* Render the LoginForm component that includes both login and logout functionality */}
      <LoginForm />

      {/* Add any additional content here if needed */}
    </div>
  );
}

export default App;
