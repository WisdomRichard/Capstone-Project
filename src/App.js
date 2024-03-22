import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App() {
    return (
        <div className='App' id='app'>
            <div className='gradient__bg'>
                <NavBar/>
                <Main/>
                <Menu/>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
