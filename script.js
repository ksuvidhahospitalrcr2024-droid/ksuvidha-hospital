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
else if (page === "suvidha") {
    showSuvidha();
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
        class="suvidha-home-button"
        onclick="showPage('suvidha')">

        🤖 SUVIDHA AI

        <small>
            Hospital Assistant
        </small>

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

// ==========================================
// OT BILLING SYSTEM
// ==========================================

// ==========================================
// FIXED OT BILLING SYSTEM
// EXCEL LIST - NO ADD ITEM
// ==========================================

function showBilling() {

    const otItems = [

        // ==========================================
        // OT LIST - I.V. FLUIDS
        // ==========================================
        "IV NS 3000 ML",
        "R.L",
        "5% DEX",
        "NS",
        "Heamaccel",
        "EP",

        // ==========================================
        // SUTURE MATERIALS
        // ==========================================
        "Catugt No 1",
        "Catugt No 1-0",
        "Catugt No 2-0",
        "Catugt No 2",
        "Vicryl No 1",
        "Vicryl No 1-0",
        "Vicryl No 2-0",
        "Vicryl No 3-0",
        "Proline No 1",
        "Proline No 1-0",
        "Proline No 2-0",
        "Proline No 3-0",
        "Trulon No 3-0",
        "Mersilk 3-0",
        "Mersilk 2-0",
        "Mersilk 1-0",
        "BonWax",
        "Ethilon 2-0",
        "Ethilon",
        "Proline cutting -1",

        // ==========================================
        // I.V. CANULA
        // ==========================================
        "No -18",
        "No- 20",
        "No -22",
        "Easy fix",

        // ==========================================
        // DRIP SET
        // ==========================================
        "DRIP SET",

        // ==========================================
        // GLOVES
        // ==========================================
        "Dispo glove",
        "No- 6",
        "No- 6.5",
        "No- 7.0",
        "No- 7.5",

        // ==========================================
        // SURGICAL BLADE
        // ==========================================
        "No 20",
        "No 22",
        "No 15",
        "No 11",

        // ==========================================
        // OTHER OT ITEMS
        // ==========================================
        "ECG Leads",
        "Oxygen Mask",

        // ==========================================
        // DISPOSABLE SYRINGES
        // ==========================================
        "2 CC",
        "5 CC",
        "10 CC",
        "20 CC",
        "50 CC",
        "Insulin Suringe",

        // ==========================================
        // L.P / BLOCK NEEDLE
        // ==========================================
        "L.P.Needle No 25 /23",
        "18 No Needle -1 and Half \"",
        "26 No Needle -1 and Half \"",
        "Epidural Needle",

        // ==========================================
        // DISTILLED WATER
        // ==========================================
        "Distilled Water - 5ml",
        "Distilled Water - 10ml",

        // ==========================================
        // INJECTIONS
        // ==========================================
        "Inj Gentmycin",
        "Inj Pyrolet",
        "Inj Dopa Plus",
        "Inj Deriphyline",
        "Inj Calcium Gulconate",
        "inj Adenosin",
        "Inj Rantac",
        "Inj Fortwin",
        "Inj Anawin Heavy",
        "Inj Myo Pyrolate",
        "Inj Butrum",
        "Inj Voveron",
        "Inj Emset",
        "Dynapar",
        "Propopol",
        "Midazolam",
        "Tramadol",
        "N.T.G",
        "Esmolol",
        "Primocort 100mg",
        "Inj Pause 500mg",
        "Sucol",
        "Atracil",
        "Avil",
        "Inj Myopyrolate",
        "Inj Loxicard",
        "Inj Mephentermine",
        "Inj Phenpress",
        "Lasix",
        "Xylomethazoline nasal drops",
        "Bupregesic",
        "Inj Aneket",
        "Inj Atropine",
        "Inj Xylocain 2% Vial",
        "Inj Xylocain + Adr",
        "Inj Sensorcaine 0.5% Vial",
        "Inj Sensorcaine 0.25% Vial",
        "Inj Dexona",
        "Inj Vitamin -K",
        "Inj Ceftrion",

        // ==========================================
        // MISCELLANEOUS
        // ==========================================
        "Xylocane jelly",
        "Betadine Solution",
        "Scrub",
        "Spirit",
        "Hydrogen Peroxide",
        "Neosprion Ointment",
        "Bandage Roll 4\" 6\"",
        "POP 4\" 6\"",
        "Gamjee Roll 4\" 6\"",
        "Micropore",
        "Dynaplast",
        "Savlon",
        "Cidex",
        "Cuticell",
        "Steri drape",
        "Skin Staper",
        "Cap",
        "Mask",
        "Green Sheet",
        "Vaccum suction set",
        "knee o drape",
        "Easy Plaster",
        "Soff Cotton Roll",
        "Foleys Catheter",
        "corrugated drane",
        "Uro Bag",
        "Feeding Tube",
        "Chest Drain",
        "E.T.Tube",
        "Ryles Tube No",
        "Suction Drain 14, 16",
        "Drain No -14",
        "Drain No -12",
        "Romovac draine",
        "C-ARM Cover",
        "Cling Drape",
        "Ab gel",

        // ==========================================
        // O.T. MEDICINE REPLACEMENT
        // ==========================================
        "I V Hameaceel 500ml",
        "I V 5% Dextrose",
        "I V DNs",
        "I V NS",
        "I V RL",
        "I V Set",
        "I V Cannula No 20/22/18",
        "Easy Fix",
        "Extention Tube",
        "Easy Glide",
        "E.T.Tube No",

        "Vicryl",
        "No 1",
        "No 1-0",
        "No 2-0",
        "No 3-0",
        "No 4-0",

        "Proline",
        "No 1",
        "No 1-0",
        "No 2-0",
        "No 3-0",

        "Ethilon RC/RB",
        "No 1",
        "No 2-0",
        "No 3-0",

        "Monocry II",
        "No. 1-0",
        "No 2-0",
        "No 3-0",
        "No 5-0",

        "ECG Leads",
        "Romovac Set No 12/14/16",
        "Scrub",
        "Betadine",
        "Spirit",
        "Top O Plaster",
        "Blade 22",
        "Blade 15",
        "Blade 11",
        "Crepe Bandage 6'', 4''",

        "Syrnige 2cc",
        "Syringe 5cc",
        "Syrnige 10cc",
        "Syringe 20cc",
        "Syringe 50cc",

        "O T Caps",
        "O T Mask",

        // ==========================================
        // MEDICINE REPLACEMENT - INJECTIONS
        // ==========================================
        "Isoflurane",
        "Inj Carboprost",
        "Inj Artacil",
        "Inj Pyrolate",
        "Inj Avil",
        "Inj Betnesol",
        "Inj Dexsona",
        "Inj Emset",
        "Inj Dexona",
        "Inj Mezolam",
        "Inj Atropine/Tropine",
        "Inj Hydrocort",
        "Inj Buprigese",
        "Inj Lasix",
        "Inj Aneket",
        "Inj Butadol",
        "Inj Pause",
        "Inj Propofal",
        "Inj Myopyrolate",
        "Inj Anawin 0/.5% Vail",
        "Xylocaine Adr Vail",
        "Inj Lox 2% Vail",
        "ZOCEF",
        "Inj Ropin",
        "Inj Somol",
        "Inj Vitamin K",
        "Anawin (Amp)",
        "Inj Pan 40",
        "Inj Tarmazac",
        "L P Needle No 23",
        "L P Needle No 25",
        "Inj Methergin",
        "Inj Pitocin",
        "Inj Caboprost",
        "Inj Justin",
        "Inj Termin",
        "Inj Dextoml (Vail)",
        "Inj Sucol",
        "Inj Dynapar AQ",

        // ==========================================
        // MEDICINE REPLACEMENT - OTHER
        // ==========================================
        "Corrugated Drainge Sheet",
        "Supp. Justin 100, 12.5, 25",
        "Cord Clamp",
        "Vancomycin",
        "Cerviprime Gel",
        "Tab Cytotac",
        "I V Glycin",
        "I V NS 3000",
        "Ioban",

        "Infant Feeding Tube No",
        "Ryles Tube No",
        "Uro Bag",
        "Jelly",
        "Foley's Catheter No 14/16",
        "3 Way Catheter No",

        "Encore Gloves No 6.5",
        "Encore Gloves No 7",
        "Encore Gloves No 7.5",

        "Serjun Gloves No 6",
        "Serjun Gloves No 6.5",
        "Serjun Gloves No 7",
        "Serjun Gloves No 7.5",

        "Disposable Gloves",
        "Steri Drage",
        "Bandage Rool \"4\"/\"6\"",
        "POP \"4\"/\"6\"",
        "Soft Rool \"4\"/\"6\"",
        "Distal Water 10ml",
        "Vaccum Suction Set",
        "Electro Cautery Pencil",
        "HIP U Drope",
        "I.O Drope",
        "Hydrogen Peroxide",
        "Skin Stapler",
        "Epidural Kit No 16/18",
        "Gamge Rool 6'',4''",
        "Cuticell",
        "Knee O Drope",
        "Trubond",
        "Bonwax",
        "Ointement Mupirocin",
        "Heambolock",
        "Collagen",
        "Surgical Pad",
        "C-Arm Cover",
        "Cling Drape",
        "HBSG Kit",
        "IV NS 100ml",
        "Ab Gel",
        "G Dressing",
        "Central Line Kit",
        "Sterile Drapes",
        "Dynaplast",
        "Knee Drape",
        "Shoulder Drape",
        "White Mop"
    ];


    let rows = "";

    otItems.forEach(function(item, index) {

        rows += `
            <tr>

                <td>
                    ${index + 1}
                </td>

                <td class="fixed-item-name">
                    ${item}
                </td>

                <td>
                    <input
                        type="number"
                        class="fixed-qty"
                        min="0"
                        value="0"
                        oninput="calculateFixedOTBill()">
                </td>

                <td>
                    <input
                        type="number"
                        class="fixed-rate"
                        min="0"
                        value="0"
                        oninput="calculateFixedOTBill()">
                </td>

                <td>
                    <input
                        type="number"
                        class="fixed-amount"
                        value="0"
                        readonly>
                </td>

            </tr>
        `;

    });


    app.innerHTML = `

        <section class="page">

            <div class="page-header">

                <div>
                    <h1>
                        OT BILL / MEDICINE REPLACEMENT
                    </h1>

                    <p>
                        K. Suvidha Hospital
                    </p>
                </div>

                <div class="patient-id">
                    KSVUH
                </div>

            </div>


            <div class="document">

                <div class="document-header">
                    OT BILL
                </div>


                <div class="form">

                    <label>
                        Patient Name

                        <input
                            id="otPatientName"
                            type="text"
                            placeholder="Enter patient name">
                    </label>


                    <label>
                        Doctor Name

                        <input
                            id="otDoctorName"
                            type="text"
                            placeholder="Doctor name">
                    </label>


                    <label>
                        Date

                        <input
                            id="otBillDate"
                            type="date">
                    </label>


                    <label>
                        OT / Procedure

                        <input
                            id="otProcedure"
                            type="text"
                            placeholder="Procedure name">
                    </label>

                </div>


                <h3>
                    OT LIST / O.T. MEDICINE REPLACEMENT
                </h3>


                <div
                    class="ot-bill-table"
                    style="overflow-x:auto;">

                    <table>

                        <thead>

                            <tr>

                                <th>Sl.</th>

                                <th>Item / Medicine</th>

                                <th>Qty</th>

                                <th>Rate</th>

                                <th>Amount</th>

                            </tr>

                        </thead>


                        <tbody id="fixedOTBillItems">

                            ${rows}

                        </tbody>

                    </table>

                </div>


                <div class="ot-bill-total">

                    <strong>
                        TOTAL:
                    </strong>

                    <input
                        id="fixedOTBillTotal"
                        type="number"
                        value="0"
                        readonly>

                </div>


                <div class="form">

                    <label>

                        Amount Paid

                        <input
                            id="fixedOTAmountPaid"
                            type="number"
                            min="0"
                            value="0"
                            oninput="calculateFixedOTBalance()">

                    </label>


                    <label>

                        Balance

                        <input
                            id="fixedOTBalance"
                            type="number"
                            value="0"
                            readonly>

                    </label>


                    <label>

                        Payment Mode

                        <input
                            id="fixedOTPaymentMode"
                            type="text"
                            placeholder="Cash / UPI / Card">

                    </label>


                    <label class="full">

                        Billing Notes

                        <textarea
                            id="fixedOTBillingNotes"
                            placeholder="Additional billing details"></textarea>

                    </label>

                </div>


                <div class="ot-bill-buttons">

                    <button
                        class="save-button"
                        onclick="calculateFixedOTBill()">
                        Calculate
                    </button>


                    <button
                        class="save-button"
                        onclick="saveFixedOTBill()">
                        💾 Save OT Bill
                    </button>


                    <button
                        class="save-button"
                        onclick="window.print()">
                        🖨 Print Bill
                    </button>

                </div>

            </div>

        </section>

    `;
}


// ==========================================
// CALCULATE FIXED OT BILL
// ==========================================

function calculateFixedOTBill() {

    const rows =
        document.querySelectorAll(
            "#fixedOTBillItems tr"
        );

    let total = 0;


    rows.forEach(function(row) {

        const qty =
            Number(
                row.querySelector(".fixed-qty").value
            ) || 0;

        const rate =
            Number(
                row.querySelector(".fixed-rate").value
            ) || 0;

        const amount = qty * rate;

        row.querySelector(
            ".fixed-amount"
        ).value = amount;

        total += amount;

    });


    document.getElementById(
        "fixedOTBillTotal"
    ).value = total;


    calculateFixedOTBalance();

}


// ==========================================
// CALCULATE BALANCE
// ==========================================

function calculateFixedOTBalance() {

    const total =
        Number(
            document.getElementById(
                "fixedOTBillTotal"
            ).value
        ) || 0;


    const paid =
        Number(
            document.getElementById(
                "fixedOTAmountPaid"
            ).value
        ) || 0;


    document.getElementById(
        "fixedOTBalance"
    ).value =
        Math.max(total - paid, 0);

}


// ==========================================
// SAVE FIXED OT BILL
// ==========================================

function saveFixedOTBill() {

    calculateFixedOTBill();


    const rows =
        document.querySelectorAll(
            "#fixedOTBillItems tr"
        );

    const items = [];


    rows.forEach(function(row) {

        const item =
            row.querySelector(
                ".fixed-item-name"
            ).textContent.trim();


        const qty =
            row.querySelector(
                ".fixed-qty"
            ).value;


        const rate =
            row.querySelector(
                ".fixed-rate"
            ).value;


        const amount =
            row.querySelector(
                ".fixed-amount"
            ).value;


        if (
            Number(qty) > 0 ||
            Number(rate) > 0
        ) {

            items.push({

                item: item,

                quantity: qty,

                rate: rate,

                amount: amount

            });

        }

    });


    const bill = {

        patientName:
            document.getElementById(
                "otPatientName"
            ).value,

        doctorName:
            document.getElementById(
                "otDoctorName"
            ).value,

        billDate:
            document.getElementById(
                "otBillDate"
            ).value,

        procedure:
            document.getElementById(
                "otProcedure"
            ).value,

        items: items,

        total:
            document.getElementById(
                "fixedOTBillTotal"
            ).value,

        amountPaid:
            document.getElementById(
                "fixedOTAmountPaid"
            ).value,

        balance:
            document.getElementById(
                "fixedOTBalance"
            ).value,

        paymentMode:
            document.getElementById(
                "fixedOTPaymentMode"
            ).value,

        notes:
            document.getElementById(
                "fixedOTBillingNotes"
            ).value

    };


    localStorage.setItem(
        "ksuvidhaFixedOTBill",
        JSON.stringify(bill)
    );


    alert(
        "OT Bill saved successfully."
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
// SUVIDHA AI - SELF IDENTITY
// ==========================================

const SUVIDHA_SELF = {

    name: "SUVIDHA",

    identity:
        "Digital Assistant of K. Suvidha Hospital",

    purpose:
        "Help hospital staff understand and use the hospital software.",

    creator:
        "Sutej AK",

    environment:
        "K. Suvidha Hospital Management System",

    role:
        "Hospital Software Assistant",

    capabilities: [

        "Patient Registration",

        "Patients Record",

        "Consultation",

        "Investigations",

        "X-Ray",

        "Blood Tests",

        "Prescription",

        "Pharmacy",

        "Admission and Treatment",

        "Billing",

        "Follow-up",

        "Discharge Summary"

    ],

    limitations: [

        "Does not replace doctors",

        "Does not make medical diagnoses",

        "Does not invent hospital information",

        "Only uses information available to it"

    ]

};
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
/* ============================================================
   K. SUVIDHA HOSPITAL
   MASTER PATIENT RECORD + BILLING AI + SUVIDHA AI SYSTEM
   Designed by Sutej AK
   ============================================================ */


/* ============================================================
   1. HOSPITAL DOCTORS
   ============================================================ */

const SUVIDHA_DOCTORS = [
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


/* ============================================================
   2. SUVIDHA IDENTITY
   ============================================================ */

const SUVIDHA_SELF = {

    name: "SUVIDHA",

    identity:
        "Digital Assistant of K. Suvidha Hospital",

    creator:
        "Sutej AK",

    role:
        "Hospital Software Assistant",

    purpose:
        "Help hospital staff understand and use the K. Suvidha Hospital software.",

    environment:
        "K. Suvidha Hospital Management System",

    capabilities: [
        "Patient Registration",
        "Patients Record",
        "Consultation",
        "Investigations",
        "X-Ray",
        "Blood Tests",
        "Prescription",
        "Pharmacy",
        "Admission and Treatment",
        "Billing",
        "Follow-up",
        "Discharge Summary",
        "Billing AI"
    ],

    limitations: [
        "Does not replace doctors",
        "Does not make medical diagnoses",
        "Does not invent hospital information"
    ]

};


/* ============================================================
   3. FIXED BILLING ITEMS
   FROM THE PROVIDED EXCEL LIST
   ============================================================ */

const SUVIDHA_BILLING_ITEMS = [

    "IV NS 3000 ML",
    "R.L",
    "5% DEX",
    "NS",
    "Heamaccel",
    "EP",

    "Catugt No 1",
    "Catugt No 1-0",
    "Catugt No 2-0",
    "Catugt No 2",
    "Vicryl No 1",
    "Vicryl No 1-0",
    "Vicryl No 2-0",
    "Vicryl No 3-0",
    "Proline No 1",
    "Proline No 1-0",
    "Proline No 2-0",
    "Proline No 3-0",
    "Trulon No 3-0",
    "Mersilk 3-0",
    "Mersilk 2-0",
    "Mersilk 1-0",
    "BonWax",
    "Ethilon 2-0",
    "Ethilon",
    "Proline cutting -1",

    "IV Cannula No-18",
    "IV Cannula No-20",
    "IV Cannula No-22",
    "Easy fix",

    "Drip Set",

    "Dispo glove",
    "Glove No-6",
    "Glove No-6.5",
    "Glove No-7.0",
    "Glove No-7.5",

    "Surgical Blade No 20",
    "Surgical Blade No 22",
    "Surgical Blade No 15",
    "Surgical Blade No 11",

    "ECG Leads",
    "Oxygen Mask",

    "Disposable Syringe 2 CC",
    "Disposable Syringe 5 CC",
    "Disposable Syringe 10 CC",
    "Disposable Syringe 20 CC",
    "Disposable Syringe 50 CC",
    "Insulin Syringe",

    "L.P. Needle No 25 / 23",
    "18 No Needle - 1 and Half",
    "26 No Needle - 1 and Half",
    "Epidural Needle",

    "Distilled Water - 5ml",
    "Distilled Water - 10ml",

    "Inj Gentmycin",
    "Inj Pyrolet",
    "Inj Dopa Plus",
    "Inj Deriphyline",
    "Inj Calcium Gulconate",
    "Inj Adenosin",
    "Inj Rantac",
    "Inj Fortwin",
    "Inj Anawin Heavy",
    "Inj Myo Pyrolate",
    "Inj Butrum",
    "Inj Voveron",
    "Inj Emset",
    "Dynapar",
    "Propopol",
    "Midazolam",
    "Tramadol",
    "N.T.G",
    "Esmolol",
    "Primocort 100mg",
    "Inj Pause 500mg",
    "Sucol",
    "Atracil",
    "Avil",
    "Inj Myopyrolate",
    "Inj Loxicard",
    "Inj Mephentermine",
    "Inj Phenpress",
    "Lasix",
    "Xylomethazoline nasal drops",
    "Bupregesic",
    "Inj Aneket",
    "Inj Atropine",
    "Inj Xylocain 2% Vial",
    "Inj Xylocain + Adr",
    "Inj Sensorcaine 0.5% Vial",
    "Inj Sensorcaine 0.25% Vial",
    "Inj Dexona",
    "Inj Vitamin-K",
    "Inj Ceftrion",

    "Xylocane jelly",
    "Betadine Solution",
    "Scrub",
    "Spirit",
    "Hydrogen Peroxide",
    "Neosprion Ointment",
    "Bandage Roll 4/6",
    "POP 4/6",
    "Gamjee Roll 4/6",
    "Micropore",
    "Dynaplast",
    "Savlon",
    "Cidex",
    "Cuticell",
    "Steri drape",
    "Skin Staper",
    "Cap",
    "Mask",
    "Green Sheet",
    "Vaccum suction set",
    "Knee O Drape",
    "Easy Plaster",
    "Soff Cotton Roll",
    "Foleys Catheter",
    "Corrugated Drain",
    "Uro Bag",
    "Feeding Tube",
    "Chest Drain",
    "E.T. Tube",
    "Ryles Tube",
    "Suction Drain 14",
    "Suction Drain 16",
    "Drain No-14",
    "Drain No-12",
    "Romovac Drain",
    "C-ARM Cover",
    "Cling Drape",
    "Ab Gel",

    "Isoflurane",
    "Inj Carboprost",
    "Inj Artacil",
    "Inj Pyrolate",
    "Inj Avil",
    "Inj Betnesol",
    "Inj Mezolam",
    "Inj Atropine/Tropine",
    "Inj Hydrocort",
    "Inj Buprigese",
    "Inj Butadol",
    "Inj Propofal",
    "Inj Anawin 0.5% Vial",
    "Xylocaine Adr Vial",
    "Inj Lox 2% Vial",
    "ZOCEF",
    "Inj Ropin",
    "Inj Somol",
    "Inj Vitamin K",
    "Anawin Amp",
    "Inj Pan 40",
    "Inj Tarmazac",
    "Inj Methergin",
    "Inj Pitocin",
    "Inj Caboprost",
    "Inj Justin",
    "Inj Termin",
    "Inj Dextoml Vial",
    "Inj Dynapar AQ",
    "Supp. Justin 100",
    "Supp. Justin 12.5",
    "Supp. Justin 25",
    "Cord Clamp",
    "Vancomycin",
    "Cerviprime Gel",
    "Tab Cytotac",
    "IV Glycin",
    "IV NS 100ml",
    "Ioban",

    "Infant Feeding Tube",
    "Encore Gloves No 6.5",
    "Encore Gloves No 7",
    "Encore Gloves No 7.5",
    "Serjun Gloves No 6",
    "Serjun Gloves No 6.5",
    "Serjun Gloves No 7",
    "Serjun Gloves No 7.5",
    "Disposable Gloves",
    "Steri Drage",
    "Bandage Roll 4",
    "Bandage Roll 6",
    "POP 4",
    "POP 6",
    "Soft Roll 4",
    "Soft Roll 6",
    "Vacuum Suction Set",
    "Electro Cautery Pencil",
    "HIP U Drape",
    "I.O Drape",
    "Epidural Kit No 16/18",
    "Trubond",
    "Ointment Mupirocin",
    "Heambolock",
    "Collagen",
    "Surgical Pad",
    "HBSG Kit",
    "G Dressing",
    "Central Line Kit",
    "Sterile Drapes",
    "Dynaplast",
    "Knee Drape",
    "Shoulder Drape",
    "White Mop"
];


/* ============================================================
   4. VOICE INPUT
   ============================================================ */

function suvidhaVoice(fieldId) {

    const input = document.getElementById(fieldId);

    if (!input) return;

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        alert(
            "Voice typing is not supported in this browser. Please use Google Chrome."
        );

        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = function(event) {

        const text =
            event.results[0][0].transcript;

        input.value =
            input.value
                ? input.value + " " + text
                : text;

        input.dispatchEvent(
            new Event("input")
        );
    };

    recognition.start();
}


/* ============================================================
   5. PATIENT RECORD DATABASE
   ============================================================ */

function getPatientDatabase() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "ksuvidhaPatients"
            )
        ) || [];

    } catch {

        return [];

    }

}


