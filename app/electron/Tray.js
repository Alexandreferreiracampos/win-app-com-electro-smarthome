const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'domotics.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Smart-home')
  
  return tray
}

module.exports = createTray()