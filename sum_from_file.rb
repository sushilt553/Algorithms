def sum_from_file(filename) {
    nums = File
        .readlines(filename)
        .select { |line| line[0] != "#" }
        .map(&:to_i)

    nums.inject(:+)
}
 
# This is a ruby solution for file read.