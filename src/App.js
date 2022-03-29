import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home'
import PersonalInfo from './Component/PersonalInfo/PersonalInfo'
import ProfileUpdate from './Component/ProfileUpdate/ProfileUpdate'
import IncomeReport from './Component/IncomeReport/IncomeReport'
import PurchaseBalance from './Component/PurchaseBalance/PurchaseBalance'
import PaymentSystem from './Component/PaymentSystem/PaymentSystem'
import Withdraw from './Component/Withdraw/Withdraw'
import Contact from './Component/Contact/Contact'
import WithdrawReport from './Component/WithdrawReport/WithdrawReport'
import GenerationReport from './Component/GenerationReport/GenerationReport'
import ReferList from './Component/ReferList/ReferList'
import ComplainBox from './Component/ComplainBox/ComplainBox'
import Joining from './Component/Joining/Joining'
import UniLevelTree from './Component/UniLavelTree/UniLevelTree'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivetRoute from './Component/PrivetRout/PrivetRoute';
import News from "./Component/News/News"
import PBCdetails from './Component/IncomeReport/PCCDetails/PCCDetails';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivetRoute path="/personal-info">
              <PersonalInfo />
            </PrivetRoute>
            <PrivetRoute path="/profile-update">
              <ProfileUpdate />
            </PrivetRoute>
            <PrivetRoute path="/news">
              <News/>
            </PrivetRoute> 
            <PrivetRoute path="/total-paid-balance-by-company">
              <PBCdetails/>
            </PrivetRoute>
            <PrivetRoute path="/income-report">
              <IncomeReport />
            </PrivetRoute>
            <PrivetRoute path="/purchase-balance">
              <PurchaseBalance />
            </PrivetRoute>
            <PrivetRoute path="/payment-system">
              <PaymentSystem />
            </PrivetRoute>
            <PrivetRoute path="/withdraw">
              <Withdraw />
            </PrivetRoute>
            <PrivetRoute path="/contact-us">
              <Contact />
            </PrivetRoute>
            <PrivetRoute path="/withdraw-report">
              <WithdrawReport />
            </PrivetRoute>
            <PrivetRoute path="/generation-report">
              <GenerationReport />
            </PrivetRoute>
            <PrivetRoute path="/refer-list">
              <ReferList />
            </PrivetRoute>
            <PrivetRoute path="/complain-box">
              <ComplainBox />
            </PrivetRoute>
            <PrivetRoute path="/joining">
              <Joining />
            </PrivetRoute>
            <PrivetRoute path="/uni-level-tree">
              <UniLevelTree />
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
