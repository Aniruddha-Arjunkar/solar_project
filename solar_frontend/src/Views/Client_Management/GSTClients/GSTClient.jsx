
import { useState } from "react";
import {
    FileText
} from "lucide-react";

import ClientHeader
    from "./../../../Components/Client_Module_Components/ClientHeader/ClientHeader.jsx";
import ClientStats from "./../../../Components/LeadStats/LeadStats.jsx";
import GSTClientTable from "./../../../Components/Client_Module_Components/ClientTable/ClientTable.jsx";


import "./GSTClient.css";


function GSTClient() {

    const [selectedClient, setSelectedClient] = useState(null);
    const [activeAction, setActiveAction] = useState(null);

     /* ========= STATIC GST CLIENT DATA ======== */

    const GSTClientData = [

        {
            id: 1,
            name: "Rahul Patil",
            contact: "9876543210",
            email: "rahul@gmail.com",
            address: "Pune",
            service: "Solar Panel Installation",
            serviceDate: "30 Aug 2026"
        },
        {
            id: 2,
            name: "Amit Sharma",
            contact: "9123456780",
            email: "amit@gmail.com",
            address: "Mumbai",
            service: "Solar Panel Maintenance",
            serviceDate: "02 Sep 2026"
        },

        {
            id: 3,
            name: "Priya Deshmukh",
            contact: "9988776655",
            email: "priya@gmail.com",
            address: "Nashik",
            service: "Solar Panel Installation",
            serviceDate: "05 Sep 2026"
        }

    ];


    /* ======= ACTION HANDLER ======= */

    const handleClientAction = (action, client) => {
        console.log("Selected Action:", action);
        console.log("Selected Client:", client);
        setSelectedClient(client);
        setActiveAction(action);
    };

    const Stats = [
        {
            title:"Total GST Clients",
            value:5
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
        key: "serviceDate",
        label: "Service Date"
    }
];

    return (

        <section className="gst-client-page">

            <ClientHeader
                currectPage="GST Clients"
                title="GST Client Management"
                description="View and manage clients with GST information."
                buttonType="view"
                icon={FileText}/>

            <ClientStats stats={Stats}/>

            <GSTClientTable
              columns={Columns}
              data={GSTClientData}
              onAction={handleClientAction}
              type="gst-client"
              title="GST Clients"
              description="View and manage clients with GST information."/>
            
        </section>
    );
}
export default GSTClient;