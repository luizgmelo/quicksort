array = [30, 15, 5, 10]
lowers = []
greaters = []
equals = []
def quicksort(array):

    if len(array) < 2:
        return array 

    pivot = array[0]
    
    lowers = list(filter(lambda x: x < pivot, array))
        
    equals = list(filter(lambda x: x == pivot, array))
        
    greaters = list(filter(lambda x: x > pivot, array))

    return quicksort(lowers) + equals + quicksort(greaters)


print(quicksort(array))

