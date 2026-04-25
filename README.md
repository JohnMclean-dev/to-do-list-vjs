# to-do-list-vjs
A to-do list app made with vanilla JavaScript.

---

## 🚀 Running the App Locally (Python HTTP Server)

This project is a static frontend app (HTML, CSS, JS), so it doesn’t require a backend.  
However, some browser features work best when served over HTTP instead of opening the file directly.

You can quickly spin up a local server using Python.

---

## 🐍 Requirements

- Python 3 installed

Check your version:

```bash
python3 --version
```

---

## ▶️ Start Local Server

From the root directory of this project (where your `index.html` is located), run:

```bash
python3 -m http.server 8000
```

---

## 🌐 Open in Browser

Open the following URL in your browser:

```
http://localhost:8000
```

---

## 🛑 Stop the Server

Press:

```bash
CTRL + C
```

in your terminal.

---

## 📁 Project Structure (example)

```
.
├── index.html
├── style.css
└── script.js
```

---

## 💡 Notes

- Avoid opening `index.html` with `file://` if you run into issues  
- The Python server is for development only  
- No build step or dependencies required  

---

## ✨ Optional

Use a different port:

```bash
python3 -m http.server 3000
```

Then open:

```
http://localhost:3000
```

---

Enjoy building!