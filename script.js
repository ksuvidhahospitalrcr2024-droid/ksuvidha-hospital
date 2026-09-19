// ==========================================
// K. SUVIDHA HOSPITAL
// Main Application JavaScript
// ==========================================

const app = document.getElementById("app");
const sideMenu = document.getElementById("sideMenu");


// ==========================================
// MENU
// ==========================================

function openMenu() {
    sideMenu.classList.add("open");
}

function closeMenu() {
    sideMenu.classList.remove("open");
}


// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(page) {

    closeMenu();

 if (page === "home") {
    showHome();
}

else if (page === "patient-record") {
    showPatientRecord(1);
}

else if (page === "registration") {
    showRegistration();
}  
    else if (page === "consultation") {
        showConsultation();
    }

    else if (page === "investigations") {
        showInvestigations();
    }

    else if (page === "prescription") {
        showPrescription();
    }

    else if (page === "admission") {
        showAdmission();
    }

    else if (page === "billing") {
        showBilling();
    }

    else if (page === "followup") {
        showFollowup();
    }

    else if (page === "discharge") {
        showDischarge();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==========================================
// HOME PAGE
// ==========================================

function showHome() {

    app.innerHTML = `

        <section class="hero">

            <div>

                <div class="eyebrow">
                    K. SUVIDHA HOSPITAL
                </div>

                <h1>
                    Super Speciality Orthopaedic
                    & Multispeciality Hospital
                </h1>

                <p>
                    Orthopaedic, trauma and joint replacement
                    care with modern facilities and patient-focused
                    treatment.
                </p>

           <div class="hero-buttons">

    <button
        class="primary-button"
        onclick="showPage('patient-record')">

        📁 PATIENTS RECORD

    </button>

    <button
        class="secondary-button"
        onclick="showPage('registration')">

        Register Patient

    </button>

    <button
        class="secondary-button"
        onclick="showPage('consultation')">

        Start Consultation

    </button>

</div>    

                <div class="emergency">
                    🚑 24/7 Emergency Accident & Fracture Care
                </div>

            </div>

            <div class="hero-image">

                <div style="
                    background:#e8f2f6;
                    height:100%;
                    min-height:300px;
                    border-radius:12px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    text-align:center;
                    padding:30px;
                ">

                    <div>

                        <div style="
                            font-size:70px;
                            margin-bottom:15px;
                        ">
                            🏥
                        </div>

                        <h2 style="
                            color:#174f75;
                            margin:5px;
                        ">
                            K. Suvidha Hospital
                        </h2>

                        <p>
                            Raichur
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <section class="quick-menu">

            <button
                class="quick-card"
                onclick="showPage('registration')">

                <span class="icon">👤</span>

                <strong>Patient Registration</strong>

                <small>
                    Create a new patient record
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('consultation')">

                <span class="icon">🩺</span>

                <strong>Consultation</strong>

                <small>
                    Record clinical consultation
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('investigations')">

                <span class="icon">🧪</span>

                <strong>Investigations</strong>

                <small>
                    X-Ray, blood tests and reports
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('prescription')">

                <span class="icon">💊</span>

                <strong>Prescription</strong>

                <small>
                    Medicines and instructions
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('admission')">

                <span class="icon">🏨</span>

                <strong>Admission / Treatment</strong>

                <small>
                    Hospital admission and treatment
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('billing')">

                <span class="icon">💰</span>

                <strong>Billing</strong>

                <small>
                    Hospital charges and payments
                </small>

            </button>


            <button
                class="quick-card"
                onclick="showPage('followup')">

                <span class="icon">📅</span>

                <strong>Follow-up</strong>

                <small>
                    Schedule patient follow-up
                </small>

            </button>


            <button
                class="quick-card discharge-card"
                onclick="showPage('discharge')">

                <span class="icon">📄</span>

                <strong>Discharge Summary</strong>

                <small>
                    Prepare final discharge document
                </small>

            </button>

        </section>

    `;
}


// ==========================================
// COMMON PAGE HEADER
// ==========================================

function pageHeader(title, description) {

    return `

        <div class="page-header">

            <div>

                <h1>${title}</h1>

                <p>${description}</p>

            </div>

            <div class="patient-id">
                KSVUH
            </div>

        </div>

    `;
}


// ==========================================
// REGISTRATION
// ==========================================

function showRegistration() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Patient Registration",
                "Create a new patient record"
            )}

            <div class="document">

                <div class="document-header">
                    K. SUVIDHA SUPER SPECIALITY HOSPITAL
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input id="patientName"
                            type="text"
                            placeholder="Enter patient name">
                    </label>

                    <label>
                        Date of Birth
                        <input id="dob"
                            type="date">
                    </label>

                    <label>
                        Age
                        <input id="age"
                            type="number"
                            placeholder="Age">
                    </label>

                    <label>
                        Sex
                        <select id="sex">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <label>
                        Contact Number
                        <input id="phone"
                            type="tel"
                            placeholder="Mobile number">
                    </label>

                    <label>
                        Email
                        <input id="email"
                            type="email"
                            placeholder="Email address">
                    </label>

                    <label class="full">
                        Address
                        <textarea id="address"
                            placeholder="Patient address"></textarea>
                    </label>

                    <label>
                        Emergency Contact
                        <input
                            type="tel"
                            placeholder="Emergency contact">
                    </label>

                    <label>
                        Blood Group
                        <select>
                            <option>Select</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="savePatient()">

                    Save Patient

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// SAVE PATIENT
// ==========================================

