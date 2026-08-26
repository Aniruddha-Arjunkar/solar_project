import {
    X,
    User,
    Phone,
    Mail,
    MapPin,
    Wrench,
    CalendarDays,
    Clock,
    MessageSquare
} from "lucide-react";

import "./ServiceForm.css";

function ServiceForm({ lead, onClose }) {
    if (!lead) {
        return null;
    }

    return (

        <div className="service-form-overlay">
            <div className="service-form-container">
                {/* ================= HEADER ================= */}
                <div className="service-form-header">
                    <div>
                        <h2>
                            Schedule Solar Service
                        </h2>
                        <p>
                            Create a service request for the selected lead.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="service-form-close"
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* ================= CUSTOMER DETAILS ================= */}
                <div className="service-form-section">
                    <div className="service-form-section-title">
                        <User size={19} />
                        <h3>
                            Customer Details
                        </h3>
                    </div>
                    <div className="service-form-grid">

                        {/* Customer Name */}
                        <div className="service-form-group">
                            <label>
                                Customer Name
                            </label>
                            <div className="service-readonly-field">
                                <User size={17} />
                                <span>
                                    {lead.name}
                                </span>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="service-form-group">
                            <label>
                                Contact Number
                            </label>
                            <div className="service-readonly-field">
                                <Phone size={17} />
                                <span>
                                    {lead.contact}
                                </span>
                            </div>
                        </div>

                        {/* Email */}

                        <div className="service-form-group">

                            <label>
                                Email
                            </label>

                            <div className="service-readonly-field">

                                <Mail size={17} />

                                <span>
                                    {lead.email || "Not provided"}
                                </span>

                            </div>

                        </div>


                        {/* Address */}

                        <div className="service-form-group">

                            <label>
                                Address
                            </label>

                            <div className="service-readonly-field">

                                <MapPin size={17} />

                                <span>
                                    {lead.address || "Not provided"}
                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= SERVICE DETAILS ================= */}

                <div className="service-form-section">

                    <div className="service-form-section-title">

                        <Wrench size={19} />

                        <h3>
                            Service Details
                        </h3>

                    </div>


                    <form>

                        <div className="service-form-grid">

                            {/* Service Type */}

                            <div className="service-form-group">

                                <label htmlFor="service-type">

                                    Service Type
                                    <span>*</span>

                                </label>

                                <div className="service-input-wrapper">

                                    <Wrench size={17} />

                                    <select
                                        id="service-type"
                                        required
                                    >

                                        <option value="">
                                            Select service
                                        </option>

                                        <option value="installation">
                                            Solar Panel Installation
                                        </option>

                                        <option value="maintenance">
                                            Solar System Maintenance
                                        </option>

                                        <option value="repair">
                                            Solar System Repair
                                        </option>

                                        <option value="inspection">
                                            Solar System Inspection
                                        </option>

                                        <option value="consultation">
                                            Solar Consultation
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* Preferred Date */}

                            <div className="service-form-group">

                                <label htmlFor="service-date">

                                    Service Date
                                    <span>*</span>

                                </label>

                                <div className="service-input-wrapper">

                                    <CalendarDays size={17} />

                                    <input
                                        id="service-date"
                                        type="date"
                                        required
                                    />

                                </div>

                            </div>


                            {/* Preferred Time */}

                            <div className="service-form-group">

                                <label htmlFor="service-time">

                                    Preferred Time
                                </label>

                                <div className="service-input-wrapper">

                                    <Clock size={17} />

                                    <input
                                        id="service-time"
                                        type="time"
                                    />

                                </div>

                            </div>


                            {/* Requirement */}

                            <div className="service-form-group">

                                <label htmlFor="service-requirement">

                                    Service Requirement
                                    <span>*</span>

                                </label>

                                <div className="service-input-wrapper">

                                    <MessageSquare size={17} />

                                    <input
                                        id="service-requirement"
                                        type="text"
                                        placeholder="Enter service requirement"
                                        required
                                    />

                                </div>

                            </div>


                            {/* Remarks */}

                            <div className="service-form-group full-width">

                                <label htmlFor="service-remarks">

                                    Remarks

                                </label>

                                <div className="service-textarea-wrapper">

                                    <MessageSquare size={17} />

                                    <textarea
                                        id="service-remarks"
                                        placeholder="Enter service remarks..."
                                        rows="4"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* ================= FOOTER ================= */}
                        <div className="service-form-footer">

                            <button
                                type="button"
                                className="service-form-cancel"
                                onClick={onClose}>
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="service-form-save">
                                <Wrench size={17} />
                                Schedule Service
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    );
}


export default ServiceForm;