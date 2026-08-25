import {
    Pencil,
    Trash2
} from "lucide-react";

import "./ModuleTable.css";

function ModuleTable({columns,data}){

    return (

        <div className="module-table-section">
            {/* =========== TABLE HEADER ============ */}
            <div className="module-table-header">
                <div>
                    <h2>
                        All Records
                    </h2>

                    <p>
                        Manage lead information and details.
                    </p>
                </div>

                <span className="lead-record-count">
                    {data.length} Records
                </span>
            </div>

            {/* ================= TABLE ================= */}
            <div className="module-table-wrapper">
                <table className="module-data-table">
                    <thead>
                        <tr>
                            {columns.map((column) => (

                                <th key={column.key}>
                                    {column.label}
                                </th>
                            ))}
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id}>
                                    {columns.map((column) => (
                                        <td key={column.key}>
                                            {item[column.key]}
                                        </td>
                                    ))}
                                    <td>
                                        <div className="module-table-action-btn">
                                            <button
                                                className="module-table-edit-btn"
                                            >
                                                <Pencil size={15} />
                                                Edit
                                            </button>

                                            <button
                                                className="module-table-delete-btn">
                                                <Trash2 size={15} />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="lead-no-data">
                                    No records found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ModuleTable;