/* ============================================================
   K. SUVIDHA HOSPITAL
   COMPLETE MASTER SCRIPT
   ============================================================

   Replace the ENTIRE script.js with this file.

   Features:
   - Patients Record
   - Registration
   - Consultation
   - Investigations
   - Prescription / Pharmacy
   - Admission & Treatment
   - Billing
   - Follow-up
   - Discharge Summary
   - Beds
   - O.T. SLOT
   - Saved Files
   - SUVIDHA AI
   - Voice input
   - Voice output
   - Print
   - UHID numbering
   ============================================================ */

(function () {

    "use strict";

    const app = document.getElementById("app");

    if (!app) {
        console.error("K. Suvidha Hospital: #app was not found.");
        return;
    }


    /* ========================================================
       SHARED DATA CONFIGURATION
       ======================================================== */

    /*
       IMPORTANT:

       false = browser-only saving.

       true = use shared cloud database.

       To make one computer see another computer's saved work,
       you need a real shared database.

       Example:

       enabled: true,
       url: "https://YOUR-DATABASE.firebaseio.com"

       Do NOT leave an unrestricted public database online.
    */

    const CLOUD = {
        enabled: false,
        url: "PASTE_YOUR_FIREBASE_DATABASE_URL_HERE"
    };


    /* ========================================================
       STORAGE
       ======================================================== */

    const STORAGE_KEY = "ksuvidhaDataV3";


    function createEmptyState() {

        return {

            patientCounter: 0,

            patients: [],

            records: [],

            consultations: [],

            investigations: [],

            prescriptions: [],

            admissions: [],

            followups: [],

            discharges: [],

            beds: [],

            bills: [],

            otBookings: [],

            doctors: [],

            currentPatientId: "",

            selectedOT: ""

        };

    }


    function loadState() {

        try {

            const saved =
                localStorage.getItem(STORAGE_KEY);

            if (!saved) {
                return createEmptyState();
            }

            const data = JSON.parse(saved);

            return Object.assign(
                createEmptyState(),
                data
            );

        } catch (error) {

            console.error(error);

            return createEmptyState();
        }

    }


    const state = loadState();


    /* ========================================================
       DOCTORS
       ======================================================== */

    const DEFAULT_DOCTORS = [

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
        "dr sagar",
        "dr cn kulkarni"

    ];


    state.doctors =
        Array.from(
            new Set(
                [
                    ...DEFAULT_DOCTORS,
                    ...(state.doctors || [])
                ]
            )
        );


    function saveState() {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

        if (CLOUD.enabled) {
            cloudSave();
        }

    }


    /* ========================================================
       GENERAL HELPERS
       ======================================================== */

    function uid(prefix) {

        return (
            prefix +
            "-" +
            Date.now().toString(36) +
            "-" +
            Math.random()
                .toString(36)
                .substring(2, 8)
        );

    }


    function escapeHTML(value) {

        return String(
            value === undefined ||
            value === null
                ? ""
                : value
        )
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function getValue(id) {

        const element =
            document.getElementById(id);

        if (!element) {
            return "";
        }

        return element.value.trim();

    }


    function setValue(id, value) {

        const element =
            document.getElementById(id);

        if (element) {
            element.value = value || "";
        }

    }


    function today() {

        return new Date()
            .toISOString()
            .slice(0, 10);

    }


    function printCurrentPage() {

        window.print();

    }

    window.printCurrentPage =
        printCurrentPage;


    /* ========================================================
       MENU
       ======================================================== */

    function openMenu() {

        const menu =
            document.getElementById("sideMenu") ||
            document.querySelector(".side-menu");

        if (menu) {

            menu.classList.add("open");

        }

    }


    function closeMenu() {

        const menu =
            document.getElementById("sideMenu") ||
            document.querySelector(".side-menu");

        if (menu) {

            menu.classList.remove("open");

        }

    }


    window.openMenu = openMenu;
    window.closeMenu = closeMenu;


    /* ========================================================
       PAGE HEADER
       ======================================================== */

    function pageHeader(title, description) {

        return `

            <div class="ks-page-head">

                <div>

                    <div class="ks-eyebrow">
                        K. SUVIDHA HOSPITAL
                    </div>

                    <h1>
                        ${escapeHTML(title)}
                    </h1>

                    <p>
                        ${escapeHTML(description || "")}
                    </p>

                </div>

                <div class="ks-head-actions">

                    <button
                        type="button"
                        onclick="showPage('home')">

                        Home

                    </button>

                    <button
                        type="button"
                        onclick="printCurrentPage()">

                        Print

                    </button>

                </div>

            </div>

        `;

    }


    /* ========================================================
       FIELD BUILDERS
       ======================================================== */

    function field(
        label,
        id,
        type = "text",
        placeholder = ""
    ) {

        return `

            <label class="ks-field">

                <span>
                    ${escapeHTML(label)}
                </span>

                <input
                    id="${id}"
                    type="${type}"
                    placeholder="${escapeHTML(placeholder)}">

            </label>

        `;

    }


    function area(
        label,
        id,
        placeholder = ""
    ) {

        return `

            <label class="ks-field full">

                <span>
                    ${escapeHTML(label)}
                </span>

                <textarea
                    id="${id}"
                    placeholder="${escapeHTML(placeholder)}">
                </textarea>

            </label>

        `;

    }


    function selectField(
        label,
        id,
        options
    ) {

        return `

            <label class="ks-field">

                <span>
                    ${escapeHTML(label)}
                </span>

                <select id="${id}">

                    <option value="">
                        Select
                    </option>

                    ${options
                        .map(
                            option =>
                                `<option>
                                    ${escapeHTML(option)}
                                </option>`
                        )
                        .join("")}

                </select>

            </label>

        `;

    }


    /* ========================================================
       PAGE ROUTER
       ======================================================== */

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

        else if (page === "beds") {
            showBeds();
        }

        else if (page === "ot") {
            showOT();
        }

        else if (page === "saved-files") {
            showSavedFiles();
        }

        else if (page === "suvidha") {
            showSuvidha();
        }

        else {
            showHome();
        }

        window.scrollTo(0, 0);

    }

    window.showPage = showPage;


    /* ========================================================
       HOME
       ======================================================== */

    function showHome() {

        app.innerHTML = `

            <main class="ks-home">

                <section class="ks-hero">

                    <div>

                        <div class="ks-eyebrow">
                            K. SUVIDHA HOSPITAL
                        </div>

                        <h1>
                            Super Speciality Orthopaedic
                            & Multispeciality Hospital
                        </h1>

                        <p>
                            Hospital management software for
                            patient registration, consultation,
                            treatment, billing, follow-up,
                            discharge, beds and O.T. booking.
                        </p>

                        <div class="ks-hero-actions">

                            <button
                                class="primary"
                                onclick="showPage('patient-record')">

                                Patients Record

                            </button>

                            <button
                                onclick="showPage('registration')">

                                Register Patient

                            </button>

                            <button
                                onclick="showPage('saved-files')">

                                Saved Files

                            </button>

                        </div>

                    </div>


                    <div class="ks-hero-logo">

                        <img
                            src="image.png"
                            alt="K. Suvidha Hospital Logo">

                        <div>
                            K. Suvidha Hospital
                        </div>

                        <small>
                            Raichur
                        </small>

                    </div>

                </section>


                <section class="ks-cards">

                    <button
                        onclick="showPage('patient-record')">

                        <b>Patients Record</b>

                        <span>
                            Complete patient file
                        </span>

                    </button>


                    <button
                        onclick="showPage('consultation')">

                        <b>Consultation</b>

                        <span>
                            Clinical consultation
                        </span>

                    </button>


                    <button
                        onclick="showPage('investigations')">

                        <b>Investigations</b>

                        <span>
                            X-Ray, blood tests and reports
                        </span>

                    </button>


                    <button
                        onclick="showPage('prescription')">

                        <b>Prescription / Pharmacy</b>

                        <span>
                            Medicines and instructions
                        </span>

                    </button>


                    <button
                        onclick="showPage('admission')">

                        <b>Admission & Treatment</b>

                        <span>
                            Ward, room and treatment
                        </span>

                    </button>


                    <button
                        onclick="showPage('billing')">

                        <b>Billing</b>

                        <span>
                            Hospital billing
                        </span>

                    </button>


                    <button
                        onclick="showPage('followup')">

                        <b>Follow-up</b>

                        <span>
                            Review and next visit
                        </span>

                    </button>


                    <button
                        onclick="showPage('discharge')">

                        <b>Discharge Summary</b>

                        <span>
                            Final summary and print
                        </span>

                    </button>


                    <button
                        onclick="showPage('beds')">

                        <b>Beds</b>

                        <span>
                            25-bed occupancy
                        </span>

                    </button>


                    <button
                        onclick="showPage('ot')">

                        <b>O.T. SLOT</b>

                        <span>
                            Book Modular or General Surgery O.T.
                        </span>

                    </button>


                    <button
                        class="ai-card"
                        onclick="showPage('suvidha')">

                        <b>
                            SUVIDHA AI
                        </b>

                        <span>
                            Hospital software assistant
                        </span>

                    </button>


                    <button
                        onclick="showPage('saved-files')">

                        <b>
                            Saved Files
                        </b>

                        <span>
                            Open saved hospital work
                        </span>

                    </button>

                </section>

            </main>

        `;

    }


    /* ========================================================
       PATIENT RECORD
       ======================================================== */

    const PATIENT_PAGES = [

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


    function showPatientRecord(page = 1) {

        page =
            Math.max(
                1,
                Math.min(
                    9,
                    Number(page) || 1
                )
            );


        let content = "";


        if (page === 1) {

            content = `

                ${field(
                    "UHID / IP Number",
                    "prUhid"
                )}

                ${field(
                    "Patient Name",
                    "prName"
                )}

                ${field(
                    "Father / Husband Name",
                    "prRelative"
                )}

                ${field(
                    "Mobile Number",
                    "prMobile"
                )}

                ${field(
                    "Age",
                    "prAge",
                    "number"
                )}

                ${selectField(
                    "Sex",
                    "prSex",
                    [
                        "Male",
                        "Female",
                        "Other"
                    ]
                )}

                ${field(
                    "Registration Date",
                    "prDate",
                    "date"
                )}

                ${field(
                    "Consultant Doctor",
                    "prDoctor"
                )}

                ${area(
                    "Address",
                    "prAddress"
                )}

                ${area(
                    "Reason for Visit",
                    "prReason"
                )}

            `;

        }


        if (page === 2) {

            content = `

                ${field(
                    "Registration Number",
                    "regNo"
                )}

                ${field(
                    "Patient Name",
                    "regName"
                )}

                ${field(
                    "Mobile",
                    "regMobile"
                )}

                ${field(
                    "Date",
                    "regDate",
                    "date"
                )}

                ${area(
                    "Address",
                    "regAddress"
                )}

                ${area(
                    "Registration Notes",
                    "regNotes"
                )}

            `;

        }


        if (page === 3) {

            content = `

                ${field(
                    "Doctor",
                    "conDoctor"
                )}

                ${field(
                    "Visit Date",
                    "conDate",
                    "date"
                )}

                ${area(
                    "Chief Complaints",
                    "conComplaints"
                )}

                ${area(
                    "History",
                    "conHistory"
                )}

                ${area(
                    "Examination",
                    "conExam"
                )}

                ${area(
                    "Diagnosis",
                    "conDiagnosis"
                )}

                ${area(
                    "Treatment Plan",
                    "conPlan"
                )}

            `;

        }


        if (page === 4) {

            content = `

                ${field(
                    "Investigation Date",
                    "invDate",
                    "date"
                )}

                ${field(
                    "X-Ray",
                    "invXray"
                )}

                ${area(
                    "Blood Test Results",
                    "invBlood"
                )}

                ${area(
                    "Other Investigations",
                    "invOther"
                )}

                ${area(
                    "Impression",
                    "invImpression"
                )}

            `;

        }


        if (page === 5) {

            content = `

                ${field(
                    "Prescription Date",
                    "rxDate",
                    "date"
                )}

                ${area(
                    "Medicines",
                    "rxMedicines"
                )}

                ${area(
                    "Dose / Frequency / Duration",
                    "rxDose"
                )}

                ${area(
                    "Instructions",
                    "rxInstructions"
                )}

            `;

        }


        if (page === 6) {

            content = `

                ${field(
                    "Admission Date",
                    "admDate",
                    "date"
                )}

                ${selectField(
                    "Area",
                    "admArea",
                    [
                        "Ward",
                        "Daycare",
                        "ICU",
                        "Casualty",
                        "Special Room"
                    ]
                )}

                ${field(
                    "Bed Number",
                    "admBed"
                )}

                ${field(
                    "Doctor",
                    "admDoctor"
                )}

                ${area(
                    "Treatment / Procedures",
                    "admTreatment"
                )}

                ${area(
                    "Hospital Course",
                    "admCourse"
                )}

            `;

        }


        if (page === 7) {

            content = `

                ${field(
                    "Bill Number",
                    "billNo"
                )}

                ${field(
                    "Total",
                    "billTotal",
                    "number"
                )}

                ${field(
                    "Discount",
                    "billDiscount",
                    "number"
                )}

                ${field(
                    "Paid",
                    "billPaid",
                    "number"
                )}

                ${field(
                    "Balance",
                    "billBalance",
                    "number"
                )}

                ${selectField(
                    "Payment Mode",
                    "billMode",
                    [
                        "Cash",
                        "Card",
                        "UPI",
                        "Insurance",
                        "Other"
                    ]
                )}

                ${area(
                    "Billing Notes",
                    "billNotes"
                )}

            `;

        }


        if (page === 8) {

            content = `

                ${field(
                    "Follow-up Date",
                    "fuDate",
                    "date"
                )}

                ${field(
                    "Doctor",
                    "fuDoctor"
                )}

                ${area(
                    "Progress",
                    "fuProgress"
                )}

                ${area(
                    "Medicines",
                    "fuMedicines"
                )}

                ${area(
                    "Advice",
                    "fuAdvice"
                )}

                ${field(
                    "Next Appointment",
                    "fuNextDate",
                    "date"
                )}

            `;

        }


        if (page === 9) {

            content = `

                ${field(
                    "Discharge Date",
                    "dsDate",
                    "date"
                )}

                ${field(
                    "Doctor",
                    "dsDoctor"
                )}

                ${area(
                    "Final Diagnosis",
                    "dsDiagnosis"
                )}

                ${area(
                    "Treatment Given",
                    "dsTreatment"
                )}

                ${area(
                    "Medicines at Discharge",
                    "dsMedicines"
                )}

                ${area(
                    "Discharge Advice",
                    "dsAdvice"
                )}

                ${area(
                    "Follow-up Advice",
                    "dsFollowup"
                )}

            `;

        }


        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Patients Record",
                    PATIENT_PAGES[page - 1]
                )}


                <section class="ks-paper">

                    <div class="ks-paper-head">

                        <img
                            src="image.png"
                            alt="Hospital Logo">

                        <div>

                            <b>
                                K. SUVIDHA HOSPITAL
                            </b>

                            <small>
                                Super Speciality Orthopaedic
                                & Multispeciality Hospital
                            </small>

                        </div>

                    </div>


                    <h2>
                        ${escapeHTML(
                            PATIENT_PAGES[page - 1]
                        )}
                    </h2>


                    <div class="ks-form-grid">

                        ${content}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="savePatientRecordPage(${page})">

                            Save Patient Record

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>


                <div class="ks-pager">

                    ${PATIENT_PAGES
                        .map(
                            (name, index) => `

                                <button
                                    class="${
                                        index + 1 === page
                                            ? "active"
                                            : ""
                                    }"
                                    onclick="showPatientRecord(${
                                        index + 1
                                    })">

                                    ${index + 1}

                                </button>

                            `
                        )
                        .join("")}

                </div>

            </main>

        `;

    }

    window.showPatientRecord =
        showPatientRecord;


    function savePatientRecordPage(page) {

        const values = {};


        document
            .querySelectorAll(
                "input, select, textarea"
            )
            .forEach(
                element => {

                    if (
                        element.id &&
                        element.value.trim()
                    ) {

                        values[element.id] =
                            element.value;

                    }

                }
            );


        const record = {

            id:
                state.currentPatientId ||
                uid("PATIENT-RECORD"),

            page,

            pageName:
                PATIENT_PAGES[page - 1],

            values,

            savedAt:
                new Date().toISOString()

        };


        const existing =
            state.records.find(
                item =>
                    item.id === record.id &&
                    item.page === page
            );


        if (existing) {

            Object.assign(
                existing,
                record
            );

        }

        else {

            state.records.push(record);

        }


        if (!state.currentPatientId) {

            state.currentPatientId =
                record.id;

        }


        saveState();


        alert(
            PATIENT_PAGES[page - 1] +
            " saved successfully."
        );

    }

    window.savePatientRecordPage =
        savePatientRecordPage;


    /* ========================================================
       REGISTRATION
       ======================================================== */

    function showRegistration() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Patient Registration",
                    "Create a new patient"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient Name",
                            "rName"
                        )}

                        ${field(
                            "Father / Husband Name",
                            "rRelative"
                        )}

                        ${field(
                            "Mobile",
                            "rMobile"
                        )}

                        ${field(
                            "Age",
                            "rAge",
                            "number"
                        )}

                        ${selectField(
                            "Sex",
                            "rSex",
                            [
                                "Male",
                                "Female",
                                "Other"
                            ]
                        )}

                        ${field(
                            "Date",
                            "rDate",
                            "date"
                        )}

                        ${field(
                            "Address",
                            "rAddress"
                        )}

                        ${field(
                            "Consultant Doctor",
                            "rDoctor"
                        )}

                        ${area(
                            "Notes",
                            "rNotes"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveRegistration()">

                            Save Patient

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>

            </main>

        `;

    }


    window.showRegistration =
        showRegistration;


    function saveRegistration() {

        const name =
            getValue("rName");

        if (!name) {

            alert(
                "Please enter patient name."
            );

            return;

        }


        state.patientCounter++;


        const patient = {

            id: uid("PATIENT"),

            uhid:
                String(
                    state.patientCounter
                ).padStart(6, "0"),

            name,

            relative:
                getValue("rRelative"),

            mobile:
                getValue("rMobile"),

            age:
                getValue("rAge"),

            sex:
                getValue("rSex"),

            date:
                getValue("rDate") ||
                today(),

            address:
                getValue("rAddress"),

            doctor:
                getValue("rDoctor"),

            notes:
                getValue("rNotes"),

            savedAt:
                new Date().toISOString()

        };


        state.patients.push(patient);

        state.currentPatientId =
            patient.id;


        saveState();


        alert(
            "Patient saved successfully.\n\nUHID: " +
            patient.uhid
        );

    }

    window.saveRegistration =
        saveRegistration;


    /* ========================================================
       CONSULTATION
       ======================================================== */

    function showConsultation() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Consultation",
                    "Clinical consultation"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "cUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "cName"
                        )}

                        ${field(
                            "Doctor",
                            "cDoctor"
                        )}

                        ${field(
                            "Visit Date",
                            "cDate",
                            "date"
                        )}

                        ${area(
                            "Chief Complaints",
                            "cComplaints"
                        )}

                        ${area(
                            "History",
                            "cHistory"
                        )}

                        ${area(
                            "Examination",
                            "cExam"
                        )}

                        ${area(
                            "Diagnosis",
                            "cDiagnosis"
                        )}

                        ${area(
                            "Treatment Plan",
                            "cPlan"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveConsultation()">

                            Save Consultation

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print Consultation

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showConsultation =
        showConsultation;


    function saveConsultation() {

        state.consultations.push({

            id: uid("CONSULT"),

            uhid:
                getValue("cUhid"),

            patient:
                getValue("cName"),

            doctor:
                getValue("cDoctor"),

            date:
                getValue("cDate") ||
                today(),

            complaints:
                getValue("cComplaints"),

            history:
                getValue("cHistory"),

            examination:
                getValue("cExam"),

            diagnosis:
                getValue("cDiagnosis"),

            treatment:
                getValue("cPlan"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Consultation saved successfully."
        );

    }

    window.saveConsultation =
        saveConsultation;


    /* ========================================================
       INVESTIGATIONS
       ======================================================== */

    function showInvestigations() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "X-Ray / Blood / Investigations",
                    "Enter investigation results"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "iUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "iName"
                        )}

                        ${field(
                            "Date",
                            "iDate",
                            "date"
                        )}

                        ${field(
                            "X-Ray",
                            "iXray"
                        )}

                        ${area(
                            "Blood Test",
                            "iBlood"
                        )}

                        ${area(
                            "Other Investigations",
                            "iOther"
                        )}

                        ${area(
                            "Impression",
                            "iImpression"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveInvestigation()">

                            Save Investigation

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showInvestigations =
        showInvestigations;


    function saveInvestigation() {

        state.investigations.push({

            id: uid("INV"),

            uhid:
                getValue("iUhid"),

            patient:
                getValue("iName"),

            date:
                getValue("iDate") ||
                today(),

            xray:
                getValue("iXray"),

            blood:
                getValue("iBlood"),

            other:
                getValue("iOther"),

            impression:
                getValue("iImpression"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Investigation saved successfully."
        );

    }

    window.saveInvestigation =
        saveInvestigation;


    /* ========================================================
       PRESCRIPTION
       ======================================================== */

    function showPrescription() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Prescription / Pharmacy",
                    "Medicines and instructions"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "xUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "xName"
                        )}

                        ${field(
                            "Date",
                            "xDate",
                            "date"
                        )}

                        ${area(
                            "Medicines",
                            "xMedicines"
                        )}

                        ${area(
                            "Dose / Frequency / Duration",
                            "xDose"
                        )}

                        ${area(
                            "Instructions",
                            "xInstructions"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="savePrescription()">

                            Save Prescription

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showPrescription =
        showPrescription;


    function savePrescription() {

        state.prescriptions.push({

            id: uid("RX"),

            uhid:
                getValue("xUhid"),

            patient:
                getValue("xName"),

            date:
                getValue("xDate") ||
                today(),

            medicines:
                getValue("xMedicines"),

            dose:
                getValue("xDose"),

            instructions:
                getValue("xInstructions"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Prescription saved successfully."
        );

    }

    window.savePrescription =
        savePrescription;


    /* ========================================================
       ADMISSION
       ======================================================== */

    function showAdmission() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Admission & Treatment",
                    "Admission, bed and treatment"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "aUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "aName"
                        )}

                        ${field(
                            "Admission Date",
                            "aDate",
                            "date"
                        )}

                        ${selectField(
                            "Area",
                            "aArea",
                            [
                                "Ward",
                                "Daycare",
                                "ICU",
                                "Casualty",
                                "Special Room"
                            ]
                        )}

                        ${field(
                            "Bed Number",
                            "aBed"
                        )}

                        ${field(
                            "Doctor",
                            "aDoctor"
                        )}

                        ${area(
                            "Treatment / Procedures",
                            "aTreatment"
                        )}

                        ${area(
                            "Hospital Course",
                            "aCourse"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveAdmission()">

                            Save Admission

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showAdmission =
        showAdmission;


    function saveAdmission() {

        state.admissions.push({

            id: uid("ADM"),

            uhid:
                getValue("aUhid"),

            patient:
                getValue("aName"),

            date:
                getValue("aDate") ||
                today(),

            area:
                getValue("aArea"),

            bed:
                getValue("aBed"),

            doctor:
                getValue("aDoctor"),

            treatment:
                getValue("aTreatment"),

            course:
                getValue("aCourse"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Admission and treatment saved."
        );

    }

    window.saveAdmission =
        saveAdmission;


    /* ========================================================
       FOLLOW-UP
       ======================================================== */

    function showFollowup() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Follow-up",
                    "Review and next appointment"
                )}

                <section class="ks-paper">

                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "fUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "fName"
                        )}

                        ${field(
                            "Review Date",
                            "fDate",
                            "date"
                        )}

                        ${field(
                            "Doctor",
                            "fDoctor"
                        )}

                        ${area(
                            "Progress",
                            "fProgress"
                        )}

                        ${area(
                            "Medicines",
                            "fMedicines"
                        )}

                        ${area(
                            "Advice",
                            "fAdvice"
                        )}

                        ${field(
                            "Next Appointment",
                            "fNext",
                            "date"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveFollowup()">

                            Save Follow-up

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showFollowup =
        showFollowup;


    function saveFollowup() {

        state.followups.push({

            id: uid("FOLLOWUP"),

            uhid:
                getValue("fUhid"),

            patient:
                getValue("fName"),

            date:
                getValue("fDate") ||
                today(),

            doctor:
                getValue("fDoctor"),

            progress:
                getValue("fProgress"),

            medicines:
                getValue("fMedicines"),

            advice:
                getValue("fAdvice"),

            next:
                getValue("fNext"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Follow-up saved successfully."
        );

    }

    window.saveFollowup =
        saveFollowup;


    /* ========================================================
       DISCHARGE SUMMARY
       ======================================================== */

    function showDischarge() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Discharge Summary",
                    "Complete and print the final summary"
                )}

                <section class="ks-paper">

                    <div class="ks-paper-head">

                        <img
                            src="image.png"
                            alt="Hospital Logo">

                        <div>

                            <b>
                                K. SUVIDHA HOSPITAL
                            </b>

                            <small>
                                Discharge Summary
                            </small>

                        </div>

                    </div>


                    <div class="ks-form-grid">

                        ${field(
                            "Patient UHID",
                            "dUhid"
                        )}

                        ${field(
                            "Patient Name",
                            "dName"
                        )}

                        ${field(
                            "Discharge Date",
                            "dDate",
                            "date"
                        )}

                        ${field(
                            "Doctor",
                            "dDoctor"
                        )}

                        ${area(
                            "Final Diagnosis",
                            "dDiagnosis"
                        )}

                        ${area(
                            "Treatment Given",
                            "dTreatment"
                        )}

                        ${area(
                            "Medicines at Discharge",
                            "dMedicines"
                        )}

                        ${area(
                            "Discharge Advice",
                            "dAdvice"
                        )}

                        ${area(
                            "Follow-up Advice",
                            "dFollowup"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveDischarge()">

                            Save Discharge Summary

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print Discharge Summary

                        </button>

                    </div>

                </section>

            </main>

        `;

    }

    window.showDischarge =
        showDischarge;


    function saveDischarge() {

        state.discharges.push({

            id: uid("DISCHARGE"),

            uhid:
                getValue("dUhid"),

            patient:
                getValue("dName"),

            date:
                getValue("dDate") ||
                today(),

            doctor:
                getValue("dDoctor"),

            diagnosis:
                getValue("dDiagnosis"),

            treatment:
                getValue("dTreatment"),

            medicines:
                getValue("dMedicines"),

            advice:
                getValue("dAdvice"),

            followup:
                getValue("dFollowup"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Discharge Summary saved successfully."
        );

    }

    window.saveDischarge =
        saveDischarge;


    /* ========================================================
       BILLING
       ======================================================== */

    const BILL_ITEMS = [

        "Doctor Charges",
        "Consultation",
        "Investigation",
        "Patient Registration",
        "Follow Up",
        "Discharge Summary",
        "Ward Charges",
        "Nursing Charges",
        "ICU Charges",
        "Daycare Charges",
        "Casualty Charges",
        "Special Room Charges",
        "X-Ray",
        "Blood Test",
        "Pharmacy",
        "Procedure Charges",
        "Operation Theatre Charges",
        "Room Charges",
        "Medical Supplies",
        "Other Hospital Charges"

    ];


    function showBilling() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Billing",
                    "Hospital billing"
                )}

                <section class="ks-paper">

                    <div class="ks-bill-head">

                        <input
                            id="bUhid"
                            placeholder="Patient UHID">

                        <input
                            id="bName"
                            placeholder="Patient Name">

                        <select id="bDoctor">

                            <option value="">
                                Doctor
                            </option>

                            ${state.doctors
                                .map(
                                    doctor =>
                                        `<option>
                                            ${escapeHTML(
                                                doctor
                                            )}
                                        </option>`
                                )
                                .join("")}

                        </select>

                    </div>


                    <table class="ks-bill">

                        <thead>

                            <tr>

                                <th>
                                    Item
                                </th>

                                <th>
                                    Qty
                                </th>

                                <th>
                                    Rate
                                </th>

                                <th>
                                    Amount
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            ${BILL_ITEMS
                                .map(
                                    (item, index) => `

                                    <tr>

                                        <td>
                                            ${escapeHTML(
                                                item
                                            )}
                                        </td>

                                        <td>

                                            <input
                                                id="q${index}"
                                                type="number"
                                                min="0"
                                                value="0"
                                                oninput="calculateBill()">

                                        </td>

                                        <td>

                                            <input
                                                id="r${index}"
                                                type="number"
                                                min="0"
                                                value="0"
                                                oninput="calculateBill()">

                                        </td>

                                        <td id="amt${index}">
                                            0.00
                                        </td>

                                    </tr>

                                `
                                )
                                .join("")}

                        </tbody>

                    </table>


                    <div class="ks-total">

                        <label>
                            Subtotal
                            <input
                                id="bSub"
                                readonly>
                        </label>

                        <label>
                            Discount
                            <input
                                id="bDiscount"
                                type="number"
                                value="0"
                                oninput="calculateBill()">
                        </label>

                        <label>
                            Paid
                            <input
                                id="bPaid"
                                type="number"
                                value="0"
                                oninput="calculateBill()">
                        </label>

                        <label>
                            Balance
                            <input
                                id="bBalance"
                                readonly>
                        </label>

                    </div>


                    <div class="ks-form-grid">

                        ${selectField(
                            "Payment Mode",
                            "bMode",
                            [
                                "Cash",
                                "Card",
                                "UPI",
                                "Insurance",
                                "Other"
                            ]
                        )}

                        ${area(
                            "Notes",
                            "bNotes"
                        )}

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveBill()">

                            Save Bill

                        </button>


                        <button
                            onclick="billingAI()">

                            Billing AI

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print Bill

                        </button>

                    </div>

                </section>

            </main>

        `;


        calculateBill();

    }


    window.showBilling =
        showBilling;


    function calculateBill() {

        let subtotal = 0;


        BILL_ITEMS.forEach(
            function (_, index) {

                const qty =
                    Number(
                        getValue(
                            "q" + index
                        )
                    ) || 0;


                const rate =
                    Number(
                        getValue(
                            "r" + index
                        )
                    ) || 0;


                const amount =
                    qty * rate;


                subtotal += amount;


                const amountBox =
                    document.getElementById(
                        "amt" + index
                    );


                if (amountBox) {

                    amountBox.textContent =
                        amount.toFixed(2);

                }

            }
        );


        const discount =
            Number(
                getValue("bDiscount")
            ) || 0;


        const paid =
            Number(
                getValue("bPaid")
            ) || 0;


        const balance =
            Math.max(
                0,
                subtotal -
                discount -
                paid
            );


        setValue(
            "bSub",
            subtotal.toFixed(2)
        );


        setValue(
            "bBalance",
            balance.toFixed(2)
        );

    }


    window.calculateBill =
        calculateBill;


    function saveBill() {

        calculateBill();


        const items =
            BILL_ITEMS
                .map(
                    function (name, index) {

                        const qty =
                            Number(
                                getValue(
                                    "q" + index
                                )
                            ) || 0;


                        const rate =
                            Number(
                                getValue(
                                    "r" + index
                                )
                            ) || 0;


                        return {

                            name,

                            qty,

                            rate,

                            amount:
                                qty * rate

                        };

                    }
                )
                .filter(
                    item =>
                        item.qty ||
                        item.rate
                );


        state.bills.push({

            id: uid("BILL"),

            uhid:
                getValue("bUhid"),

            patient:
                getValue("bName"),

            doctor:
                getValue("bDoctor"),

            items,

            subtotal:
                Number(
                    getValue("bSub")
                ) || 0,

            discount:
                Number(
                    getValue("bDiscount")
                ) || 0,

            paid:
                Number(
                    getValue("bPaid")
                ) || 0,

            balance:
                Number(
                    getValue("bBalance")
                ) || 0,

            paymentMode:
                getValue("bMode"),

            notes:
                getValue("bNotes"),

            savedAt:
                new Date().toISOString()

        });


        saveState();


        alert(
            "Bill saved successfully."
        );

    }


    window.saveBill =
        saveBill;


    function billingAI() {

        calculateBill();


        alert(

            "Billing check\n\n" +

            "Subtotal: ₹" +
            getValue("bSub") +

            "\nDiscount: ₹" +
            getValue("bDiscount") +

            "\nPaid: ₹" +
            getValue("bPaid") +

            "\nBalance: ₹" +
            getValue("bBalance") +

            "\n\nPlease review the bill before finalizing."

        );

    }


    window.billingAI =
        billingAI;


    /* ========================================================
       O.T. SLOT
       ======================================================== */

    function showOT() {

        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "O.T. SLOT",
                    "Operation theatre booking"
                )}


                <section class="ks-paper">

                    <h2>
                        BOOK O.T.
                    </h2>


                    <div class="ks-form-grid">

                        ${field(
                            "Patient ID / UHID",
                            "otPatientId"
                        )}

                        ${field(
                            "Patient Name",
                            "otPatientName"
                        )}

                        ${field(
                            "Age",
                            "otAge",
                            "number"
                        )}

                        ${selectField(
                            "Sex",
                            "otSex",
                            [
                                "Male",
                                "Female",
                                "Other"
                            ]
                        )}


                        <label class="ks-field">

                            <span>
                                Consultant Doctor
                            </span>

                            <select id="otDoctor">

                                <option value="">
                                    Select Doctor
                                </option>

                                ${state.doctors
                                    .map(
                                        doctor =>
                                            `<option>
                                                ${escapeHTML(
                                                    doctor
                                                )}
                                            </option>`
                                    )
                                    .join("")}

                            </select>

                        </label>


                        ${field(
                            "Operation / Procedure",
                            "otProcedure"
                        )}

                        ${field(
                            "Surgeon",
                            "otSurgeon"
                        )}

                        ${field(
                            "Assistant Surgeon",
                            "otAssistantSurgeon"
                        )}

                        ${field(
                            "Anaesthesiologist",
                            "otAnaesthesiologist"
                        )}

                        ${field(
                            "O.T. Date",
                            "otDate",
                            "date"
                        )}

                        ${field(
                            "Start Time",
                            "otStartTime",
                            "time"
                        )}

                        ${field(
                            "End Time",
                            "otEndTime",
                            "time"
                        )}

                        ${area(
                            "Remarks",
                            "otRemarks"
                        )}

                    </div>


                    <div class="ot-types">

                        <h3>
                            O.T. TYPE
                        </h3>


                        <button
                            type="button"
                            onclick="
                                selectOTType(
                                    'MODULAR O.T.'
                                )
                            ">

                            MODULAR O.T.

                        </button>


                        <button
                            type="button"
                            onclick="
                                selectOTType(
                                    'GENERAL SURGERY O.T.'
                                )
                            ">

                            GENERAL SURGERY O.T.

                        </button>


                        <div
                            id="selectedOTDisplay">

                            Please select O.T. type

                        </div>

                    </div>


                    <div class="ks-actions">

                        <button
                            class="save"
                            onclick="saveOTBooking()">

                            Save O.T. Booking

                        </button>


                        <button
                            onclick="printCurrentPage()">

                            Print O.T. Booking

                        </button>

                    </div>

                </section>

            </main>

        `;

    }


    window.showOT =
        showOT;


    function selectOTType(type) {

        state.selectedOT =
            type;


        const display =
            document.getElementById(
                "selectedOTDisplay"
            );


        if (display) {

            display.textContent =
                "Selected O.T.: " +
                type;

        }

    }


    window.selectOTType =
        selectOTType;


    function saveOTBooking() {

        const booking = {

            id: uid("OT"),

            patientId:
                getValue("otPatientId"),

            patientName:
                getValue("otPatientName"),

            age:
                getValue("otAge"),

            sex:
                getValue("otSex"),

            doctor:
                getValue("otDoctor"),

            procedure:
                getValue("otProcedure"),

            surgeon:
                getValue("otSurgeon"),

            assistantSurgeon:
                getValue(
                    "otAssistantSurgeon"
                ),

            anaesthesiologist:
                getValue(
                    "otAnaesthesiologist"
                ),

            date:
                getValue("otDate"),

            startTime:
                getValue("otStartTime"),

            endTime:
                getValue("otEndTime"),

            remarks:
                getValue("otRemarks"),

            otType:
                state.selectedOT || "",

            savedAt:
                new Date().toISOString()

        };


        if (
            !booking.patientId &&
            !booking.patientName
        ) {

            alert(
                "Please enter Patient ID or Patient Name."
            );

            return;

        }


        if (!booking.otType) {

            alert(
                "Please select Modular O.T. or General Surgery O.T."
            );

            return;

        }


        state.otBookings.push(
            booking
        );


        saveState();


        alert(
            "O.T. booking saved successfully."
        );

    }


    window.saveOTBooking =
        saveOTBooking;


    /* ========================================================
       BEDS
       ======================================================== */

    const BED_COUNTS = {

        Ward: 4,

        Daycare: 4,

        ICU: 5,

        Casualty: 4,

        "Special Room": 8

    };


    function allBeds() {

        const beds = [];


        Object.entries(
            BED_COUNTS
        ).forEach(
            function ([area, count]) {

                for (
                    let number = 1;
                    number <= count;
                    number++
                ) {

                    beds.push({

                        id:
                            area
                                .replace(
                                    /\s/g,
                                    "-"
                                ) +
                            "-" +
                            number,

                        area,

                        number

                    });

                }

            }
        );


        return beds;

    }


    function showBeds() {

        const savedBeds =
            state.beds || [];


        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Beds",
                    "25-bed occupancy management"
                )}


                <section class="ks-paper">

                    <p>

                        Total beds: 25

                        <br>

                        Ward: 4

                        | Daycare: 4

                        | ICU: 5

                        | Casualty: 4

                        | Special Room: 8

                    </p>


                    <div class="bed-grid">

                        ${allBeds()
                            .map(
                                function (bed) {

                                    const saved =
                                        savedBeds.find(
                                            item =>
                                                item.id ===
                                                bed.id
                                        ) || {};


                                    return `

                                        <div
                                            class="
                                                bed-card
                                                ${
                                                    saved.occupied
                                                        ? "occupied"
                                                        : ""
                                                }
                                            ">

                                            <b>

                                                ${escapeHTML(
                                                    bed.area
                                                )}
                                                ${bed.number}

                                            </b>


                                            <span>

                                                ${
                                                    saved.occupied
                                                        ? "Occupied"
                                                        : "Available"
                                                }

                                            </span>


                                            <input
                                                id="
                                                    bedPatient_${
                                                        bed.id
                                                    }
                                                "
                                                placeholder="
                                                    Patient name
                                                "
                                                value="${
                                                    escapeHTML(
                                                        saved.patient ||
                                                        ""
                                                    )
                                                }">


                                            <input
                                                id="
                                                    bedUhid_${
                                                        bed.id
                                                    }
                                                "
                                                placeholder="
                                                    UHID
                                                "
                                                value="${
                                                    escapeHTML(
                                                        saved.uhid ||
                                                        ""
                                                    )
                                                }">


                                            <button
                                                onclick="
                                                    saveBed(
                                                        '${escapeHTML(
                                                            bed.id
                                                        )}',
                                                        '${escapeHTML(
                                                            bed.area
                                                        )}',
                                                        ${bed.number}
                                                    )
                                                ">

                                                Save Bed

                                            </button>

                                        </div>

                                    `;

                                }
                            )
                            .join("")}

                    </div>


                    <div class="ks-actions">

                        <button
                            onclick="printCurrentPage()">

                            Print Beds

                        </button>

                    </div>

                </section>

            </main>

        `;

    }


    window.showBeds =
        showBeds;


    function saveBed(
        id,
        area,
        number
    ) {

        const patient =
            getValue(
                "bedPatient_" + id
            );


        const uhid =
            getValue(
                "bedUhid_" + id
            );


        let bed =
            state.beds.find(
                item =>
                    item.id === id
            );


        if (!bed) {

            bed = {

                id,
                area,
                number

            };

            state.beds.push(
                bed
            );

        }


        bed.occupied =
            !!(
                patient ||
                uhid
            );


        bed.patient =
            patient;


        bed.uhid =
            uhid;


        bed.savedAt =
            new Date().toISOString();


        saveState();


        showBeds();

    }


    window.saveBed =
        saveBed;


    /* ========================================================
       SAVED FILES
       ======================================================== */

    function showSavedFiles() {

        const groups = [

            [
                "Patients",
                state.patients
            ],

            [
                "Patient Records",
                state.records
            ],

            [
                "Consultations",
                state.consultations
            ],

            [
                "Investigations",
                state.investigations
            ],

            [
                "Prescriptions",
                state.prescriptions
            ],

            [
                "Admissions",
                state.admissions
            ],

            [
                "Follow-ups",
                state.followups
            ],

            [
                "Discharge Summaries",
                state.discharges
            ],

            [
                "Beds",
                state.beds
            ],

            [
                "Bills",
                state.bills
            ],

            [
                "O.T. Bookings",
                state.otBookings
            ]

        ];


        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Saved Files",
                    "Saved hospital work"
                )}


                ${groups
                    .map(
                        function ([name, items]) {

                            return `

                                <section
                                    class="saved-group">

                                    <h2>
                                        ${escapeHTML(
                                            name
                                        )}
                                    </h2>


                                    ${
                                        items.length
                                            ?

                                        items
                                            .slice()
                                            .reverse()
                                            .map(
                                                item => `

                                                    <div
                                                        class="
                                                            saved-row
                                                        ">

                                                        <div>

                                                            <b>
                                                                ${escapeHTML(
                                                                    item.name ||
                                                                    item.patient ||
                                                                    item.patientName ||
                                                                    item.pageName ||
                                                                    item.area ||
                                                                    item.otType ||
                                                                    name
                                                                )}
                                                            </b>

                                                            <span>

                                                                ${escapeHTML(
                                                                    item.uhid ||
                                                                    item.patientId ||
                                                                    item.savedAt ||
                                                                    ""
                                                                )}

                                                            </span>

                                                        </div>


                                                        <button
                                                            onclick="
                                                                viewSaved(
                                                                    '${escapeHTML(
                                                                        name
                                                                    )}',
                                                                    '${escapeHTML(
                                                                        item.id ||
                                                                        ""
                                                                    )}'
                                                                )
                                                            ">

                                                            Open

                                                        </button>

                                                    </div>

                                                `
                                            )
                                            .join("")

                                            :

                                        "<p>No saved files yet.</p>"
                                    }

                                </section>

                            `;

                        }
                    )
                    .join("")}

            </main>

        `;

    }


    window.showSavedFiles =
        showSavedFiles;


    function viewSaved(
        group,
        id
    ) {

        const map = {

            "Patients":
                state.patients,

            "Patient Records":
                state.records,

            "Consultations":
                state.consultations,

            "Investigations":
                state.investigations,

            "Prescriptions":
                state.prescriptions,

            "Admissions":
                state.admissions,

            "Follow-ups":
                state.followups,

            "Discharge Summaries":
                state.discharges,

            "Beds":
                state.beds,

            "Bills":
                state.bills,

            "O.T. Bookings":
                state.otBookings

        };


        const list =
            map[group] || [];


        const item =
            list.find(
                x =>
                    x.id === id
            );


        if (!item) {

            alert(
                "Saved file not found."
            );

            return;

        }


        app.innerHTML = `

            <main class="ks-page">

                ${pageHeader(
                    "Saved File",
                    group
                )}


                <section class="ks-paper">

                    <pre class="saved-pre">${escapeHTML(
                        JSON.stringify(
                            item,
                            null,
                            2
                        )
                    )}</pre>


                    <div class="ks-actions">

                        <button
                            onclick="printCurrentPage()">

                            Print

                        </button>


                        <button
                            onclick="showSavedFiles()">

                            Back to Saved Files

                        </button>

                    </div>

                </section>

            </main>

        `;

    }


    window.viewSaved =
        viewSaved;


    /* ========================================================
       SUVIDHA AI
       ======================================================== */

    let lastAIAnswer = "";


    function suvidhaAnswer(question) {

        const q =
            String(question || "")
                .trim();


        const lower =
            q.toLowerCase();


        if (!q) {

            return (
                "Please type your question and I will help you."
            );

        }


        if (
            /^(hi|hello|hey)\b/i.test(q)
        ) {

            return (
                "Hello. I am SUVIDHA. " +
                "What can I help you with?"
            );

        }


        if (
            lower.includes(
                "how the hospital works"
            ) ||
            lower.includes(
                "hospital workflow"
            ) ||
            lower.includes(
                "step by step"
            )
        ) {

            return (

                "1. Patient Registration: enter the patient's basic details and save the patient.\n\n" +

                "2. Patients Record: open the complete patient file and continue the same patient's information.\n\n" +

                "3. Consultation: enter complaints, history, examination, diagnosis and treatment planning.\n\n" +

                "4. Investigations: enter X-Ray, blood tests and other investigation results.\n\n" +

                "5. Prescription and Pharmacy: enter medicines, dose, frequency, duration and instructions.\n\n" +

                "6. Admission and Treatment: enter the ward or room, bed, doctor, procedures and treatment details.\n\n" +

                "7. Billing: enter quantity and rate for the fixed hospital billing items. The system calculates amounts, discount, paid amount and balance.\n\n" +

                "8. Follow-up: enter review date, progress, advice and next appointment.\n\n" +

                "9. Discharge Summary: enter final diagnosis, treatment, medicines, advice and follow-up information, then save and print the summary.\n\n" +

                "10. Saved Files: open Saved Files to see the work that has been saved."

            );

        }


        if (
            lower.includes("bed")
        ) {

            return (

                "K. Suvidha Hospital has 25 beds.\n\n" +

                "Ward: 4 beds\n" +

                "Daycare: 4 beds\n" +

                "ICU: 5 beds\n" +

                "Casualty: 4 beds\n" +

                "Special Room: 8 beds\n\n" +

                "Open Beds to mark a bed occupied. Enter the patient name and UHID and select Save Bed. The saved bed information is available in Saved Files."

            );

        }


        if (
            lower.includes("ot") ||
            lower.includes(
                "operation theatre"
            ) ||
            lower.includes(
                "operation theater"
            )
        ) {

            return (

                "Open O.T. SLOT.\n\n" +

                "Enter the patient ID or UHID.\n\n" +

                "Enter the patient name, age and sex.\n\n" +

                "Select the consultant doctor.\n\n" +

                "Enter the operation or procedure.\n\n" +

                "Enter the surgeon.\n\n" +

                "Enter the assistant surgeon.\n\n" +

                "Enter the anaesthesiologist.\n\n" +

                "Enter the O.T. date and start and end time.\n\n" +

                "Select either Modular O.T. or General Surgery O.T.\n\n" +

                "Save the O.T. booking and print it if required."

            );

        }


        if (
            lower.includes(
                "registration"
            )
        ) {

            return (

                "To register a patient:\n\n" +

                "1. Open Patient Registration.\n\n" +

                "2. Enter the patient's name and basic information.\n\n" +

                "3. Enter the mobile number, age, sex and address.\n\n" +

                "4. Enter the consultant doctor if available.\n\n" +

                "5. Select Save Patient.\n\n" +

                "6. The system creates a six-digit UHID such as 000001, 000002 and so on."

            );

        }


        if (
            lower.includes(
                "patient record"
            ) ||
            lower.includes(
                "patients record"
            )
        ) {

            return (

                "Patients Record contains the complete patient workflow.\n\n" +

                "1. Front Page\n" +

                "2. Registration\n" +

                "3. Consultation\n" +

                "4. X-Ray / Blood / Investigations\n" +

                "5. Prescription / Pharmacy\n" +

                "6. Admission & Treatment\n" +

                "7. Billing\n" +

                "8. Follow-up\n" +

                "9. Discharge Summary\n\n" +

                "Save each section when the information has been entered. Use Print when a paper copy is required."

            );

        }


        if (
            lower.includes(
                "billing"
            )
        ) {

            return (

                "To use Billing:\n\n" +

                "1. Open Billing.\n\n" +

                "2. Enter the patient UHID and patient name.\n\n" +

                "3. Select the doctor.\n\n" +

                "4. The billing item names are fixed.\n\n" +

                "5. Enter quantity and rate.\n\n" +

                "6. The system calculates the amount automatically.\n\n" +

                "7. Enter discount and paid amount.\n\n" +

                "8. Select the payment mode.\n\n" +

                "9. Save the bill.\n\n" +

                "10. Print the bill if required."

            );

        }


        if (
            lower.includes(
                "discharge"
            )
        ) {

            return (

                "To prepare a Discharge Summary:\n\n" +

                "1. Enter the patient UHID.\n\n" +

                "2. Enter the patient name.\n\n" +

                "3. Enter the discharge date and doctor.\n\n" +

                "4. Enter the final diagnosis.\n\n" +

                "5. Enter the treatment given.\n\n" +

                "6. Enter medicines at discharge.\n\n" +

                "7. Enter discharge advice.\n\n" +

                "8. Enter follow-up advice.\n\n" +

                "9. Save the Discharge Summary.\n\n" +

                "10. Print the final summary."

            );

        }


        if (
            lower.includes(
                "saved files"
            ) ||
            lower.includes(
                "saved work"
            )
        ) {

            return (

                "Open Saved Files.\n\n" +

                "Saved Files contains Patients, Patient Records, Consultations, Investigations, Prescriptions, Admissions, Follow-ups, Discharge Summaries, Beds, Bills and O.T. Bookings."

            );

        }


        if (
            lower.includes(
                "doctor"
            )
        ) {

            return (

                "The hospital doctor list includes:\n\n" +

                DEFAULT_DOCTORS.join("\n")

            );

        }


        if (
            lower.includes(
                "who are you"
            ) ||
            lower.includes(
                "your name"
            )
        ) {

            return (

                "I am SUVIDHA, the digital hospital software assistant for K. Suvidha Hospital. I help staff understand the hospital software and its workflow."

            );

        }


        return (

            "I can help you with Patient Registration, Patients Record, Consultation, Investigations, Prescription, Admission and Treatment, Billing, Follow-up, Discharge Summary, Beds, O.T. SLOT and Saved Files.\n\n" +

            "Tell me what you want to do and I will explain it step by step."

        );

    }


    function showSuvidha() {

        app.innerHTML = `

            <main class="ks-page">

                <section class="suvidha-master">

                    <header>

                        <img
                            src="image.png"
                            alt="Hospital Logo">

                        <div>

                            <h1>
                                SUVIDHA AI
                            </h1>

                            <p>
                                K. Suvidha Hospital Assistant
                            </p>

                        </div>

                    </header>


                    <div
                        id="suvidhaChat"
                        class="suvidha-chat">
                    </div>


                    <div class="suvidha-input">

                        <input
                            id="suvidhaInput"
                            type="text"
                            placeholder="
                                Ask SUVIDHA how the
                                hospital software works
                            ">


                        <button
                            onclick="suvidhaAsk()">

                            Send

                        </button>


                        <button
                            onclick="suvidhaVoiceInput()">

                            Mic

                        </button>


                        <button
                            onclick="suvidhaSpeakLast()">

                            Speak

                        </button>

                    </div>


                    <div class="suvidha-quick">

                        <button
                            onclick="
                                suvidhaQuick(
                                    'Explain step by step how the hospital works'
                                )
                            ">

                            How the hospital works

                        </button>


                        <button
                            onclick="
                                suvidhaQuick(
                                    'How do I register a patient step by step?'
                                )
                            ">

                            Registration

                        </button>


                        <button
                            onclick="
                                suvidhaQuick(
                                    'How do I use Patients Record step by step?'
                                )
                            ">

                            Patients Record

                        </button>


                        <button
                            onclick="
                                suvidhaQuick(
                                    'How do I book O.T. step by step?'
                                )
                            ">

                            O.T.

                        </button>


                        <button
                            onclick="
                                suvidhaQuick(
                                    'How does billing work step by step?'
                                )
                            ">

                            Billing

                        </button>


                        <button
                            onclick="
                                suvidhaQuick(
                                    'How do I prepare a discharge summary step by step?'
                                )
                            ">

                            Discharge

                        </button>

                    </div>

                </section>

            </main>

        `;


        addSuvidhaMessage(
            "Hello. I am SUVIDHA. Tell me what you want to do and I will explain it step by step.",
            "ai"
        );


        const input =
            document.getElementById(
                "suvidhaInput"
            );


        if (input) {

            input.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key ===
                        "Enter"
                    ) {

                        suvidhaAsk();

                    }

                }
            );

        }

    }


    window.showSuvidha =
        showSuvidha;


    function addSuvidhaMessage(
        text,
        type
    ) {

        const chat =
            document.getElementById(
                "suvidhaChat"
            );


        if (!chat) {
            return;
        }


        const message =
            document.createElement(
                "div"
            );


        message.className =
            type === "ai"
                ? "suvidha-ai"
                : "suvidha-user";


        /*
           IMPORTANT:

           textContent is used here.

           Therefore SUVIDHA will show:

           <br>

           or

           <strong>

           as normal text only if somebody actually types
           those characters.

           The program itself does NOT insert those tags.
        */

        message.textContent =
            String(text);


        chat.appendChild(
            message
        );


        chat.scrollTop =
            chat.scrollHeight;


        if (type === "ai") {

            lastAIAnswer =
                String(text);

        }

    }


    window.suvidhaAsk =
        function () {

            const input =
                document.getElementById(
                    "suvidhaInput"
                );


            if (!input) {
                return;
            }


            const question =
                input.value.trim();


            if (!question) {
                return;
            }


            addSuvidhaMessage(
                question,
                "user"
            );


            const answer =
                suvidhaAnswer(
                    question
                );


            addSuvidhaMessage(
                answer,
                "ai"
            );


            input.value = "";

        };


    window.suvidhaQuick =
        function (question) {

            const input =
                document.getElementById(
                    "suvidhaInput"
                );


            if (!input) {
                return;
            }


            input.value =
                question;


            window.suvidhaAsk();

        };


    window.suvidhaSpeakLast =
        function () {

            if (
                !lastAIAnswer ||
                !window.speechSynthesis
            ) {

                return;

            }


            const utterance =
                new SpeechSynthesisUtterance(
                    lastAIAnswer
                );


            utterance.lang =
                "en-IN";


            utterance.rate =
                0.95;


            window.speechSynthesis.cancel();


            window.speechSynthesis.speak(
                utterance
            );

        };


    window.suvidhaVoiceInput =
        function () {

            const SpeechRecognition =
                window.SpeechRecognition ||
                window.webkitSpeechRecognition;


            if (!SpeechRecognition) {

                alert(
                    "Voice input is not supported by this browser."
                );

                return;

            }


            const recognition =
                new SpeechRecognition();


            recognition.lang =
                "en-IN";


            recognition.interimResults =
                false;


            recognition.continuous =
                false;


            recognition.onresult =
                function (event) {

                    const spoken =
                        event
                            .results[0][0]
                            .transcript;


                    const input =
                        document.getElementById(
                            "suvidhaInput"
                        );


                    if (input) {

                        input.value =
                            spoken;

                        window.suvidhaAsk();

                    }

                };


            recognition.onerror =
                function () {

                    alert(
                        "Microphone input could not be read. Please allow microphone permission."
                    );

                };


            recognition.start();

        };


    /* ========================================================
       CLOUD SHARING
       ======================================================== */

    async function cloudSave() {

        if (
            !CLOUD.enabled ||
            !CLOUD.url ||
            CLOUD.url.includes(
                "PASTE_YOUR"
            )
        ) {

            return;

        }


        try {

            const databaseURL =
                CLOUD.url.replace(
                    /\/$/,
                    ""
                );


            await fetch(
                databaseURL +
                "/ksuvidha.json",
                {

                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            state
                        )

                }
            );

        }

        catch (error) {

            console.warn(
                "Cloud save failed.",
                error
            );

        }

    }


    async function cloudLoad() {

        if (
            !CLOUD.enabled ||
            !CLOUD.url ||
            CLOUD.url.includes(
                "PASTE_YOUR"
            )
        ) {

            return;

        }


        try {

            const databaseURL =
                CLOUD.url.replace(
                    /\/$/,
                    ""
                );


            const response =
                await fetch(
                    databaseURL +
                    "/ksuvidha.json"
                );


            if (!response.ok) {
                return;
            }


            const cloudData =
                await response.json();


            if (!cloudData) {
                return;
            }


            Object.keys(state)
                .forEach(
                    key =>
                        delete state[key]
                );


            Object.assign(
                state,
                cloudData
            );


            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );


            showSavedFiles();

        }

        catch (error) {

            console.warn(
                "Cloud load failed.",
                error
            );

        }

    }


    window.ksuvidhaCloudSync =
        cloudLoad;


    /* ========================================================
       CSS
       ======================================================== */

    function injectCSS() {

        const style =
            document.createElement(
                "style"
            );


        style.textContent = `

            * {
                box-sizing: border-box;
            }


            body {
                margin: 0;
                font-family:
                    Arial,
                    Helvetica,
                    sans-serif;
                background:
                    #f4f9fb;
                color:
                    #18323f;
            }


            button {
                font-family: inherit;
                cursor: pointer;
            }


            .ks-home,
            .ks-page {

                max-width:
                    1200px;

                margin:
                    0 auto;

                padding:
                    24px;

            }


            .ks-hero {

                display:
                    grid;

                grid-template-columns:
                    1.5fr 1fr;

                gap:
                    28px;

                align-items:
                    center;

                padding:
                    38px;

                border-radius:
                    32px;

                background:
                    linear-gradient(
                        135deg,
                        #f3fbff,
                        #e6f3f7
                    );

            }


            .ks-eyebrow {

                letter-spacing:
                    2px;

                font-size:
                    12px;

                font-weight:
                    700;

                color:
                    #287596;

            }


            .ks-hero h1 {

                font-size:
                    42px;

                line-height:
                    1.08;

                margin:
                    10px 0;

            }


            .ks-hero p {

                font-size:
                    17px;

                line-height:
                    1.7;

            }


            .ks-hero-actions,
            .ks-actions,
            .suvidha-input,
            .suvidha-quick {

                display:
                    flex;

                gap:
                    12px;

                flex-wrap:
                    wrap;

            }


            .ks-hero-actions button,
            .ks-actions button,
            .suvidha-input button,
            .suvidha-quick button,
            .ks-head-actions button,
            .ot-types button,
            .bed-card button,
            .saved-row button {

                border:
                    0;

                border-radius:
                    18px;

                padding:
                    12px 18px;

                background:
                    #e5f2f7;

            }


            .ks-hero-actions .primary,
            .ks-actions .save {

                background:
                    #176c8d;

                color:
                    white;

            }


            .ks-hero-logo {

                min-height:
                    300px;

                border-radius:
                    30px;

                background:
                    white;

                display:
                    flex;

                flex-direction:
                    column;

                align-items:
                    center;

                justify-content:
                    center;

                box-shadow:
                    0 10px 35px
                    rgba(
                        0,
                        0,
                        0,
                        .07
                    );

            }


            .ks-hero-logo img {

                width:
                    58px;

                height:
                    58px;

                object-fit:
                    contain;

                border-radius:
                    50%;

                margin-bottom:
                    14px;

            }


            .ks-cards {

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        3,
                        1fr
                    );

                gap:
                    18px;

                margin-top:
                    26px;

            }


            .ks-cards button {

                text-align:
                    left;

                background:
                    white;

                border:
                    0;

                border-radius:
                    25px;

                padding:
                    24px;

                min-height:
                    120px;

                box-shadow:
                    0 8px 28px
                    rgba(
                        0,
                        0,
                        0,
                        .06
                    );

            }


            .ks-cards b,
            .ks-cards span {

                display:
                    block;

            }


            .ks-cards span {

                margin-top:
                    8px;

                color:
                    #6b7d86;

            }


            .ks-page-head {

                display:
                    flex;

                justify-content:
                    space-between;

                align-items:
                    center;

                gap:
                    15px;

                margin-bottom:
                    22px;

            }


            .ks-page-head h1 {

                margin:
                    5px 0;

            }


            .ks-head-actions {

                display:
                    flex;

                gap:
                    8px;

            }


            .ks-paper {

                background:
                    white;

                border-radius:
                    28px;

                padding:
                    30px;

                box-shadow:
                    0 9px 30px
                    rgba(
                        0,
                        0,
                        0,
                        .06
                    );

            }


            .ks-paper-head {

                display:
                    flex;

                align-items:
                    center;

                gap:
                    15px;

                padding-bottom:
                    18px;

                margin-bottom:
                    20px;

                border-bottom:
                    1px solid
                    #dce7eb;

            }


            .ks-paper-head img {

                width:
                    58px;

                height:
                    58px;

                object-fit:
                    contain;

                border-radius:
                    50%;

            }


            .ks-paper-head small {

                display:
                    block;

                margin-top:
                    4px;

                color:
                    #6b7d86;

            }


            .ks-form-grid {

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        2,
                        minmax(
                            0,
                            1fr
                        )
                    );

                gap:
                    22px 30px;

            }


            .ks-field {

                display:
                    block;

            }


            .ks-field.full {

                grid-column:
                    1 / -1;

            }


            .ks-field span {

                display:
                    block;

                font-size:
                    12px;

                font-weight:
                    700;

                margin-bottom:
                    6px;

            }


            .ks-field input,
            .ks-field select {

                width:
                    100%;

                border:
                    0;

                border-bottom:
                    2px solid
                    #c4d5db;

                background:
                    transparent;

                padding:
                    11px 5px;

                outline:
                    none;

            }


            .ks-field textarea {

                width:
                    100%;

                min-height:
                    100px;

                border:
                    1px solid
                    #d6e2e7;

                border-radius:
                    14px;

                padding:
                    12px;

                resize:
                    vertical;

                outline:
                    none;

            }


            .ks-bill-head {

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        3,
                        1fr
                    );

                gap:
                    12px;

            }


            .ks-bill-head input,
            .ks-bill-head select {

                border:
                    0;

                border-bottom:
                    2px solid
                    #c4d5db;

                padding:
                    10px;

            }


            .ks-bill {

                width:
                    100%;

                border-collapse:
                    collapse;

                margin-top:
                    22px;

            }


            .ks-bill th,
            .ks-bill td {

                padding:
                    10px;

                border-bottom:
                    1px solid
                    #e1eaed;

                text-align:
                    left;

            }


            .ks-bill input {

                width:
                    90px;

                border:
                    0;

                border-bottom:
                    1px solid
                    #b9cbd2;

                padding:
                    7px;

            }


            .ks-total {

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        4,
                        1fr
                    );

                gap:
                    14px;

                margin-top:
                    20px;

            }


            .ks-total label {

                font-size:
                    12px;

                font-weight:
                    700;

            }


            .ks-total input,
            .ks-total select {

                width:
                    100%;

                border:
                    0;

                border-bottom:
                    2px solid
                    #c4d5db;

                padding:
                    10px;

            }


            .bed-grid {

                display:
                    grid;

                grid-template-columns:
                    repeat(
                        4,
                        1fr
                    );

                gap:
                    15px;

            }


            .bed-card {

                padding:
                    18px;

                border-radius:
                    22px;

                background:
                    #f4fafc;

            }


            .bed-card.occupied {

                background:
                    #fff0f0;

            }


            .bed-card b {

                display:
                    block;

                font-size:
                    16px;

            }


            .bed-card span {

                display:
                    block;

                margin:
                    7px 0 12px;

                font-weight:
                    700;

            }


            .bed-card input {

                width:
                    100%;

                border:
                    0;

                border-bottom:
                    1px solid
                    #bacbd1;

                background:
                    transparent;

                padding:
                    9px 4px;

                margin:
                    5px 0;

            }


            .ot-types {

                margin-top:
                    25px;

                padding-top:
                    22px;

                border-top:
                    1px solid
                    #e1eaed;

            }


            .ot-types button {

                margin-right:
                    8px;

            }


            #selectedOTDisplay {

                margin-top:
                    14px;

                padding:
                    13px;

                border-radius:
                    15px;

                background:
                    #f0f8fb;

            }


            .saved-group {

                background:
                    white;

                border-radius:
                    22px;

                padding:
                    20px;

                margin:
                    15px 0;

                box-shadow:
                    0 7px 25px
                    rgba(
                        0,
                        0,
                        0,
                        .05
                    );

            }


            .saved-row {

                display:
                    flex;

                justify-content:
                    space-between;

                align-items:
                    center;

                gap:
                    15px;

                padding:
                    13px 0;

                border-bottom:
                    1px solid
                    #edf2f4;

            }


            .saved-row span {

                display:
                    block;

                color:
                    #71828a;

                font-size:
                    12px;

                margin-top:
                    4px;

            }


            .saved-pre {

                white-space:
                    pre-wrap;

                overflow:
                    auto;

                background:
                    #f5fafc;

                padding:
                    20px;

                border-radius:
                    16px;

            }


            .suvidha-master {

                background:
                    white;

                border-radius:
                    32px;

                padding:
                    28px;

                box-shadow:
                    0 10px 35px
                    rgba(
                        0,
                        0,
                        0,
                        .06
                    );

            }


            .suvidha-master header {

                display:
                    flex;

                align-items:
                    center;

                gap:
                    15px;

            }


            .suvidha-master header img {

                width:
                    58px;

                height:
                    58px;

                object-fit:
                    contain;

                border-radius:
                    50%;

            }


            .suvidha-master h1 {

                margin:
                    0;

            }


            .suvidha-chat {

                min-height:
                    360px;

                max-height:
                    60vh;

                overflow:
                    auto;

                margin:
                    20px 0;

                padding:
                    12px;

            }


            .suvidha-ai,
            .suvidha-user {

                max-width:
                    82%;

                padding:
                    15px 18px;

                border-radius:
                    22px;

                margin:
                    10px 0;

                white-space:
                    pre-wrap;

                line-height:
                    1.65;

            }


            .suvidha-ai {

                background:
                    #eef7fa;

                margin-right:
                    auto;

            }


            .suvidha-user {

                background:
                    #e4f0f5;

                margin-left:
                    auto;

            }


            .suvidha-input input {

                flex:
                    1;

                min-width:
                    200px;

                border:
                    0;

                border-bottom:
                    2px solid
                    #bfd0d7;

                padding:
                    12px;

                outline:
                    none;

            }


            .side-menu {

                position:
                    fixed;

                top:
                    0;

                right:
                    -360px;

                width:
                    330px;

                height:
                    100vh;

                background:
                    white;

                z-index:
                    9999;

                padding:
                    25px;

                box-shadow:
                    -10px 0 35px
                    rgba(
                        0,
                        0,
                        0,
                        .12
                    );

                transition:
                    right .25s;

                border-radius:
                    28px 0 0 28px;

            }


            .side-menu.open {

                right:
                    0;

            }


            .side-menu button {

                display:
                    block;

                width:
                    100%;

                text-align:
                    left;

                border:
                    0;

                background:
                    #f1f7f9;

                border-radius:
                    15px;

                padding:
                    13px;

                margin:
                    8px 0;

            }


            @media (
                max-width: 800px
            ) {

                .ks-hero {

                    grid-template-columns:
                        1fr;

                }


                .ks-cards {

                    grid-template-columns:
                        1fr;

                }


                .ks-form-grid {

                    grid-template-columns:
                        1fr;

                }


                .ks-total {

                    grid-template-columns:
                        1fr;

                }


                .ks-bill-head {

                    grid-template-columns:
                        1fr;

                }


                .bed-grid {

                    grid-template-columns:
                        1fr;

                }


                .ks-hero h1 {

                    font-size:
                        32px;

                }

            }


            @media print {

                .ks-head-actions,
                .ks-actions,
                .suvidha-input,
                .suvidha-quick,
                .menu-button,
                .side-menu {

                    display:
                        none !important;

                }


                body {

                    background:
                        white !important;

                }


                .ks-paper {

                    box-shadow:
                        none !important;

                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    /* ========================================================
       START
       ======================================================== */

    injectCSS();

    showHome();


    /*
       If cloud sharing is enabled,
       download the latest shared data.
    */

    if (CLOUD.enabled) {

        cloudLoad();

    }

})();
