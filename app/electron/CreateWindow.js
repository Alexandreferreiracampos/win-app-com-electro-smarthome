const { BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 650,
    height: 130,
    show:false,
    frame: false,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    
  })

  win.loadFile('index.html')
  
  return win
}

module.exports = createWindow()