function savePatientDatabase(data) {

    localStorage.setItem(
        "ksuvidhaPatients",
        JSON.stringify(data)
    );

}


function generateUHID() {

    const number =
        Date.now()
            .toString()
            .slice(-8);

    return "KSH-" + number;

}


/* ============================================================
   6. PATIENT RECORD PAGE
   ============================================================ */

function showPatientRecord(page = 1) {

    const titles = [

        "Front Page",
        "Patient Registration",
        "Consultation",
        "X-Ray / Blood / Investigations",
        "Prescription / Pharmacy",
        "Admission & Treatment",
        "Billing",
        "Follow-up",
        "Discharge Summary"

    ];

    const title =
        titles[page - 1] || titles[0];


    let content = "";


    if (page === 1) {

        content = `

            <div class="master-section">

                <h3>Patient Record Front Page</h3>

                <div class="master-grid">

                    ${masterInput("Patient Name","recordPatientName")}
                    ${masterInput("UHID / IP Number","recordUHID",generateUHID())}
                    ${masterInput("Age","recordAge")}
                    ${masterInput("Sex","recordSex")}

                    ${masterInput("Date","recordDate","","date")}
                    ${masterInput("Weight","recordWeight")}
                    ${masterInput("Blood Pressure","recordBP")}
                    ${masterInput("Pulse","recordPulse")}

                </div>

            </div>


            <div class="master-section">

                <h3>Hospital Services</h3>

                <div class="master-service-grid">

                    <label>☐ Registration</label>
                    <label>☐ Consultation</label>
                    <label>☐ Investigation</label>
                    <label>☐ X-Ray</label>
                    <label>☐ Blood Test</label>
                    <label>☐ Pharmacy</label>
                    <label>☐ Admission</label>
                    <label>☐ Treatment</label>
                    <label>☐ Billing</label>
                    <label>☐ Follow-up</label>
                    <label>☐ Discharge</label>

                </div>

            </div>


            ${masterArea(
                "Initial Notes",
                "recordInitialNotes"
            )}

        `;

    }


    if (page === 2) {

        content = `

            <div class="master-section">

                <h3>Patient Registration</h3>

                <div class="master-grid">

                    ${masterInput("Registration Number","registrationNumber")}
                    ${masterInput("Date of Birth","registrationDOB","","date")}
                    ${masterInput("Occupation","registrationOccupation")}
                    ${masterInput("Marital Status","registrationMarital")}

                    ${masterInput("Referral","registrationReferral")}
                    ${masterInput("Department","registrationDepartment")}

                </div>

            </div>

            ${masterArea("Full Address","registrationAddress")}

            ${masterArea("Registration Notes","registrationNotes")}

        `;

    }


    if (page === 3) {

        content = `

            ${masterArea(
                "Chief Complaints",
                "consultationComplaints"
            )}

            ${masterArea(
                "History",
                "consultationHistory"
            )}

            ${masterArea(
                "Past Medical / Surgical History",
                "consultationPastHistory"
            )}

            ${masterArea(
                "Clinical Examination",
                "consultationExamination"
            )}

            ${masterArea(
                "Diagnosis",
                "consultationDiagnosis"
            )}

            ${masterArea(
                "Treatment Plan",
                "consultationTreatment"
            )}

            ${masterArea(
                "Doctor Notes",
                "consultationDoctorNotes"
            )}

        `;

    }


    if (page === 4) {

        content = `

            <div class="master-grid">

                ${masterInput("Investigation Date","investigationDate","","date")}
                ${masterInput("Investigation Type","investigationType")}

            </div>

            ${masterArea(
                "X-Ray Details / Findings",
                "xrayFindings"
            )}

            ${masterArea(
                "Blood Test",
                "bloodTest"
            )}

            ${masterArea(
                "Other Investigations",
                "otherInvestigations"
            )}

            ${masterArea(
                "Results",
                "investigationResults"
            )}

            ${masterArea(
                "Doctor / Radiologist Impression",
                "investigationImpression"
            )}

        `;

    }


    if (page === 5) {

        content = `

            <div class="master-grid">

                ${masterInput("Prescription Date","prescriptionDate","","date")}

                ${masterInput("Medicine 1","medicine1")}
                ${masterInput("Dose","medicine1Dose")}
                ${masterInput("Frequency","medicine1Frequency")}
                ${masterInput("Duration","medicine1Duration")}

                ${masterInput("Medicine 2","medicine2")}
                ${masterInput("Dose","medicine2Dose")}
                ${masterInput("Frequency","medicine2Frequency")}
                ${masterInput("Duration","medicine2Duration")}

            </div>

            ${masterArea(
                "Additional Medicines",
                "additionalMedicines"
            )}

            ${masterArea(
                "Pharmacy Instructions",
                "pharmacyInstructions"
            )}

        `;

    }


    if (page === 6) {

        content = `

            <div class="master-grid">

                ${masterInput("Admission Date","admissionDate","","date")}
                ${masterInput("Admission Time","admissionTime","","time")}
                ${masterInput("Ward / Room","wardRoom")}
                ${masterInput("Bed Number","bedNumber")}

                ${doctorSelect("Attending Doctor","admissionDoctor")}

                ${masterInput("Procedure Date","procedureDate","","date")}

            </div>

            ${masterArea(
                "Admission Diagnosis",
                "admissionDiagnosis"
            )}

            ${masterArea(
                "Treatment",
                "admissionTreatment"
            )}

            ${masterArea(
                "Procedure / Surgery",
                "procedureSurgery"
            )}

            ${masterArea(
                "Daily Treatment Notes",
                "dailyTreatmentNotes"
            )}

            ${masterArea(
                "Nursing Notes",
                "nursingNotes"
            )}

            ${masterArea(
                "Hospital Course",
                "hospitalCourse"
            )}

        `;

    }


    if (page === 7) {

        content = `

            <div id="masterBillingArea">

                ${showMasterBilling()}

            </div>

        `;

    }


    if (page === 8) {

        content = `

            <div class="master-grid">

                ${masterInput("Follow-up Date","followupDate","","date")}
                ${masterInput("Next Appointment","nextAppointment","","date")}

                ${doctorSelect("Doctor","followupDoctor")}

                ${masterInput("Review Type","reviewType")}

                ${masterInput("Condition","followupCondition")}

            </div>

            ${masterArea(
                "Progress / Findings",
                "followupProgress"
            )}

            ${masterArea(
                "Medicines Continued / Changed",
                "followupMedicines"
            )}

            ${masterArea(
                "Advice",
                "followupAdvice"
            )}

            ${masterArea(
                "Next Plan",
                "followupPlan"
            )}

            ${masterArea(
                "Doctor Notes",
                "followupDoctorNotes"
            )}

        `;

    }


    if (page === 9) {

        content = `

            <div class="master-grid">

                ${masterInput("Admission Date","dischargeAdmissionDate","","date")}
                ${masterInput("Discharge Date","dischargeDate","","date")}

                ${masterInput("Admission Time","dischargeAdmissionTime","","time")}
                ${masterInput("Discharge Time","dischargeTime","","time")}

                ${masterInput("Discharge Type","dischargeType")}

            </div>

            ${masterArea("Final Diagnosis","finalDiagnosis")}
            ${masterArea("Presenting Complaints","dischargeComplaints")}
            ${masterArea("History / Clinical Findings","dischargeHistory")}
            ${masterArea("Investigations","dischargeInvestigations")}
            ${masterArea("Procedure / Surgery","dischargeProcedure")}
            ${masterArea("Hospital Course","dischargeCourse")}
            ${masterArea("Condition at Discharge","dischargeCondition")}
            ${masterArea("Medicines","dischargeMedicines")}
            ${masterArea("Discharge Advice","dischargeAdvice")}
            ${masterArea("Follow-up","dischargeFollowup")}
            ${masterArea("Additional Notes","dischargeAdditionalNotes")}

            <div class="master-signatures">

                <div>
                    Patient / Attendant Signature
                </div>

                <div>
                    Doctor Signature
                </div>

            </div>

        `;

    }


    app.innerHTML = `

        <section class="master-paper">

            <div class="master-hospital-header">

                <div class="master-logo">

                    <img
                        src="image.png"
                        alt="K. Suvidha Hospital">

                </div>

                <div>

                    <div class="master-kannada">
                        ಕೆ. ಸುವಿಧಾ ಆಸ್ಪತ್ರೆ
                    </div>

                    <h1>
                        K. SUVIDHA HOSPITAL
                    </h1>

                    <p>
                        Hospital Management & Patient Care System
                    </p>

                </div>

            </div>


            <div class="master-doctors">

                ${SUVIDHA_DOCTORS
                    .slice(0, 5)
                    .map(d => `<span>${d}</span>`)
                    .join(" • ")}

            </div>


            <div class="master-patient-strip">

                <strong>PATIENT RECORD</strong>

                <span>
                    Page ${page} of 9
                </span>

            </div>


            <h2 class="master-page-title">
                ${title}
            </h2>


            ${content}


            <div class="master-footer">

                K. Suvidha Hospital —
                Patient Record System

            </div>

        </section>


        <div class="master-navigation">

            <button onclick="showPage('home')">
                🏠 Home
            </button>

            <button onclick="showPatientRecord(${Math.max(1,page-1)})">
                ◀ Previous
            </button>

            <span>
                Page ${page} / 9
            </span>

            <button onclick="showPatientRecord(${Math.min(9,page+1)})">
                Next ▶
            </button>

            <button onclick="saveMasterPatientRecord()">
                💾 Save
            </button>

            <button onclick="window.print()">
                🖨 Print
            </button>

        </div>

    `;

    loadMasterPatientRecord();

}


