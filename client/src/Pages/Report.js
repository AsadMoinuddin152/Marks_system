import React from "react";
import { useState, useEffect } from 'react';
import Data from '../temp/data.json';
import html2canvas from "html2canvas";
import '../styles/Data.css';
import '../styles/Report.css';

const Report = () => {

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

    const view = (id) => {
        document.getElementById(id).style.display = "block";
        document.getElementsByClassName("popup")[0].style.display = "flex";
    }

    const save = (id) => {
        document.getElementById(id).style.display = "block";
        document.getElementsByClassName("popup")[0].style.display = "flex";
        html2canvas(document.getElementById(id)).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = id+'_report.png';
            a.click();
            a.remove();
        })
        document.getElementById(id).style.display = "none";
        document.getElementsByClassName("popup")[0].style.display = "none";
    }

    const closepopup = () => {
        let cards = document.getElementsByClassName("cardt");
        for (let x = 0; x < cards.length; x++) {
            cards[x].style.display = "none";
        }
        document.getElementsByClassName("popup")[0].style.display = "none";
    }

    const dall = () => {
        document.getElementsByClassName("popup")[0].style.display = "flex";
        let cards = document.getElementsByClassName("cardt");
        for (let x = 0; x < cards.length; x++) {
            cards[x].style.display = "block";
            html2canvas(cards[x]).then(canvas => {
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = cards[x].id+'_report.png';
                a.click();
                a.remove();
            })
            cards[x].style.display = "none";
        }
        document.getElementsByClassName("popup")[0].style.display = "none";
    }

    return (
        <div className="report-page">
            <h1>Reports</h1>
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
            { (selectedDept || (selectedDept === "CSE" && selectedSection)) && selectedCIE ? (
                <table className="namest">
                <tr className="headrow">
                    <td>NAME</td>
                    <td>REPORT CARD</td>
                </tr>
                {filteredStudents.map(student => (
                    <tr key={student.id} className="datarow">
                        <td>{student.name}</td>
                        <button type="button" className="viewbutton" onClick={() => view("s"+student.id)}>view</button>
                        <button type="button" className="cardbutton" onClick={() => save("s"+student.id)}>save</button>
                    </tr>
                ))}
                <button type="button" className="downloadall" onClick={() => dall()}>Save All</button>
            </table>
            ) : null}
            <div className="popup" onClick={() => closepopup()}>
                {filteredStudents.map(student => (
                    <div className="cardt" id={"s"+student.id}>
                        <h1>{student.name}</h1>
                        <h2>{student.dept}</h2>
                        { student.section ? ( <p>{student.section}</p>) : null}
                        { selectedCIE === "CIE-1" ? (
                            <>
                                <p>assignment 1: {student["A-1"]}</p>
                                <p>cie 1: {student["CIE-1"]}</p>    
                                <p>total: {student["total-1"]}</p>
                            </>
                        ) : selectedCIE === "CIE-2" ? (
                            <>
                                <p>assignment 2: {student["A-2"]}</p>
                                <p>cie 2: {student["CIE-2"]}</p>
                                <p>total: {student["total-2"]}</p>
                            </>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Report