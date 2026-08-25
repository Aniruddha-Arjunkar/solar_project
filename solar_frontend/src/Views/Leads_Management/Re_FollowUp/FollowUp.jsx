
import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import { PhoneCall } from "lucide-react";

import "./FollowUp.css";

function FollowUp(){
     const Stats = [
        {
            title: "Pending Follow-ups",
            value: 1
        },
        {
            title: "Today's Follow-ups",
            value: 2
        },
        {
            title: "Total Follow-ups",
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
            label: "Remarks"
        },
        {
            key: "date",
            label: "Follow-up Date"
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

    return (
        <section className="follow_up">
            {/* ================= HEADER ================= */}
            <ModuleHeader
                currectPage="Follow-up"
                title="Follow-up Management"
                description="Track and manage customer follow-ups."
                buttonType="view"
                icon={PhoneCall}/>

            {/* ================= STATS ================= */}
            <ModuleStats
                stats={Stats}
            />

            {/* ================= TABLE ================= */}
            <ModuleTable columns={Columns} data={Data}/>
        </section>
    )
}
export default FollowUp;