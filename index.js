const { app, BrowserWindow } = require('electron');
const path = require('path');

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit(); // Si el pc no es apto.
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({ // Crear la ventana
    width: 800,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, '/src/index.html')); // Cargar pagina principal

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
