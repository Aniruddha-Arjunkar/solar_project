import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";

import { Users } from "lucide-react";

import "./ViewInquiry.css"

function ViewInquiry(){

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

    return(
        <section className="view_inquiry-page">

          {/* ================= HEADER ================= */}
            <ModuleHeader
                currectPage="View Inquiry"
                title="Inquiry Management"
                description="View and manage customer inquiries."
                buttonType="add"
                icon={Users}/>

            {/* ================= STATS ================= */}
            <ModuleStats
                stats={stats}
            />

            {/* ================= TABLE ================= */}
            <ModuleTable
                columns={columns}
                data={inquiries}/>
        </section>
    )
}
export default ViewInquiry;