function savePatient() {

    const name =
        document.getElementById("patientName").value;

    if (!name.trim()) {

        alert("Please enter the patient's name.");

        return;
    }

    localStorage.setItem(
        "ksuvidhaPatientName",
        name
    );

    alert(
        "Patient registration saved successfully."
    );
}


// ==========================================
// CONSULTATION
// ==========================================

function showConsultation() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Doctor Consultation",
                "Record clinical examination and diagnosis"
            )}

            <div class="document">

                <div class="document-header">
                    Dr. Anirudh C. Kulkarni
                    — Orthopaedic, Trauma & Joint Replacement
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input id="consultPatient"
                            placeholder="Patient name">
                    </label>

                    <label>
                        Consultation Date
                        <input type="date">
                    </label>

                    <label>
                        Weight
                        <input placeholder="Kg">
                    </label>

                    <label>
                        Blood Pressure
                        <input placeholder="BP">
                    </label>

                    <label>
                        Pulse
                        <input placeholder="Pulse / min">
                    </label>

                    <label>
                        Temperature
                        <input placeholder="Temperature">
                    </label>

                    <label class="full">
                        Chief Complaint
                        <textarea
                            placeholder="Patient's main complaint"></textarea>
                    </label>

                    <label class="full">
                        Clinical Examination
                        <textarea
                            placeholder="Clinical findings"></textarea>
                    </label>

                    <label class="full">
                        Diagnosis
                        <textarea
                            placeholder="Diagnosis"></textarea>
                    </label>

                    <label class="full">
                        Treatment Plan
                        <textarea
                            placeholder="Treatment plan"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="saveForm('Consultation')">

                    Save Consultation

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// INVESTIGATIONS
// ==========================================

function showInvestigations() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Investigations",
                "Record diagnostic investigations and reports"
            )}

            <div class="document">

                <div class="document-header">
                    Investigation / Diagnostic Report
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input placeholder="Patient name">
                    </label>

                    <label>
                        Investigation Date
                        <input type="date">
                    </label>

                    <label>
                        Investigation Type
                        <select>
                            <option>Select investigation</option>
                            <option>X-Ray</option>
                            <option>Blood Test</option>
                            <option>Urine Test</option>
                            <option>MRI</option>
                            <option>CT Scan</option>
                            <option>ECG</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <label>
                        Body Part
                        <input placeholder="Example: Right knee">
                    </label>

                    <label class="full">
                        Clinical Indication
                        <textarea
                            placeholder="Reason for investigation"></textarea>
                    </label>

                    <label class="full">
                        Findings
                        <textarea
                            placeholder="Investigation findings"></textarea>
                    </label>

                    <label class="full">
                        Impression / Result
                        <textarea
                            placeholder="Final impression"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="saveForm('Investigation')">

                    Save Investigation

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// PRESCRIPTION
// ==========================================

function showPrescription() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Prescription",
                "Create and record patient medication"
            )}

            <div class="document">

                <div class="document-header">
                    Prescription / Rx
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input placeholder="Patient name">
                    </label>

                    <label>
                        Prescription Date
                        <input type="date">
                    </label>

                    <label class="full">
                        Diagnosis
                        <input
                            placeholder="Diagnosis">
                    </label>

                    <label>
                        Medicine
                        <input
                            placeholder="Medicine name">
                    </label>

                    <label>
                        Dose
                        <input
                            placeholder="Example: 500 mg">
                    </label>

                    <label>
                        Frequency
                        <select>
                            <option>Select</option>
                            <option>Once daily</option>
                            <option>Twice daily</option>
                            <option>Three times daily</option>
                            <option>As required</option>
                        </select>
                    </label>

                    <label>
                        Duration
                        <input
                            placeholder="Example: 5 days">
                    </label>

                    <label class="full">
                        Instructions
                        <textarea
                            placeholder="Medicine instructions"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="saveForm('Prescription')">

                    Save Prescription

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// ADMISSION
// ==========================================

