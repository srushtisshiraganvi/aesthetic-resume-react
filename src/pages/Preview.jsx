import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReactToPrint } from 'react-to-print';
import ExportPDF from '../components/ExportPDF';

const Preview = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const resumeRef = useRef();

  useEffect(() => {
    fetch('http://localhost:4000/user')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setData(data[data.length - 1]);
      });
  }, []);

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Aesthetic_Resume',
    removeAfterPrint: true,
  });

  if (!data) {
    return (
      <div className="no-data">
        <p>No resume data found. Please fill out the form first.</p>
        <button onClick={() => navigate('/create')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <div ref={resumeRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="resume-card"
        >
          <h1>{data.name}</h1>
          <p>{data.email} | {data.phone}</p>

          <div className="resume-section">
            <h2>🎯 Summary</h2>
            <p>{data.summary}</p>

            <h2>🎓 Education</h2>
            <p>{data.education}</p>

            <h2>💼 Experience</h2>
            <p>{data.experience}</p>

            <h2>🛠️ Skills</h2>
            <p>{data.skills}</p>
          </div>

 

        </motion.div>
      </div>

      <div className="action-buttons">
  <button onClick={() => navigate('/create')}>Edit Info</button>
  <ExportPDF componentRef={resumeRef} />
</div>
    </div>
  );
};

export default Preview;
