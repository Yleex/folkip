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
module.exports.log = (detail /*Detail*/, w /*where*/) => {
  where = _getCallerFile() || w;

  console.log(

    where === undefined
      ? "[LOG]: " + detail
      : "[LOG] (" + where + "): " + detail
    
  )

  where = undefined;
}

module.exports._err = (
  name /*Error name*/,
  detail /*Detail*/,
  w /*where*/,
  crucial = true /*Crucial?*/
) => {

  where == _getCallerFile() || w;

  console.error(

    (
      where === undefined

      ? `[${name} ERROR]: ${detail}`
      : `[${name} ERROR] (${where}): ${detail}`

    )
  )

  where = undefined;
}
