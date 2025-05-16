# Frontend-Only Patient Registration App

A React-based frontend application for managing patient registrations, using **Pglite** as an embedded SQL database stored in the browser. The app allows users to:

- Register new patients.
- Query patient records using raw SQL.
- Persist data across page refreshes.
- Synchronize data across multiple tabs in the same browser with real-time updates.

---

## Features

### 1. Register New Patients
- Users can add new patients with fields: Name, Date of Birth, Email, and Phone.
- Data is inserted into a local Pglite database using SQL `INSERT` statements.
- Confirmation popup shows success or failure after registration.

### 2. Query Records Using Raw SQL
- The app supports executing arbitrary SQL queries on the patient table.
- Users can customize the query (e.g., filtering or sorting) directly through a search box.
- Query results are displayed live in the patient list.

### 3. Persist Data Across Page Refreshes
- The Pglite database uses browser local storage to keep data persistent.
- Patients remain saved even if the page is closed or refreshed.

### 4. Multi-Tab Synchronization Using Pglite Worker and BroadcastChannel
- The app leverages **Pglite’s Worker API** to offload database operations to a dedicated web worker.
- This worker manages **one shared database instance** for all tabs, ensuring:
  - A single "leader" tab handles all writes to avoid race conditions.
  - Other tabs listen for updates through the worker.
- The app also uses the browser's native **BroadcastChannel API** to notify other tabs about database changes.
- When a patient is added or records updated in one tab, all other tabs receive a notification and refresh their views automatically.
- This approach eliminates the need to reload pages manually and prevents out-of-sync bugs.
- Reads and writes are safe, synchronized, and performant even with multiple tabs open.

---

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd <repo-folder>
2. ** Install dependencies: ** 

```bash
   npm install
```
3. ** Run the app locally: **

   ```bash
   npm run dev
   ```
## Usage Instructions
- Navigate to the Register page to add new patients.

- Use the Patient List page to view registered patients.

- On the Patient List page, use the SQL Query input to run custom queries on the patient data (e.g., SELECT * FROM patient WHERE name LIKE '%John%').

- Open multiple tabs to test multi-tab synchronization; changes in one tab will reflect in others in real-time without manual reloads.

## Technical Details

- **Frontend:** React with functional components and hooks.

- **Styling:** Tailwind CSS for utility-first styling and responsive design.

- **Storage:** Pglite embedded SQL database running entirely in the browser.

- **Worker:** Uses Pglite's web worker to delegate database operations off the main thread.

- **Data Sync:** Browser's native BroadcastChannel API combined with the Pglite worker for inter-tab communication and synchronized reads/writes.

- **State Management:** React `useState` and `useEffect` hooks for managing UI and database querying.




## Link for the deployed Website (Vercel)
```bash
https://medblocks-patient-register-system-zy6a.vercel.app/
```


