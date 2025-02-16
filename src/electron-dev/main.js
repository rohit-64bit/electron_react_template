import { app, BrowserWindow } from "electron";
import path from "path";
import express from "express";
import cors from "cors";
import os from "os";
import fs from "fs-extra";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// express server process for electron main process

async function ensureJSONFileExists(fileName) {
    // Construct the path to the local temp directory and the JSON file
    const localTempDir = path.join(os.tmpdir(), "Reylilocal");
    const jsonFilePath = path.join(localTempDir, fileName);

    try {
        // Ensure the directory exists
        if (!fs.existsSync(localTempDir)) {
            fs.mkdirSync(localTempDir, { recursive: true }); // Create directory if it doesn't exist
        }

        // Ensure the file exists
        if (!fs.existsSync(jsonFilePath)) {
            fs.writeFileSync(jsonFilePath, JSON.stringify([]), "utf-8"); // Initialize as an empty array
        }

        return jsonFilePath; // Return the full path for further use if needed
    } catch (error) {
        console.error("Error ensuring JSON file exists:", error);
        throw error; // Re-throw error for higher-level handling
    }
}

const expressApp = express();

expressApp.use(cors());
expressApp.use(express.json());

expressApp.get('/health', (req, res) => {

    res.status(200).json({
        success: true,
        message: 'Server is running'
    });

})

expressApp.listen(8000, () => {
    console.log('Server is running on port 8000')
})

// electron renderer process

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        autoHideMenuBar: true,
    });

    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))

}


app.whenReady().then(createWindow);