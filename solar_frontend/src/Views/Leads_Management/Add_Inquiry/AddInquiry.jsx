import {
    List,
    UserRoundPlus,
    User,
    Phone,
    Mail,
    MapPin,
    BriefcaseBusiness,
    MessageSquare,
    CalendarDays,
    Save,
    X
} from "lucide-react";

import { NavLink } from "react-router";

import "./AddInquiry.css";


function AddInquiry() {

    return (
        <section className="add_inquiry">

            {/* ========== PAGE HEADER ========= */}

            <div className="page-top-div">

                <div className="top-div-heading-section">

                    <div className="breadcrumb">
                        Dashboard <span>/</span> Add Inquiry
                    </div>

                    <h1>
                        <UserRoundPlus size={42} strokeWidth={1.8} />
                        Add New Inquiry
                    </h1>

                    <p>
                        Create a new customer inquiry and keep track of the lead details.
                    </p>

                </div>


                <div className="top-div-button-section">

                    <NavLink
                        to="/dashboard/view-inquiry"
                        className="top-div-button"
                    >
                        <List size={22} />
                        View Inquiries
                    </NavLink>

                </div>

            </div>


            {/* ========== INQUIRY FORM ============ */}

            <div className="inquiry-form-card">

                <div className="form-card-header">

                    <div>
                        <h2>Inquiry Information</h2>

                        <p>
                            Enter the customer's information and inquiry details below.
                        </p>
                    </div>

                    <div className="form-required-text">
                        <span>*</span> Required fields
                    </div>

                </div>


                <form className="inquiry-form">


                    {/* ========== CUSTOMER DETAILS ======= */}

                    <div className="form-section">

                        <div className="form-section-title">
                            <User size={19} />
                            <h3>Customer Details</h3>
                        </div>


                        <div className="form-grid">

                            {/* Customer Name */}

                            <div className="form-group">

                                <label htmlFor="customerName">
                                    Customer Name <span>*</span>
                                </label>

                                <div className="input-wrapper">
                                    <User size={18} />

                                    <input
                                        id="customerName"
                                        type="text"
                                        placeholder="Enter customer name"
                                    />
                                </div>

                            </div>


                            {/* Mobile Number */}

                            <div className="form-group">

                                <label htmlFor="mobile">
                                    Mobile Number <span>*</span>
                                </label>

                                <div className="input-wrapper">
                                    <Phone size={18} />

                                    <input
                                        id="mobile"
                                        type="tel"
                                        placeholder="Enter mobile number"
                                    />
                                </div>

                            </div>


                            {/* Email */}

                            <div className="form-group">

                                <label htmlFor="email">
                                    Email Address
                                </label>

                                <div className="input-wrapper">
                                    <Mail size={18} />

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter email address"
                                    />
                                </div>

                            </div>


                            {/* Location */}

                            <div className="form-group">

                                <label htmlFor="location">
                                    Location <span>*</span>
                                </label>

                                <div className="input-wrapper">
                                    <MapPin size={18} />

                                    <input
                                        id="location"
                                        type="text"
                                        placeholder="Enter customer location"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ======== INQUIRY DETAILS ========= */}

                    <div className="form-section">

                        <div className="form-section-title">
                            <BriefcaseBusiness size={19} />
                            <h3>Inquiry Details</h3>
                        </div>


                        <div className="form-grid">

                            {/* Service */}

                            <div className="form-group">

                                <label htmlFor="service">
                                    Service <span>*</span>
                                </label>

                                <div className="input-wrapper select-wrapper">
                                    <BriefcaseBusiness size={18} />

                                    <select id="service">

                                        <option value="">
                                            Select service
                                        </option>

                                        <option value="solar">
                                            Solar Solutions
                                        </option>

                                        <option value="electrical">
                                            Electrical Services
                                        </option>

                                        <option value="pest-control">
                                            Pest Control
                                        </option>

                                        <option value="training">
                                            Training & Development
                                        </option>

                                    </select>

                                </div>

                            </div>


                            {/* Inquiry Date */}

                            <div className="form-group">

                                <label htmlFor="inquiryDate">
                                    Inquiry Date <span>*</span>
                                </label>

                                <div className="input-wrapper">

                                    <CalendarDays size={18} />

                                    <input
                                        id="inquiryDate"
                                        type="date"
                                    />

                                </div>

                            </div>


                            {/* Requirement */}

                            <div className="form-group form-group-full">

                                <label htmlFor="requirement">
                                    Customer Requirement <span>*</span>
                                </label>

                                <div className="textarea-wrapper">

                                    <MessageSquare size={18} />

                                    <textarea
                                        id="requirement"
                                        rows="4"
                                        placeholder="Describe the customer's requirement..."
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ======= FORM FOOTER ========= */}

                    <div className="form-footer">

                        <button
                            type="button"
                            className="cancel-button"
                        >
                            <X size={18} />
                            Cancel
                        </button>


                        <button
                            type="submit"
                            className="save-button"
                        >
                            <Save size={18} />
                            Save Inquiry
                        </button>

                    </div>

                </form>

            </div>

        </section>
    );
}


export default AddInquiry;