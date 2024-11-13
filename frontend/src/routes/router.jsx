import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import About from '../layouts/AboutUs';
// import ContactUsLayout from '../layouts/ContactUs';
// import DiabForm from '../layouts/DiabForm';
import Home from '../layouts/Home';
import Form from "../layouts/Careerform"
import Testimonials from "../layouts/Testimonials"
// import KnowMoreLayout from '../layouts/KnowMore';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testform" element={<Form />} />
        <Route path="/testimonies" element={<Testimonials />} />
        {/* <Route path="/aboutus" element={<About/>} />
        <Route path="/contactus" element={<ContactUsLayout />} />
        <Route path='/knowmore' element={<KnowMoreLayout/>}/>
        <Route path="/checkdiabetes" element={<DiabForm />} />  */}
      </Routes>
  );
};

export default AppRouter;