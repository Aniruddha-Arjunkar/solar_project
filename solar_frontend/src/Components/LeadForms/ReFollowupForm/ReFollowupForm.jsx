import {
    X,
    User,
    Phone,
    Mail,
    MapPin,
    CalendarDays,
    Clock,
    MessageSquare
} from "lucide-react";

import "./ReFollowUpForm.css";


function ReFollowUpForm({ lead, onClose }) {
    
    if (!lead) {
        return null;
    }

    return (

        <div className="lead-form-overlay">
            <div className="refollowup-form-container">
                {/* ================= HEADER ================= */}
                <div className="lead-form-header">
                    <div>
                        <h2>Re-Follow-up</h2>
                        <p>
                            Schedule a follow-up for this customer.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="lead-form-close"
                        onClick={onClose} >
                        <X size={22} />
                    </button>
                </div>

                {/* ================= CUSTOMER DETAILS ================= */}
                <div className="lead-form-section">
                    <div className="lead-form-section-title">
                        <User size={19} />
                        <h3>
                            Customer Details
                        </h3>
                    </div>

                    <div className="lead-form-grid">

                        {/* Name */}
                        <div className="lead-form-group">
                            <label>
                                Customer Name
                            </label>
                            <div className="lead-readonly-field">
                                <User size={17} />
                                <span>
                                    {lead.name}
                                </span>
                            </div>
                        </div>


                        {/* Contact */}
                        <div className="lead-form-group">
                            <label>
                                Contact Number
                            </label>

                            <div className="lead-readonly-field">
                                <Phone size={17} />
                                <span>
                                    {lead.contact}
                                </span>
                            </div>
                        </div>


                        {/* Email */}
                        <div className="lead-form-group">
                            <label>
                                Email
                            </label>

                            <div className="lead-readonly-field">
                                <Mail size={17} />
                                <span>
                                    {lead.email || "Not provided"}
                                </span>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="lead-form-group">
                            <label>
                                Address
                            </label>
                            <div className="lead-readonly-field">
                                <MapPin size={17} />
                                <span>
                                    {lead.address || "Not provided"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= FOLLOW-UP DETAILS ================= */}
                <div className="lead-form-section">
                    <div className="lead-form-section-title">
                        <CalendarDays size={19} />
                        <h3>
                            Follow-up Details
                        </h3>
                    </div>

        {/*==================== Form =====================*/}
                    <form onSubmit={(e)=>{
                      e.preventDefault();
                      window.alert("ReFollowUp is Created Successfully..")
                    }}>

                        <div className="lead-form-grid">

                            {/* Date */}
                            <div className="lead-form-group">
                                <label htmlFor="followup-date">
                                    Follow-up Date <span>*</span>
                                </label>

                                <div className="lead-input-wrapper">
                                    <CalendarDays size={17} />
                                    <input
                                        id="followup-date"
                                        type="date"
                                    />
                                </div>
                            </div>

                            {/* Time */}
                            <div className="lead-form-group">
                                <label htmlFor="followup-time">
                                    Follow-up Time
                                </label>

                                <div className="lead-input-wrapper">
                                    <Clock size={17} />
                                    <input
                                        id="followup-time"
                                        type="time" />
                                </div>
                            </div>

                            {/* Remarks */}
                            <div className="lead-form-group full-width">
                                <label htmlFor="followup-remarks">
                                    Remarks
                                </label>

                                <div className="lead-textarea-wrapper">
                                    <MessageSquare size={17} />
                                    <textarea
                                        id="followup-remarks"
                                        placeholder="Enter follow-up remarks..."
                                        rows="4"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ================= BUTTONS ================= */}

                        <div className="lead-form-footer">
                            <button
                                type="button"
                                className="lead-form-cancel"
                                onClick={onClose}
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="lead-form-save">
                                Schedule Follow-up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ReFollowUpForm;