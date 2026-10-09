/**
 * ==========================================================================
 * BHARATRAIL - TRAIN RESERVATION SYSTEM
 * Core Application Logic & Client-side Controller
 * ==========================================================================
 */

// --- Initial Mock Data: Train Schedules & Routes ---
const MOCK_TRAINS = [
  {
    id: "TR-101",
    number: "22436",
    name: "Vande Bharat Express",
    type: "vande-bharat",
    typeLabel: "Vande Bharat",
    from: "New Delhi (NDLS)",
    to: "Varanasi Jn (BSB)",
    fromCode: "NDLS",
    toCode: "BSB",
    depTime: "06:00 AM",
    arrTime: "02:00 PM",
    duration: "8h 00m",
    runsOn: ["M", "T", "W", "F", "S", "S"],
    classes: [
      { code: "CC", name: "Chair Car", fare: 1750, status: "AVL 48", statusCode: "avl" },
      { code: "EC", name: "Exec Chair", fare: 3300, status: "AVL 12", statusCode: "avl" }
    ]
  },
  {
    id: "TR-102",
    number: "12952",
    name: "Mumbai Rajdhani Express",
    type: "superfast",
    typeLabel: "Superfast",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (MMCT)",
    fromCode: "NDLS",
    toCode: "MMCT",
    depTime: "04:55 PM",
    arrTime: "08:35 AM",
    duration: "15h 40m",
    runsOn: ["M", "T", "W", "T", "F", "S", "S"],
    classes: [
      { code: "3A", name: "3 AC", fare: 2180, status: "AVL 84", statusCode: "avl" },
      { code: "2A", name: "2 AC", fare: 3120, status: "RAC 04", statusCode: "rac" },
      { code: "1A", name: "1 AC", fare: 4850, status: "AVL 06", statusCode: "avl" }
    ]
  },
  {
    id: "TR-103",
    number: "12004",
    name: "Lucknow Shatabdi Express",
    type: "express",
    typeLabel: "Shatabdi",
    from: "New Delhi (NDLS)",
    to: "Lucknow (LKO)",
    fromCode: "NDLS",
    toCode: "LKO",
    depTime: "06:10 AM",
    arrTime: "12:40 PM",
    duration: "6h 30m",
    runsOn: ["M", "T", "W", "T", "F", "S", "S"],
    classes: [
      { code: "CC", name: "Chair Car", fare: 1165, status: "AVL 112", statusCode: "avl" },
      { code: "EC", name: "Exec Chair", fare: 2125, status: "WL 05", statusCode: "wl" }
    ]
  },
  {
    id: "TR-104",
    number: "12626",
    name: "Kerala Superfast Express",
    type: "superfast",
    typeLabel: "Superfast",
    from: "New Delhi (NDLS)",
    to: "Trivandrum (TVC)",
    fromCode: "NDLS",
    toCode: "TVC",
    depTime: "08:10 PM",
    arrTime: "10:30 PM",
    duration: "50h 20m",
    runsOn: ["M", "T", "W", "T", "F", "S", "S"],
    classes: [
      { code: "SL", name: "Sleeper", fare: 880, status: "AVL 140", statusCode: "avl" },
      { code: "3A", name: "3 AC", fare: 2310, status: "AVL 32", statusCode: "avl" },
      { code: "2A", name: "2 AC", fare: 3390, status: "RAC 11", statusCode: "rac" }
    ]
  },
  {
    id: "TR-105",
    number: "12260",
    name: "Sealdah Duronto Express",
    type: "superfast",
    typeLabel: "Duronto",
    from: "New Delhi (NDLS)",
    to: "Kolkata (SDAH)",
    fromCode: "NDLS",
    toCode: "SDAH",
    depTime: "07:45 PM",
    arrTime: "12:45 PM",
    duration: "17h 00m",
    runsOn: ["M", "W", "T", "S"],
    classes: [
      { code: "3A", name: "3 AC", fare: 2240, status: "AVL 56", statusCode: "avl" },
      { code: "2A", name: "2 AC", fare: 3260, status: "AVL 18", statusCode: "avl" },
      { code: "1A", name: "1 AC", fare: 5120, status: "WL 02", statusCode: "wl" }
    ]
  },
  {
    id: "TR-106",
    number: "12658",
    name: "Chennai Mail Express",
    type: "express",
    typeLabel: "Mail Exp",
    from: "Bangalore (SBC)",
    to: "Chennai Central (MAS)",
    fromCode: "SBC",
    toCode: "MAS",
    depTime: "10:40 PM",
    arrTime: "04:30 AM",
    duration: "5h 50m",
    runsOn: ["M", "T", "W", "T", "F", "S", "S"],
    classes: [
      { code: "SL", name: "Sleeper", fare: 340, status: "AVL 92", statusCode: "avl" },
      { code: "3A", name: "3 AC", fare: 860, status: "AVL 40", statusCode: "avl" },
      { code: "2A", name: "2 AC", fare: 1250, status: "AVL 15", statusCode: "avl" }
    ]
  }
];

