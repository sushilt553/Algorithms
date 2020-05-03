require 'byebug';

def common_subsets(arr1, arr2) 
    subs1 = subsets(arr1)
    subs2 = subsets(arr2)

    common = []
    subs2.each {|ele| common << ele if subs1.include?(ele)}
    common
end

def subsets(arr)
    return [[]] if arr.empty? 
    debugger
    first = arr[0]
    subset = subsets(arr.drop(1))
    new_subs = subset.map {|ele| ele + [first]}
    new_subs + subset
end

p common_subsets([1,2,3], [2,3])