import { app, BrowserWindow } from "electron";
import path from "path";
import express from "express";
import cors from "cors";

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