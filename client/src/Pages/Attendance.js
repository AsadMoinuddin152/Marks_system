import React from 'react';
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';

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
            {filteredStudents.map(student => (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>Department: {student.dept}</td>
                    { student.section ? ( <td>Section: {student.section}</td>) : null}
                    {/* the input will modify the json datafile*/}
                    <td><input type="number" min="0" max="100" id={student.id+"attendance"}/></td>
                </tr>
            ))}
            <button type="button">save</button>
        </div>
    );
};

export default Attendance