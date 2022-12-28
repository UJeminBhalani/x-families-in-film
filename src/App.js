import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Landing from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { useIdleTimer } from 'react-idle-timer'

import Manageemployer from "./components/Admin-Employers/Manageemployer";
import { useEffect, useState } from "react";
import AddEmployer from "./components/Admin-Employers/AddEmployer";
import ProductionsList from "./components/Admin-Employers/ProductionsList";
import AddProduction from "./components/Admin-Employers/AddProduction";
import AddProductionFocused from "./components/Admin-Employers/AdminProductionFocused";
import ConfirmProduction from "./components/shared/ConfirmProduction";
import EmployerDashboard from "./components/Employer/EmpoyerDashboard";
import SecondConfirmation from "./components/Employee/confirmation/SecondConfirm";
import EmployeeDashboard from "./components/Employee/dashboard/main/Dashboard";
import FamilyAccount from './components/Admin-Employers/FamilyAccount'
import SuccessConfirmation from "./components/Admin-Employers/SuccessConfirmation";
import EmployerFundingTabs from "./components/Admin-Employers/EmployerFundingTabs";
import CalenderListing from "./components/Employer/CalenderListing";
import SelectProductions from "./components/Employee/dashboard/productions/selectProductions";
import FinishedProd from "./components/Employee/dashboard/productions/finishedProductions";
import Focusedprod from "./components/Employee/dashboard/productions/focused";
import CrewSchedule from './components/Employer/CrewSchedule'
import EmployeerRequests from "./components/Admin-Employers/EmployeerRequests";
import UpdateEmployer from "./components/Admin-Employers/UpdateEmployer";
import "../node_modules/react-calendar/dist/Calendar.css";
import ManageEmployee from "./components/Employer/ManageEmployee";
import ManageUnion from "./components/Employer/ManageUnion";
import EmployerProfile from "./components/Employer/EmployerProfile";
import UpdateUnion from "./components/Employer/UpdateUnion";
import UnionRequestApproval from "./components/Employer/UnionRequestApproval";
import EmployeeRequestApproval from "./components/Employer/EmployeeRequestApproval";
import UpdateCaregiver from "./components/Admin-Employers/updateCaregiver"
import ChildCare from "./components/Employee/dashboard/requests/requestChildcare";
import Success from "./components/Employee/dashboard/requests/success";
import Bookings from "./components/Employee/dashboard/booking/bookings";
import Settings from "./components/Employee/dashboard/settings/settings";
import Profile from "./components/Employee/dashboard/profile";
import UnionDashboard from "./components/Union/UnionDashboard";
import Balances from "./components/Union/balances/overview";
import BookingRequests from "./components/Caregiver/bookingRequests/bookingRequests";
import DashBoard from "./components/Caregiver/DashBoard";
import AvailabilityCalender from "./components/Caregiver/AvailabilityCalender";
import CareGiverProfile from "./components/Caregiver/profile/Profile";
import ProductionDetails from "./components/Union/ProductionDetails";
import ManageCaregiver from "./components/Admin-Employers/ManageCaregiver";
import UnionArchive from "./components/Employer/UnionArchive";
import EmployeeArchive from "./components/Employer/EmployeeArchive";
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from "./components/Auth/ResetPassword";
import Expired from './components/Auth/Expired';
import { Toaster } from "react-hot-toast";
import Temp from "./components/Auth/Temp";
import { PublicRoutes as publicRoutesList } from './Routes'
import AppLayout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import PublicComponents from "./components/Layout/PublicComponent";
import AdminComponents from "./components/Layout/AdminComponents";
import EmployerComponents from "./components/Layout/EmployerComponents";
import EmployeeComponents from "./components/Layout/EmployeeComponents";
import UnionComponents from "./components/Layout/UnionComponents";
import CaregiversComponents from "./components/Layout/CaregiversComponents";
import NotFound from "./components/Auth/NotFound";
import PublicRoutes from "./components/Services/Routes/PublicRoutes";
import ProtectedRoute from "./components/Services/Routes/ProtectedRoute";
import { loginState } from "./components/Reducers/Login/loginSlice";
import { clearLocalStorage } from "./components/Services/storage";
import ArchivedEmployers from "./components/Admin-Employers/ArchivedEmployers";
import InviteLinkExpired from "./components/Auth/InviteLinkExpired";
import Productions from "./components/Admin-Employers/Productions/index";

