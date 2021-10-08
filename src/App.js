import { BrowserRouter, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";

// client routes
import Home from "./Client/pages/Home";
import Login from "./Client/pages/Login";
import Register from "./Client/pages/Register";
import AboutUs from "./Client/pages/AbotUs";
import ContactUs from "./Client/pages/ContactUs";
import Infromation from "./Client/pages/Infromation";
import Support from "./Client/pages/Support";
import Cart from "./Client/pages/Cart";
import SingleService from "./Client/pages/SingleService";
import ServiceDetails from "./Client/pages/ServiceDetails";
import ServiceDetailsGents from "./Client/pages/ServiceDetails/ServiceDetailsGents";
import ServiceDetailsKids from "./Client/pages/ServiceDetails/ServiceDetailsKids";
import ServiceDetailsWomen from "./Client/pages/ServiceDetails/ServiceDetailsWomen";
import cartAlert from "./Client/components/homePageSlider/components/Popup/cartAlert";
import Services from "./Client/pages/Services";
// admin routes
import AdminLogin from "./Admin/pages/Login";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import Appoinments from "./Admin/pages/subpages/Appoinments";
import Calender from "./Admin/pages/subpages/Calender";
import Cupons from "./Admin/pages/subpages/Cupons";
import Customers from "./Admin/pages/subpages/Customers";
import Invoices from "./Admin/pages/subpages/Invoices";
import Locations from "./Admin/pages/subpages/locations";
import Payments from "./Admin/pages/subpages/Payments";
import Reports from "./Admin/pages/subpages/Reports";
import Settings from "./Admin/pages/subpages/Settings";
import Staff from "./Admin/pages/subpages/Staff";
import SideDrawer from "./Client/components/SideDrawer";
import { useState } from "react";
import NavBar from "./Client/components/NavBar";
import Backdrop from "./Client/components/Backdrop";
import test from "./Client/pages/test";

import "./index.css";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <BrowserRouter>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div>
        {/* Testing routes */}
        <Route path="/test" exact component={test}></Route>
        {/* client routes */}
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/cartAlert" exact component={cartAlert}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/aboutUs" exact component={AboutUs}></Route>
        <Route path="/contactUs" exact component={ContactUs}></Route>
        <Route path="/infromation" exact component={Infromation}></Route>
        <Route path="/support" exact component={Support}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Route path="/singleService" exact component={SingleService}></Route>
        <Route path="/serviceDetails" exact component={ServiceDetails}></Route>
        <Route
          path="/ServiceDetailsGents"
          exact
          component={ServiceDetailsGents}
        ></Route>
        <Route
          path="/ServiceDetailsWomen"
          exact
          component={ServiceDetailsWomen}
        ></Route>
        <Route
          path="/ServiceDetailsKids"
          exact
          component={ServiceDetailsKids}
        ></Route>
        <Route path="/Services" exact component={Services}></Route>

        {/* Admin routes */}
        <Route path="/admin/login" exact component={AdminLogin}></Route>
        <Route path="/admin/dashboard" exact component={AdminDashboard}></Route>
        <Route path="/admin/appoinments" exact component={Appoinments}></Route>
        <Route path="/admin/calender" exact component={Calender}></Route>
        <Route path="/admin/cupons" exact component={Cupons}></Route>
        <Route path="/admin/customers" exact component={Customers}></Route>
        <Route path="/admin/invoices" exact component={Invoices}></Route>
        <Route path="/admin/locations" exact component={Locations}></Route>
        <Route path="/admin/payments" exact component={Payments}></Route>
        <Route path="/admin/reports" exact component={Reports}></Route>
        <Route path="/admin/services" exact component={Services}></Route>
        <Route path="/admin/settings" exact component={Settings}></Route>
        <Route path="/admin/staff" exact component={Staff}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
