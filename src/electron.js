import { app, BrowserWindow} from 'electron';

function createWindow () {
    // Create the browser window.
       const win = new BrowserWindow({
       title: 'TinyTowns',
       width: 800,
       height: 600,
       webPreferences: {
           nodeIntegration: true
          }
    })
    win.removeMenu()
    // load index.html running on the url
    win.loadURL('https://app.tinytowns.finneh.xyz');
    // Open the DevTools.
    }

app.whenReady().then(createWindow)