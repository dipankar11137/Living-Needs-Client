import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Footer from '../Share/Footer';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-100">
      <div>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content ">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label for="dashboard-sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content pt-20">
              <li>
                <Link
                  to="/dashboard"
                  className="font-semibold mt-1  text-xl hover:text-orange-600"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/editProfile"
                  className="font-semibold mt-1  text-xl hover:text-orange-600"
                >
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/addItem"
                  className="font-semibold mt-1  text-xl hover:text-orange-600"
                >
                  Add Service
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myBooking"
                  className="font-semibold mt-1  text-xl hover:text-orange-600"
                >
                  My Booking
                </Link>
              </li>
              {user?.email === 'limon51-041@diu.edu.bd' && (
                <>
                  {' '}
                  <li>
                    <Link
                      to="/dashboard/manageItem"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Manage Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/addJobs"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Job Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/history"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/contact"
                      className="font-semibold mt-1 text-xl hover:text-orange-600"
                    >
                      Manage Contact
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
