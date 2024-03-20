import React from 'react';

const FileDownloadButton = () => {
  const fileUrl = '/src/assets/Resume/Gurdeep_Singh_CV.pdf';
  const fileName = 'Gurdeep_Singh_CV.pdf'; // You can dynamically set the file name here

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
