import {
    ChevronDown,
    RotateCcw,
    MapPin,
    Wrench,
    CalendarDays,
    FileText,
    Trash2
} from "lucide-react";
import { useState } from "react";
import "./TableAction.css";


function TableAction({ row }) {

    const [open, setOpen] = useState(false);


    const handleAction = (action) => {
        console.log(action, row);
        setOpen(false);
    };


    return (

        <div className="table-action-container">

            {/* ================= ACTION BUTTON ================= */}
            <button
                type="button"
                className="table-action-button"
                onClick={() => setOpen(!open)}>
                <span>
                    Action
                </span>
                <ChevronDown
                    size={15}
                    className={open ? "action-arrow-open" : ""}
                />
            </button>


            {/* ================= ACTION MENU ================= */}
            {open && (
                <div className="table-action-menu">
                    {/* Re Followup */}
                    <button
                        type="button"
                        onClick={() =>
                            handleAction("re-followup")
                        }>
                        <RotateCcw size={17} />
                        <span>
                            Re Followup
                        </span>
                    </button>

                    {/* Visit */}
                    <button
                        type="button"
                        onClick={() =>
                            handleAction("visit")
                        }>
                        <MapPin size={17} />
                        <span>
                            Visit
                        </span>
                    </button>

                    {/* Service */}
                    <button
                        type="button"
                        onClick={() =>
                            handleAction("service")
                        }>
                        <Wrench size={17} />
                        <span>
                            Service
                        </span>
                    </button>

                    {/* Schedule */}
                    <button
                        type="button"
                        onClick={() =>
                            handleAction("schedule")
                        }>
                        <CalendarDays size={17} />
                        <span>
                            Schedule
                        </span>
                    </button>

                    {/* Divider */}
                    <div className="table-action-divider"></div>

                    {/* Send Quotation */}
                    <button
                        type="button"
                        onClick={() =>
                            handleAction("quotation")
                        }>
                        <FileText size={17} />
                        <span>
                            Send Quotation
                        </span>
                    </button>

                    {/* Delete */}
                    <button
                        type="button"
                        className="table-action-delete"
                        onClick={() =>
                            handleAction("delete")
                        }>

                        <Trash2 size={17} />
                        <span>
                            Delete
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
}
export default TableAction;