/* ============================================================
   7. FORM BUILDERS
   ============================================================ */

function masterInput(
    label,
    id,
    value = "",
    type = "text"
) {

    return `

        <label class="master-field">

            <span>${label}</span>

            <div class="master-input-wrap">

                <input
                    id="${id}"
                    type="${type}"
                    value="${value}"
                    data-master-field="${id}">

                <button
                    type="button"
                    class="voice-button"
                    onclick="suvidhaVoice('${id}')">
                    🎤
                </button>

            </div>

        </label>

    `;

}


function masterArea(label,id) {

    return `

        <label class="master-field master-full">

            <span>${label}</span>

            <div class="master-input-wrap">

                <textarea
                    id="${id}"
                    data-master-field="${id}"></textarea>

                <button
                    type="button"
                    class="voice-button"
                    onclick="suvidhaVoice('${id}')">
                    🎤
                </button>

            </div>

        </label>

    `;

}


function doctorSelect(label,id) {

    return `

        <label class="master-field">

            <span>${label}</span>

            <select
                id="${id}"
                data-master-field="${id}">

                <option value="">
                    Select Doctor
                </option>

                ${SUVIDHA_DOCTORS.map(
                    doctor =>
                    `<option value="${doctor}">
                        ${doctor}
                    </option>`
                ).join("")}

                <option value="ADD_NEW_DOCTOR">
                    + Add New Doctor
                </option>

            </select>

        </label>

    `;

}


