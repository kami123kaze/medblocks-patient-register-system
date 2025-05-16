# Challenges Faced During Development

## 1. Learning PGlite

PGlite was completely new to me, so there was a learning curve to understand how to use it effectively as a WASM-based Postgres client that runs in the browser. Familiarizing myself with its API and quirks took some time.

## 2. Debugging Database Insertion

I spent almost an entire day debugging why database insertions were failing. The root cause was the incorrect use of the `.run()` call after preparing the SQL statement. Additionally, I initially used `?` placeholders instead of the required `$1`, `$2` syntax for parameterized queries, which caused silent errors {which were a nightmare}.

## 3. Cross-Tab Synchronization

Managing data synchronization across multiple tabs was a challenge. PGlite’s worker helped, but I also implemented the BroadcastChannel API to keep state consistent between tabs.

## 4. UI and Raw SQL Input

Adding a raw SQL input box for users was both challenging and fun. Ensuring the input worked seamlessly with the database and provided meaningful feedback required careful handling.

## 5. Deployment Issues

Deploying the app was difficult due to bundling issues. Vite tried to bundle some Node.js-specific code (like `fs` and `path` modules) into the browser build, causing errors. After some trial and error, adjusting build configurations and dependencies resolved the issue.

---

Overall, these challenges helped me deepen my understanding of WebAssembly, client-side databases, and modern front-end build tools.
