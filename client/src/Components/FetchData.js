//tried making a component for the filter

import React from 'react';
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';

const FetchData = () => {
    const [selectedDept, setSelectedDept] = useState();
    const [selectedSection, setSelectedSection] = useState("");

    useEffect(() => {
        setSelectedSection("");
    }, [selectedDept]);

    const filteredDepartment = Data.filter(student => student.dept === selectedDept);
    if (selectedDept === "CSE") {
        filteredStudents = filteredDepartment.filter(student => student.section === selectedSection);
    }
    else {
        filteredStudents = filteredDepartment
    }

    return (
        <div className="fetch-data">
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
                    <td>Section: {student.section}</td>
                </tr>
                ))}
        </div>
    )
}

export let filteredStudents

export default FetchData