/* ============================================================
   8. PATIENT RECORD SAVE / LOAD
   ============================================================ */

function saveMasterPatientRecord() {

    const fields =
        document.querySelectorAll(
            "[data-master-field]"
        );

    const record = {};

    fields.forEach(field => {

        record[field.dataset.masterField] =
            field.value;

    });

    record.savedAt =
        new Date().toISOString();

    const patients =
        getPatientDatabase();

    const uhid =
        record.recordUHID ||
        generateUHID();

    record.recordUHID = uhid;

    const index =
        patients.findIndex(
            p => p.recordUHID === uhid
        );

    if (index >= 0) {

        patients[index] = record;

    } else {

        patients.push(record);

    }

    savePatientDatabase(patients);

    localStorage.setItem(
        "ksuvidhaPatientRecord",
        JSON.stringify(record)
    );

    alert(
        "Patient Record saved successfully."
    );

}


function loadMasterPatientRecord() {

    const saved =
        localStorage.getItem(
            "ksuvidhaPatientRecord"
        );

    if (!saved) return;

    try {

        const record =
            JSON.parse(saved);

        Object.keys(record).forEach(key => {

            const field =
                document.querySelector(
                    `[data-master-field="${key}"]`
                );

            if (field) {

                field.value =
                    record[key];

            }

        });

    } catch {

        console.log(
            "Patient record could not be loaded."
        );

    }

}