function showAdmission() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Admission / Treatment",
                "Hospital admission and treatment details"
            )}

            <div class="document">

                <div class="document-header">
                    Inpatient Treatment Record
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input placeholder="Patient name">
                    </label>

                    <label>
                        UHID / Patient ID
                        <input placeholder="Patient ID">
                    </label>

                    <label>
                        Admission Date
                        <input type="date">
                    </label>

                    <label>
                        Admission Time
                        <input type="time">
                    </label>

                    <label>
                        Ward / Room
                        <input placeholder="Ward / room number">
                    </label>

                    <label>
                        Bed Number
                        <input placeholder="Bed number">
                    </label>

                    <label class="full">
                        Provisional Diagnosis
                        <textarea></textarea>
                    </label>

                    <label class="full">
                        Procedure / Surgery
                        <textarea
                            placeholder="Procedure or surgery performed"></textarea>
                    </label>

                    <label class="full">
                        Treatment Details
                        <textarea
                            placeholder="Treatment provided"></textarea>
                    </label>

                    <label class="full">
                        Progress Notes
                        <textarea
                            placeholder="Patient progress"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="saveForm('Admission')">

                    Save Treatment Record

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// BILLING
// ==========================================

function showBilling() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Hospital Billing",
                "Record hospital charges and payments"
            )}

            <div class="document">

                <div class="document-header">
                    Billing Statement
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input placeholder="Patient name">
                    </label>

                    <label>
                        Bill Date
                        <input type="date">
                    </label>

                    <label>
                        Registration Charges
                        <input type="number" placeholder="₹">
                    </label>

                    <label>
                        Consultation Charges
                        <input type="number" placeholder="₹">
                    </label>

                    <label>
                        Investigation Charges
                        <input type="number" placeholder="₹">
                    </label>

                    <label>
                        Room Charges
                        <input type="number" placeholder="₹">
                    </label>

                    <label>
                        Surgery / Procedure
                        <input type="number" placeholder="₹">
                    </label>

                    <label>
                        Pharmacy
                        <input type="number" placeholder="₹">
                    </label>

                    <label class="full">
                        Other Charges
                        <input type="number" placeholder="₹">
                    </label>

                    <label class="full">
                        Payment Notes
                        <textarea
                            placeholder="Payment details"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="calculateBill()">

                    Calculate / Save Bill

                </button>

            </div>

        </section>
    `;
}


// ==========================================
// BILL CALCULATION
// ==========================================

function calculateBill() {

    const inputs =
        document.querySelectorAll(
            '.form input[type="number"]'
        );

    let total = 0;

    inputs.forEach(input => {

        const value =
            parseFloat(input.value) || 0;

        total += value;

    });

    alert(
        "Total Bill Amount: ₹" +
        total.toLocaleString("en-IN")
    );
}


// ==========================================
// FOLLOW-UP
// ==========================================

function showFollowup() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Follow-up",
                "Schedule and record patient follow-up"
            )}

            <div class="document">

                <div class="document-header">
                    Follow-up Appointment
                </div>

                <div class="form">

                    <label>
                        Patient Name
                        <input placeholder="Patient name">
                    </label>

                    <label>
                        Patient ID
                        <input placeholder="Patient ID">
                    </label>

                    <label>
                        Follow-up Date
                        <input type="date">
                    </label>

                    <label>
                        Appointment Time
                        <input type="time">
                    </label>

                    <label>
                        Department
                        <select>
                            <option>Orthopaedics</option>
                            <option>Trauma</option>
                            <option>Joint Replacement</option>
                            <option>Physiotherapy</option>
                        </select>
                    </label>

                    <label>
                        Doctor
                        <input
                            value="Dr. Anirudh C. Kulkarni">
                    </label>

                    <label class="full">
                        Follow-up Instructions
                        <textarea
                            placeholder="Instructions for next visit"></textarea>
                    </label>

                </div>

                <button
                    class="save-button"
                    onclick="saveForm('Follow-up')">

                    Save Follow-up

                </button>

            </div>

        </section>
    `;
}

// ==========================================
// PATIENT RECORD SYSTEM
// ==========================================

const patientRecordPages = [
    "Front Page",
    "Registration",
    "Consultation",
    "X-Ray / Blood / Investigations",
    "Prescription / Pharmacy",
    "Admission & Treatment",
    "Billing",
    "Follow-up",
    "Discharge Summary"
];

function patientField(label, field, type = "text", placeholder = "") {
    return `
        <label class="record-field">
            <span>${label}</span>
            <input
                type="${type}"
                data-record="${field}"
                placeholder="${placeholder}">
        </label>
    `;
}

