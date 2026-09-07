import {
    WalletCards,
    UserRound,
    CalendarDays,
    IndianRupee,
    ReceiptIndianRupee,
    Utensils,
    Gift,
    MinusCircle,
    HandCoins,
    FileText,
    Save,
    X
} from "lucide-react";

import {
    useState
} from "react";

import EmployeeHeader
    from "../../../Components/EmployeeManagementComponents/EmployeeModuleHeader/EmployeeHeader.jsx";

import "./AddSalary.css";


function AddSalary() {

    // ============================================================
    // FORM DATA
    // ============================================================

    const [formData, setFormData] = useState({

        employeeId: "",
        salaryMonth: "",

        netSalary: "",
        professionTax: "0",

        basic: "0.00",
        hra: "0.00",
        conveyance: "0.00",

        foodAllowance: "0.00",
        performanceIncentive: "0.00",

        advanceDeduction: "0",

        reimbursement: "0",

        remark: ""
    });


    // ============================================================
    // TEMPORARY EMPLOYEE DATA
    // ============================================================
    // This will later come from the Employee backend API.
    // ============================================================

    const employees = [

        {
            id: 1,
            name: "Anmol Lanjewar",
            designation: "Developer"
        },

        {
            id: 2,
            name: "Vithal Sontake",
            designation: "Sales Executive"
        },

        {
            id: 3,
            name: "Samyak Pravin Lingayat",
            designation: "Engineer"
        },

        {
            id: 4,
            name: "Suraj Manikrao Dabhade",
            designation: "Field Executive"
        },

        {
            id: 5,
            name: "Adesh Udesh Sonekar",
            designation: "Intern"
        },

        {
            id: 6,
            name: "Priya Sharma",
            designation: "HR Executive"
        }

    ];


    // ============================================================
    // HANDLE INPUT CHANGE
    // ============================================================

    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;


        // --------------------------------------------------------
        // NET SALARY
        // --------------------------------------------------------

        if (name === "netSalary") {

            const salary = Number(value) || 0;


            const basic =
                salary * 0.50;

            const hra =
                salary * 0.20;

            const conveyance =
                salary * 0.10;

            const foodAllowance =
                salary * 0.10;

            const performanceIncentive =
                salary * 0.10;


            setFormData((previousData) => ({

                ...previousData,

                netSalary: value,

                basic: basic.toFixed(2),

                hra: hra.toFixed(2),

                conveyance: conveyance.toFixed(2),

                foodAllowance:
                    foodAllowance.toFixed(2),

                performanceIncentive:
                    performanceIncentive.toFixed(2)

            }));


            return;

        }


        // --------------------------------------------------------
        // OTHER INPUTS
        // --------------------------------------------------------

        setFormData((previousData) => ({

            ...previousData,

            [name]: value

        }));

    };


    // ============================================================
    // FORM SUBMIT
    // ============================================================

    const handleSubmit = (e) => {

        e.preventDefault();


        console.log(
            "Salary Form Data:",
            formData
        );


        window.alert(
            "Salary saved successfully. Backend connection will be added later."
        );

    };


    // ============================================================
    // CANCEL
    // ============================================================

    const handleCancel = () => {

        window.history.back();

    };


    return (

        <section className="salary-add-page">


            {/* ====================================================
                PAGE HEADER
            ==================================================== */}

            <EmployeeHeader
               currectPage="Add Salary"
               title="Add Employee Salary"
               description="Record monthly salary details and manage employee salary calculations."
               buttonType="view"
               icon={WalletCards}/>


            {/* ====================================================
                SALARY FORM
            ==================================================== */}

            <form
                className="salary-add-form"
                onSubmit={handleSubmit}
            >


                {/* ==================================================
                    SALARY BASIC INFORMATION
                ================================================== */}

                <div className="salary-form-section">


                    <div className="salary-section-header">

                        <WalletCards size={19} />

                        <div>

                            <h3>
                                Salary Information
                            </h3>

                            <p>
                                Select employee and salary month.
                            </p>

                        </div>

                    </div>


                    <div className="salary-form-grid salary-two-column">


                        {/* EMPLOYEE */}

                        <div className="salary-form-group">

                            <label>
                                Select Employee
                            </label>

                            <div className="salary-input-with-icon">

                                <UserRound size={17} />

                                <select
                                    name="employeeId"
                                    value={formData.employeeId}
                                    onChange={handleChange}
                                    required
                                >

                                    <option value="">
                                        Select Employee
                                    </option>


                                    {employees.map(
                                        (employee) => (

                                            <option
                                                key={employee.id}
                                                value={employee.id}
                                            >

                                                {employee.name}
                                                {" — "}
                                                {employee.designation}

                                            </option>

                                        )
                                    )}

                                </select>

                            </div>

                        </div>


                        {/* SALARY MONTH */}

                        <div className="salary-form-group">

                            <label>
                                Salary Month
                            </label>

                            <div className="salary-input-with-icon">

                                <CalendarDays size={17} />

                                <input
                                    type="month"
                                    name="salaryMonth"
                                    value={formData.salaryMonth}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    SALARY CALCULATION
                ================================================== */}

                <div className="salary-form-section">


                    <div className="salary-section-header">

                        <IndianRupee size={19} />

                        <div>

                            <h3>
                                Salary Calculation
                            </h3>

                            <p>
                                Enter net salary to calculate
                                the salary components automatically.
                            </p>

                        </div>

                    </div>


                    <div className="salary-form-grid salary-two-column">


                        {/* NET SALARY */}

                        <div className="salary-form-group">

                            <label>
                                Net Salary
                            </label>

                            <div className="salary-input-with-icon">

                                <IndianRupee size={17} />

                                <input
                                    type="number"
                                    min="0"
                                    name="netSalary"
                                    value={formData.netSalary}
                                    onChange={handleChange}
                                    placeholder="Enter Net Salary"
                                    required
                                />

                            </div>

                        </div>


                        {/* PROFESSION TAX */}

                        <div className="salary-form-group">

                            <label>
                                Profession Tax
                            </label>

                            <div className="salary-input-with-icon">

                                <ReceiptIndianRupee size={17} />

                                <input
                                    type="number"
                                    min="0"
                                    name="professionTax"
                                    value={formData.professionTax}
                                    onChange={handleChange}
                                    placeholder="0"
                                />

                            </div>

                        </div>

                    </div>


                    {/* ==================================================
                        AUTO CALCULATED COMPONENTS
                    ================================================== */}

                    <div className="salary-component-grid">


                        {/* BASIC */}

                        <div className="salary-form-group">

                            <label>
                                Basic
                                <span>
                                    50%
                                </span>
                            </label>

                            <div className="salary-input-with-icon">

                                <IndianRupee size={16} />

                                <input
                                    type="number"
                                    value={formData.basic}
                                    readOnly
                                />

                            </div>

                        </div>


                        {/* HRA */}

                        <div className="salary-form-group">

                            <label>
                                HRA
                                <span>
                                    20%
                                </span>
                            </label>

                            <div className="salary-input-with-icon">

                                <IndianRupee size={16} />

                                <input
                                    type="number"
                                    value={formData.hra}
                                    readOnly
                                />

                            </div>

                        </div>


                        {/* CONVEYANCE */}

                        <div className="salary-form-group">

                            <label>
                                Conveyance
                                <span>
                                    10%
                                </span>
                            </label>

                            <div className="salary-input-with-icon">

                                <IndianRupee size={16} />

                                <input
                                    type="number"
                                    value={formData.conveyance}
                                    readOnly
                                />

                            </div>

                        </div>


                        {/* FOOD ALLOWANCE */}

                        <div className="salary-form-group">

                            <label>
                                Food Allowance
                                <span>
                                    10%
                                </span>
                            </label>

                            <div className="salary-input-with-icon">

                                <Utensils size={16} />

                                <input
                                    type="number"
                                    value={formData.foodAllowance}
                                    readOnly
                                />

                            </div>

                        </div>


                        {/* PERFORMANCE INCENTIVE */}

                        <div className="salary-form-group">

                            <label>
                                Performance Incentive
                                <span>
                                    10%
                                </span>
                            </label>

                            <div className="salary-input-with-icon">

                                <Gift size={16} />

                                <input
                                    type="number"
                                    value={
                                        formData.performanceIncentive
                                    }
                                    readOnly
                                />

                            </div>

                        </div>


                        {/* ADVANCE DEDUCTION */}

                        <div className="salary-form-group">

                            <label>
                                Advance Deduction
                            </label>

                            <div className="salary-input-with-icon">

                                <MinusCircle size={16} />

                                <input
                                    type="number"
                                    min="0"
                                    name="advanceDeduction"
                                    value={
                                        formData.advanceDeduction
                                    }
                                    onChange={handleChange}
                                    placeholder="0"
                                />

                            </div>

                        </div>

                    </div>


                    {/* ==================================================
                        REIMBURSEMENT + REMARK
                    ================================================== */}

                    <div className="salary-form-grid salary-two-column">


                        {/* REIMBURSEMENT */}

                        <div className="salary-form-group">

                            <label>
                                Reimbursement
                            </label>

                            <div className="salary-input-with-icon">

                                <HandCoins size={17} />

                                <input
                                    type="number"
                                    min="0"
                                    name="reimbursement"
                                    value={
                                        formData.reimbursement
                                    }
                                    onChange={handleChange}
                                    placeholder="0"
                                />

                            </div>

                        </div>


                        {/* REMARK */}

                        <div className="salary-form-group">

                            <label>
                                Remark
                            </label>

                            <div className="salary-input-with-icon">

                                <FileText size={17} />

                                <input
                                    type="text"
                                    name="remark"
                                    value={formData.remark}
                                    onChange={handleChange}
                                    placeholder="Add a remark"
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* ==================================================
                    SALARY SUMMARY
                ================================================== */}

                <div className="salary-summary-card">

                    <div>

                        <span>
                            Salary Structure
                        </span>

                        <strong>
                            100%
                        </strong>

                    </div>


                    <p>
                        Basic 50% + HRA 20% + Conveyance 10%
                        + Food Allowance 10% + Performance
                        Incentive 10%
                    </p>

                </div>


                {/* ==================================================
                    FORM ACTIONS
                ================================================== */}

                <div className="salary-form-actions">


                    <button
                        type="button"
                        className="salary-cancel-btn"
                        onClick={handleCancel}
                    >

                        <X size={17} />

                        Cancel

                    </button>


                    <button
                        type="submit"
                        className="salary-save-btn"
                    >

                        <Save size={17} />

                        Save Salary

                    </button>

                </div>


            </form>

        </section>

    );

}


export default AddSalary;