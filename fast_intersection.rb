def fast_intersection(arr1, arr2) {
    intersection = [];

    arr1.each do |ele|
        if arr2.include?(ele)
            intersection.push(ele)
        end
    end
    intersection;
}


