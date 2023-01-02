function findMatching(driverArray, string) {
    return driverArray.filter(function (string1) {
        return string1.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(driverArray, string) {
    return driverArray.filter(function (string1) {
        return string.charAt(0) === string1.charAt(0)
    })
}

function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }