import VendorHeader from "./../../../Components/Vendor_Module_Components/VendorHeader/VendorHeader.jsx";


import { 
    UserRoundPlus,
    User, 
    Phone, 
    Mail, 
    MapPin, 
    MessageSquare, 
    Save, 
    X, 
    Store 
} from "lucide-react";
import "./AddVendor.css"

function AddVendor(){

    const handleSubmit = (event) =>
         { event.preventDefault(); 
            // Backend API will be added here later 
            console.log("Vendor form submitted"); 
        }; 

    const handleCancel = () => { 
        // Add navigation logic later 
        console.log("Vendor form cancelled");
    };

    return (
        <section className="add-vendor-page">
            <VendorHeader
            currectPage="Add Vendor"
                title="Add New Vendor"
                description="Create a new Vendor and Keep Track of it."
                buttonType="view"
                icon={UserRoundPlus}/>

            {/* ================= VENDOR FORM CARD ================= */} 
            <div className="vendor-form-card"> 
                {/* ================= CARD HEADER ================= */}
                 <div className="vendor-form-card-header"> 
                    <div> 
                        <h2> Vendor Information </h2> 
                        <p> Enter the vendor's information and details below. </p> 
                    </div> 
                    <div className="vendor-form-required-text"> 
                        <span>*</span> Required fields 
                    </div>
                    </div> 
                {/* ================= FORM ================= */} 
                <form className="vendor-form" onSubmit={handleSubmit}> 
                    {/* ================= VENDOR DETAILS ================= */} 
                    <div className="vendor-form-section"> 
                        <div className="vendor-form-section-title"> 
                            <Store size={19} /> 
                            <h3> Vendor Details </h3> 
                            </div> 
                            <div className="vendor-form-grid"> 
                                {/* ================= VENDOR NAME ================= */} 
                                <div className="vendor-form-group"> 
                                    <label htmlFor="vendorName"> 
                                        Vendor Name 
                                        <span>*</span> 
                                        </label> 
                                        <div className="vendor-input-wrapper"> 
                                            <User size={18} /> 
                                            <input id="vendorName" name="vendorName" type="text" placeholder="Enter vendor name" required />
                                             </div> 
                                             </div> 
                                             {/* ================= CONTACT ================= */} 
                                             <div className="vendor-form-group"> 
                                                <label htmlFor="contact"> Contact 
                                                    <span>*</span> 
                                                    </label> 
                                                    <div className="vendor-input-wrapper"> 
                                                        <Phone size={18} /> 
                                                        <input id="contact" name="contact" type="tel" placeholder="Enter contact number" required />
                                                         </div> 
                                                         </div>
                                                          {/* ================= EMAIL ================= */}
                                                           <div className="vendor-form-group"> 
                                                            <label htmlFor="email"> Email Address </label> 
                                                            <div className="vendor-input-wrapper">
                                                                 <Mail size={18} /> 
                                                                 <input id="email" name="email" type="email" placeholder="Enter vendor email address" /> 
                                                                 </div> 
                                                                 </div> 
                                                                 {/* ================= ADDRESS ================= */} 
                                                                 <div className="vendor-form-group"> 
                                                                    <label htmlFor="address"> Address 
                                                                        <span>*</span>
                                                                         </label>
                                                                          <div className="vendor-input-wrapper">
                                                                             <MapPin size={18} /> 
                                                                             <input id="address" name="address" type="text" placeholder="Enter vendor address" required /> 
                                                                             </div> 
                                                                             </div>
                                                                              </div>
                                                                               </div> 
                                                                               {/* ================= ADDITIONAL INFORMATION ================= */}
                                                                                <div className="vendor-form-section"> 
                                                                                    <div className="vendor-form-section-title"> 
                                                                                        <MessageSquare size={19} /> 
                                                                                        <h3> Additional Information </h3> 
                                                                                        </div> 
                                                                                        <div className="vendor-form-grid"> 
                                                                                            {/* ================= REMARKS ================= */} 
                                                                                            <div className="vendor-form-group vendor-form-group-full"> 
                                                                                                <label htmlFor="remarks"> 
                                                                                                    Additional Remarks 
                                                                                                    </label>
                                                                                                     <div className="vendor-textarea-wrapper">
                                                                                                         <MessageSquare size={18} /> 
                                                                                                         <textarea id="remarks" name="remarks" rows="4" placeholder="Enter any additional remarks about the vendor..." /> 
                                                                                                         </div> 
                                                                                                         </div> 
                                                                                                         </div> 
                                                                                                         </div> 
                                                                                                         {/* ================= FORM FOOTER ================= */} 
                                                                                                         <div className="vendor-form-footer"> {/* CANCEL */} 
                                                                                                            <button type="button" className="vendor-cancel-button" onClick={handleCancel} > 
                                                                                                                <X size={18} /> 
                                                                                                                Cancel 
                                                                                                                </button>
                                                                                                                 {/* SAVE */} 
                                                                                                                 <button type="submit" className="vendor-save-button" >
                                                                                                                     <Save size={18} />
                                                                                                                      Save Vendor 
                                                                                                                      </button>
                                                                                                                       </div> 
                                                                                                                       </form> 
                                                                                                                       </div>
        </section>
    )
}
export default AddVendor;