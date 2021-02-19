const { app, BrowserWindow, Menu, MenuItem } = require("electron");
const path = require('path');
const os = require('os');

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit(); // Si el pc no es apto.
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({ // Crear la ventana
    width: 800,
    height: 600
  });

  mainWindow.loadFile(path.join(__dirname, '/index.html')); // Cargar pagina principal

  switch (os.platform()) {
    // Poner logo. Depende de la plataforma, el formato de archivo debe ser diferente.
    case "darwin": // apple
      mainWindow.setIcon(
        path.join(__dirname, '/img/icon/.icns/logo-folkip-no-complete.icns') //icns
      );
      break;
    case "win32": // windows
      mainWindow.setIcon(
        path.join(__dirname, "/img/icon/.ico/logo-folkip-no-complete.ico") //ico
      );
      break;
    default: // Otros 
      mainWindow.setIcon(
        path.join(__dirname, "/img/icon/logo-folkip-no-complete.png") //png sirve
      );
      break;
  }

  //mainWindow.webContents.openDevTools(); // Iniciar las developer tools -> no lo queremos.
};

app.on('ready', createWindow); // Cuando la aplicacion este lista, que se inicie.


app.on('window-all-closed', () => { // Cuando se cierre la app
  if (process.platform !== 'darwin') { // Esto es para evitar un error de macOS
    app.quit(); // Cerrar la app.
  }
}); 

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) { // Otro if para evitar error de macOS
    createWindow(); 
  }
});

module.exports = app; // Exportar el objeto de la app

// Aqui iria el resto de funciones de iniciación (como conectarse a la DB)

let menu = new Menu();

menu = require('./other/utils/app-menu')();
// Poner el menu de la app. Dirigirse ala rchivo para mas info

Menu.setApplicationMenu(menu);

console.log(); // Linea nueva
