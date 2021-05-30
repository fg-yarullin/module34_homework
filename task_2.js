function hasProperty(propName, obj) {
    for (let key in obj) {
        if (key === propName) {
            return true;
        }
    }
    return false;
}

// console.log(hasProperty('prop', obj));