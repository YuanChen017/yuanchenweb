import React from "react";
import FileViewer from "react-file-viewer";

const Resume = () => {
  return (
    <div>
      <div className="resume">
        <FileViewer fileType={"docx"} filePath={"./resume.docx"} />
      </div>
    </div>
  );
};
export default Resume;