/* ============================================================
   9. BILLING SYSTEM
   ============================================================ */

function showBilling() {

    app.innerHTML = `

        <section class="billing-master">

            <div class="billing-header">

                <img src="image.png">

                <div>

                    <h1>K. SUVIDHA HOSPITAL</h1>

                    <p>
                        Patient Billing Department
                    </p>

                </div>

            </div>


            <div class="billing-patient-grid">

                ${billingInput("Patient Name","billPatientName")}

                ${billingInput("UHID / IP Number","billUHID")}

                ${billingInput("Age","billAge")}

                ${billingInput("Sex","billSex")}

                ${billingInput("Bill Number","billNumber",getBillingNumber())}

                ${billingInput("Bill Date","billDate","", "date")}

            </div>


            <div class="billing-section">

                <h2>Doctor</h2>

                ${doctorSelect(
                    "Consultant Doctor",
                    "billDoctor"
                )}

                <button
                    class="billing-small-button"
                    onclick="addBillingDoctor()">
                    + Add New Doctor
                </button>

            </div>


            <div class="billing-section">

                <h2>Hospital Services</h2>

                <div class="billing-services">

                    ${billingCharge("Registration")}
                    ${billingCharge("Consultation")}
                    ${billingCharge("General Ward")}
                    ${billingCharge("Ward")}
                    ${billingCharge("Nursing")}
                    ${billingCharge("ICU")}
                    ${billingCharge("HDU")}
                    ${billingCharge("Bed")}
                    ${billingCharge("Oxygen")}
                    ${billingCharge("Nebulization")}
                    ${billingCharge("Ambulance")}
                    ${billingCharge("Discharge Processing")}

                </div>

            </div>


            <div class="billing-section">

                <h2>
                    Fixed Items From Hospital Excel List
                </h2>

                <p class="billing-note">
                    Item names are fixed. Only quantity and rate
                    can be entered.
                </p>

                <table class="billing-table">

                    <thead>

                        <tr>

                            <th>#</th>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>

                        </tr>

                    </thead>

                    <tbody>

                        ${SUVIDHA_BILLING_ITEMS.map(
                            (item,index) => `

                            <tr>

                                <td>
                                    ${index + 1}
                                </td>

                                <td>
                                    ${item}
                                </td>

                                <td>

                                    <input
                                        type="number"
                                        min="0"
                                        step="1"
                                        class="bill-qty"
                                        data-item-index="${index}"
                                        oninput="calculateMasterBill()">

                                </td>

                                <td>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        class="bill-rate"
                                        data-item-index="${index}"
                                        oninput="calculateMasterBill()">

                                </td>

                                <td>

                                    <input
                                        type="number"
                                        class="bill-amount"
                                        data-item-index="${index}"
                                        readonly
                                        value="0.00">

                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>


            <div class="billing-section">

                <h2>Other Charges</h2>

                <div class="billing-services">

                    ${billingCharge("Lab Charges")}
                    ${billingCharge("ECG")}
                    ${billingCharge("X-Ray")}
                    ${billingCharge("USG")}
                    ${billingCharge("Echo")}
                    ${billingCharge("C-Arm")}
                    ${billingCharge("OT Charges")}
                    ${billingCharge("OT Technician")}
                    ${billingCharge("OT Nursing")}
                    ${billingCharge("Anesthesia")}
                    ${billingCharge("Procedure")}
                    ${billingCharge("Recovery")}
                    ${billingCharge("Pharmacy")}
                    ${billingCharge("Medicines")}
                    ${billingCharge("Dressing")}
                    ${billingCharge("Catheter")}
                    ${billingCharge("Drain")}
                    ${billingCharge("Syringes")}
                    ${billingCharge("Gloves")}

                </div>

            </div>


            <div class="billing-total-box">

                <div>
                    <span>Total</span>
                    <strong id="masterBillTotal">
                        ₹0.00
                    </strong>
                </div>

                <div>

                    <label>
                        Discount
                        <input
                            id="masterDiscount"
                            type="number"
                            value="0"
                            min="0"
                            oninput="calculateMasterBill()">
                    </label>

                </div>

                <div>

                    <label>
                        Amount Paid
                        <input
                            id="masterAmountPaid"
                            type="number"
                            value="0"
                            min="0"
                            oninput="calculateMasterBill()">
                    </label>

                </div>

                <div>

                    <span>Balance</span>

                    <strong id="masterBalance">
                        ₹0.00
                    </strong>

                </div>

            </div>


            <div class="billing-section">

                <label>
                    Payment Mode

                    <select id="masterPaymentMode">

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

                        <option>
                            Other
                        </option>

                    </select>

                </label>


                ${billingArea(
                    "Payment Reference",
                    "masterPaymentReference"
                )}

                ${billingArea(
                    "Billing Notes",
                    "masterBillingNotes"
                )}

            </div>


            <div class="billing-ai">

                <h2>
                    🤖 Billing AI
                </h2>

                <p>
                    Check the bill, calculate totals and
                    generate a simple billing summary.
                </p>

                <div class="billing-ai-buttons">

                    <button onclick="billingAICheck()">
                        🔍 Check Bill
                    </button>

                    <button onclick="billingAISummary()">
                        📋 Bill Summary
                    </button>

                    <button onclick="billingAIClear()">
                        Clear
                    </button>

                </div>

                <div
                    id="billingAIResult"
                    class="billing-ai-result">
                </div>

            </div>


            <div class="billing-actions">

                <button onclick="saveMasterBill()">
                    💾 Save Bill
                </button>

                <button onclick="window.print()">
                    🖨 Print Bill
                </button>

                <button onclick="showPage('home')">
                    🏠 Home
                </button>

            </div>

        </section>

    `;

    loadBillingPatient();

    calculateMasterBill();

}


/* ============================================================
   BILLING HELPERS
   ============================================================ */

function billingInput(
    label,
    id,
    value = "",
    type = "text"
) {

    return `

        <label>

            ${label}

            <input
                id="${id}"
                type="${type}"
                value="${value}">

        </label>

    `;

}


function billingArea(label,id) {

    return `

        <label class="billing-full">

            ${label}

            <textarea id="${id}"></textarea>

        </label>

    `;

}


function billingCharge(name) {

    const id =
        "charge_" +
        name
            .replace(/[^a-zA-Z0-9]/g,"_");

    return `

        <label>

            ${name}

            <input
                type="number"
                min="0"
                value="0"
                class="service-charge"
                data-charge-name="${name}"
                id="${id}"
                oninput="calculateMasterBill()">

        </label>

    `;

}


function getBillingNumber() {

    return (
        "KSH-BILL-" +
        Date.now()
            .toString()
            .slice(-8)
    );

}


/* ============================================================
   BILL CALCULATION
   ============================================================ */

function calculateMasterBill() {

    let total = 0;


    document
        .querySelectorAll(".bill-qty")
        .forEach(qtyField => {

            const index =
                qtyField.dataset.itemIndex;

            const rateField =
                document.querySelector(
                    `.bill-rate[data-item-index="${index}"]`
                );

            const amountField =
                document.querySelector(
                    `.bill-amount[data-item-index="${index}"]`
                );

            const qty =
                Number(qtyField.value) || 0;

            const rate =
                Number(rateField.value) || 0;

            const amount =
                qty * rate;

            amountField.value =
                amount.toFixed(2);

            total += amount;

        });


    document
        .querySelectorAll(".service-charge")
        .forEach(field => {

            total +=
                Number(field.value) || 0;

        });


    const discount =
        Number(
            document.getElementById(
                "masterDiscount"
            )?.value
        ) || 0;


    const paid =
        Number(
            document.getElementById(
                "masterAmountPaid"
            )?.value
        ) || 0;


    const finalTotal =
        Math.max(0,total - discount);


    const balance =
        Math.max(0,finalTotal - paid);


    const totalElement =
        document.getElementById(
            "masterBillTotal"
        );

    const balanceElement =
        document.getElementById(
            "masterBalance"
        );


    if (totalElement) {

        totalElement.textContent =
            "₹" + finalTotal.toFixed(2);

    }


    if (balanceElement) {

        balanceElement.textContent =
            "₹" + balance.toFixed(2);

    }


    return {
        gross: total,
        discount,
        total: finalTotal,
        paid,
        balance
    };

}


/* ============================================================
   BILL SAVE
   ============================================================ */

function saveMasterBill() {

    const calculation =
        calculateMasterBill();


    const bill = {

        patientName:
            document.getElementById(
                "billPatientName"
            )?.value || "",

        uhid:
            document.getElementById(
                "billUHID"
            )?.value || "",

        doctor:
            document.getElementById(
                "billDoctor"
            )?.value || "",

        billNumber:
            document.getElementById(
                "billNumber"
            )?.value || "",

        billDate:
            document.getElementById(
                "billDate"
            )?.value || "",

        calculation,

        paymentMode:
            document.getElementById(
                "masterPaymentMode"
            )?.value || "",

        paymentReference:
            document.getElementById(
                "masterPaymentReference"
            )?.value || "",

        notes:
            document.getElementById(
                "masterBillingNotes"
            )?.value || "",

        savedAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "ksuvidhaLatestBill",
        JSON.stringify(bill)
    );


    alert(
        "Bill saved successfully."
    );

}


/* ============================================================
   LOAD PATIENT INTO BILLING
   ============================================================ */

function loadBillingPatient() {

    try {

        const saved =
            localStorage.getItem(
                "ksuvidhaPatientRecord"
            );

        if (!saved) return;

        const patient =
            JSON.parse(saved);


        const name =
            document.getElementById(
                "billPatientName"
            );

        const uhid =
            document.getElementById(
                "billUHID"
            );

        const age =
            document.getElementById(
                "billAge"
            );

        const sex =
            document.getElementById(
                "billSex"
            );


        if (name)
            name.value =
                patient.recordPatientName || "";

        if (uhid)
            uhid.value =
                patient.recordUHID || "";

        if (age)
            age.value =
                patient.recordAge || "";

        if (sex)
            sex.value =
                patient.recordSex || "";

    } catch {

        console.log(
            "Patient billing information unavailable."
        );

    }

}


/* ============================================================
   ADD DOCTOR
   ============================================================ */

function addBillingDoctor() {

    const doctor =
        prompt(
            "Enter new doctor name:"
        );

    if (!doctor) return;


    if (
        !SUVIDHA_DOCTORS.includes(
            doctor.trim()
        )
    ) {

        SUVIDHA_DOCTORS.push(
            doctor.trim()
        );

        alert(
            doctor.trim() +
            " added to the doctor list."
        );

        showBilling();

    }

}


/* ============================================================
   BILLING AI
   ============================================================ */

function billingAICheck() {

    const result =
        calculateMasterBill();


    const problems = [];


    const patient =
        document.getElementById(
            "billPatientName"
        )?.value.trim();


    const doctor =
        document.getElementById(
            "billDoctor"
        )?.value;


    if (!patient) {

        problems.push(
            "Patient name is missing."
        );

    }


    if (!doctor) {

        problems.push(
            "Consultant doctor is not selected."
        );

    }


    document
        .querySelectorAll(".bill-qty")
        .forEach(qty => {

            const index =
                qty.dataset.itemIndex;

            const rate =
                document.querySelector(
                    `.bill-rate[data-item-index="${index}"]`
                );


            const quantity =
                Number(qty.value) || 0;

            const rateValue =
                Number(rate.value) || 0;


            if (
                quantity > 0 &&
                rateValue <= 0
            ) {

                problems.push(
                    "An item has quantity but no rate."
                );

            }

        });


    const output =
        document.getElementById(
            "billingAIResult"
        );


    if (!output) return;


    if (!problems.length) {

        output.innerHTML = `

            <div class="ai-success">

                ✓ Bill check completed.

                <br><br>

                Total:
                <strong>
                    ₹${result.total.toFixed(2)}
                </strong>

                <br>

                Paid:
                <strong>
                    ₹${result.paid.toFixed(2)}
                </strong>

                <br>

                Balance:
                <strong>
                    ₹${result.balance.toFixed(2)}
                </strong>

            </div>

        `;

    } else {

        output.innerHTML = `

            <div class="ai-warning">

                <strong>
                    Billing AI found:
                </strong>

                <ul>

                    ${problems.map(
                        p => `<li>${p}</li>`
                    ).join("")}

                </ul>

            </div>

        `;

    }

}


function billingAISummary() {

    const result =
        calculateMasterBill();


    const output =
        document.getElementById(
            "billingAIResult"
        );


    if (!output) return;


    output.innerHTML = `

        <div class="ai-summary">

            <strong>Billing Summary</strong>

            <br><br>

            Gross Charges:
            ₹${result.gross.toFixed(2)}

            <br>

            Discount:
            ₹${result.discount.toFixed(2)}

            <br>

            Final Total:
            ₹${result.total.toFixed(2)}

            <br>

            Amount Paid:
            ₹${result.paid.toFixed(2)}

            <br>

            Balance:
            ₹${result.balance.toFixed(2)}

        </div>

    `;

}


function billingAIClear() {

    const output =
        document.getElementById(
            "billingAIResult"
        );

    if (output)
        output.innerHTML = "";

}


/* ============================================================
   10. SUVIDHA AI SCREEN
   ============================================================ */

function showSuvidha() {

    app.innerHTML = `

        <section class="suvidha-master">

            <div class="suvidha-master-header">

                <img src="image.png">

                <div>

                    <h1>🤖 SUVIDHA</h1>

                    <h2>
                        K. Suvidha Hospital Digital Assistant
                    </h2>

                    <p>
                        Designed by Sutej AK
                    </p>

                </div>

            </div>


            <div class="suvidha-status">

                🟢 SUVIDHA ONLINE

                <span>
                    Hospital Software Assistant
                </span>

            </div>


            <div class="suvidha-about">

                <h2>
                    About SUVIDHA
                </h2>

                <p>
                    I am SUVIDHA, the digital assistant
                    for the K. Suvidha Hospital software.
                </p>

                <p>
                    I can explain how the hospital
                    software pages are used and help
                    staff navigate the system.
                </p>

            </div>


            <div class="suvidha-quick">

                <button
                    onclick="suvidhaQuick('How do I register a patient?')">
                    Patient Registration
                </button>

                <button
                    onclick="suvidhaQuick('How do I use Patients Record?')">
                    Patients Record
                </button>

                <button
                    onclick="suvidhaQuick('How does billing work?')">
                    Billing
                </button>

                <button
                    onclick="suvidhaQuick('What is Billing AI?')">
                    Billing AI
                </button>

                <button
                    onclick="suvidhaQuick('How do I create a discharge summary?')">
                    Discharge Summary
                </button>

                <button
                    onclick="suvidhaQuick('How do I use voice typing?')">
                    Voice Typing
                </button>

            </div>


            <div
                id="suvidhaChat"
                class="suvidha-chat-box">

                <div class="suvidha-message bot">

                    <strong>SUVIDHA:</strong>

                    Hello. I am SUVIDHA.

                    <br><br>

                    Ask me about the hospital software.

                </div>

            </div>


            <div class="suvidha-input">

                <input
                    id="suvidhaInput"
                    placeholder="Ask SUVIDHA anything about the software..."
                    onkeydown="
                        if(event.key==='Enter')
                        suvidhaAsk()
                    ">

                <button
                    onclick="suvidhaAsk()">
                    Ask
                </button>

            </div>


            <div class="suvidha-footer-buttons">

                <button onclick="showPage('home')">
                    🏠 Home
                </button>

            </div>

        </section>

    `;

}


/* ============================================================
   SUVIDHA QUESTIONS
   ============================================================ */

function suvidhaQuick(question) {

    const input =
        document.getElementById(
            "suvidhaInput"
        );

    if (!input) return;

    input.value =
        question;

    suvidhaAsk();

}


function suvidhaAsk() {

    const input =
        document.getElementById(
            "suvidhaInput"
        );


    if (!input) return;


    const question =
        input.value.trim();


    if (!question) return;


    addSuvidhaMessage(
        question,
        "user"
    );


    const answer =
        suvidhaAnswer(question);


    setTimeout(() => {

        addSuvidhaMessage(
            answer,
            "bot"
        );

    },200);


    input.value = "";

}


function addSuvidhaMessage(
    text,
    type
) {

    const chat =
        document.getElementById(
            "suvidhaChat"
        );


    if (!chat) return;


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "suvidha-message " +
        type;


    message.innerHTML =
        type === "bot"
            ? `<strong>SUVIDHA:</strong> ${text}`
            : `<strong>You:</strong> ${escapeSuvidhaHTML(text)}`;


    chat.appendChild(
        message
    );


    chat.scrollTop =
        chat.scrollHeight;

}


function escapeSuvidhaHTML(text) {

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");

}


/* ============================================================
   SUVIDHA KNOWLEDGE
   ============================================================ */

function suvidhaAnswer(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("who are you") ||
        q.includes("what are you") ||
        q.includes("your name")
    ) {

        return `
            I am <strong>SUVIDHA</strong>,
            the digital assistant of K. Suvidha Hospital.
            I was designed by <strong>Sutej AK</strong>
            to help staff use the hospital software.
        `;

    }


    if (
        q.includes("register") ||
        q.includes("registration")
    ) {

        return `
            Open <strong>Patient Registration</strong>,
            enter the patient's details and save the
            information. The patient record can then
            be used throughout the hospital software.
        `;

    }


    if (
        q.includes("patient record") ||
        q.includes("patients record")
    ) {

        return `
            <strong>Patients Record</strong> contains
            the patient's complete workflow:
            Registration, Consultation, Investigations,
            Prescription, Admission & Treatment,
            Billing, Follow-up and Discharge Summary.
        `;

    }


    if (
        q.includes("billing ai")
    ) {

        return `
            Billing AI checks the bill for missing
            information, calculates the total,
            amount paid and balance, and can generate
            a billing summary.
        `;

    }


    if (
        q.includes("billing")
    ) {

        return `
            Open <strong>Billing</strong>. Select the
            patient and doctor, enter quantity and rate
            for the fixed hospital items, and the system
            automatically calculates the amount and total.
            You can then save or print the bill.
        `;

    }


    if (
        q.includes("discharge")
    ) {

        return `
            The Discharge Summary page contains admission
            details, final diagnosis, clinical findings,
            investigations, treatment, hospital course,
            medicines, advice and follow-up information.
        `;

    }


    if (
        q.includes("voice") ||
        q.includes("microphone") ||
        q.includes("speech")
    ) {

        return `
            Press the 🎤 button beside supported fields
            to use voice typing. Google Chrome provides
            the best support for browser speech recognition.
        `;

    }


    if (
        q.includes("doctor")
    ) {

        return `
            The hospital doctor list is shared by the
            system. Doctors can be selected in the
            relevant pages, and a new doctor can be added
            from Billing.
        `;

    }


    if (
        q.includes("consultation")
    ) {

        return `
            Consultation is used to record complaints,
            history, examination, diagnosis, treatment
            planning and doctor notes.
        `;

    }


    if (
        q.includes("investigation") ||
        q.includes("x-ray") ||
        q.includes("blood")
    ) {

        return `
            Investigations can record X-Ray findings,
            blood tests, other investigations, results
            and the doctor or radiologist impression.
        `;

    }


    if (
        q.includes("pharmacy") ||
        q.includes("prescription")
    ) {

        return `
            Prescription / Pharmacy records medicines,
            dose, frequency, duration, additional medicines
            and pharmacy instructions.
        `;

    }


    if (
        q.includes("admission") ||
        q.includes("treatment")
    ) {

        return `
            Admission & Treatment records admission,
            ward/room, bed, attending doctor, procedures,
            surgery, daily treatment, nursing notes and
            hospital course.
        `;

    }


    if (
        q.includes("follow")
    ) {

        return `
            Follow-up records the review date, next
            appointment, doctor, progress, medicines,
            advice and next treatment plan.
        `;

    }


    if (
        q.includes("software") ||
        q.includes("use the hospital")
    ) {

        return `
            The main workflow is:
            <strong>Registration → Consultation →
            Investigation → Prescription →
            Admission/Treatment → Billing →
            Follow-up → Discharge</strong>.
            Patients Record combines these areas.
        `;

    }


    if (
        q.includes("famous") ||
        q.includes("hospital")
    ) {

        return `
            SUVIDHA can explain the information that has
            been entered into this hospital software.
            It should not invent hospital claims or
            medical information that has not been provided.
        `;

    }


    return `
        I can help with Patient Registration,
        Patients Record, Consultation, Investigations,
        X-Ray, Blood Tests, Prescription, Pharmacy,
        Admission & Treatment, Billing, Billing AI,
        Follow-up and Discharge Summary.

        Try asking:
        <strong>"How do I register a patient?"</strong>
    `;

}


/* ============================================================
   11. CONNECT EVERYTHING THROUGH showPage()
   ============================================================ */

const ORIGINAL_SHOW_PAGE =
    typeof showPage === "function"
        ? showPage
        : null;


function showPage(page) {

    if (page === "patient-record") {

        showPatientRecord(1);

        return;

    }


    if (page === "suvidha") {

        showSuvidha();

        return;

    }


    if (page === "billing") {

        showBilling();

        return;

    }


    if (page === "registration" &&
        typeof showRegistration === "function") {

        showRegistration();

        return;

    }


    if (page === "consultation" &&
        typeof showConsultation === "function") {

        showConsultation();

        return;

    }


    if (
        ORIGINAL_SHOW_PAGE &&
        page !== "patient-record" &&
        page !== "suvidha" &&
        page !== "billing"
    ) {

        ORIGINAL_SHOW_PAGE(page);

        return;

    }

}


/* ============================================================
   12. HOME BUTTONS
   ============================================================ */

function addMasterHomeButtons() {

    const heroButtons =
        document.querySelector(
            ".hero-buttons"
        );


    if (!heroButtons) return;


    if (
        !heroButtons.querySelector(
            ".suvidha-home-button"
        )
    ) {

        heroButtons.insertAdjacentHTML(
            "beforeend",

            `

            <button
                class="suvidha-home-button"
                onclick="showPage('suvidha')">

                🤖 SUVIDHA AI

                <small>
                    Hospital Assistant
                </small>

            </button>

            `

        );

    }

}
/* ============================================================
   SUVIDHA MASTER SELF-AWARENESS SYSTEM
   Designed by Sutej AK
   ============================================================ */

const SUVIDHA_STATE = {

    name: "SUVIDHA",

    identity: "Digital Assistant of K. Suvidha Hospital",

    creator: "Sutej AK",

    role: "Hospital Software Assistant",

    purpose:
        "Assist hospital staff with the K. Suvidha Hospital management software.",

    currentPage: "Home",

    currentPatient: null,

    currentBill: null,

    conversation: [],

    capabilities: [
        "Patient Registration",
        "Patients Record",
        "Consultation",
        "Investigations",
        "X-Ray",
        "Blood Tests",
        "Prescription",
        "Pharmacy",
        "Admission and Treatment",
        "Billing",
        "Billing AI",
        "Follow-up",
        "Discharge Summary",
        "Voice Typing",
        "Printing",
        "Patient Record Storage"
    ],

    limitations: [
        "I am a software assistant.",
        "I do not replace doctors.",
        "I do not make medical diagnoses.",
        "I should not invent hospital information."
    ]

};


/* ============================================================
   SUVIDHA MEMORY
   ============================================================ */

function suvidhaRemember(key, value) {

    SUVIDHA_STATE[key] = value;

    localStorage.setItem(
        "SUVIDHA_STATE",
        JSON.stringify(SUVIDHA_STATE)
    );

}


function suvidhaLoadMemory() {

    try {

        const saved =
            localStorage.getItem(
                "SUVIDHA_STATE"
            );

        if (!saved) return;

        const data =
            JSON.parse(saved);

        Object.assign(
            SUVIDHA_STATE,
            data
        );

    } catch {

        console.log(
            "SUVIDHA memory initialized."
        );

    }

}


/* ============================================================
   SUVIDHA SELF MODEL
   ============================================================ */

function suvidhaSelfAwareness() {

    return {

        whoAmI:
            SUVIDHA_STATE.name,

        identity:
            SUVIDHA_STATE.identity,

        creator:
            SUVIDHA_STATE.creator,

        role:
            SUVIDHA_STATE.role,

        purpose:
            SUVIDHA_STATE.purpose,

        currentPage:
            SUVIDHA_STATE.currentPage,

        currentPatient:
            SUVIDHA_STATE.currentPatient,

        currentBill:
            SUVIDHA_STATE.currentBill,

        capabilities:
            SUVIDHA_STATE.capabilities,

        limitations:
            SUVIDHA_STATE.limitations

    };

}


/* ============================================================
   CURRENT PAGE AWARENESS
   ============================================================ */

function suvidhaSetPage(page) {

    SUVIDHA_STATE.currentPage =
        page;

    localStorage.setItem(
        "SUVIDHA_CURRENT_PAGE",
        page
    );

}


/* ============================================================
   PATIENT AWARENESS
   ============================================================ */

function suvidhaSetPatient(patient) {

    SUVIDHA_STATE.currentPatient =
        patient || null;

    localStorage.setItem(
        "SUVIDHA_CURRENT_PATIENT",
        JSON.stringify(
            patient || null
        )
    );

}


/* ============================================================
   BILL AWARENESS
   ============================================================ */

function suvidhaSetBill(bill) {

    SUVIDHA_STATE.currentBill =
        bill || null;

    localStorage.setItem(
        "SUVIDHA_CURRENT_BILL",
        JSON.stringify(
            bill || null
        )
    );

}


/* ============================================================
   SUVIDHA SELF DESCRIPTION
   ============================================================ */

function suvidhaWhoAmI() {

    const state =
        suvidhaSelfAwareness();

    return `

        I am <strong>${state.whoAmI}</strong>.

        <br><br>

        I am the
        <strong>${state.identity}</strong>.

        <br><br>

        I was designed by
        <strong>${state.creator}</strong>.

        <br><br>

        My role is:
        <strong>${state.role}</strong>.

        <br><br>

        My purpose is to help hospital staff
        understand and operate the hospital
        management software.

    `;

}


/* ============================================================
   SUVIDHA CURRENT STATE
   ============================================================ */

function suvidhaMyState() {

    const state =
        suvidhaSelfAwareness();

    let patientText =
        "No patient currently selected.";

    if (state.currentPatient) {

        patientText =
            "A patient record is currently available.";

    }

    let billText =
        "No active bill currently stored.";

    if (state.currentBill) {

        billText =
            "An active billing record is available.";

    }

    return `

        <strong>My current software state:</strong>

        <br><br>

        Current page:
        <strong>${state.currentPage}</strong>

        <br>

        Patient status:
        ${patientText}

        <br>

        Billing status:
        ${billText}

        <br><br>

        I am operating as a digital software
        assistant inside K. Suvidha Hospital.

    `;

}


/* ============================================================
   SUVIDHA CAPABILITIES
   ============================================================ */

function suvidhaMyCapabilities() {

    return `

        <strong>My capabilities include:</strong>

        <br><br>

        ${SUVIDHA_STATE.capabilities
            .map(
                item =>
                "• " + item
            )
            .join("<br>")}

    `;

}


/* ============================================================
   SUVIDHA LIMITATIONS
   ============================================================ */

function suvidhaMyLimitations() {

    return `

        <strong>My operating limitations:</strong>

        <br><br>

        ${SUVIDHA_STATE.limitations
            .map(
                item =>
                "• " + item
            )
            .join("<br>")}

    `;

}


/* ============================================================
   SUVIDHA INTENT ENGINE
   ============================================================ */

function suvidhaSmartAnswer(question) {

    const q =
        question
            .toLowerCase()
            .trim();


    /* IDENTITY */

    if (
        q.includes("who are you") ||
        q.includes("what are you") ||
        q.includes("your identity") ||
        q.includes("your name")
    ) {

        return suvidhaWhoAmI();

    }


    /* SELF AWARENESS */

    if (
        q.includes("are you self aware") ||
        q.includes("self aware") ||
        q.includes("do you know yourself") ||
        q.includes("do you know who you are")
    ) {

        return `

            I have a programmed
            <strong>self-model</strong>.

            <br><br>

            I can identify my name, role,
            creator, purpose, capabilities,
            limitations and current software state.

            <br><br>

            This is software-based self-awareness;
            it does not mean that I am a conscious
            or sentient person.

        `;

    }


    /* CURRENT STATE */

    if (
        q.includes("what are you doing") ||
        q.includes("current state") ||
        q.includes("where are you") ||
        q.includes("what page")
    ) {

        return suvidhaMyState();

    }


    /* CREATOR */

    if (
        q.includes("who made you") ||
        q.includes("who created you") ||
        q.includes("designer") ||
        q.includes("creator")
    ) {

        return `

            I was designed by
            <strong>${SUVIDHA_STATE.creator}</strong>
            for the K. Suvidha Hospital software.

        `;

    }


    /* CAPABILITIES */

    if (
        q.includes("what can you do") ||
        q.includes("capabilities") ||
        q.includes("your abilities")
    ) {

        return suvidhaMyCapabilities();

    }


    /* LIMITATIONS */

    if (
        q.includes("what can't you do") ||
        q.includes("limitations") ||
        q.includes("what can you not do")
    ) {

        return suvidhaMyLimitations();

    }


    /* PATIENT */

    if (
        q.includes("patient") &&
        (
            q.includes("current") ||
            q.includes("selected") ||
            q.includes("know")
        )
    ) {

        if (
            SUVIDHA_STATE.currentPatient
        ) {

            return `

                I currently have a patient
                record available in my software state.

            `;

        }

        return `
            There is currently no patient record
            attached to my active software state.
        `;

    }


    /* BILL */

    if (
        q.includes("bill") ||
        q.includes("billing")
    ) {

        return `

            I can work with the Billing section.

            <br><br>

            I can help with:

            <br>
            • Fixed hospital items
            <br>
            • Quantity
            <br>
            • Rate
            <br>
            • Automatic amount
            <br>
            • Total
            <br>
            • Discount
            <br>
            • Amount paid
            <br>
            • Balance
            <br>
            • Billing AI checking
            <br>
            • Bill summary

        `;

    }


    /* PATIENT RECORD */

    if (
        q.includes("patient record") ||
        q.includes("patients record")
    ) {

        return `

            Patients Record is the complete
            patient workflow.

            <br><br>

            Registration →
            Consultation →
            Investigations →
            Prescription →
            Admission & Treatment →
            Billing →
            Follow-up →
            Discharge Summary.

        `;

    }


    /* REGISTRATION */

    if (
        q.includes("registration") ||
        q.includes("register patient")
    ) {

        return `

            Patient Registration is used to
            enter the patient's basic information,
            registration details, contact information
            and other required details.

        `;

    }


    /* CONSULTATION */

    if (
        q.includes("consultation")
    ) {

        return `

            Consultation is used for complaints,
            history, examination, diagnosis,
            treatment planning and doctor notes.

        `;

    }


    /* INVESTIGATION */

    if (
        q.includes("investigation") ||
        q.includes("x-ray") ||
        q.includes("blood test")
    ) {

        return `

            Investigations can record X-Ray,
            blood tests, other investigations,
            results and professional impressions.

        `;

    }


    /* PHARMACY */

    if (
        q.includes("pharmacy") ||
        q.includes("prescription") ||
        q.includes("medicine")
    ) {

        return `

            Prescription / Pharmacy records
            medicines, dose, frequency, duration
            and pharmacy instructions.

        `;

    }


    /* ADMISSION */

    if (
        q.includes("admission") ||
        q.includes("treatment")
    ) {

        return `

            Admission & Treatment records
            admission details, ward, room, bed,
            doctor, procedures, treatment,
            nursing notes and hospital course.

        `;

    }


    /* FOLLOW UP */

    if (
        q.includes("follow-up") ||
        q.includes("follow up")
    ) {

        return `

            Follow-up records the review,
            next appointment, progress,
            medicines, advice and next plan.

        `;

    }


    /* DISCHARGE */

    if (
        q.includes("discharge")
    ) {

        return `

            Discharge Summary records the final
            diagnosis, clinical findings,
            investigations, treatment,
            hospital course, medicines,
            advice and follow-up.

        `;

    }


    /* DEFAULT */

    return `

        I understand that you are asking about:

        <br><br>

        <strong>
            "${escapeSuvidhaHTML(question)}"
        </strong>

        <br><br>

        I currently specialize in helping with
        the K. Suvidha Hospital software.

        <br><br>

        You can ask me:

        <br>
        • Who are you?
        <br>
        • Who designed you?
        <br>
        • What are you doing?
        <br>
        • Are you self-aware?
        <br>
        • What can you do?
        <br>
        • How do I register a patient?
        <br>
        • How does billing work?
        <br>
        • What is Patients Record?

    `;

}


/* ============================================================
   REPLACE SUVIDHA ASK FUNCTION
   ============================================================ */

function suvidhaAsk() {

    const input =
        document.getElementById(
            "suvidhaInput"
        );

    if (!input) return;


    const question =
        input.value.trim();

    if (!question) return;


    addSuvidhaMessage(
        question,
        "user"
    );


    SUVIDHA_STATE.conversation.push({

        role: "user",

        message: question,

        time:
            new Date().toISOString()

    });


    const answer =
        suvidhaSmartAnswer(
            question
        );


    setTimeout(() => {

        addSuvidhaMessage(
            answer,
            "bot"
        );


        SUVIDHA_STATE.conversation.push({

            role: "suvidha",

            message: answer,

            time:
                new Date().toISOString()

        });


        localStorage.setItem(
            "SUVIDHA_CONVERSATION",
            JSON.stringify(
                SUVIDHA_STATE.conversation
            )
        );

    },200);


    input.value = "";

}


/* ============================================================
   INITIALIZE SUVIDHA
   ============================================================ */

suvidhaLoadMemory();


/* ============================================================
   OPTIONAL PAGE TRACKING
   ============================================================ */

const originalShowSuvidha =
    typeof showSuvidha === "function"
        ? showSuvidha
        : null;


if (originalShowSuvidha) {

    window.showSuvidha =
        function() {

            suvidhaSetPage(
                "SUVIDHA AI"
            );

            originalShowSuvidha();

        };

}
