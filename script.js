/* ============================================================
   K. SUVIDHA HOSPITAL
   COMPLETE CLEAN SCRIPT.JS
   ============================================================ */

"use strict";

/* ============================================================
   BASIC HOSPITAL INFORMATION
   ============================================================ */

const HOSPITAL_NAME = "K. SUVIDHA HOSPITAL";
const HOSPITAL_SUBTITLE = "Multi Speciality Hospital";
const HOSPITAL_ADDRESS = "Raichur, Karnataka";
const HOSPITAL_PHONE = "Hospital Contact";
const HOSPITAL_LOGO = "image.png";

/* ============================================================
   HOSPITAL BED CAPACITY
   TOTAL = 25
   ============================================================ */

const BED_CAPACITY = {
    Ward: 4,
    Daycare: 4,
    ICU: 5,
    Casualty: 4,
    "Special Room": 8
};

const TOTAL_BEDS = 25;

/* ============================================================
   DOCTOR LIST
   ============================================================ */

const DOCTORS = [
    "Dr. ANIRUDH KULKARNI",
    "Dr. SHEKAR .M",
    "Dr. RAMESH BABU",
    "Dr. RAMESH .C",
    "Dr. SHAHBAZ",
    "Dr. VISHALAKSHI",
    "Dr. SAI RAGHAVENDRA",
    "Dr. PRASHANT",
    "Dr. KARTHIK",
    "Dr. VINAY BADRI",
    "Dr. PAVAN",
    "Dr. JYOTHI",
    "Dr. RAMESH SAGAR",
    "Dr. SAGAR",
    "Dr. CN KULKARNI"
];

/* ============================================================
   STORAGE KEYS
   ============================================================ */

const PATIENT_KEY = "ksuvidha_patient";
const PATIENT_RECORD_KEY = "ksuvidha_patient_record";
const BED_KEY = "ksuvidha_beds";
const OT_KEY = "ksuvidha_ot_slots";
const BILL_KEY = "ksuvidha_bills";
const DOCTOR_KEY = "ksuvidha_doctors";

/* ============================================================
   APP ELEMENT
   ============================================================ */

let app = null;

/* ============================================================
   SAFE TEXT
   ============================================================ */

