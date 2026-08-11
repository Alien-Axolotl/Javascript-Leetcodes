/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    const freq = {};

    for (let i = 0 ; i < nums.length ; i++) {
        if (nums[i] in freq) {
            freq[nums[i]] += 1;
        }
        else {
            freq[nums[i]] = 1;
        }
    }
    const uniqueNums = Object.keys(freq);

    uniqueNums.sort((a, b) => freq[b] - freq[a]);

    return uniqueNums.slice(0, k).map(Number);
};