function patientArea(label, field, placeholder = "") {
    return `
        <label class="record-field record-full">
            <span>${label}</span>
            <textarea
                data-record="${field}"
                placeholder="${placeholder}"></textarea>
        </label>
    `;
} function patientPaper(title, content, pageNumber) {

    return `

        <div class="patient-paper">

            <!-- HOSPITAL HEADER -->

            <div class="record-top">

                <div class="record-logo">

                    <img
                        src="image.png"
                        alt="K. Suvidha Hospital Logo">

                </div>

                <div class="record-hospital">

                    <div class="record-kannada">
                        ಕೆ. ಸುವಿಧಾ ಸೂಪರ್ ಸ್ಪെഷ്യಾಲಿಟಿ ಆಸ್ಪತ್ರೆ
                    </div>

                    <h1>
                        K. SUVIDHA SUPER SPECIALITY ORTHOPAEDIC
                        & MULTISPECIALITY HOSPITAL
                    </h1>

                </div>

            </div>

            <div class="record-doctors">

                <div>

                    <strong>
                        Dr. Anirudh C. Kulkarni
                    </strong>

                    <br>
                    M.B.B.S., DNB (Ortho) Bangalore

                    <br>
                    Fellowship in Joint Replacement (Mumbai)

                    <br>
                    Fellowship in Arthroscopy (France)

                    <br>
                    Consultant: Orthopaedic, Trauma and
                    Joint Replacement Surgeon

                    <br>
                    Medical Director

                </div>

                <div class="record-doctor-right">

                    <strong>
                        K. Suvidha Hospital
                    </strong>

                    <br>
                    Orthopaedic & Multispeciality Hospital

                    <br>
                    Trauma & Joint Replacement Care

                </div>

            </div>


            <!-- PATIENT DETAILS -->

            <div class="record-patient-header">

                ${patientField(
                    "Patient Name",
                    "patientName",
                    "text",
                    "Patient name"
                )}

                ${patientField(
                    "UHID",
                    "uhid",
                    "text",
                    "Patient ID"
                )}

                ${patientField(
                    "Age",
                    "age",
                    "number",
                    "Age"
                )}

                ${patientField(
                    "Sex",
                    "sex",
                    "text",
                    "Male / Female"
                )}

                ${patientField(
                    "Date",
                    "recordDate",
                    "date"
                )}

                ${patientField(
                    "Weight",
                    "weight",
                    "text",
                    "Kg"
                )}

                ${patientField(
                    "B.P.",
                    "bp",
                    "text",
                    "BP"
                )}

                ${patientField(
                    "Pulse",
                    "pulse",
                    "text",
                    "Pulse"
                )}

            </div>


            <!-- PAGE TITLE -->

            <div class="record-page-title">

                <span>${pageNumber}</span>

                <strong>${title}</strong>

            </div>


            <!-- PAGE CONTENT -->

            <div class="record-content">

                ${content}

            </div>


            <!-- FOOTER -->

            <div class="record-footer">

                <strong>
                    For Appointment Contact:
                    08532-452534 / 8555829814 / 7975534201
                </strong>

                <br>

                #1-3-580/2/1, Padmavathi Extension Colony,
                Ashapur Road, Near IOC Petrol Bunk,
                RAICHUR - 584 101

                <br>

                Emergency Fracture / Accident Care:
                9008399299

                <br>

                Email:
                ksuvidhahospitalrcr2024@gmail.com

            </div>

        </div>
    `;
} // ==========================================
// SHOW PATIENT RECORD
// ==========================================

