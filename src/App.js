
import './App.css';

// import '../src/components/LandingPage/MainSection.css';

import VendorSection from './components/generated/VendorSection';
import Problem from './components/generated/Problem';
import Stats from './components/generated/Stats';

import Test from './components/generated/Test';

import Title from './components/generated/Title';
import About from './components/generated/About';
import Services from './components/generated/Services';


function App() {
  return (
    <div>
      <Title/>
      <Problem/>
      <Stats/>
      <About/>
      <Test/>
      <Services/>
    </div>
  );
}

export default App;
