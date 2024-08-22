import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css"
import { About, Home } from './components';
import Contact from './components/pages/contact/Contact';
import OurTeam from './components/pages/team/OurTeam';
import OurClients from './components/pages/clients/OurClients';
import Careers from './components/pages/careers/Careers';
import CaseStudies from './components/pages/caseStudies/CaseStudies';
import Rangamaati from './components/pages/caseStudies/allProject/Rangamaati';
import BetterBuild from './components/pages/caseStudies/allProject/BetterBuild';
import Grocair from './components/pages/caseStudies/allProject/Grocair';
import Effel from './components/pages/caseStudies/allProject/Effel';
import Services from './components/pages/services/Services';
import DataHiringModel from './components/pages/services/DataHiringModel/DataHiringModel';
import ProjectBasedModel from './components/pages/services/ProjectBasedModel/ProjectBasedModel';
import HourModel from './components/pages/services/HourModel/HourModel';
import TaskBasedModel from './components/pages/services/TaskBasedModel/TaskBasedModel';
import SupportModel from './components/pages/services/SupportModel/SupportModel';
import HybridModel from './components/pages/services/HybridModel/HybridModel';
import GetQuote from './components/pages/services/GetQuote/GetQuote';
import FAQ from './components/pages/services/FAQ/FAQs';
import Blognav from './components/pages/blog/Blognav';
import Blogs from './components/pages/blog/Blogs';


const App = () => {
  return (
    <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/team' element={<OurTeam/>}/>
      <Route path='/clients' element={<OurClients/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/cases' element={<CaseStudies/>}/>
      <Route path='/cases/rangamaati' element={<Rangamaati/>}/>
      <Route path='/cases/betterbuild' element={<BetterBuild/>}/>
      <Route path='/cases/grocair' element={<Grocair/>}/>
      <Route path='/cases/effel' element={<Effel/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/hiringmodel' element={<DataHiringModel/>}/>
      <Route path='/projectmodel' element={<ProjectBasedModel/>}/>
      <Route path='/hourmodel' element={<HourModel/>}/>
      <Route path='/taskmodel' element={<TaskBasedModel/>}/>
      <Route path='/supportmodel' element={<SupportModel/>}/>
      <Route path='/hybridmodel' element={<HybridModel/>}/>
      <Route path='/getquote' element={<GetQuote/>}/>
      <Route path='/faqs' element={<FAQ/>}/>
      <Route path='/blog' element={<Blogs/>}/>
    </Routes>
    </div>
  );
};

export default App;
