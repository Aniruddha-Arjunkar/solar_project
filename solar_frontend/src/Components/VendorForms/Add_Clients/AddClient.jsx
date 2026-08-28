import {
    X,
    User,
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    Save
} from "lucide-react";
import { useState } from "react";
import "./AddClient.css";


function AddClient({ vendor, onClientAdded, onClose }) {

    /* ======= FORM DATA =========== */
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        address: "",
        remarks: ""
    });

    /* ============ HANDLE INPUT ========== */
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((previousData) => ({
            ...previousData,
            [id]: value
        }));
    };

    /* ========== HANDLE SUBMIT ======== */
    const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = {
        id: Date.now(),
        vendorId: vendor.id,
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        address: formData.address,
        remarks: formData.remarks
    };
    console.log("Client Data:", newClient);
    if (onClientAdded) {
        onClientAdded(newClient);
    }
    window.alert("Client Added Successfully..");
    };
    return (
        <div className="client-form-overlay">
            
            {/* ======= CLIENT FORM CONTAINER ======== */}
            <div className="add-client-form-container">
                {/* =========================================
                    HEADER
                ========================================= */}
                <div className="client-form-header">
                    <div>
                        <h2>
                            Add Client
                        </h2>
                        <p>
                            Enter the client's information and details below.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="client-form-close"
                        onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>
                {/* =========================================
                    CLIENT DETAILS
                ========================================= */}
                <div className="client-form-section">
                    <div className="client-form-section-title">
                        <User size={19} />
                        <h3>
                            Client Details
                        </h3>
                    </div>
                    <form
                        className="client-form"
                        onSubmit={handleSubmit}>
                    <div className="client-form-grid">
                            {/* ================================
                                CLIENT NAME
                            ================================= */}
                            <div className="client-form-group">
                                <label htmlFor="name">
                                    Client Name
                                    <span>*</span>
                                </label>
                                <div className="client-input-wrapper">
                                    <User size={18} />
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter client name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required/>
                                </div>
                            </div>
                            {/* =================================
                                CONTACT
                            ================================= */}
                            <div className="client-form-group">
                                <label htmlFor="contact">
                                    Contact Number
                                    <span>*</span>
                                </label>
                                <div className="client-input-wrapper">
                                    <Phone size={18} />
                                    <input
                                        id="contact"
                                        type="tel"
                                        placeholder="Enter contact number"
                                        value={formData.contact}
                                        onChange={handleChange}
                                        required/>
                                </div>
                            </div>
                            {/* =================================
                                EMAIL
                            ================================= */}
                            <div className="client-form-group">
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <div className="client-input-wrapper">
                                    <Mail size={18} />
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email address"
                                        value={formData.email}
                                        onChange={handleChange}/>
                                </div>
                            </div>
                            {/* =================================
                                ADDRESS
                            ================================= */}
                            <div className="client-form-group">
                                <label htmlFor="address">
                                    Address
                                    <span>*</span>
                                </label>
                                <div className="client-input-wrapper">
                                    <MapPin size={18} />
                                    <input
                                        id="address"
                                        type="text"
                                        placeholder="Enter client address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required/>
                                </div>
                            </div>
                            {/* =================================
                                ADDITIONAL REMARKS
                            ================================= */}
                            <div className="client-form-group client-form-full">
                                <label htmlFor="remarks">
                                    Additional Remarks
                                </label>
                                <div className="client-textarea-wrapper">
                                    <MessageSquare size={18} />
                                    <textarea
                                        id="remarks"
                                        rows="4"
                                        placeholder="Enter additional remarks..."
                                        value={formData.remarks}
                                        onChange={handleChange}/>
                                </div>
                            </div>
                        </div>
                        {/* =========================================
                            FORM FOOTER
                        ========================================= */}
                        <div className="client-form-footer">
                            <button
                                type="button"
                                className="client-form-cancel"
                                onClick={onClose}>
                                <X size={18} />
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="client-form-save">
                                <Save size={18} />
                                Save Client
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddClient;