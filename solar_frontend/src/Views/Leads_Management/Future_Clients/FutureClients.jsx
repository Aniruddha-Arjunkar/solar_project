import { useState } from "react";
import ModuleHeader from "../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import { Calendar } from "lucide-react";
import './FutureClients.css'

//============= LEADFORM ACTION BUTTON ===========
import VisitForm from "./../../../Components/LeadForms/VitisForm/VisitForm.jsx";
import ReFollowUpForm from "./../../../Components/LeadForms/ReFollowupForm/ReFollowupForm.jsx";
import ServiceForm from "./../../../Components/LeadForms/ServiceForm/ServiceForm.jsx"
import ScheduleForm from "./../../../Components/LeadForms/ScheduleForm/ScheduleForm.jsx";


function FutureClients(){

    const [selectedLead, setSelectedLead] = useState(null);
    const [activeAction, setActiveAction] = useState(null);


    /* ================= ACTION HANDLER ================= */

    const handleAction = (action, lead) => {

        console.log("Action:", action);
        console.log("Selected Lead:", lead);

        setSelectedLead(lead);
        setActiveAction(action);

    };

  const Stats = [
       {
        title:"Total Future Services",
        value:2
       }
  ];

  const Columns = [
        {
            key: "id",
            label: "ID"
        },
        {
            key: "name",
            label: "Name"
        },
        {
            key: "contact",
            label: "Contact"
        },
        {
            key: "email",
            label: "Email"
        },
        {
            key: "address",
            label: "Address"
        },
        {
            key: "message",
            label: "Message"
        },
        {
            key: "date",
            label: "Service Date"
        }
    ];

    const Data = [

        {
            id: 1,
            name: "Sumit",
            contact: "7889455612",
            email: "sumit@gmail.com",
            address: "Pune",
            message: "Solar panel installation",
            date: "24 Aug 2026"
        },

        {
            id: 2,
            name: "Aniket Warhate",
            contact: "7845269856",
            email: "aniket@gmail.com",
            address: "Pune",
            message: "Solar consultation",
            date: "24 Aug 2026"
        }
    ];

    /* ================= CLOSE FORM ================= */
    const handleCloseForm = () => {
        setActiveAction(null);
        setSelectedLead(null);
    };

    return (
        <section className='future_clients-page'>

     {/*=============== Header ===============*/}
            <ModuleHeader
              currectPage="Future Clients"
              title="View Future Leads"
              description="Manage Future Clients"
              buttonType="view"
              icon={Calendar}/>

      {/*============== Stats ================= */}
            <ModuleStats stats={Stats}/>

      {/*=============== Tables ================  */}
            <ModuleTable columns={Columns} 
            data={Data} onAction={handleAction}/>

      {/* ================= RE-FOLLOWUP FORM ================= */}
        {activeAction === "refollowup" && (
           <ReFollowUpForm
                    lead={selectedLead}
                    onClose={handleCloseForm}/>
            )}

      {/* ================= VISIT FORM ================= */}
         {activeAction === "visit" && (
                <VisitForm
                lead={selectedLead}
                onClose={handleCloseForm}/>
                )}

       {/* ================= SERVICE FORM ================= */}
         {activeAction === "service" && (
            <ServiceForm
                  lead={selectedLead}
                  onClose={handleCloseForm}/>
             )}


        {/* ================= SCHEDULE FORM ================= */}
          {activeAction === "schedule" && (
              <ScheduleForm
              lead={selectedLead}
              onClose={handleCloseForm}/>
       )}    

            
        </section>
    )
}
export default FutureClients;