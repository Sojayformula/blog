import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Destination from "./Pages/Destination"; 
import Sport from "./Pages/Sport";
import Food from "./Pages/Food";





function App() {

  
  return(
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Router>
        <Routes>
          <Route path="/" element={<Destination />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/food" element={<Food/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;



// <div >
//         <Header />
//         </div>
//         <Info />
//         <ReactTabs />

//         <div >
//         <HeaderTwo />
//         </div> 
//         <InfoTwo />


// import HeaderTwo from "./components/HeaderTwo";
// import InfoTwo from "./components/infoTwo";
//import Info from "./components/Info";
// import ReactTabs from "./components/ReactTab";
// import Info from "./components/Info";
// import image7 from './assets/image7.png';
// import InfoTwo from "./components/infoTwo";