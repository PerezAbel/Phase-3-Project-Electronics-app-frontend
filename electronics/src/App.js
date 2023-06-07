import NavBar from './components/NavBar';  
import Header from './components/Header';  
import SearchBar from './components/SearchBar';  
import ImageDisplay from './components/ImageDisplay';  
import Footer from './components/Footer' ; 
import Card from './components/Card';
import './App.css'; 


function App() {
  return (
    <div className="App">    
    <Header/>
    <NavBar/>   
    <ImageDisplay/>  
    <SearchBar/>   
    <Card/>
    <Footer/>
      
    </div>
  );
}

export default App;