// --- Default Seed Bookings if localStorage is empty ---
const SEED_BOOKINGS = [
  {
    id: "BK-88912",
    pnr: "2849104821",
    trainNumber: "12952",
    trainName: "Mumbai Rajdhani Express",
    from: "New Delhi (NDLS)",
    to: "Mumbai Central (MMCT)",
    depTime: "04:55 PM",
    arrTime: "08:35 AM",
    travelDate: "2026-10-15",
    passengerName: "Aarav Sharma",
    age: "24",
    gender: "Male",
    classCode: "2A",
    coach: "A2",
    seat: "34",
    berthType: "Lower Berth",
    fare: 3120,
    status: "Confirmed",
    bookingDate: "2026-10-08"
  },
  {
    id: "BK-88913",
    pnr: "8472910385",
    trainNumber: "22436",
    trainName: "Vande Bharat Express",
    from: "New Delhi (NDLS)",
    to: "Varanasi Jn (BSB)",
    depTime: "06:00 AM",
    arrTime: "02:00 PM",
    travelDate: "2026-10-22",
    passengerName: "Aarav Sharma",
    age: "24",
    gender: "Male",
    classCode: "CC",
    coach: "C4",
    seat: "18",
    berthType: "Window Seat",
    fare: 1750,
    status: "Confirmed",
    bookingDate: "2026-10-09"
  },
  {
    id: "BK-88914",
    pnr: "1948205739",
    trainNumber: "12004",
    trainName: "Lucknow Shatabdi",
    from: "New Delhi (NDLS)",
    to: "Lucknow (LKO)",
    depTime: "06:10 AM",
    arrTime: "12:40 PM",
    travelDate: "2026-09-18",
    passengerName: "Aarav Sharma",
    age: "24",
    gender: "Male",
    classCode: "CC",
    coach: "C2",
    seat: "45",
    berthType: "Aisle",
    fare: 1165,
    status: "Completed",
    bookingDate: "2026-09-10"
  }
];

// --- Local Storage Helpers ---
function getStoredBookings() {
  const data = localStorage.getItem("bharatrail_bookings") || localStorage.getItem("railnova_bookings");
  if (!data) {
    localStorage.setItem("bharatrail_bookings", JSON.stringify(SEED_BOOKINGS));
    return SEED_BOOKINGS;
  }
  return JSON.parse(data);
}

function saveBookings(bookings) {
  localStorage.setItem("bharatrail_bookings", JSON.stringify(bookings));
}

function getCurrentUser() {
  const user = localStorage.getItem("bharatrail_user") || localStorage.getItem("railnova_user");
  if (!user) {
    const defaultUser = {
      name: "Aarav Sharma",
      email: "aarav.sharma@college.edu",
      phone: "+91 98765 43210",
      miles: 1450
    };
    localStorage.setItem("bharatrail_user", JSON.stringify(defaultUser));
    return defaultUser;
  }
  return JSON.parse(user);
}

