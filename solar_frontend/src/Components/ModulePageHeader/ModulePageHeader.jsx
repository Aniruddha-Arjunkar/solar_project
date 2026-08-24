import {
    Plus,
    List
} from "lucide-react";

import { useNavigate } from "react-router";

import "./LeadPageHeader.css";


function LeadPageHeader({
    breadcrumb,
    title,
    description,
    buttonType = "view"
}) {

    const navigate = useNavigate();


    const handleButtonClick = () => {

        if (buttonType === "add") {

            navigate("/dashboard/add-inquiry");

        } else {

            navigate("/dashboard/view-inquiry");

        }

    };


    return (

        <div className="lead-page-header">

            {/* ================= LEFT ================= */}

            <div className="lead-page-heading">

                <div className="lead-breadcrumb">

                    Dashboard
                    <span>/</span>
                    {breadcrumb}

                </div>


                <h1>
                    {title}
                </h1>


                <p>
                    {description}
                </p>

            </div>


            {/* ================= RIGHT ================= */}

            <div className="lead-page-header-button">

                {buttonType === "add" ? (

                    <button
                        className="lead-header-btn"
                        onClick={handleButtonClick}
                    >

                        <Plus size={19} />

                        Add Lead

                    </button>

                ) : (

                    <button
                        className="lead-header-btn"
                        onClick={handleButtonClick}
                    >

                        <List size={19} />

                        View Inquiries

                    </button>

                )}

            </div>

        </div>
    );
}


export default LeadPageHeader;