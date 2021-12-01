const { app } = require('electron')
const { read } = require('original-fs')
const controlWindow = require('./ControlWindow.js')

const ventilador=()=>{
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  let url = "http://192.168.0.106/ventilador"
  let req = new XMLHttpRequest();

  req.open('GET', url)
  req.send()

}

function App() {
  const win = require('./createWindow.js')
  const tray = require('./Tray.js')

  const { toggle } = controlWindow(win, tray)

  tray.on('click', toggle)
}

app.whenReady().then(App)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