function safe(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* ============================================================
   INITIALIZE APP
   ============================================================ */

function getApp() {
    app = document.getElementById("app");

    if (!app) {
        console.error(
            "K. Suvidha Hospital: <div id='app'></div> was not found."
        );
    }

    return app;
}

/* ============================================================
   DOCTOR DATABASE
   ============================================================ */

function getDoctors() {

    let savedDoctors = [];

    try {
        savedDoctors =
            JSON.parse(
                localStorage.getItem(DOCTOR_KEY) || "[]"
            );
    } catch (error) {
        savedDoctors = [];
    }

    const allDoctors = [
        ...DOCTORS,
        ...savedDoctors
    ];

    return [...new Set(allDoctors)];
}

function doctorOptions(selected = "") {

    return getDoctors()
        .map(function (doctor) {

            return `
                <option
                    value="${safe(doctor)}"
                    ${doctor === selected ? "selected" : ""}
                >
                    ${safe(doctor)}
                </option>
            `;

        })
        .join("");
}

/* ============================================================
   ADD DOCTOR
   ============================================================ */

function addDoctor() {

    const doctorName =
        prompt("Enter new doctor name:");

    if (!doctorName) {
        return;
    }

    const cleanName =
        doctorName.trim();

    if (!cleanName) {
        return;
    }

    let savedDoctors = [];

    try {
        savedDoctors =
            JSON.parse(
                localStorage.getItem(DOCTOR_KEY) || "[]"
            );
    } catch (error) {
        savedDoctors = [];
    }

    if (
        DOCTORS.includes(cleanName) ||
        savedDoctors.includes(cleanName)
    ) {

        alert("Doctor already exists.");

        return;
    }

    savedDoctors.push(cleanName);

    localStorage.setItem(
        DOCTOR_KEY,
        JSON.stringify(savedDoctors)
    );

    alert(
        cleanName +
        " has been added to the doctor database."
    );

    showHome();
}

/* ============================================================
   PATIENT DATA
   ============================================================ */

function getPatient() {

    try {

        return JSON.parse(
            localStorage.getItem(PATIENT_KEY) || "{}"
        );

    } catch (error) {

        return {};

    }
}

function savePatient(patient) {

    localStorage.setItem(
        PATIENT_KEY,
        JSON.stringify(patient)
    );
}

/* ============================================================
   COLLECT CURRENT FORM DATA
   ============================================================ */

function collectRecordFields() {

    const record = getPatient();

    document
        .querySelectorAll("[data-record]")
        .forEach(function (element) {

            record[element.dataset.record] =
                element.value;

        });

    return record;
}

/* ============================================================
   SAVE CURRENT FORM
   ============================================================ */

function saveCurrentForm() {

    const patient =
        collectRecordFields();

    savePatient(patient);

    localStorage.setItem(
        PATIENT_RECORD_KEY,
        JSON.stringify(patient)
    );

    alert(
        "Patient information saved successfully."
    );
}

/* ============================================================
   LOAD SAVED PATIENT
   ============================================================ */

function loadPatientFields() {

    const patient =
        getPatient();

    document
        .querySelectorAll("[data-record]")
        .forEach(function (element) {

            const name =
                element.dataset.record;

            if (
                patient[name] !== undefined &&
                patient[name] !== null
            ) {

                element.value =
                    patient[name];

            }

        });
}

/* ============================================================
   FORM FIELD
   ============================================================ */

function field(
    label,
    name,
    type = "text",
    value = ""
) {

    return `
        <label class="paper-field">

            <span>
                ${safe(label)}
            </span>

            <input
                type="${type}"
                name="${safe(name)}"
                data-record="${safe(name)}"
                value="${safe(value)}"
            >

        </label>
    `;
}

/* ============================================================
   TEXTAREA
   ============================================================ */

function area(
    label,
    name,
    value = ""
) {

    return `
        <label class="paper-field paper-full">

            <span>
                ${safe(label)}
            </span>

            <textarea
                name="${safe(name)}"
                data-record="${safe(name)}"
            >${safe(value)}</textarea>

        </label>
    `;
}

/* ============================================================
   DOCTOR SELECT
   ============================================================ */

function doctorField(
    name = "doctor",
    selected = ""
) {

    return `
        <label class="paper-field">

            <span>
                Doctor
            </span>

            <select
                name="${safe(name)}"
                data-record="${safe(name)}"
            >

                <option value="">
                    Select Doctor
                </option>

                ${doctorOptions(selected)}

            </select>

        </label>
    `;
}

/* ============================================================
   COMMON PAPER HEADER
   ============================================================ */

function paperHeader(title) {

    const patient =
        getPatient();

    return `

        <div class="hospital-paper">

            <div class="paper-header">

                <div class="paper-logo">

                    <img
                        src="${HOSPITAL_LOGO}"
                        alt="K. Suvidha Hospital Logo"
                    >

                </div>

                <div class="hospital-heading">

                    <div class="hospital-kannada">
                        ಕೆ. ಸುವಿಧಾ ಆಸ್ಪತ್ರೆ
                    </div>

                    <h1>
                        ${HOSPITAL_NAME}
                    </h1>

                    <div>
                        ${HOSPITAL_SUBTITLE}
                    </div>

                    <div>
                        ${HOSPITAL_ADDRESS}
                    </div>

                    <div>
                        ${HOSPITAL_PHONE}
                    </div>

                </div>

            </div>

            <div class="paper-doctor-row">

                ${doctorField(
                    "mainDoctor",
                    patient.mainDoctor || ""
                )}

                <button
                    type="button"
                    onclick="addDoctor()"
                >
                    + Add Doctor
                </button>

            </div>

            <div class="patient-top-grid">

                ${field(
                    "Patient Name",
                    "patientName",
                    "text",
                    patient.patientName || ""
                )}

                ${field(
                    "UHID / IP No",
                    "uhid",
                    "text",
                    patient.uhid || ""
                )}

                ${field(
                    "Age",
                    "age",
                    "number",
                    patient.age || ""
                )}

                <label class="paper-field">

                    <span>
                        Sex
                    </span>

                    <select
                        name="sex"
                        data-record="sex"
                    >

                        <option value="">
                            Select
                        </option>

                        <option
                            ${patient.sex === "Male"
                                ? "selected"
                                : ""}
                        >
                            Male
                        </option>

                        <option
                            ${patient.sex === "Female"
                                ? "selected"
                                : ""}
                        >
                            Female
                        </option>

                        <option
                            ${patient.sex === "Other"
                                ? "selected"
                                : ""}
                        >
                            Other
                        </option>

                    </select>

                </label>

                ${field(
                    "Date",
                    "date",
                    "date",
                    patient.date || ""
                )}

                ${field(
                    "Weight",
                    "weight",
                    "text",
                    patient.weight || ""
                )}

                ${field(
                    "B.P.",
                    "bp",
                    "text",
                    patient.bp || ""
                )}

                ${field(
                    "Pulse",
                    "pulse",
                    "text",
                    patient.pulse || ""
                )}

            </div>

            <h2 class="paper-title">
                ${safe(title)}
            </h2>
    `;
}

/* ============================================================
   PAPER FOOTER
   ============================================================ */

function paperFooter() {

    return `

            <div class="paper-footer">

                <div>
                    Signature of Patient / Attendant
                </div>

                <div>
                    Doctor Signature
                </div>

            </div>

        </div>
    `;
}

/* ============================================================
   HOME PAGE
   ============================================================ */

function showHome() {

    getApp();

    if (!app) {
        return;
    }

    app.innerHTML = `

        <div class="home-page">

            <div class="home-card">

                <img
                    class="home-logo"
                    src="${HOSPITAL_LOGO}"
                    alt="K. Suvidha Hospital"
                >

                <h1>
                    ${HOSPITAL_NAME}
                </h1>

                <p>
                    ${HOSPITAL_SUBTITLE}
                </p>

                <div class="hero-buttons">

                    <button
                        class="primary-button"
                        onclick="showPage('patient-record')"
                    >
                        📁 PATIENTS RECORD
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('registration')"
                    >
                        👤 Patient Registration
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('consultation')"
                    >
                        🩺 Consultation
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('billing')"
                    >
                        💰 Billing
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('discharge')"
                    >
                        📄 Discharge Summary
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('beds')"
                    >
                        🛏 BED MANAGEMENT
                        <small>
                            25 Bed Hospital
                        </small>
                    </button>

                    <button
                        class="secondary-button"
                        onclick="showPage('ot-slot')"
                    >
                        🏥 O.T SLOT
                        <small>
                            Operation Theatre Booking
                        </small>
                    </button>

                    <button
                        class="secondary-button"
                        onclick="addDoctor()"
                    >
                        👨‍⚕️ DOCTOR DATABASE
                        <small>
                            Add Doctor
                        </small>
                    </button>

                    <button
                        class="suvidha-home-button"
                        onclick="showPage('suvidha')"
                    >
                        🤖 SUVIDHA AI
                        <small>
                            Hospital Reception Assistant
                        </small>
                    </button>

                </div>

            </div>

        </div>
    `;
}

/* ============================================================
   PATIENT RECORD PAGE LIST
   ============================================================ */

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

/* ============================================================
   PATIENT RECORD
   ============================================================ */

function showPatientRecord(page = 1) {

    getApp();

    if (!app) {
        return;
    }

    page =
        Number(page) || 1;

    if (page < 1) {
        page = 1;
    }

    if (page > 9) {
        page = 9;
    }

    let content = "";

    /* ========================================================
       PAGE 1
       ======================================================== */

    if (page === 1) {

        content = `

            <div class="paper-section">

                <h3>
                    Hospital Services
                </h3>

                <div class="paper-check-list">

                    <label>
                        <input type="checkbox">
                        Emergency Services
                    </label>

                    <label>
                        <input type="checkbox">
                        OPD Consultation
                    </label>

                    <label>
                        <input type="checkbox">
                        Laboratory
                    </label>

                    <label>
                        <input type="checkbox">
                        X-Ray
                    </label>

                    <label>
                        <input type="checkbox">
                        Pharmacy
                    </label>

                    <label>
                        <input type="checkbox">
                        Admission
                    </label>

                    <label>
                        <input type="checkbox">
                        Surgery
                    </label>

                </div>

            </div>

            ${area(
                "Patient Initial Notes",
                "initialNotes"
            )}

            ${area(
                "Address",
                "address"
            )}

            ${area(
                "Emergency Contact",
                "emergencyContact"
            )}

        `;
    }

    /* ========================================================
       PAGE 2
       ======================================================== */

    if (page === 2) {

        content = `

            <div class="paper-grid">

                ${field(
                    "Date of Birth",
                    "dob",
                    "date"
                )}

                ${field(
                    "Occupation",
                    "occupation"
                )}

                ${field(
                    "Marital Status",
                    "maritalStatus"
                )}

                ${field(
                    "Referral",
                    "referral"
                )}

                ${field(
                    "Department",
                    "department"
                )}

                ${field(
                    "Registration Number",
                    "registrationNumber"
                )}

            </div>

            ${area(
                "Full Address",
                "registrationAddress"
            )}

            ${area(
                "Registration Notes",
                "registrationNotes"
            )}

        `;
    }

    /* ========================================================
       PAGE 3
       ======================================================== */

    if (page === 3) {

        content = `

            ${area(
                "Chief Complaints",
                "chiefComplaints"
            )}

            ${area(
                "History of Present Illness",
                "historyPresentIllness"
            )}

            ${area(
                "Past Medical / Surgical History",
                "pastHistory"
            )}

            ${area(
                "Clinical Examination",
                "clinicalExamination"
            )}

            ${area(
                "Diagnosis",
                "diagnosis"
            )}

            ${area(
                "Treatment Plan",
                "treatmentPlan"
            )}

            ${area(
                "Doctor Notes",
                "consultationNotes"
            )}

        `;
    }

    /* ========================================================
       PAGE 4
       ======================================================== */

    if (page === 4) {

        content = `

            <div class="paper-grid">

                ${field(
                    "Investigation Date",
                    "investigationDate",
                    "date"
                )}

                ${field(
                    "Investigation Type",
                    "investigationType"
                )}

            </div>

            ${area(
                "X-Ray Details",
                "xrayDetails"
            )}

            ${area(
                "X-Ray Findings",
                "xrayFindings"
            )}

            ${area(
                "Blood Test",
                "bloodTest"
            )}

            ${area(
                "Other Investigations",
                "otherInvestigations"
            )}

            ${area(
                "Results",
                "investigationResults"
            )}

            ${area(
                "Doctor / Radiologist Impression",
                "investigationImpression"
            )}

        `;
    }

    /* ========================================================
       PAGE 5
       ======================================================== */

    if (page === 5) {

        content = `

            ${field(
                "Prescription Date",
                "prescriptionDate",
                "date"
            )}

            <div class="medicine-block">

                <h3>
                    Medicine 1
                </h3>

                <div class="paper-grid">

                    ${field(
                        "Medicine",
                        "medicine1"
                    )}

                    ${field(
                        "Dose",
                        "dose1"
                    )}

                    ${field(
                        "Frequency",
                        "frequency1"
                    )}

                    ${field(
                        "Duration",
                        "duration1"
                    )}

                </div>

            </div>

            <div class="medicine-block">

                <h3>
                    Medicine 2
                </h3>

                <div class="paper-grid">

                    ${field(
                        "Medicine",
                        "medicine2"
                    )}

                    ${field(
                        "Dose",
                        "dose2"
                    )}

                    ${field(
                        "Frequency",
                        "frequency2"
                    )}

                    ${field(
                        "Duration",
                        "duration2"
                    )}

                </div>

            </div>

            ${area(
                "Additional Medicines",
                "additionalMedicines"
            )}

            ${area(
                "Pharmacy Instructions",
                "pharmacyInstructions"
            )}

        `;
    }

    /* ========================================================
       PAGE 6
       ======================================================== */

    if (page === 6) {

        const patient =
            getPatient();

        content = `

            <div class="paper-grid">

                ${field(
                    "Admission Date",
                    "admissionDate",
                    "date"
                )}

                ${field(
                    "Admission Time",
                    "admissionTime",
                    "time"
                )}

                ${field(
                    "Ward / Room",
                    "wardRoom"
                )}

                ${field(
                    "Bed",
                    "bedNumber"
                )}

                ${doctorField(
                    "attendingDoctor",
                    patient.attendingDoctor || ""
                )}

                ${field(
                    "Procedure / Surgery Date",
                    "surgeryDate",
                    "date"
                )}

            </div>

            ${area(
                "Admission Diagnosis",
                "admissionDiagnosis"
            )}

            ${area(
                "Treatment",
                "admissionTreatment"
            )}

            ${area(
                "Procedure / Surgery",
                "procedureSurgery"
            )}

            ${area(
                "Daily Treatment Notes",
                "dailyTreatmentNotes"
            )}

            ${area(
                "Nursing Notes",
                "nursingNotes"
            )}

            ${area(
                "Hospital Course",
                "hospitalCourse"
            )}

        `;
    }

    /* ========================================================
       PAGE 7
       ======================================================== */

    if (page === 7) {

        content = `

            ${field(
                "Bill Date",
                "billDate",
                "date"
            )}

            ${field(
                "Bill Number",
                "billNumber"
            )}

            <div class="paper-grid">

                ${field(
                    "Consultation Charges",
                    "consultationCharges"
                )}

                ${field(
                    "Investigation Charges",
                    "investigationCharges"
                )}

                ${field(
                    "Procedure Charges",
                    "procedureCharges"
                )}

                ${field(
                    "Room Charges",
                    "roomCharges"
                )}

                ${field(
                    "Pharmacy Charges",
                    "pharmacyCharges"
                )}

                ${field(
                    "Other Charges",
                    "otherCharges"
                )}

                ${field(
                    "Discount",
                    "recordDiscount"
                )}

                ${field(
                    "Amount Paid",
                    "recordAmountPaid"
                )}

            </div>

            <label class="paper-field">

                <span>
                    Payment Mode
                </span>

                <select
                    data-record="recordPaymentMode"
                >

                    <option value="">
                        Select
                    </option>

                    <option>
                        Cash
                    </option>

                    <option>
                        UPI
                    </option>

                    <option>
                        Card
                    </option>

                    <option>
                        Bank Transfer
                    </option>

                </select>

            </label>

            ${area(
                "Billing Notes",
                "billingNotes"
            )}

        `;
    }

    /* ========================================================
       PAGE 8
       ======================================================== */

    if (page === 8) {

        const patient =
            getPatient();

        content = `

            <div class="paper-grid">

                ${field(
                    "Follow-up Date",
                    "followupDate",
                    "date"
                )}

                ${field(
                    "Next Appointment",
                    "nextAppointment",
                    "date"
                )}

                ${doctorField(
                    "followupDoctor",
                    patient.followupDoctor || ""
                )}

                ${field(
                    "Review Type",
                    "reviewType"
                )}

            </div>

            ${area(
                "Condition",
                "followupCondition"
            )}

            ${area(
                "Progress / Findings",
                "followupFindings"
            )}

            ${area(
                "Medicines Continued / Changed",
                "followupMedicines"
            )}

            ${area(
                "Advice",
                "followupAdvice"
            )}

            ${area(
                "Next Plan",
                "followupPlan"
            )}

            ${area(
                "Doctor Notes",
                "followupDoctorNotes"
            )}

        `;
    }

    /* ========================================================
       PAGE 9
       ======================================================== */

    if (page === 9) {

        content = `

            <div class="paper-grid">

                ${field(
                    "Admission Date",
                    "dischargeAdmissionDate",
                    "date"
                )}

                ${field(
                    "Discharge Date",
                    "dischargeDate",
                    "date"
                )}

                ${field(
                    "Discharge Time",
                    "dischargeTime",
                    "time"
                )}

                ${field(
                    "Discharge Type",
                    "dischargeType"
                )}

            </div>

            ${area(
                "Final Diagnosis",
                "finalDiagnosis"
            )}

            ${area(
                "Chief Complaints",
                "dischargeComplaints"
            )}

            ${area(
                "History / Clinical Findings",
                "dischargeClinicalFindings"
            )}

            ${area(
                "Investigations",
                "dischargeInvestigations"
            )}

            ${area(
                "Procedure / Surgery",
                "dischargeProcedure"
            )}

            ${area(
                "Hospital Course",
                "dischargeHospitalCourse"
            )}

            ${area(
                "Condition at Discharge",
                "conditionAtDischarge"
            )}

            ${area(
                "Medicines",
                "dischargeMedicines"
            )}

            ${area(
                "Advice",
                "dischargeAdvice"
            )}

            ${area(
                "Follow-up",
                "dischargeFollowup"
            )}

            ${area(
                "Additional Notes",
                "dischargeAdditionalNotes"
            )}

        `;
    }

    app.innerHTML =
        paperHeader(
            patientRecordPages[page - 1]
        ) +
        content +
        paperFooter();

    loadPatientFields();

    app.innerHTML += `

        <div class="record-navigation">

            <button
                onclick="showPage('home')"
            >
                🏠 Home
            </button>

            <button
                onclick="showPatientRecord(${page - 1})"
                ${page === 1 ? "disabled" : ""}
            >
                ◀ Previous
            </button>

            <span>
                Page ${page} of 9
            </span>

            <button
                onclick="showPatientRecord(${page + 1})"
                ${page === 9 ? "disabled" : ""}
            >
                Next ▶
            </button>

            <button
                onclick="saveCurrentForm()"
            >
                💾 Save
            </button>

            <button
                onclick="window.print()"
            >
                🖨 Print
            </button>

        </div>
    `;
}

/* ============================================================
   REGISTRATION
   ============================================================ */

function showRegistration() {

    getApp();

    const patient =
        getPatient();

    app.innerHTML = `

        ${paperHeader(
            "PATIENT REGISTRATION"
        )}

        <div class="paper-grid">

            ${field(
                "Patient Name",
                "patientName",
                "text",
                patient.patientName || ""
            )}

            ${field(
                "UHID / IP No",
                "uhid",
                "text",
                patient.uhid || ""
            )}

            ${field(
                "Age",
                "age",
                "number",
                patient.age || ""
            )}

            ${field(
                "Date of Birth",
                "dob",
                "date",
                patient.dob || ""
            )}

            ${field(
                "Mobile",
                "mobile",
                "tel",
                patient.mobile || ""
            )}

            ${field(
                "Occupation",
                "occupation",
                "text",
                patient.occupation || ""
            )}

        </div>

        ${area(
            "Full Address",
            "address"
        )}

        ${area(
            "Registration Notes",
            "registrationNotes"
        )}

        ${paperFooter()}

        <div class="record-navigation">

            <button onclick="showPage('home')">
                🏠 Home
            </button>

            <button onclick="saveCurrentForm()">
                💾 Save Registration
            </button>

            <button onclick="window.print()">
                🖨 Print
            </button>

        </div>
    `;

    loadPatientFields();
}

/* ============================================================
   CONSULTATION
   ============================================================ */

function showConsultation() {

    getApp();

    app.innerHTML = `

        ${paperHeader(
            "CONSULTATION"
        )}

        ${area(
            "Chief Complaints",
            "chiefComplaints"
        )}

        ${area(
            "History of Present Illness",
            "historyPresentIllness"
        )}

        ${area(
            "Past Medical / Surgical History",
            "pastHistory"
        )}

        ${area(
            "Clinical Examination",
            "clinicalExamination"
        )}

        ${area(
            "Diagnosis",
            "diagnosis"
        )}

        ${area(
            "Treatment Plan",
            "treatmentPlan"
        )}

        ${area(
            "Doctor Notes",
            "consultationNotes"
        )}

        ${paperFooter()}

        <div class="record-navigation">

            <button onclick="showPage('home')">
                🏠 Home
            </button>

            <button onclick="saveCurrentForm()">
                💾 Save
            </button>

            <button onclick="window.print()">
                🖨 Print
            </button>

        </div>
    `;

    loadPatientFields();
}

/* ============================================================
   DISCHARGE SUMMARY
   ============================================================ */

function showDischarge() {

    getApp();

    app.innerHTML = `

        ${paperHeader(
            "DISCHARGE SUMMARY"
        )}

        <div class="paper-grid">

            ${field(
                "Admission Date",
                "dischargeAdmissionDate",
                "date"
            )}

            ${field(
                "Discharge Date",
                "dischargeDate",
                "date"
            )}

            ${field(
                "Discharge Time",
                "dischargeTime",
                "time"
            )}

            ${field(
                "Discharge Type",
                "dischargeType"
            )}

        </div>

        ${area(
            "Final Diagnosis",
            "finalDiagnosis"
        )}

        ${area(
            "Chief Complaints",
            "dischargeComplaints"
        )}

        ${area(
            "Clinical Findings",
            "dischargeClinicalFindings"
        )}

        ${area(
            "Investigations",
            "dischargeInvestigations"
        )}

        ${area(
            "Procedure / Surgery",
            "dischargeProcedure"
        )}

        ${area(
            "Hospital Course",
            "dischargeHospitalCourse"
        )}

        ${area(
            "Condition at Discharge",
            "conditionAtDischarge"
        )}

        ${area(
            "Medicines",
            "dischargeMedicines"
        )}

        ${area(
            "Advice",
            "dischargeAdvice"
        )}

        ${area(
            "Follow-up",
            "dischargeFollowup"
        )}

        ${area(
            "Additional Notes",
            "dischargeAdditionalNotes"
        )}

        ${paperFooter()}

        <div class="record-navigation">

            <button onclick="showPage('home')">
                🏠 Home
            </button>

            <button onclick="saveCurrentForm()">
                💾 Save Discharge
            </button>

            <button onclick="window.print()">
                🖨 Print
            </button>

        </div>
    `;

    loadPatientFields();
}

/* ============================================================
   BILLING ITEM LIST
   ============================================================ */

const BILLING_ITEMS = [

    "Consultation",
    "Registration",
    "X-Ray",
    "Blood Test",
    "Laboratory",
    "ECG",
    "Procedure",
    "Operation",
    "Room Charges",
    "Nursing Charges",
    "Pharmacy",
    "Injection",
    "Dressing",
    "Other Charges"

];

/* ============================================================
   BILLING
   ============================================================ */

function showBilling() {

    getApp();

    const patient =
        getPatient();

    app.innerHTML = `

        ${paperHeader(
            "BILLING"
        )}

        <div class="billing-information">

            ${field(
                "Bill Date",
                "billDate",
                "date"
            )}

            ${field(
                "Bill Number",
                "billNumber"
            )}

        </div>

        <div class="billing-table">

            <div class="billing-row billing-heading">

                <div>
                    Item
                </div>

                <div>
                    Qty
                </div>

                <div>
                    Rate
                </div>

                <div>
                    Amount
                </div>

            </div>

            ${BILLING_ITEMS
                .map(function (item, index) {

                    return `

                        <div
                            class="billing-row"
                        >

                            <div>
                                ${safe(item)}
                            </div>

                            <div>

                                <input
                                    type="number"
                                    min="0"
                                    value="0"
                                    class="bill-qty"
                                    data-index="${index}"
                                    oninput="calculateBill()"
                                >

                            </div>

                            <div>

                                <input
                                    type="number"
                                    min="0"
                                    value="0"
                                    class="bill-rate"
                                    data-index="${index}"
                                    oninput="calculateBill()"
                                >

                            </div>

                            <div>

                                <input
                                    type="number"
                                    value="0"
                                    class="bill-amount"
                                    data-index="${index}"
                                    readonly
                                >

                            </div>

                        </div>

                    `;

                })
                .join("")}

        </div>

        <div class="billing-summary">

            <label>

                <span>
                    Total
                </span>

                <input
                    id="billTotal"
                    value="0"
                    readonly
                >

            </label>

            <label>

                <span>
                    Discount
                </span>

                <input
                    id="billDiscount"
                    type="number"
                    value="0"
                    oninput="calculateBill()"
                >

            </label>

            <label>

                <span>
                    Paid
                </span>

                <input
                    id="billPaid"
                    type="number"
                    value="0"
                    oninput="calculateBill()"
                >

            </label>

            <label>

                <span>
                    Balance
                </span>

                <input
                    id="billBalance"
                    value="0"
                    readonly
                >

            </label>

            <label>

                <span>
                    Payment Mode
                </span>

                <select
                    id="billPaymentMode"
                >

                    <option>
                        Cash
                    </option>

                    <option>
                        UPI
                    </option>

                    <option>
                        Card
                    </option>

                    <option>
                        Bank Transfer
                    </option>

                </select>

            </label>

        </div>

        ${area(
            "Billing Notes",
            "billingNotes"
        )}

        ${paperFooter()}

        <div class="record-navigation">

            <button onclick="showPage('home')">
                🏠 Home
            </button>

            <button onclick="saveBill()">
                💾 Save Bill
            </button>

            <button onclick="window.print()">
                🖨 Print
            </button>

            <button onclick="billingAI()">
                🤖 Billing AI
            </button>

        </div>
    `;

    loadPatientFields();

    calculateBill();
}

/* ============================================================
   BILL CALCULATION
   ============================================================ */

function calculateBill() {

    let total = 0;

    document
        .querySelectorAll(".billing-row:not(.billing-heading)")
        .forEach(function (row) {

            const qtyElement =
                row.querySelector(".bill-qty");

            const rateElement =
                row.querySelector(".bill-rate");

            const amountElement =
                row.querySelector(".bill-amount");

            if (
                !qtyElement ||
                !rateElement ||
                !amountElement
            ) {
                return;
            }

            const qty =
                Number(qtyElement.value) || 0;

            const rate =
                Number(rateElement.value) || 0;

            const amount =
                qty * rate;

            amountElement.value =
                amount.toFixed(2);

            total += amount;

        });

    const discount =
        Number(
            document.getElementById(
                "billDiscount"
            )?.value
        ) || 0;

    const paid =
        Number(
            document.getElementById(
                "billPaid"
            )?.value
        ) || 0;

    const finalTotal =
        Math.max(
            0,
            total - discount
        );

    const balance =
        Math.max(
            0,
            finalTotal - paid
        );

    const totalElement =
        document.getElementById(
            "billTotal"
        );

    const balanceElement =
        document.getElementById(
            "billBalance"
        );

    if (totalElement) {

        totalElement.value =
            finalTotal.toFixed(2);

    }

    if (balanceElement) {

        balanceElement.value =
            balance.toFixed(2);

    }
}

/* ============================================================
   SAVE BILL
   ============================================================ */

function saveBill() {

    calculateBill();

    const bill = {

        patient:
            getPatient(),

        total:
            document.getElementById(
                "billTotal"
            )?.value || "0",

        discount:
            document.getElementById(
                "billDiscount"
            )?.value || "0",

        paid:
            document.getElementById(
                "billPaid"
            )?.value || "0",

        balance:
            document.getElementById(
                "billBalance"
            )?.value || "0",

        paymentMode:
            document.getElementById(
                "billPaymentMode"
            )?.value || "",

        date:
            new Date().toISOString()

    };

    localStorage.setItem(
        BILL_KEY,
        JSON.stringify(bill)
    );

    saveCurrentForm();

    alert(
        "Bill saved successfully."
    );
}

/* ============================================================
   BILLING AI
   ============================================================ */

function billingAI() {

    calculateBill();

    const total =
        document.getElementById(
            "billTotal"
        )?.value || "0";

    const paid =
        document.getElementById(
            "billPaid"
        )?.value || "0";

    const balance =
        document.getElementById(
            "billBalance"
        )?.value || "0";

    alert(

        "SUVIDHA BILLING AI\n\n" +

        "Final Bill: ₹" +
        total +
        "\n\n" +

        "Paid: ₹" +
        paid +
        "\n\n" +

        "Balance: ₹" +
        balance

    );
}

/* ============================================================
   CREATE 25 BEDS
   ============================================================ */

function createBeds() {

    let beds = [];

    try {

        beds =
            JSON.parse(
                localStorage.getItem(BED_KEY) || "[]"
            );

    } catch (error) {

        beds = [];

    }

    if (
        Array.isArray(beds) &&
        beds.length === TOTAL_BEDS
    ) {

        return beds;

    }

    beds = [];

    /* WARD */

    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        beds.push({

            id:
                "WARD-" +
                String(i).padStart(2, "0"),

            area:
                "Ward",

            occupied:
                false,

            patientName:
                "",

            uhid:
                "",

            doctor:
                ""

        });

    }

    /* DAYCARE */

    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        beds.push({

            id:
                "DAYCARE-" +
                String(i).padStart(2, "0"),

            area:
                "Daycare",

            occupied:
                false,

            patientName:
                "",

            uhid:
                "",

            doctor:
                ""

        });

    }

    /* ICU */

    for (
        let i = 1;
        i <= 5;
        i++
    ) {

        beds.push({

            id:
                "ICU-" +
                String(i).padStart(2, "0"),

            area:
                "ICU",

            occupied:
                false,

            patientName:
                "",

            uhid:
                "",

            doctor:
                ""

        });

    }

    /* CASUALTY */

    for (
        let i = 1;
        i <= 4;
        i++
    ) {

        beds.push({

            id:
                "CASUALTY-" +
                String(i).padStart(2, "0"),

            area:
                "Casualty",

            occupied:
                false,

            patientName:
                "",

            uhid:
                "",

            doctor:
                ""

        });

    }

    /* SPECIAL ROOMS */

    for (
        let i = 1;
        i <= 8;
        i++
    ) {

        beds.push({

            id:
                "SPECIAL-" +
                String(i).padStart(2, "0"),

            area:
                "Special Room",

            occupied:
                false,

            patientName:
                "",

            uhid:
                "",

            doctor:
                ""

        });

    }

    localStorage.setItem(
        BED_KEY,
        JSON.stringify(beds)
    );

    return beds;
}

