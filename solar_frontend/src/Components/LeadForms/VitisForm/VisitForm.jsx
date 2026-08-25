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

import "./VisitForm.css";


function VisitForm({ lead, onClose }) {

    if (!lead) {
        return null;
    }

    return (

        <div className="lead-form-overlay">

            <div className="visit-form-container">

                {/* ================= HEADER ================= */}

                <div className="lead-form-header">

                    <div>

                        <h2>
                            Schedule Visit
                        </h2>

                        <p>
                            Schedule a visit for the selected lead.
                        </p>

                    </div>


                    <button
                        type="button"
                        className="lead-form-close"
                        onClick={onClose}
                    >

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

                        {/* Customer Name */}

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


                {/* ================= VISIT DETAILS ================= */}

                <div className="lead-form-section">

                    <div className="lead-form-section-title">

                        <CalendarDays size={19} />

                        <h3>
                            Visit Details
                        </h3>

                    </div>


                    <form>

                        <div className="lead-form-grid">


                            {/* ================= DATE ================= */}

                            <div className="lead-form-group">

                                <label htmlFor="visit-date">

                                    Visit Date
                                    <span>*</span>

                                </label>


                                <div className="lead-input-wrapper">

                                    <CalendarDays size={17} />

                                    <input
                                        id="visit-date"
                                        type="date"
                                        required
                                    />

                                </div>

                            </div>


                            {/* ================= TIME ================= */}

                            <div className="lead-form-group">

                                <label htmlFor="visit-time">

                                    Visit Time
                                    <span>*</span>

                                </label>


                                <div className="lead-input-wrapper">

                                    <Clock size={17} />

                                    <input
                                        id="visit-time"
                                        type="time"
                                        required
                                    />

                                </div>

                            </div>


                            {/* ================= LOCATION ================= */}

                            <div className="lead-form-group full-width">

                                <label htmlFor="visit-location">

                                    Visit Location
                                    <span>*</span>

                                </label>


                                <div className="lead-input-wrapper">

                                    <MapPin size={17} />

                                    <input
                                        id="visit-location"
                                        type="text"
                                        placeholder="Enter visit location"
                                        defaultValue={lead.address || ""}
                                        required
                                    />

                                </div>

                            </div>


                            {/* ================= REMARKS ================= */}

                            <div className="lead-form-group full-width">

                                <label htmlFor="visit-remarks">

                                    Remarks

                                </label>


                                <div className="lead-textarea-wrapper">

                                    <MessageSquare size={17} />

                                    <textarea
                                        id="visit-remarks"
                                        placeholder="Enter visit remarks..."
                                        rows="4"
                                    />

                                </div>

                            </div>

                        </div>


                        {/* ================= FOOTER ================= */}

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
                                className="lead-form-save"
                            >

                                <CalendarDays size={18} />

                                Schedule Visit

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}


export default VisitForm;