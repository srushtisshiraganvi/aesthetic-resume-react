// src/components/ExportPDF.jsx
import React from 'react';
import { useReactToPrint } from 'react-to-print';

const ExportPDF = ({ componentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Aesthetic_Resume',
    removeAfterPrint: true,
  });

  return (
    <button onClick={handlePrint}>
      Export as PDF
    </button>
  );
};

export default ExportPDF;
