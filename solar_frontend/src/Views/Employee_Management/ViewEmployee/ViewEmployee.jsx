import {
    UsersRound,
    Search,
    RotateCcw
} from "lucide-react";

import {
    useState
} from "react";

import EmployeeHeader
    from "../../../Components/EmployeeManagementComponents/EmployeeModuleHeader/EmployeeHeader.jsx";


import EmployeeStat
    from "../../../Components/EmployeeManagementComponents/EmployeeModuleStats/EmployeeStat.jsx";


import EmployeeTable
    from "../../../Components/EmployeeManagementComponents/EmployeeModuleTable/EmployeeTable.jsx";

import ViewEmployeeProfile from "./../ViewEmployeeProfile/ViewEmployeeProfile.jsx";

import UpdateEmployee from "../UpdateEmployee/UpdateEmployee.jsx";
import "./ViewEmployee.css";


function ViewEmployee() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [activeAction, setActiveAction] = useState(null);

    const [employeeData] = useState([
        {
            id: 1,
            name: "Anmol Lanjewar",
            phone: "9689565027",
            designation: "Developer",
            department: "IT",
            employeeType: "Full Time",
            gender: "Male",
            email: "anmol@example.com",
            joiningDate: "2025-04-15",
            package: 450000,
            photo: null
        },

        {
            id: 2,
            name: "Vithal Sontake",
            phone: "9665994427",
            designation: "Sales Executive",
            department: "Sales",
            employeeType: "Full Time",
            gender: "Male",
            email: "vithal@example.com",
            joiningDate: "2025-05-10",
            package: 360000,
            photo: null
        },


        {
            id:3,
            name: "Samyak Pravin Lingayat",
            phone: "9881365218",
            designation: "Engineer",
            department: "Technical",
            employeeType: "Full Time",
            gender: "Male",
            email: "samyak@example.com",
            joiningDate: "2025-06-20",
            package: 420000,
            photo: null
        },


        {
            id: 4,
            name: "Suraj Manikrao Dabhade",
            phone: "7020815416",
            designation: "",
            department: "",
            employeeType: "Part Time",
            gender: "Male",
            email: "suraj@example.com",
            joiningDate: "2025-07-01",
            package: 240000,
            photo: null
        },


        {
            id: 5,
            name: "Adesh Udesh Sonekar",
            phone: "9175588739",
            designation: "",
            department: "",
            employeeType: "Intern",
            gender: "Male",
            email: "adesh@example.com",
            joiningDate: "2025-07-15",
            package: 180000,
            photo: null
        },


        {
            id: 6,
            name: "Priya Sharma",
            phone: "9876543210",
            designation: "HR Executive",
            department: "HR",
            employeeType: "Full Time",
            gender: "Female",
            email: "priya@example.com",
            joiningDate: "2025-08-01",
            package: 390000,
            photo: null
        }

    ]);


    // ============================================================
    // TABLE COLUMNS
    // ============================================================

    const columns = [

        {
            key: "serialNo",
            label: "Employee Id"
        },
        {
            key: "name",
            label: "Name"
        },
        {
            key: "phone",
            label: "Contact"
        },
        {
            key: "designation",
            label: "Designation"
        },
        {
            key: "department",
            label: "Department"
        }
    ];


    // ============================================================
    // SEARCH FILTER
    // ============================================================

    const filteredEmployees = employeeData.filter(
        (employee) => {

            const search = searchTerm
                .toLowerCase()
                .trim();


            if (!search) {

                return true;

            }


            return (

                employee.name
                    ?.toLowerCase()
                    .includes(search)

                ||

                employee.phone
                    ?.toLowerCase()
                    .includes(search)

                ||

                employee.department
                    ?.toLowerCase()
                    .includes(search)

            );

        }
    );


    // ============================================================
// EMPLOYEE ACTION HANDLER
// ============================================================

const handleEmployeeAction = (action, employee) => {

    console.log(
        "Employee Action:",
        action
    );

    console.log(
        "Selected Employee:",
        employee
    );


    // ========================================================
    // VIEW PROFILE
    // ========================================================

    if (action === "view_profile") {

    setSelectedEmployee(employee);

    setActiveAction("view_profile");

    return;
}


    // ========================================================
    // UPDATE EMPLOYEE
    // ========================================================

    if (action === "update_employee") {
        setSelectedEmployee(employee);
        setActiveAction("update_employee");
        return;
    }
  };

     // ============================================================
     // CLOSE EMPLOYEE ACTION
     // ============================================================

      const handleCloseAction = () => {
         setActiveAction(null);
         setSelectedEmployee(null);
       };


    // ============================================================
    // RESET SEARCH
    // ============================================================

    const handleReset = () => {

        setSearchTerm("");

    };


    // ============================================================
    // STATISTICS
    // ============================================================

    const stats = [

        {
            title: "Total Employees",
            value: employeeData.length
        },


        {
            title: "Full Time",
            value: employeeData.filter(
                employee =>
                    employee.employeeType === "Full Time"
            ).length
        },


        {
            title: "Part Time",
            value: employeeData.filter(
                employee =>
                    employee.employeeType === "Part Time"
            ).length
        }

    ];


    return (

        <section className="view-employee-page">


            {/* ====================================================
                PAGE HEADER
            ==================================================== */}

            <EmployeeHeader
                currectPage="View Employees"
                title="Employee Management"
                description="View and manage all registered employees."
                buttonType="add"
                icon={UsersRound}
            />


            {/* ====================================================
                EMPLOYEE STATISTICS
            ==================================================== */}

            <EmployeeStat
                stats={stats}
            />


            {/* ====================================================
                SEARCH SECTION
            ==================================================== */}

            <div className="employee-search-section">


                <div className="employee-search-box">


                    {/* ==================================================
                        SEARCH INPUT
                    ================================================== */}

                    <div className="employee-search-input-wrapper">

                        <Search
                            size={18}
                        />

                        <input
                            type="text"
                            placeholder="Search Name / Phone / Department"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }
                        />

                    </div>


                    {/* ==================================================
                        SEARCH BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        className="employee-search-btn"
                    >

                        <Search
                            size={18}
                        />

                        Search

                    </button>


                    {/* ==================================================
                        RESET BUTTON
                    ================================================== */}

                    <button
                        type="button"
                        className="employee-reset-btn"
                        onClick={handleReset}
                    >

                        <RotateCcw
                            size={17}
                        />

                        Reset

                    </button>


                </div>


                {/* ==================================================
                    RESULT COUNT
                ================================================== */}

                <div className="employee-search-result">

                    <span>
                        Total :
                    </span>

                    <strong>
                        {filteredEmployees.length}
                    </strong>

                </div>

            </div>


           {activeAction === "view_profile" ? (

    <ViewEmployeeProfile
        employee={selectedEmployee}

        onBack={handleCloseAction}

        onUploadDocument={() => {
            console.log(
                "Upload document:",
                selectedEmployee
            );
        }}

        onSalary={() => {
            console.log(
                "Salary:",
                selectedEmployee
            );
        }}
    />

) : activeAction === "update_employee" ? (

    <UpdateEmployee
        employee={selectedEmployee}

        onCancel={handleCloseAction}

        onUpdate={(updatedEmployee) => {

            console.log(
                "Employee updated:",
                updatedEmployee
            );

            window.alert(
                "Employee updated successfully."
            );

            handleCloseAction();

        }}
    />

) : (

    <EmployeeTable
        columns={columns}
        data={filteredEmployees}
        onAction={handleEmployeeAction}
        showAction={true}
    />

)}

        </section>

    );

}
export default ViewEmployee;