import './App.css';
import Header from "./components/shared/Header/Header";
import "./assets/Fonts/fonts.css";
import MainBanner from "./components/shared/MainBanner/MainBanner";


function App() {
  return (
    <div className="App">
      <Header/>
        <MainBanner/>
    </div>
  );
}

export default App;
