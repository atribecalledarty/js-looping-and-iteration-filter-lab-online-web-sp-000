// Code your solution in this file
function findMatching(drivers, name) {
    return drivers.filter(function (driverName) { return driverName.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(function (driverName) { return driverName.includes(letters) && driverName.indexOf(letters) === 0; });
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) { return driver.name === string; });

}