const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindowHome = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, './script/home/preload.js'),
      nativeWindowOpen: true
    }
  })

  win.loadFile( path.join(__dirname, './pages/index.html'))
}

const createWindowPassword = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nativeWindowOpen: true
    }
  })

  win.loadFile( path.join(__dirname, './pages/password.html'))
}

app.whenReady().then(() => {
  //createWindowHome()
  createWindowPassword()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      //createWindowHome()
      createWindowPassword()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})