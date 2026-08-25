
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import { FileText} from "lucide-react";

import "./Quotation.css";

function Quotation(){
    const Stats = [
           {
             title:"Total Quotation Sended",
             value:3
           }
    ];

    const Columns =[
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
            key: "date",
            label: "Quotation Date"
        },
        {
            key:"pdf",
            label:"PDF"
        }
    ];

    const Data = [

        {
            id: 1,
            name: "Sumit",
            contact: "7889455612",
            email: "sumit@gmail.com",
            date: "24 Aug 2026",
            pdf:""
        },

        {
            id: 2,
            name: "Aniket Warhate",
            contact: "7845269856",
            email: "aniket@gmail.com",
            date: "24 Aug 2026",
            pdf:""
        },
        {
            id: 3,
            name: "Uday",
            contact: "7128316701",
            email: "uday@gmail.com",
            date: "23 Aug 2026",
            pdf:""
        }

    ];

    return (
        <section className="quotation">
             {/* ================= HEADER ================= */}
              <ModuleHeader
                currectPage="Quotations"
                title="Quotation Management"
                description="View and manage quotations sent to customers."
                buttonType="view"
                icon={FileText}/>

            {/* ================= STATS ================= */}
            <ModuleStats
                stats={Stats}
            />

            {/* ================= TABLE ================= */}
            <ModuleTable
                columns={Columns}
                data={Data}/>
        </section>
    )
}
export default Quotation;