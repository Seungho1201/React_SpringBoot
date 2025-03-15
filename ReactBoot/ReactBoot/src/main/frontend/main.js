
import { app, BrowserWindow } from 'electron';
import path from 'path';
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,  // 노드 모듈을 사용하려면 true로 설정
            //preload: path.join(__dirname, 'preload.js'),  // 필요시 preload 파일 설정
        },
    });

    // 개발 서버의 Vite 앱을 Electron에 로드 (개발 모드)
    mainWindow.loadURL('http://localhost:5173');  // Vite 개발 서버의 URL
    //mainWindow.loadURL('file://' + path.join(__dirname, 'dist', 'index.html'));

}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
