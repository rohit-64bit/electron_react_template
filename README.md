
# 🚀 Electron React Vite Template

This is a template for building Electron apps using React and Vite. It includes a minimal setup with Tailwind CSS, NextUI, and essential dependencies to get started quickly. Additionally, it includes a basic Express server for API handling.

## ✨ Features

* ⚡ **Electron** for building cross-platform desktop applications.
* ⚛️ **React** with Vite for fast front-end development.
* 🎨 **Tailwind CSS** for styling.
* 🎭 **Framer Motion** for animations.
* 🌐 **Express** server for handling API requests.
* 📦 **Electron Builder** for packaging the app for Windows, macOS, and Linux.

## 🛠 Getting Started

### 📌 Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 📥 Installation

Clone this repository and install dependencies:

```sh
# Clone the repository
git clone https://github.com/rohit-64bit/electron_react_template.git
cd electron_react_template

# Install dependencies
npm install
```

### 🚀 Development

Run the project in development mode:

```sh
npm run dev
```

This will start both the React front-end and the Electron main process, including the Express server.

### 📦 Building the App

To build the application for production:

```sh
npm run build
```

For platform-specific builds:

```sh
npm run dist:win   # Build for Windows
```

Modify the `electron-builder.json` configuration for custom builds.

## 📂 Project Structure

```
├── assets/                  # App icons and static files
│   └── logo.png
├── dist/                    # Distribution files
│   └── builder-debug.yml
├── src/
│   ├── client-dev/          # React front-end source code
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── electron-dev/        # Electron main process files
│   │   └── main.js          # Main process entry (Electron + Express server)
├── .gitignore
├── electron-builder.json     # Electron packaging configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package-lock.json
├── package.json             # Project configuration and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration
```

## 🔧 Scripts

| Command              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `npm run dev`      | 🚀 Run Electron, React, and Express in development mode |
| `npm run build`    | 📦 Build the React front-end                            |
| `npm run dist:win` | 🏗 Package the app for Windows                          |
| `npm run lint`     | 🔍 Lint the code using ESLint                           |
| `npm run preview`  | 👀 Preview the built React app                          |

## 🌍 Express Server

This template includes a basic Express server to handle API requests. It runs on port **8000** and includes a health check endpoint:

```sh
GET /health
```

Response:

```json
{
    "success": true,
    "message": "Server is running"
}
```

Modify `src/electron-dev/main.js` to add more API routes as needed.

## 📦 Packaging

This project uses **electron-builder** to package the application. The configuration supports:

* **Windows:** Portable and MSI
* **macOS:** DMG
* **Linux:** AppImage (Utility category)

Modify `electron-builder.json` to adjust targets and configurations.

## 🔗 Repository

📌 Public Repository: [GitHub - Electron React Vite Template](https://github.com/rohit-64bit/electron_react_template)

## 📜 License

[MIT](https://chatgpt.com/c/LICENSE)
