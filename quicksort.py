from math import floor

array = [30, 15, 5, 10]
lowers = []
greaters = []
equals = []

def quicksort(array):

    if len(array) < 2:
        return array 
    
    middle = floor(len(array) - 1 / 2)
    pivot = array[middle]
    
    lowers = list(filter(lambda x: x < pivot, array))
        
    equals = list(filter(lambda x: x == pivot, array))
        
    greaters = list(filter(lambda x: x > pivot, array))

    return quicksort(lowers) + equals + quicksort(greaters)


print(quicksort(array))

