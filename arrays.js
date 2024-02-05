const findLongestWord = (mas) => {  
    let result = [];
    for (let i = 0; i < mas.length; i++) {
        if (mas[i].length > result.length) {
            result = mas[i];
        }
    }
    return result;
    }   
    console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
    console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
    console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

    
    const sumUniqueNumbers = (arr) => {
    let resArr = [];
    
    let indexToAdd = 0;
    for (let i = 0; i < arr.length; i++) {
        let ok = true;
        for (let j = 0; j < arr.length; j++) { 
            if (resArr[j] == arr[i]) {
                ok = false;
            }
        }
        if (ok) {
            resArr[indexToAdd] = arr[i];
            indexToAdd++;
        }
    }
    let result = 0;
    for (let i = 0; i < resArr.length; i++) {
        result += resArr[i];
    }
    return result;
}
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6


const hasProperty = (obj, property) => {    
    return obj.hasOwnProperty(property);
    };
console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true


const getPropertyValue = (obj, property) => {   
    return obj[property];
}
console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // Alice
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // Dell


