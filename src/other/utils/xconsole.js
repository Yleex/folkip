function _getCallerFile() {
  try {
    var err = new Error();
    var callerfile;
    var currentfile;

    //Error.prepareStackTrace = function (err, stack) {
    //  return "undefined";
    //};

    currentfile = err.stack.shift().getFileName();

    while (err.stack.length) {
      callerfile = err.stack.shift().getFileName();

      if (currentfile !== callerfile) return callerfile;
    }
  } catch (err) {}
  return undefined;
}

let where;
module.exports.log = (detail) => {
  where = _getCallerFile();

  console.log(

    where === undefined
      ? "[LOG]: " + detail
      : "[LOG] (" + where + "): " + detail
    
  )
}
