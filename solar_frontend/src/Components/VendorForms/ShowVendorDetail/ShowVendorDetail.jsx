import {
    X,
    User,
    Phone,
    Mail,
    MapPin,
    MessageSquare,
    UsersRound
} from "lucide-react";
import "./ShowVendorDetail.css";


function ShowVendorDetail({ vendor, clients = [], onClose }) {
    if (!vendor) {
        return null;
    }
    return (
        <div className="vendor-details-overlay">
            {/* =========================================
                DETAILS CONTAINER
            ========================================= */}
            <div className="show-vendor-details-container">
                {/* =========================================
                    HEADER
                ========================================= */}
                <div className="show-vendor-details-header">
                    <div>
                        <h2>
                            Vendor Details
                        </h2>
                        <p>
                            View vendor information and associated clients.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="show-vendor-details-close"
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>
                </div>
                {/* =========================================
                    VENDOR INFORMATION
                ========================================= */}
                <div className="show-vendor-details-section">
                    <div className="show-vendor-section-title">
                        <User size={19} />
                        <h3>
                            Vendor Information
                        </h3>
                    </div>
                    <div className="show-vendor-info-grid">
                        {/* Vendor Name */}
                        <div className="show-vendor-info-group">
                            <label>
                                Vendor Name
                            </label>
                            <div className="show-vendor-readonly-field">
                                <User size={17} />
                                <span>
                                    {vendor.name || "Not provided"}
                                </span>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="show-vendor-info-group">
                            <label>
                                Contact Number
                            </label>
                            <div className="show-vendor-readonly-field">
                                <Phone size={17} />
                                <span>
                                    {vendor.contact || "Not provided"}
                                </span>
                            </div>
                        </div>
                        {/* Email */}
                        <div className="show-vendor-info-group">
                            <label>
                                Email Address
                            </label>
                            <div className="show-vendor-readonly-field">
                                <Mail size={17} />
                                <span>
                                    {vendor.email || "Not provided"}
                                </span>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="show-vendor-info-group">
                            <label>
                                Address
                            </label>
                            <div className="show-vendor-readonly-field">
                                <MapPin size={17} />
                                <span>
                                    {vendor.address || "Not provided"}
                                </span>
                            </div>
                        </div>
                        {/* Remarks */}
                        <div className="show-vendor-info-group show-vendor-full-width">
                            <label>
                                Additional Remarks
                            </label>
                            <div className="show-vendor-remarks-field">
                                <MessageSquare size={17} />
                                <span>
                                    {vendor.remarks || "No remarks provided"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =========================================
                    CLIENT SECTION
                ========================================= */}
                <div className="show-vendor-details-section">
                    <div className="show-vendor-section-title">
                        <UsersRound size={19} />
                        <h3>
                            Clients Added by This Vendor
                        </h3>
                        <span className="show-vendor-client-count">
                            {clients.length}
                        </span>
                    </div>
                    {/* =====================================
                        NO CLIENT
                    ===================================== */}
                    {clients.length === 0 ? (
                        <div className="show-vendor-no-client">
                            <UsersRound size={35} />
                            <h4>
                                No Clients Added
                            </h4>
                            <p>
                                This vendor has not added any clients yet.
                            </p>
                        </div>
                    ) : (
                        /* =================================
                           CLIENT LIST
                        ================================= */
                        <div className="show-vendor-client-list">
                            {clients.map((client) => (
                                <div
                                    className="show-vendor-client-card"
                                    key={client.id}>
                                    {/* Client Header */}
                                    <div className="show-vendor-client-card-header">
                                        <div className="show-vendor-client-name">

                                            <div className="show-vendor-client-icon">
                                                <User size={25} />
                                            </div>
                                            <div>
                                                <h4>
                                                    {client.name}
                                                </h4>
                                                <span>
                                                    Client #{client.id}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Client Information */}
                                    <div className="show-vendor-client-info">
                                        {/* Contact */}
                                        <div>
                                            <Phone size={22} />
                                            <span>
                                                {client.contact || "Not provided"}
                                            </span>
                                        </div>
                                        {/* Email */}
                                        <div>
                                            <Mail size={22} />
                                            <span>
                                                {client.email || "Not provided"}
                                            </span>
                                        </div>
                                        {/* Address */}
                                        <div>
                                            <MapPin size={22} />
                                            <span>
                                                {client.address || "Not provided"}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Client Remarks */}
                                    {client.remarks && (
                                        <div className="show-vendor-client-remarks">
                                            <MessageSquare size={22} />
                                            <span>
                                                {client.remarks}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* =========================================
                    FOOTER
                ========================================= */}
                <div className="show-vendor-details-footer">
                    <button
                        type="button"
                        className="show-vendor-details-close-btn"
                        onClick={onClose}>
                        <X size={22} />
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ShowVendorDetail;