import React from 'react';
import pdf from "../../Assets/documents/MitchelSkaff2021Resume.pdf"

export default function Resume() {
  return (
    <div className="container">
      <div><br/><br/></div>
      <div class="row align-items-start">
        <div class="col">
        
        </div>
        <div class="col">
          <object
          data={pdf}
          type="application/pdf"
          width="500"
          height="678">

          <iframe src={pdf} width="500" height="678" title="resume">
          <p>This browser does not support PDF!</p>
          </iframe>
          </object>
        </div>
        
        <div class="col">
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}