/* ============================================================
   SAVE BEDS
   ============================================================ */

function saveBeds(beds) {

    localStorage.setItem(
        BED_KEY,
        JSON.stringify(beds)
    );
}

/* ============================================================
   BED MANAGEMENT
   ============================================================ */

function showBedManagement() {

    getApp();

    const beds =
        createBeds();

    const occupied =
        beds.filter(
            function (bed) {
                return bed.occupied;
            }
        ).length;

    const available =
        TOTAL_BEDS - occupied;

    app.innerHTML = `

        <div class="hospital-dashboard">

            <div class="dashboard-header">

                <button
                    onclick="showPage('home')"
                >
                    🏠 Home
                </button>

                <h1>
                    🛏 BED MANAGEMENT
                </h1>

                <p>
                    K. Suvidha Hospital -
                    25 Bed Hospital
                </p>

            </div>

            <div class="bed-summary">

                <div class="bed-summary-card">

                    <strong>
                        25
                    </strong>

                    <span>
                        Total Beds
                    </span>

                </div>

                <div class="bed-summary-card">

                    <strong>
                        ${occupied}
                    </strong>

                    <span>
                        Occupied
                    </span>

                </div>

                <div class="bed-summary-card">

                    <strong>
                        ${available}
                    </strong>

                    <span>
                        Available
                    </span>

                </div>

            </div>

            <div class="bed-area-summary">

                <div>
                    🛏 Ward
                    <strong>
                        4 Beds
                    </strong>
                </div>

                <div>
                    🛏 Daycare
                    <strong>
                        4 Beds
                    </strong>
                </div>

                <div>
                    🏥 ICU
                    <strong>
                        5 Beds
                    </strong>
                </div>

                <div>
                    🚑 Casualty
                    <strong>
                        4 Beds
                    </strong>
                </div>

                <div>
                    🚪 Special Rooms
                    <strong>
                        8 Beds
                    </strong>
                </div>

            </div>

            <div class="bed-list">

                ${beds
                    .map(function (bed, index) {

                        return `

                            <div
                                class="
                                    bed-card
                                    ${
                                        bed.occupied
                                            ? "bed-occupied"
                                            : "bed-available"
                                    }
                                "
                            >

                                <div class="bed-title">

                                    <strong>
                                        ${safe(
                                            bed.id
                                        )}
                                    </strong>

                                    <span>
                                        ${
                                            bed.occupied
                                                ? "OCCUPIED"
                                                : "AVAILABLE"
                                        }
                                    </span>

                                </div>

                                <div class="bed-area">

                                    Location:
                                    ${safe(
                                        bed.area
                                    )}

                                </div>

                                ${
                                    bed.occupied

                                    ?

                                    `

                                    <div
                                        class="bed-patient"
                                    >

                                        <strong>
                                            Patient:
                                        </strong>

                                        ${safe(
                                            bed.patientName
                                        )}

                                        <br>

                                        <strong>
                                            UHID/IP:
                                        </strong>

                                        ${safe(
                                            bed.uhid
                                        )}

                                        <br>

                                        <strong>
                                            Doctor:
                                        </strong>

                                        ${safe(
                                            bed.doctor
                                        )}

                                    </div>

                                    <button
                                        onclick="releaseBed(${index})"
                                    >
                                        Release Bed
                                    </button>

                                    `

                                    :

                                    `

                                    <button
                                        onclick="occupyBed(${index})"
                                    >
                                        Occupy Bed
                                    </button>

                                    `
                                }

                            </div>

                        `;

                    })
                    .join("")}

            </div>

        </div>
    `;
}

