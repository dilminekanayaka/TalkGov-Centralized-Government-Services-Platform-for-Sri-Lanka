import React, { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import "../styles/DocumentChecklist.css";

const checklistData = {
  "Birth Certificate Application": {
    "Identification Documents": [
      "Parent’s National Identity Card (Original & Copy)",
      "Parent’s Birth Certificate (if applicable)",
      "Application form",
    ],
    Photographs: ["Two Recent Passport-size Photographs (35mm × 45mm)"],
    "Additional Documents": ["Medical certificate (If Required)", "Payment Receipt"],
  },
  "Driver’s License Application": {
    "Identification Documents": [
      "Valid National Identity Card (Original & Copy)",
      "Previous Driver’s License (If Renewal)",
    ],
    Photographs: ["Two Recent Passport-size Photographs (35mm × 45mm)"],
    "Additional Documents": [
      "Medical Certificate",
      "Learner’s Permit (If Upgrading License)",
      "Payment Receipt",
    ],
  },
  "Passport Application": {
    "Identification Documents": [
      "Valid National Identity Card (Original & Copy)",
      "Birth Certificate (Original & Copy)",
      "Previous Passport (If Renewal)",
    ],
    Photographs: ["Two Recent Passport-size Photographs (35mm × 45mm)"],
    "Additional Documents": [
      "Proof of Residence",
      "Marriage Certificate (If Applicable)",
      "Payment Receipt",
    ],
  },
  "National Identity Card (NIC) Application": {
    "Identification Documents": [
      "Birth Certificate (Original & Copy)",
      "Parent’s NIC (If Underage)",
      "Old NIC (If Renewal)",
    ],
    Photographs: ["One Recent Passport-size Photograph (35mm × 45mm)"],
    "Additional Documents": ["Proof of Residence", "Payment Receipt"],
  },
};

export default function DocumentChecklist() {
  const [selectedChecklist, setSelectedChecklist] = useState("Passport Application");
  const [checkedItems, setCheckedItems] = useState({});

  const categories = checklistData[selectedChecklist];

  const handleCheckboxChange = (section, item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [item]: !prev[section]?.[item],
      },
    }));
  };

  // ✅ PDF Generation Function
  const downloadPDF = () => {
    const doc = new jsPDF();
    let yPos = 10;

    doc.setFontSize(18);
    doc.text(`${selectedChecklist} Checklist`, 10, yPos);
    yPos += 10;

    Object.entries(categories).forEach(([section, items]) => {
      doc.setFontSize(14);
      doc.text(section, 10, yPos);
      yPos += 8;

      doc.setFontSize(12);
      items.forEach((item) => {
        const isChecked = checkedItems[section]?.[item] ? "[x] " : "[ ] ";
        doc.text(`${isChecked} ${item}`, 12, yPos);
        yPos += 7;

        // Add new page if content exceeds
        if (yPos > 280) {
          doc.addPage();
          yPos = 10;
        }
      });
      yPos += 5;
    });

    doc.save(`${selectedChecklist.replace(/ /g, "_")}.pdf`);
  };

  return (
    <main className="main">
      <div className="main-top">
        <h2>Document Checklist</h2>
        <div>
          <button className="btn-outline" onClick={downloadPDF}>
            Download Checklist
          </button>
        </div>
      </div>

      <select
        value={selectedChecklist}
        onChange={(e) => setSelectedChecklist(e.target.value)}
      >
        {Object.keys(checklistData).map((title) => (
          <option key={title}>{title}</option>
        ))}
      </select>

      {Object.entries(categories).map(([section, items]) => (
        <div className="checklist-section" key={section}>
          <div className="section-title">{section}</div>
          <ul className="checklist">
            {items.map((item) => (
              <li key={item} className="checklist-item">
                <span>{item}</span>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={checkedItems[section]?.[item] || false}
                    onChange={() => handleCheckboxChange(section, item)}
                  />
                  <span className="checkmark"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
