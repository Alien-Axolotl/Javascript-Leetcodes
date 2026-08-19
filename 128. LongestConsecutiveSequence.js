class Solution {
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0; 
        }

        const numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let currNum = num;
                let currLength = 1;

                while (numSet.has(currNum + 1)) {
                    currNum += 1;
                    currLength += 1;
                }

                longest = Math.max(longest, currLength);
            }
        }

        return longest;
    }
}
