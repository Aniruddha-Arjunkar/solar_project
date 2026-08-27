import { useEffect , useState } from "react";

import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import ModuleHeader from "./../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import { FileText} from "lucide-react";


import "./Quotation.css";

function Quotation(){

   const [Data , setData] = useState([]);

   //===== Fetch Quotations from the leads Table ============
    useEffect(() => {

    fetch("http://localhost:8080/api/leads/quotations")
        .then((response) => {

            if (!response.ok) {
                throw new Error("Failed to fetch quotations");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
        })
        .catch((error) => {
            window.alert("Error fetching quotations:", error);
        });
}, []);

    const Stats = [
           {
             title:"Total Quotation Sended",
             value:Data.length
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
            key: "quotationDate",
            label: "Quotation Date"
        },
        {
            key:"pdf",
            label:"PDF"
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
                data={Data}
                showAction={false}/>
        </section>
    )
}
export default Quotation;