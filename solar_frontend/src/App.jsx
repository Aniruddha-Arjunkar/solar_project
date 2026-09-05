import { Routes , Route } from 'react-router'
import Layout from "./Layout/DashBoardLayout/DashBoardLayout.jsx";
import DashBoard from './Views/DashBoard/DashBoard.jsx';

// ========== Lead Management ============
import AddInquiry from './Views/Leads_Management/Add_Inquiry/AddInquiry.jsx';
import ViewInquiry from './Views/Leads_Management/View_Inquiry/ViewInquiry.jsx';
import ReFollowUp from './Views/Leads_Management/Re_FollowUp/FollowUp.jsx';
import Visit from './Views/Leads_Management/Visit/Visit.jsx';
import FutureClient from './Views/Leads_Management/Future_Clients/FutureClients.jsx';
import ScheduleClient from './Views/Leads_Management/Schedule_Client/ScheduleClient.jsx';
import Quotation from './Views/Leads_Management/Quotation/Quotation.jsx';
import AddQuotation from "./Views/Leads_Management/Add_Quotation/AddQuotation.jsx";
import MakeClient from "./Views/Leads_Management/MakeClient/MakeClient.jsx";

//=========== Vendor Mangement ============
import AddVendor from "./Views/Vendor_Management/Add_Vendor/AddVendor.jsx";
import ViewVendor from "./Views/Vendor_Management/View_Vendor/ViewVendor.jsx";

//========== Clients Managements ==========
import ViewClient from "./Views/Client_Management/ViewClients/ViewClient.jsx"
import GSTClient from "./Views/Client_Management/GSTClients/GSTClient.jsx";
import PendingWork from "./Views/Client_Management/PendingWork/PendingWork.jsx"
import EditClient from './Views/Client_Management/EditClient/EditClient.jsx';

//=========== Users ======================
import ViewUsers from "./Views/Users/View_Users/ViewUsers.jsx";

//============ User Admin =============
import Login from './pages/Login/Login.jsx';

//==========Protected Rotes ==========
import ProjectedRoute from './Components/ProtectedRoutes.jsx';

//========= LoginRoute.jsx===============
// import LoginRoute from './Components/LoginRoute.jsx';

import './App.css'

function App() {

  return (
    <>
        <Routes>

          {/*========== Admin Login ===============*/}
            <Route path='/login' element={<Login/>}/>
          
          {/* ===== protected Routes ============= */}
          <Route element={<ProjectedRoute/>}>

          {/*======== Layout =================*/}
          <Route path='/' element={<Layout/>}>

            {/* DashBoard */}
            <Route index element={<DashBoard/>}/>

            {/* Lead Management */}
            <Route path='dashboard/add-inquiry' element={<AddInquiry/>}/>
            <Route path='dashboard/view-inquiry' element={<ViewInquiry/>}/>
            <Route path='dashboard/re-followup' element={<ReFollowUp/>}/>
            <Route path='dashboard/visit' element={<Visit/>}/>
            <Route path='dashboard/future-client' element={<FutureClient/>}/>
            <Route path='dashboard/schedule-client' element={<ScheduleClient/>}/>
            <Route path='dashboard/quotations' element={<Quotation/>}/>
            <Route path="/dashboard/add-quotation/:leadId" element={<AddQuotation />}/>
            <Route path="/dashboard/make-client/:leadId" element={<MakeClient/>}/>

            {/* Vendor Management */}
            <Route path="dasboard/add-vendor" element={<AddVendor/>}/>
            <Route path="dashboard/view-vendor" element={<ViewVendor/>}/>

            {/* Client Management */}
            <Route path="dashboard/view-client" element={<ViewClient/>}/>
            <Route path="dashboard/gst-client" element={<GSTClient/>}/>
            <Route path="dashboard/pending-work" element={<PendingWork/>}/>
            <Route path="dashboard/edit-client/:clientId" element={<EditClient/>}/>

            {/* Users */}
            <Route path='dashboard/view-users' element={<ViewUsers/>}/>
         
          </Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