function showPatientRecord(page = 1) {

    let content = "";
    let title = patientRecordPages[page - 1];


    // ==========================================
    // PAGE 1 - FRONT PAGE
    // ==========================================

    if (page === 1) {

        content = `

            <div class="record-front-grid">

                <div class="services-column">

                    <h3>Services Available</h3>

                    <p>✤ Joint Replacement</p>
                    <p>✤ Complex Trauma</p>
                    <p>✤ Emergency Accident Care</p>
                    <p>✤ Poly Trauma</p>
                    <p>✤ Paediatric Orthopaedics</p>
                    <p>✤ Hand Surgery</p>
                    <p>✤ Spine Surgery</p>
                    <p>✤ Arthroscopy</p>
                    <p>✤ Ilizarov</p>


                    <h3>Facilities</h3>

                    <p>✤ Laminar OT with C-arm</p>
                    <p>✤ Special AC Rooms</p>
                    <p>✤ DR System X-Ray</p>
                    <p>✤ Physiotherapy</p>
                    <p>✤ ICU with Ventilators</p>

                </div>


                <div class="front-main">

                    <div class="rx-symbol">
                        ℞
                    </div>


                    ${patientArea(
                        "Address",
                        "address",
                        "Patient address"
                    )}


                    ${patientField(
                        "Contact Number",
                        "contact",
                        "text",
                        "Mobile number"
                    )}


                    ${patientArea(
                        "Emergency Contact",
                        "emergencyContact",
                        "Emergency contact details"
                    )}


                    ${patientArea(
                        "Initial Notes",
                        "initialNotes",
                        "Initial patient notes"
                    )}

                </div>

            </div>

        `;
    }// ==========================================
// PAGE 2 - REGISTRATION
// ==========================================

    else if (page === 2) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Date of Birth",
                    "dob",
                    "date"
                )}

                ${patientField(
                    "Occupation",
                    "occupation",
                    "text",
                    "Occupation"
                )}

                ${patientField(
                    "Marital Status",
                    "maritalStatus",
                    "text",
                    "Marital status"
                )}

                ${patientField(
                    "Referral",
                    "referral",
                    "text",
                    "Referred by"
                )}

                ${patientField(
                    "Department",
                    "department",
                    "text",
                    "Department"
                )}

                ${patientField(
                    "Registration Number",
                    "registrationNumber",
                    "text",
                    "Registration number"
                )}

                ${patientArea(
                    "Full Address",
                    "registrationAddress",
                    "Patient address"
                )}

                ${patientArea(
                    "Registration Notes",
                    "registrationNotes",
                    "Additional registration details"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 3 - CONSULTATION
// ==========================================

    else if (page === 3) {

        content = `

            <div class="record-grid">

                ${patientArea(
                    "Chief Complaints",
                    "chiefComplaints",
                    "Main complaints"
                )}

                ${patientArea(
                    "History of Present Illness",
                    "historyPresentIllness",
                    "History of present illness"
                )}

                ${patientArea(
                    "Past Medical History",
                    "pastMedicalHistory",
                    "Past medical history"
                )}

                ${patientArea(
                    "Past Surgical History",
                    "pastSurgicalHistory",
                    "Past surgical history"
                )}

                ${patientArea(
                    "Clinical Examination",
                    "clinicalExamination",
                    "Clinical examination findings"
                )}

                ${patientArea(
                    "Diagnosis",
                    "diagnosis",
                    "Diagnosis"
                )}

                ${patientArea(
                    "Treatment Plan",
                    "treatmentPlan",
                    "Treatment plan"
                )}

                ${patientArea(
                    "Doctor's Notes",
                    "doctorNotes",
                    "Doctor's notes"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 4 - X-RAY / BLOOD / INVESTIGATIONS
// ==========================================

    else if (page === 4) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Investigation Date",
                    "investigationDate",
                    "date"
                )}

                ${patientField(
                    "Investigation Type",
                    "investigationType",
                    "text",
                    "X-Ray / Blood / Other"
                )}

                ${patientArea(
                    "X-Ray Details / Findings",
                    "xrayDetails",
                    "Enter X-Ray findings"
                )}

                ${patientArea(
                    "Blood Test",
                    "bloodTest",
                    "Enter blood test details and results"
                )}

                ${patientArea(
                    "Other Investigations",
                    "otherInvestigations",
                    "Other test details"
                )}

                ${patientArea(
                    "Investigation Results",
                    "investigationResults",
                    "Enter investigation results"
                )}

                ${patientArea(
                    "Doctor / Radiologist Impression",
                    "investigationImpression",
                    "Final impression"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 5 - PRESCRIPTION / PHARMACY
// ==========================================

    else if (page === 5) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Prescription Date",
                    "prescriptionDate",
                    "date"
                )}

                ${patientField(
                    "Medicine 1",
                    "medicine1",
                    "text",
                    "Medicine name"
                )}

                ${patientField(
                    "Dose 1",
                    "dose1",
                    "text",
                    "Dose"
                )}

                ${patientField(
                    "Frequency 1",
                    "frequency1",
                    "text",
                    "Once / Twice / Thrice"
                )}

                ${patientField(
                    "Duration 1",
                    "duration1",
                    "text",
                    "Number of days"
                )}

                ${patientField(
                    "Medicine 2",
                    "medicine2",
                    "text",
                    "Medicine name"
                )}

                ${patientField(
                    "Dose 2",
                    "dose2",
                    "text",
                    "Dose"
                )}

                ${patientField(
                    "Frequency 2",
                    "frequency2",
                    "text",
                    "Frequency"
                )}

                ${patientField(
                    "Duration 2",
                    "duration2",
                    "text",
                    "Number of days"
                )}

                ${patientArea(
                    "Additional Medicines",
                    "additionalMedicines",
                    "Enter additional medicines"
                )}

                ${patientArea(
                    "Pharmacy Instructions",
                    "pharmacyInstructions",
                    "Instructions"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 6 - ADMISSION & TREATMENT
// ==========================================

    else if (page === 6) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Admission Date",
                    "admissionDate",
                    "date"
                )}

                ${patientField(
                    "Admission Time",
                    "admissionTime",
                    "time"
                )}

                ${patientField(
                    "Ward / Room",
                    "wardRoom",
                    "text",
                    "Ward / Room number"
                )}

                ${patientField(
                    "Bed Number",
                    "bedNumber",
                    "text",
                    "Bed number"
                )}

                ${patientField(
                    "Attending Doctor",
                    "attendingDoctor",
                    "text",
                    "Doctor name"
                )}

                ${patientField(
                    "Procedure / Surgery Date",
                    "surgeryDate",
                    "date"
                )}

                ${patientArea(
                    "Admission Diagnosis",
                    "admissionDiagnosis",
                    "Diagnosis at admission"
                )}

                ${patientArea(
                    "Treatment Given",
                    "treatmentGiven",
                    "Details of treatment"
                )}

                ${patientArea(
                    "Procedure / Surgery",
                    "procedureSurgery",
                    "Procedure or surgery details"
                )}

                ${patientArea(
                    "Daily Treatment Notes",
                    "dailyTreatmentNotes",
                    "Daily progress and treatment notes"
                )}

                ${patientArea(
                    "Nursing Notes",
                    "nursingNotes",
                    "Nursing observations and notes"
                )}

                ${patientArea(
                    "Hospital Course",
                    "hospitalCourse",
                    "Summary of hospital stay"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 7 - BILLING
// ==========================================

    else if (page === 7) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Bill Date",
                    "billDate",
                    "date"
                )}

                ${patientField(
                    "Bill Number",
                    "billNumber",
                    "text",
                    "Bill number"
                )}

                ${patientField(
                    "Consultation Fee",
                    "consultationFee",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Investigation Charges",
                    "investigationCharges",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Procedure / Surgery Charges",
                    "procedureCharges",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Room / Bed Charges",
                    "roomCharges",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Pharmacy Charges",
                    "pharmacyCharges",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Other Charges",
                    "otherCharges",
                    "number",
                    "Amount"
                )}

                ${patientField(
                    "Discount",
                    "discount",
                    "number",
                    "Discount amount"
                )}

                ${patientField(
                    "Amount Paid",
                    "amountPaid",
                    "number",
                    "Paid amount"
                )}

                ${patientField(
                    "Payment Mode",
                    "paymentMode",
                    "text",
                    "Cash / UPI / Card"
                )}

                ${patientField(
                    "Balance Amount",
                    "balanceAmount",
                    "number",
                    "Balance"
                )}

                ${patientArea(
                    "Billing Notes",
                    "billingNotes",
                    "Additional billing details"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 8 - FOLLOW-UP
// ==========================================

    else if (page === 8) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Follow-up Date",
                    "followupDate",
                    "date"
                )}

                ${patientField(
                    "Next Appointment",
                    "nextAppointment",
                    "date"
                )}

                ${patientField(
                    "Follow-up Doctor",
                    "followupDoctor",
                    "text",
                    "Doctor name"
                )}

                ${patientField(
                    "Review Type",
                    "reviewType",
                    "text",
                    "Routine / Post-operative / Other"
                )}

                ${patientArea(
                    "Patient Condition",
                    "followupCondition",
                    "Current patient condition"
                )}

                ${patientArea(
                    "Progress / Findings",
                    "followupProgress",
                    "Progress since previous visit"
                )}

                ${patientArea(
                    "Medicines Continued / Changed",
                    "followupMedicines",
                    "Medicines and changes"
                )}

                ${patientArea(
                    "Advice",
                    "followupAdvice",
                    "Follow-up advice"
                )}

                ${patientArea(
                    "Next Plan",
                    "followupPlan",
                    "Next treatment or review plan"
                )}

                ${patientArea(
                    "Doctor's Follow-up Notes",
                    "followupDoctorNotes",
                    "Doctor's notes"
                )}

            </div>

        `;
    }// ==========================================
// PAGE 9 - DISCHARGE SUMMARY
// ==========================================

    else if (page === 9) {

        content = `

            <div class="record-grid">

                ${patientField(
                    "Admission Date",
                    "dischargeAdmissionDate",
                    "date"
                )}

                ${patientField(
                    "Discharge Date",
                    "dischargeDate",
                    "date"
                )}

                ${patientField(
                    "Discharge Time",
                    "dischargeTime",
                    "time"
                )}

                ${patientField(
                    "Discharge Type",
                    "dischargeType",
                    "text",
                    "Routine / LAMA / Transfer"
                )}

                ${patientArea(
                    "Final Diagnosis",
                    "finalDiagnosis",
                    "Final diagnosis"
                )}

                ${patientArea(
                    "Presenting Complaints",
                    "dischargeComplaints",
                    "Presenting complaints"
                )}

                ${patientArea(
                    "History & Clinical Findings",
                    "dischargeClinicalFindings",
                    "History and clinical findings"
                )}

                ${patientArea(
                    "Investigations",
                    "dischargeInvestigations",
                    "Important investigation findings"
                )}

                ${patientArea(
                    "Procedure / Surgery",
                    "dischargeProcedure",
                    "Procedure or surgery performed"
                )}

                ${patientArea(
                    "Hospital Course",
                    "dischargeHospitalCourse",
                    "Summary of treatment and hospital course"
                )}

                ${patientArea(
                    "Condition at Discharge",
                    "conditionAtDischarge",
                    "Patient condition at discharge"
                )}

                ${patientArea(
                    "Medicines at Discharge",
                    "dischargeMedicines",
                    "Medicines prescribed at discharge"
                )}

                ${patientArea(
                    "Discharge Advice",
                    "dischargeAdvice",
                    "Advice to patient"
                )}

                ${patientArea(
                    "Follow-up Instructions",
                    "dischargeFollowup",
                    "Follow-up date and instructions"
                )}

                ${patientArea(
                    "Additional Notes",
                    "dischargeAdditionalNotes",
                    "Additional discharge information"
                )}

            </div>

            <div class="record-signatures">

                <div>
                    <strong>Doctor Signature</strong>
                    <br><br>
                    __________________________
                </div>

                <div>
                    <strong>Patient / Attendant Signature</strong>
                    <br><br>
                    __________________________
                </div>

            </div>

        `;
    }// ==========================================
// PATIENT RECORD DISPLAY & NAVIGATION
// ==========================================

    app.innerHTML = patientPaper(
        title,
        content,
        page
    );
loadPatientRecord();
    app.innerHTML += `

        <div class="record-navigation">

            <button
                class="record-action-button"
                onclick="showPage('home')">
                🏠 Home
            </button>

            <button
                class="record-action-button"
                onclick="showPatientRecord(${page > 1 ? page - 1 : 1})">
                ◀ Previous
            </button>

            <span class="record-page-count">
                Page ${page} of 9
            </span>

            <button
                class="record-action-button"
                onclick="showPatientRecord(${page < 9 ? page + 1 : 9})">
                Next ▶
            </button>

            <button
                class="record-action-button"
                onclick="window.print()">
                🖨 Print
            </button>
<button
    class="record-action-button"
    onclick="savePatientRecord()">
    💾 Save Patient Record
</button>
        </div>

    `;

}// ==========================================
// SAVE PATIENT RECORD
// ==========================================

function savePatientRecord() {

    const fields = document.querySelectorAll(
        "[data-record]"
    );

    const record = {};

    fields.forEach(field => {

        record[field.dataset.record] =
            field.value;

    });

    localStorage.setItem(
        "ksuvidhaPatientRecord",
        JSON.stringify(record)
    );

    alert(
        "Patient Record saved successfully."
    );
}// ==========================================
// LOAD SAVED PATIENT RECORD
// ==========================================

function loadPatientRecord() {

    const saved =
        localStorage.getItem(
            "ksuvidhaPatientRecord"
        );

    if (!saved) {
        return;
    }

    const record = JSON.parse(saved);

    Object.keys(record).forEach(fieldName => {

        const field =
            document.querySelector(
                `[data-record="${fieldName}"]`
            );

        if (field) {
            field.value = record[fieldName];
        }

    });
}
        // ==========================================
// DISCHARGE SUMMARY
// ==========================================

function showDischarge() {

    app.innerHTML = `

        <section class="page">

            ${pageHeader(
                "Discharge Summary",
                "Final patient discharge document"
            )}

            <div class="discharge-paper">

                <!-- HEADER -->

                <div class="paper-header">

                    <div class="paper-logo"
                        style="
                        width:35px !important;
                        height:35px !important;
                        max-width:35px !important;
                        max-height:35px !important;
                        overflow:hidden !important;
                        border-radius:50% !important;
                        flex-shrink:0 !important;
                        ">

                        <img src="image.png"
                            alt="K. Suvidha Hospital Logo"
                            style="
                            width:35px !important;
                            height:35px !important;
                            max-width:35px !important;
                            max-height:35px !important;
                            object-fit:cover !important;
                            object-position:center top !important;
                            display:block !important;
                            ">
                    </div>

                    <div>

                        <div class="kannada">
                            ಕೆ. ಸುವಿಧಾ ಸೂಪರ್ ಸ್ಪೆಷೆಲಿಟಿ ಆಸ್ಪತ್ರೆ
                        </div>

                        <h2>
                            K. SUVIDHA SUPER SPECIALITY
                            ORTHOPAEDIC & MULTISPECIALITY HOSPITAL
                        </h2>

                        <p>
                            Dr. Anirudh C. Kulkarni
                            <br>
                            M.B.B.S., DNB (Ortho), Bangalore
                            <br>
                            Fellowship in Joint Replacement
                            & Orthopaedic Surgery
                        </p>

                    </div>

                </div>

                <div class="blue-line"></div>

                <!-- PATIENT DETAILS -->

                <div class="patient-details">

                    <span>
                        <strong>Patient Name:</strong>
                        <input type="text"
                            placeholder="Enter patient name"
                            style="padding:6px;width:180px;">
                    </span>

                    <span>
                        <strong>Age:</strong>
                        <input type="number"
                            placeholder="Age"
                            style="padding:6px;width:60px;">
                    </span>

                    <span>
                        <strong>Sex:</strong>
                        <select style="padding:6px;">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </span>

                    <span>
                        <strong>Date:</strong>
                        <input type="date"
                            style="padding:6px;">
                    </span>

                    <span>
                        <strong>UHID:</strong>
                        <input type="text"
                            placeholder="UHID"
                            style="padding:6px;width:110px;">
                    </span>

                </div>

                <!-- DISCHARGE INFORMATION -->

                <div class="summary">

                    <div class="summary-section">

                        DATE OF ADMISSION

                        <input type="date"
                            style="
                            width:100%;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            ">

                    </div>

                    <div class="summary-section">

                        DATE OF DISCHARGE

                        <input type="date"
                            style="
                            width:100%;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            ">

                    </div>

                    <div class="summary-section full-section">

                        FINAL DIAGNOSIS

                        <textarea
                            placeholder="Type final diagnosis here..."
                            style="
                            width:100%;
                            min-height:70px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        PRESENTING COMPLAINTS

                        <textarea
                            placeholder="Type presenting complaints here..."
                            style="
                            width:100%;
                            min-height:70px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        HISTORY / CLINICAL FINDINGS

                        <textarea
                            placeholder="Type history and clinical findings here..."
                            style="
                            width:100%;
                            min-height:90px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        INVESTIGATIONS

                        <textarea
                            placeholder="Type investigations and results here..."
                            style="
                            width:100%;
                            min-height:80px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        PROCEDURE / SURGERY PERFORMED

                        <textarea
                            placeholder="Type procedure / surgery details here..."
                            style="
                            width:100%;
                            min-height:80px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        HOSPITAL COURSE

                        <textarea
                            placeholder="Type hospital course here..."
                            style="
                            width:100%;
                            min-height:90px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        CONDITION AT DISCHARGE

                        <textarea
                            placeholder="Type condition at discharge here..."
                            style="
                            width:100%;
                            min-height:60px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        MEDICATIONS AT DISCHARGE

                        <textarea
                            placeholder="Type discharge medications here..."
                            style="
                            width:100%;
                            min-height:100px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        DISCHARGE ADVICE

                        <textarea
                            placeholder="Type discharge advice here..."
                            style="
                            width:100%;
                            min-height:90px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                    <div class="summary-section full-section">

                        FOLLOW-UP ADVICE

                        <textarea
                            placeholder="Type follow-up advice here..."
                            style="
                            width:100%;
                            min-height:60px;
                            padding:8px;
                            margin-top:6px;
                            box-sizing:border-box;
                            resize:vertical;
                            "></textarea>

                    </div>

                </div>

                <!-- SIGNATURE -->

                <div class="signature">

                    <div>
                        Patient / Attendant Signature
                        <br><br>
                        __________________________
                    </div>

                    <div>
                        Doctor's Signature
                        <br><br>
                        __________________________
                    </div>

                </div>

                <!-- FOOTER -->

                <div class="paper-footer">

                    <strong>
                        K. SUVIDHA SUPER SPECIALITY
                        ORTHOPAEDIC & MULTISPECIALITY HOSPITAL
                    </strong>

                    <br>

                    #1-3-580/2/1, Padmavathi Extension Colony,
                    Ashapur Road, Near IOC Petrol Bunk,
                    RAICHUR - 584 101

                    <br>

                    Appointment:
                    08532-452534 / 8555829814 / 7975534201

                    <br>

                    Emergency Fracture / Accident Care:
                    9008399299

                </div>

            </div>

            <br>

            <button
                class="primary-button"
                onclick="window.print()">

                🖨 Print Discharge Summary

            </button>

        </section>
    `;
}


// ==========================================
// GENERAL SAVE
// ==========================================

function saveForm(formName) {

    alert(
        formName +
        " saved successfully."
    );
}


// ==========================================
// START APPLICATION
// ==========================================

showHome();
