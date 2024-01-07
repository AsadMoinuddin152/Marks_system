import React from 'react';
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';
import '../styles/Data.css';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const Download = () => {

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

    function downloadData(csvData, fileName) {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
    
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <div className="download-page">
            <h1>Download Data</h1>
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
            <button onClick={()=> downloadData(filteredStudents, selectedDept+"_"+selectedSection+"_data")}>Download</button>
            <tr className="headrow">
                <th>NAME</th>
                <th>DEPARTMENT</th>
                { selectedDept === "CSE" ? ( <th>SECTION</th>) : null}
                <th>ATTENDANCE</th>
                <th>ASSIGNMENT 1</th>
                <th>CIE 1</th>
                <th>TOTAL 1</th>
                <th>ASSIGNMENT 2</th>
                <th>CIE 2</th>
                <th>TOTAL 2</th>
            </tr>
            {filteredStudents.map(student => (
                <tr key={student.id} className='datarow'>
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    { student.section ? ( <td>{student.section}</td>) : null}
                    <td>{student.attendance}</td>
                    <td>{student['A-1']}</td>
                    <td>{student['CIE-1']}</td>
                    <td>{student['total-1']}</td>
                    <td>{student['A-2']}</td>
                    <td>{student['CIE-2']}</td>
                    <td>{student['total-2']}</td>
                </tr>
            ))}
        </div>
    );
};

export default Download