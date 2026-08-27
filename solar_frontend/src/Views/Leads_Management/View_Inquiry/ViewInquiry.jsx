import { useState , useEffect } from "react";

import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";

//====== ACTION BUTTON FORMS ===============
import VisitForm from "./../../../Components/LeadForms/VitisForm/VisitForm.jsx";
import ReFollowUpForm from "./../../../Components/LeadForms/ReFollowupForm/ReFollowupForm.jsx";
import ServiceForm from "./../../../Components/LeadForms/ServiceForm/ServiceForm.jsx"
import ScheduleForm from "./../../../Components/LeadForms/ScheduleForm/ScheduleForm.jsx";

import { Users } from "lucide-react";

import "./ViewInquiry.css";


function ViewInquiry() {

    const [selectedLead, setSelectedLead] = useState(null);
    const [activeAction, setActiveAction] = useState(null);
    const [LeadData , setLeadData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/api/leads")
        .then((responce) => {
            if(!responce.ok){
                throw new Error("Failed to Fetch Leads")
            }
            return responce.json();
        })
        .then((data) => {
            setLeadData(data);
        })
        .catch((error) => {
            window.alert("Fail to Fetch Leads",error);
        })
    },[]);


    /* ================= ACTION HANDLER ================= */

    const handleAction = (action, lead) => {

        console.log("Action:", action);
        console.log("Selected Lead:", lead);

        setSelectedLead(lead);
        setActiveAction(action);

    };


    /* ================= STATS ================= */

    const stats = [

        {
            title: "Total Inquiry",
            value: LeadData.length
        },

        {
            title: "Today's Inquiry",
            value: 0
        },

        {
            title: "Pending Inquiry",
            value: LeadData.length
        }

    ];


    /* ================= TABLE COLUMNS ================= */

    const columns = [

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
            key:"serviceType",
            label:"Interested Servive"
        },
        {
            key: "message",
            label: "Message"
        },
        {
            key:"status",
            label:"Status"
        },
        {
            key: "inquiryDate",
            label: "Date"
        }

    ];


    /* ================= CLOSE FORM ================= */
    const handleCloseForm = () => {
        setActiveAction(null);
        setSelectedLead(null);
    };


    return (

        <section className="view_inquiry-page">

            {/* ================= HEADER ================= */}

            <ModuleHeader
                currectPage="View Inquiry"
                title="Inquiry Management"
                description="View and manage customer inquiries."
                buttonType="add"
                icon={Users}
            />


            {/* ================= STATS ================= */}

            <ModuleStats
                stats={stats}
            />

            {/* ================= TABLE ================= */}

            <ModuleTable
                columns={columns}
                data={LeadData}
                onAction={handleAction}
            />


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

    );
}


export default ViewInquiry;