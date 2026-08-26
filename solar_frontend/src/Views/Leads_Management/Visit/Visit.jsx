import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";

import {MapPinHouse} from "lucide-react";
//========== Action Button Form ==================
import VisitForm from "./../../../Components/LeadForms/VitisForm/VisitForm.jsx";
import ReFollowUpForm from "./../../../Components/LeadForms/ReFollowupForm/ReFollowupForm.jsx";
import ServiceForm from "./../../../Components/LeadForms/ServiceForm/ServiceForm.jsx"
import ScheduleForm from "./../../../Components/LeadForms/ScheduleForm/ScheduleForm.jsx";

import { useState } from "react";

import "./Visit.css";

function Visit(){

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
            title: "Total Visits",
            value: 0
        },

        {
            title: "Today's Visits",
            value: 3
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
            label: "Remark"
        },
        {
            key: "date",
            label: "Visit Date"
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
        },
        {
            id: 3,
            name: "Uday",
            contact: "7128316701",
            email: "uday@gmail.com",
            address: "Mumbai",
            message: "Solar maintenance",
            date: "23 Aug 2026"
        }

    ];

     /* ================= CLOSE FORM ================= */

    const handleCloseForm = () => {
        setActiveAction(null);
        setSelectedLead(null);
    };

    return (
        <section className="visit">
            {/* ================= HEADER ================= */}
            <ModuleHeader
                currectPage="Visit"
                title="Visit Mangement"
                description="Keep Tract of all Visits."
                buttonType="view"
                icon={MapPinHouse}/>

            {/* ================= STATS ================= */}
            <ModuleStats
                stats={Stats}
            />

            {/* ================= TABLE ================= */}
            <ModuleTable columns={Columns} data={Data} 
            onAction={handleAction}/>

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
export default Visit;