function App() {
  useEffect(() => {
    if (publicRoutesList.includes(window.location.pathname)) {
      document.body.classList.add("auth");
    } else {
      document.body.classList.remove("auth");
    }
  }, []);
  const checkLoginStates = useSelector(role => role.login)
  const isloggedIn = checkLoginStates.loggedIn
  const role = checkLoginStates.role_data

  const navigate = useNavigate()
  const timeout = 1.2e+6  //1min 
  const [remaining, setRemaining] = useState(timeout)
  const [isIdle, setIsIdle] = useState(false)
  const handleOnActive = () => setIsIdle(false)
  const dispatch = useDispatch()
  const handleOnIdle = () => setIsIdle(true)
  const { getRemainingTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle
  })

  useEffect(() => {
    setRemaining(getRemainingTime())
    setInterval(() => {
      setRemaining(getRemainingTime(), 1000)
    })
  }, [])

  useEffect(() => {
    if (isloggedIn && remaining === 0) {
      console.log('you are logout');
      clearLocalStorage()
      dispatch(loginState({
        loggedIn: false, access_token: null,
        role: null, role_data: null, remember: false
      }))
      navigate('/login')
    }
  }, [remaining])

  useEffect(() => {
    if (!isloggedIn) {
      navigate('/')
    }
  }, [isloggedIn])

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      <Routes>
        <Route element={<PublicRoutes><PublicComponents /></PublicRoutes>}>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgot_password" element={<ForgotPassword />} />
          <Route exact path="/employer/confirm-production" element={<ConfirmProduction />} />
          <Route exact path="/employee/confirm-production" element={<ConfirmProduction />} />
          <Route exact path="/union/confirm-production" element={<ConfirmProduction />} />
          <Route exact path="/wrong-production" element={<SecondConfirmation />} />
          <Route exact path="/reset_password" element={<ResetPassword />} />
          <Route exact path="/reset_link_expired" element={<Expired />} />
          <Route exact path="/redirect-forgot-password" element={<Temp />} />
          <Route exact path="/processinvite" element={<Temp />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/invite_link_expired" element={<InviteLinkExpired />} />
        </Route>
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          {role === '1' && <>
            <Route exact path="/admin/dashboard" element={<Productions />} />
            <Route exact path="/admin/caregivers" element={<ManageCaregiver />} />
            <Route exact path="/admin/productions" element={<AddProductionFocused />} />
            <Route exact path="/admin/updateEmployer/:id" element={<UpdateEmployer />} />
            <Route exact path="/admin/employers" element={<Manageemployer />} />
            <Route exact path="/admin/archive-employers" element={<ArchivedEmployers />} /></>
          }
          {role === '2' &&
            <Route element={<ProtectedRoute><EmployerComponents /></ProtectedRoute>}>
              <Route exact path="/employer/dashboard" element={<EmployerDashboard />} />
              <Route exact path="/employer/employees" element={<ManageEmployee />} />
              <Route exact path="/employer/balances" element={<EmployerFundingTabs />} />
              <Route exact path="/employer/unions" element={<ManageUnion />} />
              <Route exact path="/employer/settings" element={<Settings />} />
            </Route>}
          {role === '3' &&

            <Route element={<ProtectedRoute><EmployeeComponents /></ProtectedRoute>}>
              <Route exact path="/employee/dashboard" element={<EmployeeDashboard />} />
              <Route exact path="/employee/listing" element={<CalenderListing />} />
              <Route exact path="/employee/productions" element={<SelectProductions />} />
              <Route exact path="/employee/finished/productions" element={<FinishedProd />} />
              <Route exact path="/employee/focused-productions" element={<Focusedprod />} />
              <Route exact path="/employee/requests" element={<ChildCare />} />
              <Route exact path="/employee/requests/success" element={<Success />} />
              <Route exact path="/employee/booking" element={<Bookings />} />
              <Route exact path="/employee/settings" element={<Settings />} />
              <Route exact path="/employee/profile" element={<Profile />} />
            </Route>}
          {role === '4' &&

            <Route element={<ProtectedRoute><UnionComponents /></ProtectedRoute>}>
              <Route exact path="/union/dashboard" element={<UnionDashboard />} />
              <Route exact path="/union/productions" element={<SelectProductions />} />
              <Route exact path="/union/balances" element={<Balances />} />
              <Route exact path="/union/settings" element={<Settings />} />
              <Route exact path="/union/production/detail" element={<ProductionDetails />} />
              <Route exact path="/union/success_confirmation" element={<SuccessConfirmation />} />
            </Route>
          }
          {role === '5' &&

            <Route element={<ProtectedRoute><CaregiversComponents /></ProtectedRoute>}>
              <Route exact path="/caregiver/requests" element={<BookingRequests />} />
              <Route exact path="/caregiver/calendar" element={<AvailabilityCalender />} />
              <Route exact path="/caregiver/dashboard" element={<DashBoard />} />
              <Route exact path="/caregiver/profile" element={<CareGiverProfile />} />

            </Route>}
          <Route exact path="/employers/add" element={<AddEmployer />} />
          <Route exact path="/employer/unions-archive" element={<UnionArchive />} />
          <Route exact path="/employer/employee-archive" element={<EmployeeArchive />} />
          <Route exact path="/employers/productionslist" element={<ProductionsList />} />
          <Route exact path="/employers/addproduction" element={<AddProduction />} />
          <Route exact path="/successConfirmation" element={<SuccessConfirmation />} />
          <Route exact path="/employer/profile" element={<EmployerProfile />} />

          <Route exact path="/employer/updateUnion" element={<UpdateUnion />} />
          <Route exact path="/employer/union-request-approval" element={<UnionRequestApproval />} />
          <Route exact path="/employer/employee-request-approval" element={<EmployeeRequestApproval />} />
          <Route exact path="/employer/addemploye" element={<AddEmployer />} />
          <Route exact path="/employer/success_confirmation" element={<SuccessConfirmation />} />
          <Route exact path="/admin/updateCaregiver" element={<UpdateCaregiver />} />
          <Route exact path="/employer/employees/addFamily" element={<FamilyAccount />} />
          <Route exact path="/employer/update-union" element={<UpdateUnion />} />
          <Route exact path="/employer/union-request-approval" element={<UnionRequestApproval />} />
          <Route exact path="/employer/employee-request-approval" element={<EmployeeRequestApproval />} />
          <Route exact path="/employer/calendar" element={<CalenderListing />} />
          <Route exact path="/employer/crew_schedule" element={<CrewSchedule />} />
          <Route exact path="/confirmation" element={<SuccessConfirmation />} />


        </Route>
      </Routes>

    </>
  );
}

export default App;
