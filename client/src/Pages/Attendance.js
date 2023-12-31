import React from 'react';
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';
import '../styles/Data.css';

const Attendance = () => {

    const [selectedDept, setSelectedDept] = useState();
    const [selectedSection, setSelectedSection] = useState("");

    useEffect(() => {
        setSelectedSection("");
    }, [selectedDept]);

    const filteredDepartment = Data.filter(student => student.dept === selectedDept);
    let filteredStudents
    if (selectedDept === "CSE") {
        filteredStudents = filteredDepartment.filter(student => student.section === selectedSection);
    }
    else {
        filteredStudents = filteredDepartment
    }

    return (
        <div className="attendance-page">
            <h1>Attendance</h1>
            <select value={selectedDept} onChange={d => setSelectedDept(d.target.value)}>
                <option hidden>select department</option>
                <option value="CSE">CSE</option>
                <option value="AI-ML">AI-ML</option>
                <option value="DS">DS</option>
            </select>

            { selectedDept === "CSE" ? (
                    <select value={selectedSection} onChange={s => setSelectedSection(s.target.value)}>
                        <option value="" hidden>select section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                ) : null
            }
            <tr className="headrow">
                <th>NAME</th>
                <th>DEPARTMENT</th>
                { selectedDept === "CSE" ? ( <th>SECTION</th>) : null}
                <th>ATTENDANCE</th>
            </tr>
            {filteredStudents.map(student => (
                <tr key={student.id} className='datarow'>
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    { student.section ? ( <td>{student.section}</td>) : null}
                    <td><input type="number" min="0" max="100" placeholder={student.attendance}/></td>
                </tr>
            ))}
            <button type="button">save</button>
        </div>
    );
};

export default Attendance