/* ============================================================
   OCCUPY BED
   ============================================================ */

function occupyBed(index) {

    const beds =
        createBeds();

    const patient =
        getPatient();

    const patientName =
        prompt(
            "Enter Patient Name:",
            patient.patientName || ""
        );

    if (!patientName) {
        return;
    }

    const uhid =
        prompt(
            "Enter UHID / IP Number:",
            patient.uhid || ""
        );

    const doctor =
        prompt(
            "Enter Doctor Name:",
            patient.mainDoctor || ""
        );

    beds[index].occupied =
        true;

    beds[index].patientName =
        patientName;

    beds[index].uhid =
        uhid || "";

    beds[index].doctor =
        doctor || "";

    saveBeds(beds);

    alert(
        patientName +
        " has been assigned to " +
        beds[index].id +
        " (" +
        beds[index].area +
        ")."
    );

    showBedManagement();
}

/* ============================================================
   RELEASE BED
   ============================================================ */

function releaseBed(index) {

    const beds =
        createBeds();

    if (
        !confirm(
            "Release this bed from the patient?"
        )
    ) {
        return;
    }

    beds[index].occupied =
        false;

    beds[index].patientName =
        "";

    beds[index].uhid =
        "";

    beds[index].doctor =
        "";

    saveBeds(beds);

    showBedManagement();
}

