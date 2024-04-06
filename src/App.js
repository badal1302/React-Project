import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import SignUp from './pages/login';
import Contact from './pages/contact';
import Forgot from './pages/forgot';
import AcademicReg from './pages/academi-reg';
import CandReg from './pages/cand-reg';
import RecrReg from './pages/recr-reg';
import DeiReg from './pages/dei-reg';
import AcademiaDashboard from './pages/aca-review';
import AcademiaPosition from './pages/academia-positions';
import AcademiCandi from './pages/academi-candi';
import AcademiCandiV from './pages/academi-candi-v';
import AcademicCandiInt from './pages/academic-candi-int';
import AcademiaProfile from './pages/academia-profile';

// admin
import AdminDasboard from './pages/admin-dashboard';
import AdminJobs from './pages/admin-jobs';
import AdminMatch from './pages/admin-match';
import AdminUsers from './pages/admin-users';
import AdminProfiles from './pages/admin-profiles';
import AdminLog from './pages/admin-log';

//App positions
import AppPos from "./pages/app-pos"
import AvailPos from "./pages/avail-pos";
import CandidateMatchJobs from "./pages/candidate-match-jobs";
import CandidateReview from "./pages/candidate-review";
import CandidateProfile from "./pages/candidate-profile";
import CandidateMsg from "./pages/candidate-msg";
import DeiJobs from "./pages/dei-jobs";
import DeiProfile from "./pages/dei-profile";

import RecAppPos from "./pages/rec-app-pos";
import RecAvailPos from "./pages/rec-avail-pos";
import RecMatch from "./pages/rec-match";
import RecPro from "./pages/rec-pro";

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blog' element={<Contact />} />
              <Route path='/login' element={<SignUp />} />

              <Route path='/forgot' element={<Forgot />} />
              <Route path='/academi-reg' element={<AcademicReg />} />
              <Route path='/cand-reg' element={<CandReg />} />
              <Route path='/recr-reg' element={<RecrReg />} />
              <Route path='/dei-reg' element={<DeiReg />} />


              <Route path='/aca-review' element={<AcademiaDashboard />} />
              <Route path='/academia-positions' element={<AcademiaPosition />} />
              <Route path='/academi-candi' element={<AcademiCandi />} />
              <Route path='/academi-candi-v' element={<AcademiCandiV />} />
              <Route path='/academic-candi-int' element={<AcademicCandiInt />} />
              <Route path='/academia-profile' element={<AcademiaProfile />} />

              {/*Admin Route*/}
              <Route path='/admin-dashboard' element={<AdminDasboard />} />
              <Route path='/admin-jobs' element={<AdminJobs />} />
              <Route path='/admin-match' element={<AdminMatch />} />
              <Route path='/admin-users' element={<AdminUsers />} />
              <Route path='/admin-profiles' element={<AdminProfiles />} />
              <Route path='/admin-log' element={<AdminLog />} />

              {/*    Avail Positions*/}
              <Route path='/app-pos' element={<AppPos />} />
              <Route path='/avail-pos' element={<AvailPos />} />
              <Route path='/candidate-match-jobs' element={<CandidateMatchJobs />} />
              <Route path='/candidate-review' element={<CandidateReview />} />
              <Route path='/candidate-profile' element={<CandidateProfile />} />
              <Route path='/candidate-msg' element={<CandidateMsg />} />

              {/*    Jobs*/}
              <Route path='/dei-jobs' element={<DeiJobs />} />
              <Route path='/dei-profile' element={<DeiProfile />} />

              {/*rec pos*/}
              <Route path='/rec-app-pos' element={<RecAppPos />} />
              <Route path='/rec-avail-pos' element={<RecAvailPos />} />
              <Route path='/rec-match' element={<RecMatch />} />
              <Route path='/rec-pro' element={<RecPro />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
