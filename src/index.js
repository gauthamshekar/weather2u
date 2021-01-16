const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'src/img/weather.ico',
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./src/index.html')
  win.Resizable(false)
}

app.whenReady().then(createWindow)

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