/* ============================================================
   O.T SLOT STORAGE
   ============================================================ */

function getOTSlots() {

    try {

        const slots =
            JSON.parse(
                localStorage.getItem(OT_KEY) || "[]"
            );

        return Array.isArray(slots)
            ? slots
            : [];

    } catch (error) {

        return [];

    }
}

function saveOTSlots(slots) {

    localStorage.setItem(
        OT_KEY,
        JSON.stringify(slots)
    );
}

/* ============================================================
   O.T SLOT PAGE
   ============================================================ */

function showOTSlot() {

    getApp();

    const slots =
        getOTSlots();

    const patient =
        getPatient();

    app.innerHTML = `

        <div class="hospital-dashboard">

            <div class="dashboard-header">

                <button
                    onclick="showPage('home')"
                >
                    🏠 Home
                </button>

                <h1>
                    🏥 O.T SLOT
                </h1>

                <p>
                    Operation Theatre Slot Booking
                </p>

            </div>

            <div class="ot-booking-box">

                <h2>
                    Book O.T Slot
                </h2>

                <div class="paper-grid">

                    ${field(
                        "Patient Name",
                        "otPatient",
                        "text",
                        patient.patientName || ""
                    )}

                    ${field(
                        "UHID / IP Number",
                        "otUHID",
                        "text",
                        patient.uhid || ""
                    )}

                    ${field(
                        "Operation",
                        "otOperation"
                    )}

                    <label
                        class="paper-field"
                    >

                        <span>
                            Surgeon
                        </span>

                        <select id="otSurgeon">

                            <option value="">
                                Select Surgeon
                            </option>

                            ${doctorOptions(
                                patient.mainDoctor || ""
                            )}

                        </select>

                    </label>

                    ${field(
                        "Date",
                        "otDate",
                        "date"
                    )}

                    ${field(
                        "Start Time",
                        "otStart",
                        "time"
                    )}

                    ${field(
                        "End Time",
                        "otEnd",
                        "time"
                    )}

                    <label
                        class="paper-field"
                    >

                        <span>
                            OT Status
                        </span>

                        <select id="otStatus">

                            <option>
                                Booked
                            </option>

                            <option>
                                Scheduled
                            </option>

                            <option>
                                Completed
                            </option>

                            <option>
                                Cancelled
                            </option>

                        </select>

                    </label>

                </div>

                <button
                    class="primary-button"
                    onclick="bookOTSlot()"
                >
                    🏥 BOOK O.T SLOT
                </button>

            </div>

            <div class="ot-list">

                <h2>
                    O.T Schedule
                </h2>

                ${
                    slots.length === 0

                    ?

                    `
                    <p>
                        No O.T slots booked.
                    </p>
                    `

                    :

                    slots
                        .map(function (
                            slot,
                            index
                        ) {

                            return `

                                <div
                                    class="ot-card"
                                >

                                    <h3>
                                        ${safe(
                                            slot.operation
                                        )}
                                    </h3>

                                    <p>
                                        <strong>
                                            Patient:
                                        </strong>

                                        ${safe(
                                            slot.patient
                                        )}
                                    </p>

                                    <p>
                                        <strong>
                                            UHID/IP:
                                        </strong>

                                        ${safe(
                                            slot.uhid
                                        )}
                                    </p>

                                    <p>
                                        <strong>
                                            Surgeon:
                                        </strong>

                                        ${safe(
                                            slot.surgeon
                                        )}
                                    </p>

                                    <p>
                                        <strong>
                                            Date:
                                        </strong>

                                        ${safe(
                                            slot.date
                                        )}
                                    </p>

                                    <p>
                                        <strong>
                                            Time:
                                        </strong>

                                        ${safe(
                                            slot.start
                                        )}
                                        -
                                        ${safe(
                                            slot.end
                                        )}
                                    </p>

                                    <p>
                                        <strong>
                                            Status:
                                        </strong>

                                        ${safe(
                                            slot.status
                                        )}
                                    </p>

                                    <button
                                        onclick="deleteOTSlot(${index})"
                                    >
                                        Cancel O.T Slot
                                    </button>

                                </div>

                            `;

                        })
                        .join("")
                }

            </div>

        </div>
    `;
}

