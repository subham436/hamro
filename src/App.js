import Home from "./Components/Pages/Home/Home";
import Package from "./Packages/Package";
import Working from "./Working/Working.js";
import Join from "./Join/Join";
import Question from "./Question/Question";
import Testimonial from "./Testimonial/Testimonial";
import Facility from "./Facility/Facility";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">
      <Home/>
      <Package />
       <Working />
      <Join />
      <Question /> 
      <Testimonial />
      <Facility />
      <Footer/>
      
    </div>
  );
}

export default App;
