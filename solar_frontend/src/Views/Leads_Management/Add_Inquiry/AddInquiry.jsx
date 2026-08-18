import { List } from "lucide-react";

import "./AddInquiry.css"

function AddInquiry(){
    return(
        <section className="add_inquiry">
            <div className="page-top-div">
              <div className="top-div-headind-section">
               <h3>Dashboard / Add Inquiry</h3>
               <h1>Add New Inquiry</h1>
              </div>
              <div className="top-div-button-section">
                 <botton className='top-div-button'>
                    <List size={25}/>
                    View Inquiry</botton>
              </div>
            </div>

            
        </section>
    )
}
export default AddInquiry;