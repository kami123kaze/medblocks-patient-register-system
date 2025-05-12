# Patient Registration App {v- 0.00}

## Tech Stack
- **Frontend:** `React`, `Vite`, `Tailwind CSS ,React -Router dom`
- **Database:** `Pglite` (SQLite in WebAssembly)
- **Form Handling:** `React Hook Form` / `Zod` (for validation if i have time || more structure is needed)
- **State Management:** `React useState` / `useEffect`

---

## App Flow
1. **User Registration:**
   - User fills out a form with patient details (name, gender, DOB, phone, address, email).
   - On form submission, data is stored in the local `Pglite` database.

2. **Patient List:**
   - A list of registered patients is displayed.
   - Users can see patient data (name, contact info) in a table/card view.

3. **Optional Features:**
   - Search/filter functionality for patient list.
   - Export patient data as JSON/CSV.

---

## Feature Implementation Plan

### 1. **Set Up Vite + React + Tailwind**
   - Initialize project with `vite` + React template.
   - Install and configure `Tailwind CSS` for styling.
   - Study and understanding `Pglite`, how to intregrate, data/structuring etc...

### 2. **Create Database (Pglite)**
   - Set up `Pglite` for local storage of patient data.
   - Create schema for storing patient info (name, contact, etc.).

### 3. **Build Patient Registration Form**
   - Create a form component with inputs for each patient field.
   - Handle form submission to add patient data to `Pglite` DB.

### 4. **Display Patient List**
   - Fetch and display all registered patients from `Pglite`.
   - Use a table or cards to display the data.

### 5. **Polish & Extras**
   - Add basic validation to the form using `React Hook Form`.
   - Implement search/filter functionality for the patient list.
   - Test and deploy.

---