/* ============================================================
   BOOK O.T SLOT
   ============================================================ */

function bookOTSlot() {

    const patient =
        document
            .getElementById(
                "otPatient"
            )
            ?.value
            .trim();

    const uhid =
        document
            .getElementById(
                "otUHID"
            )
            ?.value
            .trim();

    const operation =
        document
            .getElementById(
                "otOperation"
            )
            ?.value
            .trim();

    const surgeon =
        document
            .getElementById(
                "otSurgeon"
            )
            ?.value;

    const date =
        document
            .getElementById(
                "otDate"
            )
            ?.value;

    const start =
        document
            .getElementById(
                "otStart"
            )
            ?.value;

    const end =
        document
            .getElementById(
                "otEnd"
            )
            ?.value;

    const status =
        document
            .getElementById(
                "otStatus"
            )
            ?.value;

    if (
        !patient ||
        !operation ||
        !date ||
        !start ||
        !end
    ) {

        alert(
            "Please enter Patient, Operation, Date, Start Time and End Time."
        );

        return;
    }

    if (end <= start) {

        alert(
            "End time must be later than start time."
        );

        return;
    }

    const slots =
        getOTSlots();

    const conflict =
        slots.some(function (slot) {

            if (
                slot.date !== date ||
                slot.status === "Cancelled"
            ) {

                return false;

            }

            return (
                start < slot.end &&
                end > slot.start
            );

        });

    if (conflict) {

        alert(
            "This O.T time overlaps with an existing O.T booking."
        );

        return;
    }

    slots.push({

        patient:
            patient,

        uhid:
            uhid || "",

        operation:
            operation,

        surgeon:
            surgeon || "",

        date:
            date,

        start:
            start,

        end:
            end,

        status:
            status || "Booked"

    });

    saveOTSlots(slots);

    alert(
        "O.T slot booked successfully."
    );

    showOTSlot();
}

/* ============================================================
   DELETE O.T SLOT
   ============================================================ */

function deleteOTSlot(index) {

    const slots =
        getOTSlots();

    if (
        !confirm(
            "Cancel this O.T slot?"
        )
    ) {
        return;
    }

    slots[index].status =
        "Cancelled";

    saveOTSlots(slots);

    showOTSlot();
}

/* ============================================================
   SUVIDHA AI KNOWLEDGE
   ============================================================ */

const SUVIDHA_KNOWLEDGE = {

    identity:
        "I am SUVIDHA AI, the programmed hospital assistant for K. Suvidha Hospital.",

    selfAwareness:
        "My self-awareness is a programmed software self-model. I can keep track of the hospital modules, bed information, O.T slots and patient workflow, but I am not a conscious human being.",

    hospital:
        "K. Suvidha Hospital is configured as a 25-bed hospital.",

    beds:
        "The hospital has 25 beds in total: 4 Ward beds, 4 Daycare beds, 5 ICU beds, 4 Casualty beds and 8 Special Room beds.",

    ward:
        "There are 4 Ward beds.",

    daycare:
        "There are 4 Daycare beds.",

    icu:
        "There are 5 ICU beds.",

    casualty:
        "There are 4 Casualty beds.",

    specialRoom:
        "There are 8 Special Room beds.",

    ot:
        "The O.T SLOT section is used to book operation theatre time. It stores patient name, UHID/IP number, operation, surgeon, date, start time, end time and status.",

    receptionist:
        "SUVIDHA AI is designed to assist the receptionist with patient registration, patient records, bed status, patient location, O.T slots, billing, discharge summaries and hospital navigation.",

    patientRecord:
        "PATIENTS RECORD combines the patient's Front Page, Registration, Consultation, X-Ray/Blood/Investigations, Prescription/Pharmacy, Admission & Treatment, Billing, Follow-up and Discharge Summary.",

    billing:
        "Billing provides fixed hospital billing items. The receptionist enters quantity and rate and the amount is calculated automatically.",

    doctors:
        "The hospital software has a shared doctor database. Doctors added to the database can be used in doctor selection fields."

};

/* ============================================================
   CURRENT BED STATUS FOR SUVIDHA
   ============================================================ */

function getBedStatusForAI() {

    const beds =
        createBeds();

    const occupied =
        beds.filter(function (bed) {

            return bed.occupied;

        });

    let answer =

        "CURRENT BED STATUS\n\n" +

        "Total Beds: 25\n" +

        "Occupied: " +
        occupied.length +
        "\n" +

        "Available: " +
        (25 - occupied.length) +
        "\n\n" +

        "Ward: 4 beds\n" +

        "Daycare: 4 beds\n" +

        "ICU: 5 beds\n" +

        "Casualty: 4 beds\n" +

        "Special Rooms: 8 beds\n";

    if (
        occupied.length > 0
    ) {

        answer +=
            "\nOCCUPIED PATIENTS:\n\n";

        occupied.forEach(
            function (bed) {

                answer +=

                    bed.id +
                    "\nPatient: " +
                    bed.patientName +
                    "\nUHID/IP: " +
                    bed.uhid +
                    "\nDoctor: " +
                    bed.doctor +
                    "\nLocation: " +
                    bed.area +
                    "\n\n";

            }
        );

    } else {

        answer +=
            "\nNo beds are currently marked occupied.";

    }

    return answer;
}

/* ============================================================
   SUVIDHA AI PAGE
   ============================================================ */

function showSuvidha() {

    app.innerHTML = `
        <div class="suvidha-chat-page">

            <div class="suvidha-chat-header">

                <div class="suvidha-chat-title">

                    <div class="suvidha-ai-icon">
                        🤖
                    </div>

                    <div>
                        <h2>SUVIDHA AI</h2>
                        <span>K. Suvidha Hospital Assistant</span>
                    </div>

                </div>

                <button
                    class="suvidha-back-button"
                    onclick="showPage('home')">
                    🏠 Home
                </button>

            </div>


            <div class="suvidha-chat-container">

                <div
                    id="suvidhaMessages"
                    class="suvidha-messages">

                    <div class="suvidha-message ai">

                        <div class="suvidha-message-bubble">

                            👋 <strong>Hello!</strong><br><br>

                            I am <strong>SUVIDHA AI</strong>, the
                            hospital reception assistant.

                            <br><br>

                            You can ask me about:

                            <br>
                            🛏️ Beds<br>
                            🏥 Patients<br>
                            🩺 Doctors<br>
                            💳 Billing<br>
                            🏨 Hospital information<br>
                            🏗️ O.T. slots

                        </div>

                    </div>

                </div>


                <div class="suvidha-chat-input-area">

                    <div class="suvidha-quick-actions">

                        <button onclick="suvidhaQuick('Show bed status')">
                            🛏️ Beds
                        </button>

                        <button onclick="suvidhaQuick('Show O.T. slots')">
                            🏗️ O.T.
                        </button>

                        <button onclick="suvidhaQuick('Show patient records')">
                            📁 Patients
                        </button>

                        <button onclick="suvidhaQuick('Help with billing')">
                            💳 Billing
                        </button>

                    </div>


                    <div class="suvidha-chat-input-row">

                        <textarea
                            id="suvidhaInput"
                            class="suvidha-chat-input"
                            placeholder="Message SUVIDHA AI..."
                            onkeydown="suvidhaEnter(event)">
                        </textarea>

                        <button
                            class="suvidha-mic-button"
                            onclick="startSuvidhaVoice()"
                            title="Voice input">
                            🎤
                        </button>

                        <button
                            class="suvidha-send-button"
                            onclick="sendSuvidhaMessage()"
                            title="Send">
                            ➤
                        </button>

                    </div>

                </div>

            </div>

        </div>
    `;
}function suvidhaEnter(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendSuvidhaMessage();
    }
}


