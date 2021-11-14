import "./App.css";
import HoverReveal from "./components/HoverReveal";
import Salmiakki from "./components/Salmiakki";
import VinoMenu from "./components/VinoMenu";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6vIcufEDZ1KG98G7YjpWdn5TNfmhqnFg",
  authDomain: "fast-sketches.firebaseapp.com",
  projectId: "fast-sketches",
  storageBucket: "fast-sketches.appspot.com",
  messagingSenderId: "617760538612",
  appId: "1:617760538612:web:85acdb2cc5dab98746c3a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <VinoMenu />
      {/* <Salmiakki />*/}
      {/*<HoverReveal />*/}
    </div>
  );
}

export default App;
