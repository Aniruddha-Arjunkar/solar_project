import { CalendarDays, Sun, ArrowRight, TrendingUp } from "lucide-react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

import "./DashBoard.css";


function DashBoard() {

    // Current date
    const currentDate = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });


    const data = [
        {
            sr: "1",
            title: "Total Queries",
            count: 50,
            type: "total"
        },
        {
            sr: "2",
            title: "New Queries",
            count: 10,
            type: "new"
        },
        {
            sr: "3",
            title: "Resolved Queries",
            count: 40,
            type: "resolved"
        },
        {
            sr: "4",
            title: "Scheduled Queries",
            count: 10,
            type: "scheduled"
        }
    ];

    const pieData = [
    {
        name: "New Queries",
        value: 10
    },
    {
        name: "Resolved Queries",
        value: 40
    },
    {
        name: "Scheduled Queries",
        value: 10
    }
];


const queryTrendData = [
    {
        month: "Jan",
        queries: 22
    },
    {
        month: "Feb",
        queries: 30
    },
    {
        month: "Mar",
        queries: 25
    },
    {
        month: "Apr",
        queries: 38
    },
    {
        month: "May",
        queries: 32
    },
    {
        month: "Jun",
        queries: 45
    },
    {
        month: "Jul",
        queries: 41
    },
    {
        month: "Aug",
        queries: 50
    }
];


const PIE_COLORS = [
    "#14cabe",
    "#3f518c",
    "#f0a43c"
];


    return (

        <section className="main-body">

            {/* =================================================
                PAGE HEADER
            ================================================= */}

            <div className="page-header">

                <div>
                    <p className="breadcrumb">
                        Dashboard
                    </p>

                    <h1 className="page-heading">
                        Overview
                    </h1>
                </div>

            </div>


            {/* =================================================
                WELCOME BANNER
            ================================================= */}

            <div className="greet_bar">

                <div className="greet_bar_greeting">

                    <span className="welcome-label">
                        ADMIN DASHBOARD
                    </span>

                    <h1>
                        Welcome Back, Admin!
                    </h1>

                    <p>
                        You have <strong>10</strong> new inquiries
                        waiting for your attention.
                    </p>

                    <button className="check-now-btn">
                        Check Now
                        <ArrowRight size={16} />
                    </button>

                </div>


                <div className="greet_bar_image">

                    {/* Add your dashboard illustration here */}
                    <div className="welcome-illustration">
                        <TrendingUp size={75} />
                    </div>

                </div>

            </div>


            {/* =================================================
                DASHBOARD CARDS
            ================================================= */}

            <div className="cards_section">


                {/* =================================================
                    DATE / GREETING CARD
                ================================================= */}

                <div className="greet_card">

                    <div className="greet_card_top">

                        <div className="sun-icon">
                            <Sun size={25} />
                        </div>

                        <span className="greet_card_label">
                            TODAY
                        </span>

                    </div>


                    <h2>
                        Good Morning,
                        <br />
                        <span>Admin!</span>
                    </h2>


                    <div className="card-date">

                        <CalendarDays size={18} />

                        <div>
                            <span>
                                Date
                            </span>

                            <strong>
                                {currentDate}
                            </strong>
                        </div>

                    </div>

                </div>


                {/* =================================================
                    DATA CARDS
                ================================================= */}

                <div className="data_cards">

                    {
                        data.map((item) => (

                            <div
                                className={`card ${item.type}`}
                                key={item.sr}
                            >

                                <div className="card-top">

                                    <span className="card-title">
                                        {item.title}
                                    </span>

                                    <span className="card-number">
                                        {item.count}
                                    </span>

                                </div>


                                <div className="card-bottom">

                                    <span>
                                        View details
                                    </span>

                                    <ArrowRight size={15} />

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

            {/* =================================================
    ANALYTICS SECTION
================================================= */}

<div className="analytics-section">


    {/* =================================================
        QUERY DISTRIBUTION
    ================================================= */}

    <div className="chart-card">

        <div className="chart-header">

            <div>
                <h2>Query Distribution</h2>

                <p>
                    Current query status
                </p>
            </div>

            <span className="chart-period">
                This Month
            </span>

        </div>


        <div className="pie-chart-container">

            <ResponsiveContainer
                width="100%"
                height={280}
            >

                <PieChart>

                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={105}
                        paddingAngle={4}
                        dataKey="value"
                    >

                        {
                            pieData.map((entry, index) => (

                                <Cell
                                    key={`cell-${index}`}
                                    fill={PIE_COLORS[index]}
                                />

                            ))
                        }

                    </Pie>


                    <Tooltip />


                    <Legend
                        verticalAlign="bottom"
                        height={36}
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    </div>



    {/* =================================================
        QUERY TREND
    ================================================= */}

    <div className="chart-card">

        <div className="chart-header">

            <div>
                <h2>Query Overview</h2>

                <p>
                    Monthly query activity
                </p>
            </div>

            <span className="chart-period">
                2026
            </span>

        </div>


        <div className="line-chart-container">

            <ResponsiveContainer
                width="100%"
                height={280}
            >

                <LineChart
                    data={queryTrendData}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip />


                    <Line
                        type="monotone"
                        dataKey="queries"
                        stroke="#3f518c"
                        strokeWidth={3}
                        dot={{
                            r: 4
                        }}
                        activeDot={{
                            r: 6
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    </div>

</div>

        </section>
    );
}


export default DashBoard;