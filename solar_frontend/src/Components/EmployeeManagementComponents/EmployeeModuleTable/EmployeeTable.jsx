import {
    UserRound
} from "lucide-react";

import EmployeeAction
    from "./../EmployeeModuleActionBtn/EmployeeAction.jsx";

import "./EmployeeTable.css";


function EmployeeTable({
    columns,
    data,
    onAction,
    showAction = true
}) {


    return (

        <div className="employee-table-section">


            {/* ====================================================
                TABLE HEADER
            ==================================================== */}

            <div className="employee-table-header">

                <div>

                    <h2>
                        All Employees
                    </h2>

                    <p>
                        Manage employee information and details.
                    </p>

                </div>


                <span className="employee-record-count">

                    {data.length} Records

                </span>

            </div>


            {/* ====================================================
                TABLE WRAPPER
            ==================================================== */}

            <div className="employee-table-wrapper">


                <table className="employee-data-table">


                    {/* ==================================================
                        TABLE HEAD
                    ================================================== */}

                    <thead>

                        <tr>

                            {columns.map((column) => (

                                <th
                                    key={column.key}
                                >
                                    {column.label}
                                </th>

                            ))}


                            {showAction && (

                                <th>
                                    Action
                                </th>

                            )}

                        </tr>

                    </thead>


                    {/* ==================================================
                        TABLE BODY
                    ================================================== */}

                    <tbody>


                        {data.length > 0 ? (

                            data.map((employee, index) => (

                                <tr
                                    key={employee.id}
                                >


                                    {columns.map((column) => (

                                        <td
                                            key={column.key}
                                        >


                                            {/* ==================================
                                                SERIAL NUMBER
                                            ================================== */}

                                            {column.key === "serialNo" ? (

                                                index + 1

                                            ) : column.key === "photo" ? (


                                                /* ==================================
                                                    EMPLOYEE PHOTO
                                                ================================== */

                                                <div className="employee-photo-wrapper">

                                                    {employee.photo ? (

                                                        <img
                                                            src={employee.photo}
                                                            alt={employee.name}
                                                            className="employee-photo"
                                                        />

                                                    ) : (

                                                        <div className="employee-photo-placeholder">

                                                            <UserRound
                                                                size={24}
                                                            />

                                                        </div>

                                                    )}

                                                </div>


                                            ) : column.key === "name" ? (


                                                /* ==================================
                                                    EMPLOYEE NAME
                                                ================================== */

                                                <div className="employee-name-cell">

                                                    <strong>
                                                        {employee.name}
                                                    </strong>

                                                </div>


                                            ) : column.key === "phone" ? (


                                                /* ==================================
                                                    PHONE
                                                ================================== */

                                                <span className="employee-phone">

                                                    {employee.phone || "N/A"}

                                                </span>


                                            ) : column.key === "designation" ? (


                                                /* ==================================
                                                    DESIGNATION
                                                ================================== */

                                                <span
                                                    className={
                                                        employee.designation
                                                            ? "employee-designation"
                                                            : "employee-na"
                                                    }
                                                >

                                                    {employee.designation || "N/A"}

                                                </span>


                                            ) : column.key === "department" ? (


                                                /* ==================================
                                                    DEPARTMENT
                                                ================================== */

                                                <span
                                                    className={
                                                        employee.department
                                                            ? "employee-department"
                                                            : "employee-na"
                                                    }
                                                >

                                                    {employee.department || "N/A"}

                                                </span>


                                            ) : (

                                                employee[column.key] || "N/A"

                                            )}

                                        </td>

                                    ))}


                                    {/* ==================================================
                                        ACTION
                                    ================================================== */}

                                    {showAction && (

                                        <td>

                                            <div className="employee-table-action-btn">

                                                <EmployeeAction
                                                    row={employee}
                                                    onAction={onAction}
                                                />

                                            </div>

                                        </td>

                                    )}

                                </tr>

                            ))

                        ) : (


                            /* ==================================================
                                NO DATA
                            ================================================== */

                            <tr>

                                <td
                                    colSpan={
                                        showAction
                                            ? columns.length + 1
                                            : columns.length
                                    }
                                    className="employee-no-data"
                                >

                                    No employees found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );

}


export default EmployeeTable;