function sendSuvidhaMessage() {

    const input = document.getElementById("suvidhaInput");

    if (!input) return;

    const message = input.value.trim();

    if (!message) return;

    addSuvidhaMessage(message, "user");

    input.value = "";

    setTimeout(function () {

        const reply = getSuvidhaReply(message);

        addSuvidhaMessage(reply, "ai");

    }, 300);
}


function addSuvidhaMessage(message, type) {

    const messages = document.getElementById("suvidhaMessages");

    if (!messages) return;

    const div = document.createElement("div");

    div.className = "suvidha-message " + type;

    div.innerHTML = `
        <div class="suvidha-message-bubble">
            ${escapeSuvidha(message)}
        </div>
    `;

    messages.appendChild(div);

    messages.scrollTop = messages.scrollHeight;
}


function suvidhaQuick(message) {

    const input = document.getElementById("suvidhaInput");

    if (!input) return;

    input.value = message;

    sendSuvidhaMessage();
}


function escapeSuvidha(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


function getSuvidhaReply(message) {

    const text = message.trim();
    const lower = text.toLowerCase();

    /* ==========================================
       REMEMBER USER NAME
       ========================================== */

    const nameMatch = text.match(
        /(?:my name is|i am|i'm|call me)\s+([a-zA-Z][a-zA-Z .'-]{1,40})/i
    );

    if (nameMatch) {

        const name = nameMatch[1]
            .trim()
            .replace(/\s+/g, " ");

        localStorage.setItem(
            "suvidhaUserName",
            name
        );

        return `
            👋 Hello <strong>${escapeSuvidha(name)}</strong>!

            <br><br>

            I will remember your name on this device.

            <br><br>

            <strong>What help can I do for you?</strong>

            <br><br>

            🏥 Hospital Information<br>
            🛏️ Bed Management<br>
            🩺 Doctor Information<br>
            📁 Patient Records<br>
            💳 Billing<br>
            🏗️ O.T. Slots<br>
            📄 Discharge Summary
        `;
    }


    /* ==========================================
       GET SAVED NAME
       ========================================== */

    const savedName =
        localStorage.getItem("suvidhaUserName");

    const helloName = savedName
        ? escapeSuvidha(savedName)
        : "there";


    /* ==========================================
       GREETING
       ========================================== */

    if (
        lower === "hi" ||
        lower === "hello" ||
        lower === "hey" ||
        lower.includes("good morning") ||
        lower.includes("good afternoon") ||
        lower.includes("good evening")
    ) {

        return `
            👋 Hello <strong>${helloName}</strong>!

            <br><br>

            I am <strong>SUVIDHA AI</strong>,
            your K. Suvidha Hospital assistant.

            <br><br>

            <strong>What help can I do for you?</strong>

            <br><br>

            You can ask me a question or choose a topic:
            <br><br>

            🩺 How to add doctor information?<br>
            🛏️ How to update bed status?<br>
            📁 How to create a patient record?<br>
            💳 How to make a bill?<br>
            🏗️ How to book an O.T. slot?<br>
            📄 How to prepare a discharge summary?
        `;
    }


    /* ==========================================
       ADD DOCTOR
       ========================================== */

    if (
        lower.includes("add doctor") ||
        lower.includes("add a doctor") ||
        lower.includes("doctor information") ||
        lower.includes("how to add doctor")
    ) {

        return `
            🩺 <strong>How to Add Doctor Information</strong>

            <br><br>

            Follow these steps:

            <br><br>

            <strong>Step 1:</strong><br>
            Open the <strong>Doctor Information</strong>
            section.

            <br><br>

            <strong>Step 2:</strong><br>
            Click <strong>Add Doctor</strong>.

            <br><br>

            <strong>Step 3:</strong><br>
            Enter the doctor's full name.

            <br><br>

            <strong>Step 4:</strong><br>
            Enter the doctor's qualification or specialty.

            <br><br>

            <strong>Step 5:</strong><br>
            Enter registration or other required
            professional information.

            <br><br>

            <strong>Step 6:</strong><br>
            Click <strong>Save Doctor</strong>.

            <br><br>

            <strong>Step 7:</strong><br>
            The saved doctor should become available
            in the doctor selection lists used by
            the hospital system.

            <br><br>

            💡 If you want, ask me:
            <strong>"How do I select a doctor in consultation?"</strong>
        `;
    }


    /* ==========================================
       BED MANAGEMENT
       ========================================== */

    if (
        lower.includes("bed") ||
        lower.includes("beds") ||
        lower.includes("bed status") ||
        lower.includes("occupied")
    ) {

        return `
            🛏️ <strong>How to Update Bed Status</strong>

            <br><br>

            The hospital has <strong>25 beds</strong>.

            <br><br>

            <strong>Step 1:</strong><br>
            Open <strong>Bed Management</strong>.

            <br><br>

            <strong>Step 2:</strong><br>
            Select the required bed.

            <br><br>

            <strong>Step 3:</strong><br>
            Select <strong>Occupied</strong> or
            <strong>Available</strong>.

            <br><br>

            <strong>Step 4:</strong><br>
            If occupied, enter the patient's name.

            <br><br>

            <strong>Step 5:</strong><br>
            Enter the UHID.

            <br><br>

            <strong>Step 6:</strong><br>
            Enter the patient's location,
            such as Ward, Daycare, ICU, Casualty
            or Special Room.

            <br><br>

            <strong>Step 7:</strong><br>
            Save the bed information.

            <br><br>

            The bed status can then be displayed
            as <strong>Occupied</strong> or
            <strong>Available</strong>.
        `;
    }


    /* ==========================================
       PATIENT RECORD
       ========================================== */

    if (
        lower.includes("patient record") ||
        lower.includes("patients record") ||
        lower.includes("patient registration") ||
        lower.includes("create patient")
    ) {

        return `
            📁 <strong>How to Create a Patient Record</strong>

            <br><br>

            <strong>Step 1:</strong><br>
            Open <strong>Patients Record</strong>.

            <br><br>

            <strong>Step 2:</strong><br>
            Open the <strong>Registration</strong> page.

            <br><br>

            <strong>Step 3:</strong><br>
            Enter the patient's name and basic details.

            <br><br>

            <strong>Step 4:</strong><br>
            Enter the UHID.

            <br><br>

            <strong>Step 5:</strong><br>
            Complete the registration information.

            <br><br>

            <strong>Step 6:</strong><br>
            Continue through Consultation,
            Investigations, Prescription,
            Admission & Treatment, Billing,
            Follow-up and Discharge Summary.

            <br><br>

            <strong>Step 7:</strong><br>
            Save the patient record.

            <br><br>

            The goal is to keep the patient's complete
            hospital information connected to the same
            patient record.
        `;
    }


    /* ==========================================
       BILLING
       ========================================== */

    if (
        lower.includes("billing") ||
        lower.includes("bill") ||
        lower.includes("make a bill")
    ) {

        return `
            💳 <strong>How to Make a Patient Bill</strong>

            <br><br>

            <strong>Step 1:</strong><br>
            Open <strong>Billing</strong>.

            <br><br>

            <strong>Step 2:</strong><br>
            Select or enter the patient.

            <br><br>

            <strong>Step 3:</strong><br>
            Confirm the patient's UHID and name.

            <br><br>

            <strong>Step 4:</strong><br>
            Select the required billing items.

            <br><br>

            <strong>Step 5:</strong><br>
            Enter the quantity.

            <br><br>

            <strong>Step 6:</strong><br>
            Enter or update the rate.

            <br><br>

            <strong>Step 7:</strong><br>
            The amount should calculate as:

            <br><br>

            <strong>Amount = Quantity × Rate</strong>

            <br><br>

            <strong>Step 8:</strong><br>
            Enter discount if applicable.

            <br><br>

            <strong>Step 9:</strong><br>
            Enter amount paid.

            <br><br>

            <strong>Step 10:</strong><br>
            Select the payment mode.

            <br><br>

            <strong>Step 11:</strong><br>
            Check the balance.

            <br><br>

            <strong>Step 12:</strong><br>
            Save and print the bill.
        `;
    }


    /* ==========================================
       O.T. SLOT
       ========================================== */

    if (
        lower.includes("o.t") ||
        lower.includes("ot slot") ||
        lower.includes("operation theatre") ||
        lower.includes("operation theater") ||
        lower.includes("book ot")
    ) {

        return `
            🏗️ <strong>How to Book an O.T. Slot</strong>

            <br><br>

            <strong>Step 1:</strong><br>
            Open <strong>O.T. Slots</strong>.

            <br><br>

            <strong>Step 2:</strong><br>
            Select the operation date.

            <br><br>

            <strong>Step 3:</strong><br>
            Select the starting time.

            <br><br>

            <strong>Step 4:</strong><br>
            Enter the expected duration.

            <br><br>

            <strong>Step 5:</strong><br>
            Enter the patient name and UHID.

            <br><br>

            <strong>Step 6:</strong><br>
            Select the doctor.

            <br><br>

            <strong>Step 7:</strong><br>
            Enter the procedure or operation.

            <br><br>

            <strong>Step 8:</strong><br>
            Save the O.T. slot.

            <br><br>

            SUVIDHA can then use the stored O.T.
            information when answering questions
            about the theatre schedule.
        `;
    }


    /* ==========================================
       DISCHARGE SUMMARY
       ========================================== */

    if (
        lower.includes("discharge") ||
        lower.includes("discharge summary")
    ) {

        return `
            📄 <strong>How to Prepare a Discharge Summary</strong>

            <br><br>

            <strong>Step 1:</strong><br>
            Open the patient's record.

            <br><br>

            <strong>Step 2:</strong><br>
            Open <strong>Discharge Summary</strong>.

            <br><br>

            <strong>Step 3:</strong><br>
            Confirm patient name and UHID.

            <br><br>

            <strong>Step 4:</strong><br>
            Enter admission and discharge details.

            <br><br>

            <strong>Step 5:</strong><br>
            Enter the final diagnosis.

            <br><br>

            <strong>Step 6:</strong><br>
            Enter investigations and procedures.

            <br><br>

            <strong>Step 7:</strong><br>
            Enter the hospital course.

            <br><br>

            <strong>Step 8:</strong><br>
            Enter medicines and advice.

            <br><br>

            <strong>Step 9:</strong><br>
            Enter follow-up instructions.

            <br><br>

            <strong>Step 10:</strong><br>
            Save and print the discharge summary.
        `;
    }


    /* ==========================================
       HELP
       ========================================== */

    if (
        lower.includes("help") ||
        lower.includes("what can you do") ||
        lower.includes("what can i ask")
    ) {

        return `
            🤖 <strong>SUVIDHA AI Help</strong>

            <br><br>

            Hello <strong>${helloName}</strong>!

            <br><br>

            I can guide you step by step with:

            <br><br>

            🩺 Doctor Information<br>
            🛏️ Bed Management<br>
            📁 Patient Records<br>
            🧑‍⚕️ Registration<br>
            🩺 Consultation<br>
            🧪 Investigations<br>
            💊 Prescription / Pharmacy<br>
            🏥 Admission & Treatment<br>
            💳 Billing<br>
            📅 Follow-up<br>
            📄 Discharge Summary<br>
            🏗️ O.T. Slots

            <br><br>

            Ask me something like:

            <br><br>

            <strong>"How do I add doctor information?"</strong>
        `;
    }


    /* ==========================================
       DEFAULT RESPONSE
       ========================================== */

    return `
        🤖 <strong>SUVIDHA AI</strong>

        <br><br>

        Hello <strong>${helloName}</strong>!

        <br><br>

        I can explain hospital software tasks
        <strong>step by step</strong>.

        <br><br>

        Try asking:

        <br><br>

        🩺 "How do I add doctor information?"<br>
        🛏️ "How do I update a bed?"<br>
        📁 "How do I create a patient record?"<br>
        💳 "How do I make a bill?"<br>
        🏗️ "How do I book an O.T. slot?"<br>
        📄 "How do I prepare a discharge summary?"

        <br><br>

        Or simply tell me your name, for example:

        <br><br>

        <strong>"My name is Rahul"</strong>
    `;
}
/* ============================================================
   SUVIDHA AI QUESTION
   ============================================================ */

