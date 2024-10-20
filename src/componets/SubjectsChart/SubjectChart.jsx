import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SubjectChart = () => {
    const subjectsData = [
        {
            subject: 'Math',
            assignments: 15,
            quizzes: 10,
            exams: 5,
        },
        {
            subject: 'Physics',
            assignments: 12,
            quizzes: 8,
            exams: 4,
        },
        {
            subject: 'Chemistry',
            assignments: 10,
            quizzes: 6,
            exams: 3,
        },
        {
            subject: 'Biology',
            assignments: 14,
            quizzes: 9,
            exams: 4,
        },
        {
            subject: 'Computer Science',
            assignments: 20,
            quizzes: 12,
            exams: 5,
        },
        {
            subject: 'History',
            assignments: 8,
            quizzes: 5,
            exams: 2,
        },
        {
            subject: 'Art',
            assignments: 6,
            quizzes: 3,
            exams: 1,
        },
    ];

    return (
        <div className='max-w-[1200px] mx-auto mt-10'>
            <BarChart
                width={500}
                height={300}
                data={subjectsData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="assignments" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="quizzes" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
               <Bar dataKey="assignments" barSize={20} fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default SubjectChart;