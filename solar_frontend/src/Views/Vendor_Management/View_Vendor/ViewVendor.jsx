import { useState } from "react";

import {
    UsersRound
} from "lucide-react";

import VendorHeader 
from "./../../../Components/Vendor_Module_Components/VendorHeader/VendorHeader.jsx";

import VendorStats
    from "./../../../Components/LeadStats/LeadStats.jsx";

import VendorTable
    from "./../../../Components/Vendor_Module_Components/VendorTable/VendorTable.jsx";

import AddClient
    from "./../../../Components/VendorForms/Add_Clients/AddClient.jsx";

import "./ViewVendor.css";


function ViewVendor() {


    /* =========================================
       SELECTED VENDOR
    ========================================= */

    const [selectedVendor, setSelectedVendor] = useState(null);


    /* =========================================
       ACTIVE ACTION
    ========================================= */

    const [activeAction, setActiveAction] = useState(null);


    /* =========================================
       STATIC VENDOR DATA
    ========================================= */

    const VendorData = [

        {
            id: 1,
            name: "Sumit",
            contact: "7889455612",
            email: "sumit@gmail.com",
            address: "Pune",
            remarks: "Solar panel installation vendor"
        },

        {
            id: 2,
            name: "Aniket Warhate",
            contact: "7845269856",
            email: "aniket@gmail.com",
            address: "Pune",
            remarks: "Electrical equipment supplier"
        },

        {
            id: 3,
            name: "Uday",
            contact: "7128316701",
            email: "uday@gmail.com",
            address: "Mumbai",
            remarks: "Solar accessories supplier"
        }

    ];


    /* =========================================
       ACTION HANDLER
    ========================================= */

    const handleVendorAction = (action, vendor) => {

        console.log("Action:", action);
        console.log("Selected Vendor:", vendor);

        setSelectedVendor(vendor);
        setActiveAction(action);

    };


    /* =========================================
       CLOSE ACTION
    ========================================= */

    const handleCloseAction = () => {

        setActiveAction(null);
        setSelectedVendor(null);

    };


    /* =========================================
       VENDOR STATS
    ========================================= */

    const Stats = [

        {
            title: "Total Vendors",
            value: VendorData.length
        }

    ];


    /* =========================================
       TABLE COLUMNS
    ========================================= */

    const Columns = [

        {
            key: "id",
            label: "ID"
        },

        {
            key: "name",
            label: "Vendor Name"
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
            key: "remarks",
            label: "Additional Remarks"
        }

    ];


    return (

        <section className="view-vendor-page">


            {/* ================= HEADER ================= */}

            <VendorHeader
                currectPage="View Vendors"
                title="Vendor Management"
                description="View and manage all registered vendors."
                buttonType="add"
                icon={UsersRound}
            />


            {/* ================= STATS ================= */}

            <VendorStats
                stats={Stats}
            />


            {/* ================= VENDOR TABLE ================= */}

            <VendorTable
                columns={Columns}
                data={VendorData}
                onAction={handleVendorAction}
                showAction={true}
            />


            {/* =========================================
                ADD CLIENT FORM
            ========================================= */}

            {activeAction === "add_client" && (

                <AddClient
                    vendor={selectedVendor}
                    onClose={handleCloseAction}
                />

            )}


            {/* =========================================
                VIEW VENDOR DETAILS
            ========================================= */}

            {activeAction === "show_details" && (

                <ViewVendorDetails
                    vendor={selectedVendor}
                    onClose={handleCloseAction}
                />

            )}


        </section>

    );

}


export default ViewVendor;