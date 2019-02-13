import {app, BrowserWindow} from 'electron';

const testAddon = require('../../build/Release/testaddon.node');
const baseUrl = 'http://localhost:4200';

let mainWindow: BrowserWindow;

app.on('ready', createWindow);

app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(baseUrl);
    console.log('addon', testAddon.hello());
    console.log('add ', testAddon.add(5, 10));
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}