def fast_intersection(arr1, arr2)
    intersection = []

    arr1.each do |ele|
        if arr2.include?(ele)
            intersection.push(ele)
        end
    end
    intersection
end

def fast_intersection(arr1, arr2)
    set = arr1.to_set
    intersection = []

    arr2.each {|ele| intersection << ele if set.include?(ele)}

    intersection
end 

