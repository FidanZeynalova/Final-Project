import React from 'react';
import { Helmet } from 'react-helmet';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../adminStatistics/AdminStatistics.css';

function AdminStatistics() {
    const monthlyStatistics = [
        { month: 'January', users: 200, recipes: 50, comments: 100 },
        { month: 'February', users: 220, recipes: 60, comments: 110 },
        { month: 'March', users: 250, recipes: 70, comments: 120 },
        { month: 'April', users: 250, recipes: 70, comments: 120 },
        { month: 'May', users: 250, recipes: 70, comments: 120 },
        { month: 'June', users: 250, recipes: 70, comments: 120 },
        { month: 'July', users: 250, recipes: 70, comments: 120 },
    ];

    return (
        <>
            <Helmet>
                <title>Admin Statistics - Half Baked Harvest</title>
            </Helmet>
            <div className="AdminStatistics">
                <div className="stats-grid">
                    <div className="chart-container">
                        <ResponsiveContainer  height={300}>
                            <BarChart data={monthlyStatistics}>
                                <XAxis dataKey="month" stroke="#8884d8" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="users" fill="#8884d8" barSize={20} />
                                <Bar dataKey="recipes" fill="#82ca9d" barSize={20} />
                                <Bar dataKey="comments" fill="#ffc658" barSize={20} />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminStatistics;
