import { useState } from "react";
import {
    Clock
} from "lucide-react";

import ClientHeader
    from "./../../../Components/Client_Module_Components/ClientHeader/ClientHeader.jsx";

import ClientStats from "./../../../Components/LeadStats/LeadStats.jsx";
import PendingClientTable from "./../../../Components/Client_Module_Components/ClientTable/ClientTable.jsx";
import "./PendingWork.css";


function PendingWork() {

    
    const [selectedWork, setSelectedWork] = useState(null);
    const [activeAction, setActiveAction] = useState(null);
    
    const Stats = [
        {
            title:"Total Pending Work",
            value:2
        }
    ];

    const Columns = [
    {
        key: "id",
        label: "ID"
    },
    {
        key: "clientName",
        label: "Client Name"
    },
    {
        key: "workDescription",
        label: "Work Description"
    },
    {
        key: "assignTo",
        label: "Assign To"
    },
    {
        key: "dueDate",
        label: "Due Date"
    },
    {
        key: "status",
        label: "Status"
    }
];

       /* =========================================
       STATIC PENDING WORK DATA
    ========================================= */

    const PendingWorkData = [

        {
            id: 1,
            clientName: "Rahul Patil",
            workDescription: "Solar panel installation",
            assignTo: "Atul Patil",
            dueDate: "30 Aug 2026",
            status: "Pending"
        },

        {
            id: 2,
            clientName: "Amit Sharma",
            workDescription: "Site inspection and survey",
            assignTo: "Sumit",
            dueDate: "02 Sep 2026",
            status: "In Progress"
        },

        {
            id: 3,
            clientName: "Priya Deshmukh",
            workDescription: "Solar system quotation",
            assignTo: "Aniket",
            dueDate: "05 Sep 2026",
            status: "Pending"
        }

    ];



    /* ================ ACTION HANDLER ============ */

    const handleWorkAction = (action, work) => {
        console.log("Selected Action:", action);
        console.log("Selected Work:", work);
        setSelectedWork(work);
        setActiveAction(action);

    };


    return (

        <section className="pending-work-page">

            <ClientHeader
                currectPage="Pending Work"
                title="Pending Client Work"
                description="Track and manage pending work for clients."
                buttonType="view"
                icon={Clock}/>

            <ClientStats stats={Stats}/>

            <PendingClientTable
               columns={Columns}
               data={PendingWorkData}
               onAction={handleWorkAction}
               type="pending-work"
               title="Pending Client Work"
                description="Track and manage pending work for clients."/>

        </section>
    );
}
export default PendingWork;