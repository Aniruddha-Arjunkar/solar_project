import { useState } from "react";
import {
    Home,
    Users,
    Truck,
    UserRound,
    CalendarDays,
    Wallet,
    UserCog,
    ChevronDown,
    ChevronRight,
    PanelLeftClose,
    PanelLeftOpen,
    Plus,
    Eye,
    Phone,
    Calendar,
    FileText,
    ClipboardList,
} from "lucide-react";

import "./SideBar.css";

function SideBar() {

    // Controls which dropdown is open
    // const [openMenu, setOpenMenu] = useState("lead");
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleMenu = (menuName) => {
    //     setOpenMenu(openMenu === menuName ? null : menuName);
    // };
     
    const [openMenu, setOpenMenu] = useState("lead");
    const [collapsed, setCollapsed] = useState(false);

const toggleMenu = (menuName) => {

    // If sidebar is collapsed,
    // expand it first
    if (collapsed) {
        setCollapsed(false);

        // Open the clicked menu
        setOpenMenu(menuName);

        return;
    }

    // Normal dropdown behavior
    setOpenMenu(
        openMenu === menuName ? null : menuName
    );
      };
    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

    <button
    className="sidebar-toggle"
    onClick={() => setCollapsed(!collapsed)}
    title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
>
    {collapsed
        ? <PanelLeftOpen size={30} />
        : <PanelLeftClose size={30} />
    }
</button>

            {/* ================= HEADER ================= */}
            <div className="sidebar-header">

                <div className="logo">
                    <span></span>
                </div>

                <h2>Shul Ventures</h2>
                <p>SOLAR SOLUTIONS</p>

            </div>


            {/* ================= DASHBOARD ================= */}
            <div className="menu-item active">

                <Home size={25} />

                <span>Dashboard</span>

            </div>


            {/* =================================================
                        LEAD MANAGEMENT
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    LEAD MANAGEMENT
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("lead")}
                >

                    <Users size={35} />

                    <span>Lead Management</span>

                    {openMenu === "lead"
                        ? <ChevronDown size={30} />
                        : <ChevronRight size={30} />
                    }

                </div>


                {openMenu === "lead" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Inquiry</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Inquiry</span>
                        </div>

                        <div className="submenu-item">
                            <Phone size={20} />
                            <span>Re Followup</span>
                        </div>

                        <div className="submenu-item">
                            <ClipboardList size={20} />
                            <span>Visit</span>
                        </div>

                        <div className="submenu-item">
                            <Users size={20} />
                            <span>Future Client</span>
                        </div>

                        <div className="submenu-item">
                            <Calendar size={20} />
                            <span>Schedule Client</span>
                        </div>

                        <div className="submenu-item">
                            <FileText size={20} />
                            <span>Quotations</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        VENDOR
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    VENDOR
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("vendor")}
                >

                    <Truck size={35} />

                    <span>Vendor Management</span>

                    {openMenu === "vendor"
                        ? <ChevronDown size={30} />
                        : <ChevronRight size={30} />
                    }

                </div>


                {openMenu === "vendor" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Vendor</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Vendor</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        CLIENT
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    CLIENT
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("client")}
                >

                    <Users size={35} />

                    <span>Client Management</span>

                    {openMenu === "client"
                        ? <ChevronDown size={30} />
                        : <ChevronRight size={30} />
                    }

                </div>


                {openMenu === "client" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Client</span>
                        </div>

                        <div className="submenu-item">
                            <FileText size={20} />
                            <span>GST Client</span>
                        </div>

                        <div className="submenu-item">
                            <ClipboardList size={20} />
                            <span>Pending Work</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        EMPLOYEE
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    EMPLOYEE
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("employee")}
                >

                    <UserCog size={35} />

                    <span>Employee Management</span>

                    {openMenu === "employee"
                        ? <ChevronDown size={30} />
                        : <ChevronRight size={30} />
                    }

                </div>


                {openMenu === "employee" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Employee</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Employee</span>
                        </div>

                        <div className="submenu-item">
                            <Wallet size={20} />
                            <span>Add Salary</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        ATTENDANCE
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    ATTENDANCE
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("attendance")}
                >

                    <CalendarDays size={25} />

                    <span>Attendance</span>

                    {openMenu === "attendance"
                        ? <ChevronDown size={20} />
                        : <ChevronRight size={20} />
                    }

                </div>


                {openMenu === "attendance" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Attendance</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Attendance</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        ACCOUNTS
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    ACCOUNTS
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("accounts")}
                >

                    <Wallet size={25} />

                    <span>Accounts</span>

                    {openMenu === "accounts"
                        ? <ChevronDown size={20} />
                        : <ChevronRight size={20} />
                    }

                </div>


                {openMenu === "accounts" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>Due Payment</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Payment</span>
                        </div>

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Advance</span>
                        </div>

                        <div className="submenu-item">
                            <Plus size={20} />
                            <span>Add Expenses</span>
                        </div>

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Expenses</span>
                        </div>

                        <div className="submenu-item">
                            <FileText size={20} />
                            <span>GST Invoice</span>
                        </div>

                    </div>

                )}

            </div>


            {/* =================================================
                        USERS
            ================================================== */}

            <div className="menu-section">

                <p className="section-title">
                    USERS
                </p>

                <div
                    className="menu-item dropdown-menu"
                    onClick={() => toggleMenu("users")}
                >

                    <UserRound size={25} />

                    <span>Users</span>

                    {openMenu === "users"
                        ? <ChevronDown size={20} />
                        : <ChevronRight size={20} />
                    }

                </div>


                {openMenu === "users" && (

                    <div className="submenu">

                        <div className="submenu-item">
                            <Eye size={20} />
                            <span>View Users</span>
                        </div>

                    </div>

                )}

            </div>

        </aside>
    );
}

export default SideBar;