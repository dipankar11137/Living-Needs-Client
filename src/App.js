import { Route, Routes } from 'react-router-dom';
import './App.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import SignUp from './Components/Login/SignUp';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import AddItem from './Components/Pages/Dashboard/AddItem';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageItem from './Components/Pages/Dashboard/ManageItem';
import AppleInventory from './Components/Pages/Home/AppleInventory';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Share/Navbar';
import NotFound from './Components/Pages/Share/NotFound';
// animation
import 'animate.css/animate.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Blog from './Components/Pages/Blogs/Blog';
import BookServices from './Components/Pages/BookServices/BookServices';
import AddJobs from './Components/Pages/Dashboard/AddJobs';
import ManageContacts from './Components/Pages/Dashboard/ManageContacts';
import AmbulanceServices from './Components/Pages/Home/OurServices/AmbulanceServices';
import Cleaner from './Components/Pages/Home/OurServices/Cleaner';
import ComputerTechnicians from './Components/Pages/Home/OurServices/ComputerTechnicians';
import Driver from './Components/Pages/Home/OurServices/Driver';
import Electrician from './Components/Pages/Home/OurServices/Electrician';
import Mechanical from './Components/Pages/Home/OurServices/Mechanical';
import SecurityGuard from './Components/Pages/Home/OurServices/SecurityGuard';
import VehiclesServices from './Components/Pages/Home/OurServices/VehiclesServices';
import MyBookings from './Components/Pages/My Booking/MyBookings';
import BKashFirst from './Components/Pages/My Booking/Payment/BKashFirst';
import MyItems from './Components/Pages/MyItems/MyItems';
import PayNow from './Components/Pages/MyItems/PayNow';
import AddReview from './Components/Pages/Review/AddReview';

Aos.init();

function App() {
  return (
    <div className="bg-slate-300">
      {/* <Header /> */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/blogs"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />

        <Route path="/inventory/:id" element={<AppleInventory />} />

        <Route path="/computers" element={<ComputerTechnicians />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/cleaner" element={<Cleaner />} />
        <Route path="/ambulance" element={<AmbulanceServices />} />
        <Route path="/vehicles" element={<VehiclesServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/securityGuard" element={<SecurityGuard />} />
        {/* <Route
          path="/myBooking"
          element={
            <RequireAuth>
              <MyBookings />
            </RequireAuth>
          }
        /> */}
        <Route path="/payment" element={<BKashFirst />} />
        <Route
          path="/bookService/:id"
          element={
            <RequireAuth>
              <BookServices />
            </RequireAuth>
          }
        />
        <Route
          path="/myItems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/addAReview"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        />
        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<AddItem />} />
          <Route path="myBooking" element={<MyBookings />} />
          <Route path="manageItem" element={<ManageItem />} />
          <Route path="addJobs" element={<AddJobs />} />
          <Route path="contact" element={<ManageContacts />} />
        </Route>
        {/* Dashboard End */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payNow" element={<PayNow />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
