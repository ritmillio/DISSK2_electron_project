const electron = require('electron');
const path = require('path');
const url = require('url');

const{app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 1300,
        height: 750 , 
        minWidth : 1300 ,
        minHeight : 750
    });

    mainWindow.loadURL(url.format({
        pathname : path.join(__dirname , 'index.html'),
        protocol : 'file:',
        slashes: true
    }));
});