import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";

//====== ACTION BUTTON FORMS ===============
import VisitForm from "./../../../Components/LeadForms/VitisForm/VisitForm.jsx";
import ReFollowUpForm from "./../../../Components/LeadForms/ReFollowupForm/ReFollowupForm.jsx";

import { Users } from "lucide-react";

import { useState } from "react";

import "./ViewInquiry.css";


function ViewInquiry() {

    const [selectedLead, setSelectedLead] = useState(null);
    const [activeAction, setActiveAction] = useState(null);


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
            value: 3
        },

        {
            title: "Today's Inquiry",
            value: 0
        },

        {
            title: "Pending Inquiry",
            value: 2
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
            key: "message",
            label: "Message"
        },

        {
            key: "date",
            label: "Date"
        }

    ];


    /* ================= TEMPORARY DATA ================= */

    const inquiries = [

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
                data={inquiries}
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

        </section>

    );
}


export default ViewInquiry;