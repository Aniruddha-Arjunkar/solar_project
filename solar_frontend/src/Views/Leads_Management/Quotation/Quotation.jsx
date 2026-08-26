
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import { FileText} from "lucide-react";

import "./Quotation.css";

function Quotation(){
    const Stats = [
           {
             title:"Total Quotation Sended",
             value:0
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

    const Data = [];

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
                data={Data}
                showAction={false}/>
        </section>
    )
}
export default Quotation;