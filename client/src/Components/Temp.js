import React from "react";
import Data from '../temp/data.json';
import html2canvas from "html2canvas";
import '../styles/Temp.css';

const Temp = () => {

    const save = (id) => {
        let tds = document.getElementById(id).getElementsByTagName("td");
        for(let i=0; i<tds.length; i++){
            tds[i].style.display = "table-row";
        }
        html2canvas(document.getElementById(id)).then(canvas => {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = 'image.png';
            a.click();
            a.remove();
        })
        for(let i=0; i<tds.length; i++){
            tds[i].style.display = "none";
        }
    }
    

    return (
        <div className="temp-page">
            <table className="cardt">
                {Data.map(student => (
                <tr key={student.id} id={"r"+student.id}>
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    { student.section ? ( <td>{student.section}</td>) : null}
                    <button type="button" className="cardbutton" onClick={() => save("r"+student.id)}>save</button>
                </tr>
                ))}
            </table>
        </div>
    )
}

export default Temp