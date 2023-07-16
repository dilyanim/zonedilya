import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Service from './components/Service'
import Extra from './components/Extra'
import Customer from './components/Customer';
import Team from './components/Team';
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Service/>
      <Extra/>
      <Customer/>
      <Team/>
      <Subscribe/>
      <Footer/>
      
    </div>
  );
}

export default App;
