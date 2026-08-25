
import ModuleHeader from "../../../Components/ModulePageHeader/ModulePageHeader.jsx";
import ModuleTable from "./../../../Components/ModuleTable/ModuleTable.jsx";
import ModuleStats from "./../../../Components/LeadStats/LeadStats.jsx";
import { Calendar } from "lucide-react";
import './FutureClients.css'

function FutureClients(){

  const Stats = [
       {
        title:"Total Future Services",
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
            key: "message",
            label: "Message"
        },
        {
            key: "date",
            label: "Service Date"
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
        }
    ];

    return (
        <section className='future_clients-page'>

     {/*=============== Header ===============*/}
            <ModuleHeader
              currectPage="Future Clients"
              title="View Future Leads"
              description="Manage Future Clients"
              buttonType="view"
              icon={Calendar}/>

      {/*============== Stats ================= */}
            <ModuleStats stats={Stats}/>

      {/*=============== Tables ================  */}
            <ModuleTable columns={Columns} data={Data}/>

            
        </section>
    )
}
export default FutureClients;