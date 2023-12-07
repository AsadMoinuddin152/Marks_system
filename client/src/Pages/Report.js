import React from 'react';
import Data from '../temp/data.json';
import { PDFDocument } from 'pdf-lib';

const Report = () => {
    const [file, setFile] = useState(null);
   
    React.useEffect(() => {
       writeDataToPDF();
    }, []);

    async function writeDataToPDF() {
    // Load an existing PDF
    const pdfDoc = await PDFDocument.load('/pdf.pdf');

    // Embed the Helvetica font
    const helveticaFont = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

    // Get the first page of the PDF
    const firstPage = pdfDoc.getPages()[0];

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();

    // Add each student to the PDF
    Data.forEach((student, index) => {
        const yOffset = height - (20 * (index + 1));

        // Draw the student ID on the first page
        firstPage.drawText(`ID: ${student.id}`, {
            x: 5,
            y: yOffset,
            size: 14,
            font: helveticaFont,
        });

        // Draw the student name on the first page
        firstPage.drawText(`Name: ${student.name}`, {
            x: 5,
            y: yOffset - 20,
            size: 14,
            font: helveticaFont,
        });

        // Draw the student department on the first page
        firstPage.drawText(`Department: ${student.dept}`, {
            x: 5,
            y: yOffset - 40,
            size: 14,
            font: helveticaFont,
        });
    });

    // Serialize the PDF to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

     // Create a Blob from the bytes
     const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

     // Create a local object URL for the Blob
     const pdfUrl = URL.createObjectURL(pdfBlob);
 
     // Update the file state to trigger a re-render with the new PDF URL
     setFile(pdfUrl);

    // For example, you could write these bytes to a file
    // or send them to a server, etc.
}
    React.useEffect(() => {
        writeDataToPDF();
    }, []);

    return (
        <div>
            {
                Data.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>Department: {student.dept}</td>
                    </tr>
                ))
            }
        </div>
    )
}

export default Report;
