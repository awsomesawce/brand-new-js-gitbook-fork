const { writeFile, writeFileSync, fstat } = require("fs");
const { readFile, readFileSync } = require("fs");
const { OrderedMap, List, fromJS } = require("immutable");
const { log } = require("console");

const consoleError = console.error;
const warn = console.warn;

function returnMap () {
    const newFunc = OrderedMap({key: "value"});
    return newFunc;
}

let myFuncs = Object.create(null);
myFuncs.om = returnMap();

log(myFuncs.om)