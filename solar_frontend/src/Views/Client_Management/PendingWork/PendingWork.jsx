import { useEffect, useState } from "react";
import {
    Clock,
    LoaderCircle
} from "lucide-react";

import ClientHeader
    from "./../../../Components/Client_Module_Components/ClientHeader/ClientHeader.jsx";

import ClientStats
    from "./../../../Components/LeadStats/LeadStats.jsx";

import PendingClientTable
    from "./../../../Components/Client_Module_Components/ClientTable/ClientTable.jsx";

import "./PendingWork.css";


function PendingWork() {

    // ============================================================
    // STATE
    // ============================================================

    const [pendingWorkData, setPendingWorkData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [selectedWork, setSelectedWork] = useState(null);

    const [activeAction, setActiveAction] = useState(null);


    // ============================================================
    // TABLE COLUMNS
    // ============================================================

    const Columns = [
        {
            key: "id",
            label: "ID"
        },
        {
            key: "clientName",
            label: "Client Name"
        },
        {
            key: "workDescription",
            label: "Work Description"
        },
        {
            key: "assignedTo",
            label: "Assign To"
        },
        {
            key: "dueDate",
            label: "Due Date"
        },
        {
            key: "status",
            label: "Status"
        }
    ];


    // ============================================================
    // FETCH PENDING WORK
    // ============================================================

    const fetchPendingWork = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                "http://localhost:8080/api/pending-work"
            );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch pending work"
                );
            }

            const data = await response.json();

            /*
             * Backend PendingWork contains:
             *
             * id
             * client
             * workDescription
             * assignedTo
             * dueDate
             * status
             *
             * Because client is @JsonIgnore,
             * the backend response will not contain
             * client details.
             *
             * We will handle client name separately
             * once we finalize the response structure.
             */

            setPendingWorkData(data);

        } catch (error) {

            console.error(
                "Error fetching pending work:",
                error
            );

            setError(
                "Unable to load pending work."
            );

        } finally {

            setLoading(false);

        }
    };


    // ============================================================
    // LOAD DATA
    // ============================================================

    useEffect(() => {

        fetchPendingWork();

    }, []);


    // ============================================================
    // STATS
    // ============================================================

    const Stats = [
        {
            title: "Total Pending Work",
            value: pendingWorkData.filter(
                (work) =>
                    work.status?.toLowerCase() !== "completed"
            ).length
        }
    ];


    // ============================================================
    // ACTION HANDLER
    // ============================================================

    const handleWorkAction = (action, work) => {

        console.log(
            "Selected Action:",
            action
        );

        console.log(
            "Selected Work:",
            work
        );

        setSelectedWork(work);

        setActiveAction(action);

    };


    // ============================================================
    // LOADING
    // ============================================================

    if (loading) {

        return (
            <section className="pending-work-page">

                <ClientHeader
                    currectPage="Pending Work"
                    title="Pending Client Work"
                    description="Track and manage pending work for clients."
                    buttonType="view"
                    icon={Clock}
                />

                <div className="pending-work-loading">

                    <LoaderCircle
                        size={30}
                        className="pending-work-loader"
                    />

                    <span>
                        Loading pending work...
                    </span>

                </div>

            </section>
        );
    }


    // ============================================================
    // ERROR
    // ============================================================

    if (error) {

        return (
            <section className="pending-work-page">

                <ClientHeader
                    currectPage="Pending Work"
                    title="Pending Client Work"
                    description="Track and manage pending work for clients."
                    buttonType="view"
                    icon={Clock}
                />

                <div className="pending-work-error">
                    {error}
                </div>

            </section>
        );
    }


    // ============================================================
    // MAIN UI
    // ============================================================

    return (

        <section className="pending-work-page">

            {/* ====================================================
                HEADER
            ==================================================== */}

            <ClientHeader
                currectPage="Pending Work"
                title="Pending Client Work"
                description="Track and manage pending work for clients."
                buttonType="view"
                icon={Clock}
            />


            {/* ====================================================
                STATS
            ==================================================== */}

            <ClientStats
                stats={Stats}
            />


            {/* ====================================================
                PENDING WORK TABLE
            ==================================================== */}

            <PendingClientTable
                columns={Columns}
                data={pendingWorkData}
                onAction={handleWorkAction}
                type="pending-work"
                title="Pending Client Work"
                description="Track and manage pending work for clients."
            />

        </section>

    );
}

export default PendingWork;