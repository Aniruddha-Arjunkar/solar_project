import { useState } from "react";
import {
    UsersRound
} from "lucide-react";

import ClientHeader
    from "./../../../Components/Client_Module_Components/ClientHeader/ClientHeader.jsx";
import ClientStats from "./../../../Components/LeadStats/LeadStats.jsx"; 
import ViewClientTable from "../../../Components/Client_Module_Components/ClientTable/ClientTable.jsx";
import "./ViewClient.css";


function ViewClient() {

    const [selectedClient, setSelectedClient] = useState(null);
    const [activeAction, setActiveAction] = useState(null);

    const Stats = [
        {
            title:"Total Clients",
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
        key: "service",
        label: "Service"
    },
    {
        key: "amount",
        label: "Amount"
    },
    {
        key: "addedBy",
        label: "Added By"
    },
    {
        key: "vendor",
        label: "Vendor"
    }
];

     const ClientData = [
        {
            id: 1,
            name: "Rahul Patil",
            contact: "9876543210",
            email: "rahul@gmail.com",
            address: "Pune",
            service: "Solar Panel Installation",
            amount: "₹2,50,000",
            addedBy: "Vendor",
            vendor: "Sumit"
        },
        {
            id: 2,
            name: "Amit Sharma",
            contact: "9123456780",
            email: "amit@gmail.com",
            address: "Mumbai",
            service: "Solar Panel Maintenance",
            amount: "₹45,000",
            addedBy: "Me",
            vendor: "-"
        }
    ];

     /* ============ ACTION HANDLER ================ */

    const handleClientAction = (action, client) => {
        console.log("Selected Action:", action);
        console.log("Selected Client:", client);
        setSelectedClient(client);
        setActiveAction(action);
    };

    return (

        <section className="view-client-page">

            <ClientHeader
                currectPage="View Clients"
                title="Client Management"
                description="View and manage all registered clients."
                buttonType="gst"
                icon={UsersRound}/>

            <ClientStats
            stats={Stats}/>
             
            <ViewClientTable
                 columns={Columns}
                 data={ClientData}
                 onAction={handleClientAction}
                 type="view-client"
                 title="All Clients"
                 description="View and manage all registered clients."/>

        </section>
    );
}
export default ViewClient;