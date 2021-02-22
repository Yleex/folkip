function _getCallerFile() {
  try {
    let err = new Error();
    let callerfile;
    let currentfile;

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
module.exports.log = (detail /*Detail*/, w /*where*/) => {
  where = _getCallerFile() || w;

  console.log(

    where === undefined
      ? "[LOG]: " + detail
      : "[LOG] (" + where + "): " + detail
    
  )

  where = undefined;
}

module.exports.error = (
  name /*Error name*/,
  detail /*Detail*/,
  w /*where*/,
  crucial = true /*Crucial?*/
) => {

  where == _getCallerFile() || w;

  console.error(
    where === undefined
      ? `[${name.toUpperCase()} ERROR]: ${detail}`
      : `[${name.toUpperCase()} ERROR] (${where}): ${detail}`
  );

  where = undefined;
  return crucial ? process.exit(1) : undefined;
}
