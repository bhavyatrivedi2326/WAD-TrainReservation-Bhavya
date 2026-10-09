# 🚆 BHARATrail - Modern Train Reservation System
> **College Web Development Project** | HTML5 • CSS3 (Vanilla) • JavaScript (ES6)

---

## 📌 Project Overview
**BHARATrail** is a modern, responsive **Train Reservation System Web Application** designed for university and college project presentations. It simulates an official Indian Railway / Express reservation portal (like IRCTC), offering complete end-to-end flows:

1. **Home / Search Page (`index.html`)**: Interactive train search widget, station swap animation, live train schedules across multiple classes (1A, 2A, 3A, CC, SL), real-time seat availability, instant PNR status lookup, and passenger reservation modal.
2. **Authentication Page (`login.html`)**: Sleek split-screen design with glassmorphism, interactive tabs for **Sign In** and **Registration**, password toggle, client-side validation, and session persistence.
3. **User Dashboard (`dashboard.html`)**: Passenger profile overview, live journey countdown & route visualizer, statistics metric cards, booking management table with cancellation & instant refund simulation, and an official **Printable E-Ticket** modal.
4. **Design System (`style.css`)**: Vanilla CSS with modern custom properties, dark-midnight/electric-blue railway palette, card micro-interactions, responsive flexbox/grid layout, and `@media print` rules for official E-tickets.
5. **Logic Controller (`script.js`)**: Pure JavaScript (no heavy libraries), `localStorage` persistence, realistic 10-digit PNR generation, dynamic DOM rendering, and toast alerts.

---

## 📂 File Structure

```text
train-reservation-system/
│
├── index.html          # Main landing page, train search & booking system
├── login.html          # User authentication (Sign In & Sign Up)
├── dashboard.html      # Passenger management dashboard & booking table
├── style.css           # Complete vanilla CSS design system & print styles
├── script.js           # Core client-side JavaScript controllers & storage
├── README.md           # Project documentation & College Viva Guide
│
└── assets/
    └── images/
        └── hero_train.jpg  # High-definition semi-bullet train banner
```

---

## 🚀 How to Run the Project

No complex build steps or Node.js servers are required!

### Option 1: Direct Browser Launch
1. Open the folder: `c:\Users\bhavy\.antigravity-ide\train-reservation-system\`
2. Double-click on **`index.html`** or **`login.html`** to open in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code / IDE)
1. Right-click on `index.html` and click **"Open with Live Server"**.
2. Visit `http://127.0.0.1:5500/index.html`.

---

## 🎯 Key Functionalities & Features

### 1. Train Search & Filtering
- Search trains by origin and destination station (with one-click station swap button).
- Filter by travel date and class (1A, 2A, 3A, Sleeper, Chair Car).
- Displays running days, departure and arrival times, travel duration, and live fare.

### 2. Interactive Booking Flow
- Click on any class chip (e.g., `3A`, `2A`, `CC`) to open the **Passenger Booking Modal**.
- Enter passenger name, age, gender, and berth preference.
- System automatically generates a unique **10-digit PNR number**, coach assignment (e.g., `A2`), and berth number.
- Saves the ticket to browser `localStorage` and immediately shows the generated **Electronic Reservation Slip (E-Ticket)**.

### 3. Official Printable E-Ticket
- Designed with simulated security barcode, PNR number, coach/berth details, and railway crest.
- Built-in `@media print` CSS ensures clean, professional single-page printing or PDF export when clicking **"Print / Download PDF"**.

### 4. PNR Status Check
- Enter any 10-digit PNR number to view instant live confirmation status (CNF / RAC / WL), coach number, and route details.

### 5. Passenger Dashboard & Cancellation
- View active confirmed tickets, past journey history, and RailMiles points.
- 1-click ticket cancellation with simulated instant 85% refund credit to wallet.
- Filter table by **All**, **Confirmed**, **Completed**, or **Cancelled**.

---

## 🎓 College Viva / Examination Q&A

**Q1: Why did you use semantic HTML5 elements?**  
> *Answer:* Semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>` improve web accessibility (screen readers), SEO indexing, and provide a clear, standard document outline compared to generic `<div>` tags.

**Q2: How does the ticket booking persist without a database like MySQL?**  
> *Answer:* We use HTML5 `localStorage` through JavaScript. It provides a client-side key-value storage (`bharatrail_bookings` and `bharatrail_user`) that retains data across page reloads and browser restarts without requiring an external backend server.

**Q3: How is the E-ticket made print-friendly?**  
> *Answer:* We wrote dedicated `@media print` queries in `style.css` that hide unnecessary UI components (like navigation bars, sidebars, buttons) and style only the `#printableTicketArea` card with high contrast for standard A4 printing.

**Q4: How does the station swap feature work in JavaScript?**  
> *Answer:* When the swap button is clicked, JavaScript temporarily stores the value of the origin input, assigns the destination value to the origin input, and assigns the temporary value back to destination input, while triggering a 180° CSS rotation animation.