function suvidhaAsk() {

    const input =
        document.getElementById(
            "suvidhaQuestion"
        );

    const answerBox =
        document.getElementById(
            "suvidhaAnswer"
        );

    if (
        !input ||
        !answerBox
    ) {

        return;

    }

    const question =
        input.value
            .toLowerCase()
            .trim();

    if (!question) {

        answerBox.textContent =
            "Please ask me something.";

        return;

    }

    let answer =
        "I can help with patient records, beds, O.T slots, billing, registration, doctors and hospital information.";

    /* BED */

    if (
        question.includes("bed") ||
        question.includes("beds") ||
        question.includes("occupied") ||
        question.includes("available")
    ) {

        answer =
            getBedStatusForAI();

    }

    /* ICU */

    else if (
        question.includes("icu")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.icu;

    }

    /* WARD */

    else if (
        question.includes("ward")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.ward;

    }

    /* DAYCARE */

    else if (
        question.includes("daycare")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.daycare;

    }

    /* CASUALTY */

    else if (
        question.includes("casualty")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.casualty;

    }

    /* SPECIAL ROOM */

    else if (
        question.includes("special room") ||
        question.includes("special rooms")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.specialRoom;

    }

    /* OT */

    else if (
        question.includes("ot") ||
        question.includes("o.t") ||
        question.includes("operation") ||
        question.includes("slot")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.ot;

    }

    /* RECEPTION */

    else if (
        question.includes("reception") ||
        question.includes("receptionist")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.receptionist;

    }

    /* PATIENT */

    else if (
        question.includes("patient record") ||
        question.includes("patient records") ||
        question.includes("patient")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.patientRecord;

    }

    /* BILLING */

    else if (
        question.includes("bill") ||
        question.includes("billing")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.billing;

    }

    /* DOCTOR */

    else if (
        question.includes("doctor") ||
        question.includes("doctors")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.doctors;

    }

    /* SELF AWARENESS */

    else if (
        question.includes("self aware") ||
        question.includes("self-awareness") ||
        question.includes("conscious") ||
        question.includes("consciousness")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.selfAwareness;

    }

    /* HOSPITAL */

    else if (
        question.includes("hospital")
    ) {

        answer =
            SUVIDHA_KNOWLEDGE.identity +
            "\n\n" +
            SUVIDHA_KNOWLEDGE.hospital +
            "\n\n" +
            SUVIDHA_KNOWLEDGE.beds;

    }

    answerBox.textContent =
        answer;
}

/* ============================================================
   SUVIDHA QUICK QUESTIONS
   ============================================================ */

function suvidhaQuick(type) {

    const input =
        document.getElementById(
            "suvidhaQuestion"
        );

    if (!input) {
        return;
    }

    if (type === "beds") {

        input.value =
            "Show current bed status";

    }

    else if (type === "ot") {

        input.value =
            "Tell me about O.T slots";

    }

    else if (type === "patient") {

        input.value =
            "What is in the patient record?";

    }

    else if (type === "reception") {

        input.value =
            "How can you help the receptionist?";

    }

    else if (type === "hospital") {

        input.value =
            "Tell me about the hospital";

    }

    suvidhaAsk();
}

/* ============================================================
   MAIN PAGE ROUTER
   ============================================================ */

function showPage(page) {

    switch (page) {

        case "home":

            showHome();

            break;

        case "patient-record":

            showPatientRecord(1);

            break;

        case "registration":

            showRegistration();

            break;

        case "consultation":

            showConsultation();

            break;

        case "billing":

            showBilling();

            break;

        case "discharge":

            showDischarge();

            break;

        case "beds":

            showBedManagement();

            break;

        case "ot-slot":

            showOTSlot();

            break;

        case "suvidha":

            showSuvidha();

            break;

        default:

            showHome();

            break;

    }

    window.scrollTo(
        0,
        0
    );
}

/* ============================================================
   INITIALIZE APPLICATION
   ============================================================ */

function initializeKSuvidha() {

    getApp();

    if (!app) {
        return;
    }

    createBeds();

    showHome();
}

/* ============================================================
   START APPLICATION
   ============================================================ */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeKSuvidha
    );

} else {

    initializeKSuvidha();

}
/* ===============================
   K SUVIDHA HOSPITAL - SIDE MENU
   =============================== */

function openMenu() {
    const menu = document.querySelector(".side-menu");

    if (!menu) {
        console.log("Side menu not found");
        return;
    }

    menu.classList.toggle("open");
}

/* Close menu when clicking outside */
document.addEventListener("click", function (event) {

    const menu = document.querySelector(".side-menu");
    const button = document.querySelector(".menu-button");

    if (!menu || !button) return;

    if (
        menu.classList.contains("open") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("open");
    }
});

/* Close menu when selecting a menu item */
document.addEventListener("click", function (event) {

    if (event.target.closest(".side-menu button, .side-menu a")) {

        const menu = document.querySelector(".side-menu");

        if (menu) {
            menu.classList.remove("open");
        }
    }
});
