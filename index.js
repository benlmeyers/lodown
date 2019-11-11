'use strict';

// YOU KNOW WHAT TO DO //
let _ = {};

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns any value unchanged.
 * 
 * @param {value} value: The value which we want to return unchanged.
 * @return {value} value: The value which we want to return unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;
/**
 * typeOf: Uses if-else statements to return the type of any value as a string. 
 * 
 * @param {value} one of "string", "array", "object", undefined", "number", 
 * "boolean", "null", "function": the value which we want to obtain and return
 * as a string.
 * @return {value} a string of the type of value we want to return
 */
function typeOf(value) {
    if (Array.isArray(value) === true) {
        return 'array';
    }
    else if (value instanceof Date === true) {
        return "date";
    }
    else if (value === null) {
        return 'null';
    }
    else {
        return typeof(value);
    }
}
module.exports.typeOf = typeOf;
/**
 * first: Uses if-else statements to return the <number> of items specified
 * from the array, starting from the front. If the number is negative the function
 * will return an empty array.  If the number is greater than the array, the function
 * will return the entire array. 
 * 
 * @params {array, number} array: to be examined to find the values to be returned.
 * number: the number of values to return starting from the beginning of the array.
 * @return {array} array: a new array of values from the original array.
 */
function first(array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    }
    else if (number !== number || number === undefined) {
        return array[0];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        return array.slice(0, number);
    }
}
module.exports.first = first;
/**
 * last: Uses if-else statements to return the <number> of items specified
 * from the array, starting from the back. If the number is negative the function
 * will return an empty array.  If the number is greater than the array, the function
 * will return the entire array.
 * 
 * @params {array, number} array: to be examined to find the values to be returned.
 * number: the number of values to return starting from the end of the array.
 * @return {array} array: a new array of values from the original array.
 */
function last(array, number) {
    if (Array.isArray(array) === false || number < 0) {
        return [];
    }
    else if (number !== number || number === undefined) {
        return array[array.length - 1];
    }
    else if (number > array.length) {
        return array;
    }
    else {
        return array.slice(number - 1, array.length);
    }
}
module.exports.last = last;
/**
 * indexof: Uses a for loop to identify and return the first index of a value that
 * is in the given arrray. If the value is not found in the array, -1 will be returned.
 * 
 * @param {array} array: to be iterated over while searching for the given
 * value.
 * @param {value} value: to be identified, and the index of it returned.
 * @return the index of the given value, in the given array.
 */
function indexof(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexof = indexof;
/**
 * contains: Uses a ternary operator to decide if a given array contains a given
 * value.
 * 
 * @param {array} array: to be checked for the given value.
 * @param {value} value: to be determined if in array.
 * @return {boolean value} boolean: true or false, depending on whether the given
 * array contains the given value.
 */
function contains(array, value) {
    return (array.includes(value)) ? true : false;
}
module.exports.contains = contains;

/**
 * unique: Iterates over an array, and removes any duplicate values, or push
 * the unique values to a seperate array.
 * 
 * @param {array} array: to be iterated over, and find unique values held within.
 * @return {array} array: a new array containing unique values
 */
function unique(array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        if (answer.indexOf(array[i]) === -1) {
            answer.push(array[i]);
        }
    }
    return answer;
}
module.exports.unique = unique;
/**
 * filter: Uses a for loop to pass every element of an array to a test, and a 
 * conditional statement to decide, if the elements pass the test, if so, push 
 * them to a new array. If the test is undefined, the function will still loop 
 * through the array, and pass all elements that are truthy to a new array.
 * 
 * @param {array} array: full of elements to be tested.
 * {test} test: for passing the elements from the array.
 * @return {array} new array: filled with elements that returned true from the test.
 */
function filter(array, test) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i], i, array) == true) {
            answer.push(array[i]);
        }
    }
    return answer;
}
module.exports.filter = filter;
/**
 * reject: Uses a for loop to pass every element of an array to a test, and a
 * conditional statement to decide, if the elements pass the test. If the elements
 * fali the test they are pushed to a new array. If the test is undefined, the 
 * function will still loop through the array, and pass all elements that are falsey
 * to a new array.
 * 
 * @param {array} array: full of elements to be tested.
 * @param {test} test: for passing the elements from the array.
 * @return {array} new array: filled with elements that returned false from the
 * test.
 */
function reject(array, test) {
    return _.filter(array, function(ele, i, arr) {
        return !test(ele, i, arr);
    });
}
module.exports.reject = reject;
/**
 * partition: Uses a for loop to iterate through an array, push the values to a 
 * callback function, which decides if they are truthy or falsey, and seperates the 
 * values based on that. The function then pushes the values in to two seperate 
 * arrays nested inside of a larger array.  The values that are determined to be 
 * truthy in one, and the values which are determined to be falsey in the other.
 * 
 * @param {array} array: of elements to be passed through the test.
 * @param {test} test: the test which all elements are passed to, to determine if they
 * are truthy or falsey
 * @return {array} array of arrays: one array to house the answers which were truthy,
 * one to house the answers which were falsy, and one to house the other two.
 */
