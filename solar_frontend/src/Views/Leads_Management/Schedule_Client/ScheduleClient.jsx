import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";

import { CalendarCheck } from "lucide-react";

import "./ScheduleClient.css";

function ScheduleClient(){
    const Stats = [

        {
            title: "Total Schedule",
            value: 0
        },

        {
            title: "Today's Schedule",
            value: 0
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
            label: "Schedule Date"
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

    return(
        <section className="schedule_client">
            {/* ================= HEADER ================= */}
              <ModuleHeader
                  currectPage="Schedule"
                  title="Schedule Management"
                  description="View and manage scheduled customer activities."
                  buttonType="view"
                  icon={CalendarCheck}/>

            {/* ================= STATS ================= */}
            <ModuleStats
                stats={Stats}
            />

            {/* ================= TABLE ================= */}
            <ModuleTable columns={Columns} data={Data}/>
        </section>
    )
}
export default ScheduleClient;