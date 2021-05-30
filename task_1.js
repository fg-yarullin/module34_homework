function getOwnProperty(obj) {
    for (let key in obj) {
        obj.hasOwnProperty(key)
            ? console.log(`${key}: '${obj[key]}'`)
            : console.log(key);
    }
}

// getOwnProperty(obj);
