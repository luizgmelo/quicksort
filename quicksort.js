function quicksort(array) {
    if (array.length < 2) return array    

    
    let middle = Math.floor((array.length - 1) / 2)
    let pivot = array[middle]    
    let lowers = array.filter((element) => element < pivot) 
    let equals = array.filter((element) => element == pivot)
    let greaters = array.filter((element) => element > pivot)

    return quicksort(lowers).concat(equals.concat(quicksort(greaters)))
}

console.log(quicksort([]))
console.log(quicksort([20]))
console.log(quicksort([33, 15 ,10]))
console.log(quicksort([33, 15, 10, 20, 25, 12, 13, 22]))

