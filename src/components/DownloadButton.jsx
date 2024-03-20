import React from 'react';

const FileDownloadButton = () => {
  const fileUrl = '../assets/Resume/Gurdeep_Singh_CV.pdf';
  const fileName = 'gurdeep_singh_resume.pdf'; // You can dynamically set the file name here

  const handleDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.click();
  };

  return (
    <button onClick={handleDownload} className="btn bg-dark_primary text-white">
      Download Resume
    </button>
  );
};

export default FileDownloadButton;
