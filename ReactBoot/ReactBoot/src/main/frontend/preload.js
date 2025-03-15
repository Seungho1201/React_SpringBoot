const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    getRunningProcesses: () => ipcRenderer.invoke('get-running-processes')
});