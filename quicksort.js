function quicksort(array) {
    if (array.length < 2) return array    

    let pivot = array[0]    
    let lowers = array.filter((element) => element < pivot) 
    let equals = array.filter((element) => element == pivot)
    let greaters = array.filter((element) => element > pivot)

    return quicksort(lowers).concat(equals.concat(quicksort(greaters)))
}

console.log(quicksort([]))
console.log(quicksort([20]))
console.log(quicksort([33, 15 ,10]))
console.log(quicksort([33, 15, 10, 20, 25, 12, 13, 22]))


// [15, 10] 33 pivot []
// [10] 15 pivot []
// [10]
// [10,15]
// [10, 15]
// [10, 15, 33]

// [33, 15, 10, 20, 25, 12, 13, 22]
// [15, 10, 20, 25, 12, 13, 22] 33 pivot []
// [10, 12, 13]  15 pivot  [20, 25, 22, 33]
// [] 10 pivot [12,13]   | [] 20 pivot [25, 22 33]
// [] 12 pivot [13]      | [22] 25 pivot [33]
// [10, 12, 13, 15]      | [20, 22, 25, 33]
// [10, 12, 13, 15, 20, 22, 25, 33]
