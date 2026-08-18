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

import './App.css'

function App() {

  return (
    <>
        <Routes>
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
           
          </Route>
        </Routes>
    </>
  )
}

export default App