function partition(array, test) {
    let answer1 = [];
    let answer2 = [];
    let answer3 = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i], i, array) == true) {
            answer1.push(array[i]);
        }
        else {
            answer2.push(array[i]);
        }
    }
    answer3.push(answer1);
    answer3.push(answer2);
    return answer3;
}
module.exports.partition = partition;
/**
 * map: determines if a collection is an object or an array, iterates over it, 
 * passing each value to a callback function, and pushes the return value to a 
 * new array.
 * 
 * @param {collection} collection: to be iterated over, and have its values passed
 * to the function, and pushed to the new array.
 * @param {function} function: callback function for the elements to be used on.
 * @return {array} array: array of values returned from the callback function.
 */
function map(collection, test) {
    let container = [];
    if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            container.push(test(collection[i], i, collection));
        }
    }
    else {
        for (let key in collection) {
            container.push(test(collection[key], key, collection));
        }
    }
    return container;
}
module.exports.map = map;
/**
 * pluck: Uses _.map to examine an array of objects and return the value of <property>
 * for every element in <array>.
 * 
 * @param {array} array: of objects to be examined using _.map
 * @param {property} property: to be identified, and return the value of said property
 * @return {array} array: to be filled with the properties of each element in
 * the given array.
 */
function pluck(array, property) {
    //return an array with the values of the given key or property
    let answer = [];
    _.map(array, function(element) {
        answer.push(element[property]);
    });
    return answer;
}
module.exports.pluck = pluck;
/**
 * every: Determines whether the collection is an array or an object. Loops through
 * the collection, passing the values to the function, to decide if the values are
 * true or false. If all values are true, return true, otherwise false.  If there 
 * is no function, iterate through the values, and determine if they are truthy or 
 * falsey.
 * 
 * @param {collection} collection: the collection to be iterated over
 * and the values passed to the function.
 * @param {function} function: the callback function which will evaluate our values.
 * @return {boolean value} true or false: if any value is false (or falsey in the 
 * case of no function), this will be false, if they are all true or (all truthy
 * in the case of no function) this will be true.
 */
function every(collection, test) {
    let count = 0;
    if (test === undefined && Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                count += 1;
            }
        }
    }
    else if (test === undefined && Array.isArray(collection) === false) {
        for (let key in collection) {
            if (!collection[key]) {
                count += 1;
            }
        }
    }
    else if (Array.isArray(collection) === true && test !== undefined) {
        for (let i = 0; i < collection.length; i++) {
            if (test(collection[i], i, collection) === false) {
                count += 1;
            }
        }
    }
    else if (Array.isArray(collection) === false && test !== undefined) {
        for (let key in collection) {
            if (test(collection[key], key, collection) === false) {
                count += 1;
            }
        }
    }
    if (count === 0) {
        return true;
    }
    else {
        return false;
    }
}
module.exports.every = every;
/**
 * some: Determines if the collection is an array or an object. Loops through the
 * collection, and passes the values to the function, which decides if the values
 * are true or false. If some are true, the function returns true, if none are
 * true, the function returns false.
 * 
 * @params {collection} collection: the collection to be iterated over and
 * the values passed to the function.
 * @param {function} function: the function used to evaluate the values of the collection, 
 * to determine if they are true or false.
 * @return {boolean value} true or false: true will be returned if at least one value
 * is true, or false if none are.
 */
function some(collection, test) {
    let count = 0;
    if (test === undefined && Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i]) {
                count += 1;
            }
        }
    }
    else if (test === undefined && Array.isArray(collection) === false) {
        for (let key in collection) {
            if (collection[key]) {
                count += 1;
            }
        }
    }
    else if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (test(collection[i], i, collection) === true) {
                count++;
            }
        }
    }
    else {
        for (let key in collection) {
            if (test(collection[key], key, collection) === true) {
                count++;
            }
        }
    }
    if (count > 0) {
        return true;
    }
    else {
        return false;
    }
}
module.exports.some = some;
/**
 * reduce: passes each value from the array to the function, to reduce the total 
 * number of values in the array. Use the seed as the first value, unless the seed 
 * does not exist, in which case, we will use the first value in the array 
 * (at array[0]) as the seed, and the second value (at array[1]) as the first.
 * 
 * @param {array} array: to be iterated over, and send the values to
 * the function to reduce the total number of values in the array.
 * @param {function} function: accepts the values from the array, and somehow combines 
 * them into a bigger number, so it ends with only one value. 
 * @param {seed} seed: the starting value for the function to work with. If it is 
 * undefined, it will be reset to array[0].
 * @return {seed} seed: will be returned with all of the other values from the array 
 * combined into it. It will be the same datatype that the seed is set as, usually a number.
 */
function reduce(array, test, seed) {
    let seedDefined = 0;
    if (seed === undefined) {
        seed = array[0];
        seedDefined = 1;
    }
    for (let i = seedDefined; i < array.length; i++) {
        seed = test(seed, array[i], i, array);
    }
    return seed;
}
module.exports.reduce = reduce;
/**
 * extend: Copies all properties from object2, and any subsequent objects to object1,
 * in the order they are passed in. 
 * 
 * @param {object} object1: the object, which all other object's properties will be
 * added too.
 * @param {object} object2: the object to add to object1
 * @param {object} ...object: objects which may or may not exist, if they do, 
 * they should also be added to object1.
 * @return {object} object1: to be returned after all other object's properties are 
 * added to it
 */
function extend(object1, object2, ...object) {
    for (let key in object2) {
        object1[key] = object2[key];
    }
    for (let i = 0; i < object.length; i++) {
        for (let key in object[i]) {
            object1[key[i]] = object[i][key];
        }
    }
    return object1;
}

module.exports.extend = extend;