// --- Toast Notification Helper ---
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconSvg = "";
  if (type === "success") {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === "error") {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <div>${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ==========================================================================
// HOME PAGE (index.html) CONTROLLERS
// ==========================================================================

function initHomePage() {
  const originInput = document.getElementById("originStation");
  const destInput = document.getElementById("destStation");
  const swapBtn = document.getElementById("btnSwapStations");
  const searchForm = document.getElementById("trainSearchForm");
  const trainsContainer = document.getElementById("trainsListContainer");
  const travelDateInput = document.getElementById("travelDate");
  const pnrLookupBtn = document.getElementById("btnCheckPnr");
  const pnrInput = document.getElementById("pnrNumberInput");

  // Set default travel date to today or tomorrow
  if (travelDateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    travelDateInput.min = `${yyyy}-${mm}-${dd}`;
    travelDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Swap Stations button
  if (swapBtn && originInput && destInput) {
    swapBtn.addEventListener("click", () => {
      const tempVal = originInput.value;
      originInput.value = destInput.value;
      destInput.value = tempVal;
    });
  }

  // Station quick selection pills
  document.querySelectorAll(".station-pill").forEach(pill => {
    pill.addEventListener("click", (e) => {
      const station = e.target.getAttribute("data-station");
      if (originInput && !originInput.value) {
        originInput.value = station;
      } else if (destInput) {
        destInput.value = station;
      }
    });
  });

  // Render initial trains list
  renderTrainsList(MOCK_TRAINS);

  // Train Search Submission
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const originQuery = (originInput ? originInput.value.trim().toLowerCase() : "");
      const destQuery = (destInput ? destInput.value.trim().toLowerCase() : "");
      const classSelect = document.getElementById("travelClass");
      const selectedClass = classSelect ? classSelect.value : "ALL";

      const filtered = MOCK_TRAINS.filter(train => {
        const matchesOrigin = !originQuery || train.from.toLowerCase().includes(originQuery) || train.fromCode.toLowerCase().includes(originQuery);
        const matchesDest = !destQuery || train.to.toLowerCase().includes(destQuery) || train.toCode.toLowerCase().includes(destQuery);
        const matchesClass = selectedClass === "ALL" || train.classes.some(c => c.code === selectedClass);
        return matchesOrigin && matchesDest && matchesClass;
      });

      renderTrainsList(filtered.length > 0 ? filtered : MOCK_TRAINS);
      showToast(`Found ${filtered.length > 0 ? filtered.length : MOCK_TRAINS.length} available trains!`, "success");

      // Smooth scroll to results
      const resultsSection = document.getElementById("trainsListSection");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // PNR Quick Lookup on Home Page
  if (pnrLookupBtn && pnrInput) {
    pnrLookupBtn.addEventListener("click", () => {
      const pnr = pnrInput.value.trim();
      if (!pnr || pnr.length !== 10) {
        showToast("Please enter a valid 10-digit PNR number.", "error");
        return;
      }
      handlePnrSearch(pnr);
    });
  }
}

// Render Train Cards
function renderTrainsList(trains) {
  const container = document.getElementById("trainsListContainer");
  if (!container) return;

  if (trains.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: #fff; border-radius: 16px; border: 1px solid #e2e8f0;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 style="font-weight: 700; color: #1e293b;">No Trains Found For Selected Route</h3>
        <p style="color: #64748b; margin-top: 0.5rem;">Try searching for popular routes like New Delhi (NDLS) to Mumbai (MMCT).</p>
      </div>
    `;
    return;
  }

  container.innerHTML = trains.map(train => {
    return `
      <div class="train-card" id="train-card-${train.id}">
        <div class="train-card-header">
          <div class="train-identity">
            <span class="train-number">${train.number}</span>
            <h3 class="train-name">${train.name}</h3>
            <span class="train-type-badge badge-${train.type}">${train.typeLabel}</span>
          </div>
          <div class="train-runs-on">
            <span>Runs on:</span>
            ${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => `<span class="day-dot ${train.runsOn.includes(d) ? 'active' : ''}">${d}</span>`).join('')}
          </div>
        </div>

        <div class="train-timeline">
          <div class="time-station-col">
            <div class="train-time">${train.depTime}</div>
            <div class="train-station-name">${train.from}</div>
            <div class="train-station-sub">Departs On Time</div>
          </div>

          <div class="route-progress-col">
            <div class="duration-text">${train.duration}</div>
            <div class="track-line-wrapper">
              <span class="track-point"></span>
              <span class="track-line"></span>
              <span class="track-point"></span>
            </div>
            <div class="stops-count">Non-stop / Superfast Halts</div>
          </div>

          <div class="time-station-col dest">
            <div class="train-time">${train.arrTime}</div>
            <div class="train-station-name">${train.to}</div>
            <div class="train-station-sub">Platform 1 - 4</div>
          </div>
        </div>

        <div class="classes-grid">
          ${train.classes.map(c => `
            <div class="class-card" onclick="openBookingModal('${train.id}', '${c.code}')">
              <div class="class-header-row">
                <span class="class-code">${c.code}</span>
                <span class="class-fare">₹${c.fare}</span>
              </div>
              <div class="class-status status-${c.statusCode}">
                <span style="font-size: 1rem;">●</span> ${c.status}
              </div>
              <div class="class-footer-action">
                <span class="btn-book-chip">Book Ticket</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// BOOKING MODAL & WORKFLOW
// ==========================================================================

let selectedBookingData = null;

function openBookingModal(trainId, classCode) {
  const train = MOCK_TRAINS.find(t => t.id === trainId);
  if (!train) return;

  const targetClass = train.classes.find(c => c.code === classCode) || train.classes[0];
  selectedBookingData = {
    train,
    classInfo: targetClass
  };

  const modal = document.getElementById("bookingModal");
  if (!modal) return;

  document.getElementById("modalTrainTitle").textContent = `${train.number} - ${train.name}`;
  document.getElementById("modalRouteText").textContent = `${train.from} → ${train.to}`;
  document.getElementById("modalClassText").textContent = `${targetClass.name} (${targetClass.code}) • Fare: ₹${targetClass.fare}`;
  
  modal.classList.add("open");
}

function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove("open");
}

function submitBookingForm(e) {
  e.preventDefault();
  if (!selectedBookingData) return;

  const passName = document.getElementById("passengerNameInput").value.trim();
  const passAge = document.getElementById("passengerAgeInput").value.trim();
  const passGender = document.getElementById("passengerGenderInput").value;
  const berthPref = document.getElementById("berthPreferenceInput").value;

  if (!passName || !passAge) {
    showToast("Please provide all passenger details.", "error");
    return;
  }

  // Generate realistic PNR & Seat
  const randomPnr = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  const coachLetters = ["A1", "A2", "B1", "B2", "B3", "C1", "C2", "S1", "S2"];
  const coach = coachLetters[Math.floor(Math.random() * coachLetters.length)];
  const seatNum = Math.floor(1 + Math.random() * 64);

  const newBooking = {
    id: "BK-" + Math.floor(10000 + Math.random() * 90000),
    pnr: randomPnr,
    trainNumber: selectedBookingData.train.number,
    trainName: selectedBookingData.train.name,
    from: selectedBookingData.train.from,
    to: selectedBookingData.train.to,
    depTime: selectedBookingData.train.depTime,
    arrTime: selectedBookingData.train.arrTime,
    travelDate: document.getElementById("travelDate") ? document.getElementById("travelDate").value : "2026-10-20",
    passengerName: passName,
    age: passAge,
    gender: passGender,
    classCode: selectedBookingData.classInfo.code,
    coach: coach,
    seat: seatNum.toString(),
    berthType: berthPref || "Lower Berth",
    fare: selectedBookingData.classInfo.fare,
    status: "Confirmed",
    bookingDate: new Date().toISOString().split("T")[0]
  };

  const bookings = getStoredBookings();
  bookings.unshift(newBooking);
  saveBookings(bookings);

  closeBookingModal();
  showToast(`Ticket Confirmed! PNR: ${randomPnr}`, "success");

  // Show the generated E-ticket immediately
  openTicketModal(newBooking);
}

// ==========================================================================
// E-TICKET MODAL & PRINTING
// ==========================================================================

function openTicketModal(booking) {
  const modal = document.getElementById("ticketModal");
  if (!modal) return;

  document.getElementById("ticketPnrDisplay").textContent = booking.pnr;
  document.getElementById("ticketTrainNameDisplay").textContent = `${booking.trainNumber} / ${booking.trainName}`;
  document.getElementById("ticketDateDisplay").textContent = booking.travelDate;
  document.getElementById("ticketRouteDisplay").textContent = `${booking.from} ➔ ${booking.to}`;
  document.getElementById("ticketPassengerDisplay").textContent = `${booking.passengerName} (${booking.age} yrs, ${booking.gender})`;
  document.getElementById("ticketSeatDisplay").textContent = `Coach: ${booking.coach} | Berth: ${booking.seat} (${booking.berthType})`;
  document.getElementById("ticketClassDisplay").textContent = booking.classCode;
  document.getElementById("ticketFareDisplay").textContent = `₹${booking.fare}`;
  document.getElementById("ticketStatusDisplay").textContent = booking.status;

  modal.classList.add("open");
}

function closeTicketModal() {
  const modal = document.getElementById("ticketModal");
  if (modal) modal.classList.remove("open");
}

function printTicket() {
  window.print();
}

// ==========================================================================
// PNR STATUS SEARCH
// ==========================================================================

function handlePnrSearch(pnr) {
  const bookings = getStoredBookings();
  let found = bookings.find(b => b.pnr === pnr);

  // If not found in stored bookings, simulate realistic lookup
  if (!found) {
    found = {
      pnr: pnr,
      trainNumber: "12424",
      trainName: "New Delhi Dibrugarh Rajdhani",
      from: "New Delhi (NDLS)",
      to: "Guwahati (GHY)",
      depTime: "04:10 PM",
      arrTime: "07:30 PM",
      travelDate: "2026-10-18",
      passengerName: "Verified Passenger",
      coach: "B3",
      seat: "27",
      berthType: "Side Lower (SL)",
      classCode: "3A",
      status: "Confirmed (CNF)"
    };
  }

  const resultContainer = document.getElementById("pnrResultContainer");
  if (resultContainer) {
    resultContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 1rem; margin-bottom: 1rem;">
        <div>
          <span style="font-size: 0.75rem; color: #64748b; font-weight: 700;">PNR NUMBER</span>
          <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 1.35rem; color: #1d4ed8;">${found.pnr}</h3>
        </div>
        <span class="badge-status status-confirmed">STATUS: ${found.status}</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; font-size: 0.9rem;">
        <div><strong>Train:</strong> ${found.trainNumber} - ${found.trainName}</div>
        <div><strong>Route:</strong> ${found.from} → ${found.to}</div>
        <div><strong>Date:</strong> ${found.travelDate}</div>
        <div><strong>Passenger:</strong> ${found.passengerName}</div>
        <div><strong>Coach & Berth:</strong> ${found.coach} / Seat ${found.seat} (${found.berthType})</div>
        <div><strong>Class:</strong> ${found.classCode}</div>
      </div>
    `;
    resultContainer.classList.add("active");
    resultContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    // If on a page without in-place container, open in ticket modal
    openTicketModal(found);
  }
}

// ==========================================================================
// DASHBOARD CONTROLLER (dashboard.html)
// ==========================================================================

function initDashboardPage() {
  const user = getCurrentUser();
  const bookings = getStoredBookings();

  // Populate user profile info
  const nameElements = document.querySelectorAll(".dyn-user-name");
  nameElements.forEach(el => el.textContent = user.name);

  // Populate stat cards
  const totalBookingsEl = document.getElementById("statTotalBookings");
  const activeBookingsEl = document.getElementById("statActiveBookings");
  const walletPointsEl = document.getElementById("statWalletPoints");

  const confirmedCount = bookings.filter(b => b.status === "Confirmed").length;
  if (totalBookingsEl) totalBookingsEl.textContent = bookings.length;
  if (activeBookingsEl) activeBookingsEl.textContent = confirmedCount;
  if (walletPointsEl) walletPointsEl.textContent = `₹${user.miles || 1450}`;

  // Populate Upcoming Journey Card
  const nextJourney = bookings.find(b => b.status === "Confirmed") || bookings[0];
  if (nextJourney) {
    const ujTitle = document.getElementById("ujTrainTitle");
    const ujPnr = document.getElementById("ujPnr");
    const ujFromTime = document.getElementById("ujFromTime");
    const ujFromName = document.getElementById("ujFromName");
    const ujToTime = document.getElementById("ujToTime");
    const ujToName = document.getElementById("ujToName");
    const ujCoach = document.getElementById("ujCoach");
    const ujSeat = document.getElementById("ujSeat");
    const ujDate = document.getElementById("ujDate");

    if (ujTitle) ujTitle.textContent = `${nextJourney.trainNumber} - ${nextJourney.trainName}`;
    if (ujPnr) ujPnr.textContent = `PNR: ${nextJourney.pnr}`;
    if (ujFromTime) ujFromTime.textContent = nextJourney.depTime;
    if (ujFromName) ujFromName.textContent = nextJourney.from;
    if (ujToTime) ujToTime.textContent = nextJourney.arrTime;
    if (ujToName) ujToName.textContent = nextJourney.to;
    if (ujCoach) ujCoach.textContent = nextJourney.coach;
    if (ujSeat) ujSeat.textContent = `${nextJourney.seat} (${nextJourney.berthType})`;
    if (ujDate) ujDate.textContent = nextJourney.travelDate;

    const btnViewTicketNext = document.getElementById("btnViewNextTicket");
    if (btnViewTicketNext) {
      btnViewTicketNext.onclick = () => openTicketModal(nextJourney);
    }
  }

  // Populate Bookings Table
  renderBookingsTable(bookings);

  // Table filter tabs
  document.querySelectorAll(".table-filter-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".table-filter-btn").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const filter = e.target.getAttribute("data-filter");
      if (filter === "ALL") {
        renderBookingsTable(bookings);
      } else {
        renderBookingsTable(bookings.filter(b => b.status === filter));
      }
    });
  });
}

function renderBookingsTable(bookingsList) {
  const tbody = document.getElementById("bookingsTableBody");
  if (!tbody) return;

  if (bookingsList.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 2rem; color: #64748b;">
          No bookings found in this category.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = bookingsList.map(bk => {
    let statusBadgeClass = "status-confirmed";
    if (bk.status === "Cancelled") statusBadgeClass = "status-cancelled";
    if (bk.status === "Completed") statusBadgeClass = "status-completed";

    return `
      <tr>
        <td>
          <span style="font-family: 'JetBrains Mono', monospace; font-weight: 700; color: #1d4ed8;">${bk.pnr}</span>
        </td>
        <td>
          <strong>${bk.trainNumber}</strong> - ${bk.trainName}
        </td>
        <td>
          <div>${bk.from}</div>
          <div style="font-size: 0.75rem; color: #64748b;">➔ ${bk.to}</div>
        </td>
        <td>
          <div>${bk.travelDate}</div>
          <div style="font-size: 0.75rem; color: #64748b;">${bk.depTime}</div>
        </td>
        <td>
          <strong>${bk.coach}-${bk.seat}</strong> (${bk.classCode})
        </td>
        <td>
          <span class="badge-status ${statusBadgeClass}">${bk.status}</span>
        </td>
        <td>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-sm btn-secondary" onclick='viewBookingById("${bk.pnr}")' title="View E-Ticket">
              View
            </button>
            ${bk.status === "Confirmed" ? `
              <button class="btn btn-sm btn-danger-outline" onclick='cancelBooking("${bk.pnr}")' title="Cancel Booking">
                Cancel
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function viewBookingById(pnr) {
  const bookings = getStoredBookings();
  const bk = bookings.find(b => b.pnr === pnr);
  if (bk) {
    openTicketModal(bk);
  }
}

function cancelBooking(pnr) {
  const confirmCancel = confirm(`Are you sure you want to cancel PNR: ${pnr}? A refund of 85% will be credited to your wallet.`);
  if (!confirmCancel) return;

  const bookings = getStoredBookings();
  const target = bookings.find(b => b.pnr === pnr);
  if (target) {
    target.status = "Cancelled";
    saveBookings(bookings);
    showToast(`Booking ${pnr} cancelled. Refund credited!`, "warning");
    initDashboardPage();
  }
}

// ==========================================================================
// AUTHENTICATION LOGIC (login.html)
// ==========================================================================

function initAuthPage() {
  const tabSignIn = document.getElementById("tabBtnSignIn");
  const tabSignUp = document.getElementById("tabBtnSignUp");
  const formSignIn = document.getElementById("formSignIn");
  const formSignUp = document.getElementById("formSignUp");

  if (tabSignIn && tabSignUp && formSignIn && formSignUp) {
    tabSignIn.addEventListener("click", () => {
      tabSignIn.classList.add("active");
      tabSignUp.classList.remove("active");
      formSignIn.style.display = "block";
      formSignUp.style.display = "none";
    });

    tabSignUp.addEventListener("click", () => {
      tabSignUp.classList.add("active");
      tabSignIn.classList.remove("active");
      formSignUp.style.display = "block";
      formSignIn.style.display = "none";
    });
  }

  // Handle Sign In submit
  if (formSignIn) {
    formSignIn.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signInEmail").value.trim();
      const password = document.getElementById("signInPassword").value.trim();

      if (!email || !password) {
        showToast("Please enter your email and password.", "error");
        return;
      }

      const userName = email.split("@")[0].replace(".", " ");
      const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);

      localStorage.setItem("bharatrail_user", JSON.stringify({
        name: formattedName || "Aarav Sharma",
        email: email,
        phone: "+91 98765 43210",
        miles: 1650
      }));

      showToast("Sign in successful! Redirecting to dashboard...", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    });
  }

  // Handle Sign Up submit
  if (formSignUp) {
    formSignUp.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signUpName").value.trim();
      const email = document.getElementById("signUpEmail").value.trim();
      const phone = document.getElementById("signUpPhone").value.trim();
      const password = document.getElementById("signUpPassword").value.trim();

      if (!name || !email || !password) {
        showToast("Please fill all required fields.", "error");
        return;
      }

      localStorage.setItem("bharatrail_user", JSON.stringify({
        name: name,
        email: email,
        phone: phone || "+91 98765 43210",
        miles: 500
      }));

      showToast("Account created successfully! Welcome to BHARATrail.", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    });
  }
}

// User Logout
function logoutUser() {
  showToast("Logging out...", "info");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 600);
}

// Auto-run page initializers on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("trainSearchForm")) {
    initHomePage();
  }
  if (document.getElementById("bookingsTableBody")) {
    initDashboardPage();
  }
  if (document.getElementById("formSignIn")) {
    initAuthPage();
  }
});
