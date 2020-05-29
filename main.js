const { app, BrowserWindow, globalShortcut } = require('electron')
const url = require("./config")

let win = null
let contents = null

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL(url.youtube)

    contents = win.webContents
}

function toogleDevTools() {
    contents.toogleDevTools
}

function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toogleDevTools)
}

app.whenReady().then(createWindow).then(createShortcuts)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})