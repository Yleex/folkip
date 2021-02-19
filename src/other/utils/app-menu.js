const log = require('./xconsole').log // Log avanzado

module.exports = (menu) => {
  /* BOTONES DE ARRIBA DE LA APP (MENU) */
  /* EJ. 
  menu.append(
    new MenuItem({
      label: "Nombre del boton",
      submenu: [
        {
          role: "Que hace el boton",
          accelerator:
            process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
            //El comando. Cmd es para MACOS y shift para windows
          click: () => {
            //... lo que se ejecutara al pulsar
          },
        },
      ],
    })
  );
  */
  
  log("Menu establecido.")
  return menu;
}
