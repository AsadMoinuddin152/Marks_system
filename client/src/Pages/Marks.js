import React from "react";
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';
import '../styles/Data.css';

const Marks = () => {

    const [selectedDept, setSelectedDept] = useState();
    const [selectedSection, setSelectedSection] = useState("");
    const [selectedCIE, setSelectedCIE] = useState("");

    useEffect(() => {
        setSelectedSection("");
        setSelectedCIE("");
    }, [selectedDept]);

    useEffect(() => {
        setSelectedCIE("");
    }, [selectedSection]);

    const filteredDepartment = Data.filter(student => student.dept === selectedDept);

    let filteredStudents;
    if (selectedDept === "CSE") {
        filteredStudents = filteredDepartment.filter(student => student.section === selectedSection);
    }
    else {
        filteredStudents = filteredDepartment
    }

    return (
        <div className="marks-page">
            <h1>Marks</h1>
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

            { selectedDept || (selectedDept === "CSE" && selectedSection) ? (
                    <select value={selectedCIE} onChange={c => setSelectedCIE(c.target.value)}>
                    <option value="" hidden>select CIE</option>
                    <option value="CIE-1">CIE - 1</option>
                    <option value="CIE-2">CIE - 2</option>
                </select>
                ) : null
            }

            <tr className="headrow">
                <td>NAME</td>
                <td>DEPARTMENT</td>
                { selectedDept === "CSE" ? ( <td>SECTION</td>) : null}
                { selectedCIE === "CIE-1" ? (
                    <>
                        <td>ASSIGNMENT 1</td>
                        <td>CIE 1</td>
                        <td>TOTAL 1</td>
                    </>
                ) : selectedCIE === "CIE-2" ? (
                    <>
                        <td>ASSIGNMENT 2</td>
                        <td>CIE 2</td>
                        <td>TOTAL 2</td>
                    </>
                ) : null}
            </tr>
            {filteredStudents.map(student => (
                <tr key={student.id} className="datarow">
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    { student.section ? ( <td>{student.section}</td>) : null}
                    { selectedCIE === "CIE-1" ? (
                        <>
                            <td><input type="number" min="0" max="10" placeholder={student["A-1"]}/></td>
                            <td><input type="number" min="0" max="10" placeholder={student["CIE-1"]}/></td>
                            <td><input type="number" min="0" max="10" placeholder={student["total-1"]}/></td>
                        </>
                    ) : selectedCIE === "CIE-2" ? (
                        <>
                            <td><input type="number" min="0" max="10" placeholder={student["A-2"]} /></td>
                            <td><input type="number" min="0" max="10" placeholder={student["CIE-2"]}/></td>
                            <td><input type="number" min="0" max="10" placeholder={student["total-2"]}/></td>
                        </>
                    ) : null}
                </tr>
                ))}
        </div>
    );
};

export default Marks