/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 *
 * https://leetcode-cn.com/problems/subarray-sum-equals-k/description/
 *
 * algorithms
 * Medium (43.01%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    34.6K
 * Total Submissions: 77.9K
 * Testcase Example:  '[1,1,1]\n2'
 *
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 * 
 * 示例 1 :
 * 
 * 
 * 输入:nums = [1,1,1], k = 2
 * 输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
 * 
 * 
 * 说明 :
 * 
 * 
 * 数组的长度为 [1, 20,000]。
 * 数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // 枚举
    // let count = 0;
    // for (let start = 0; start < nums.length; start++) {
    //     let sum = 0;
    //     for (let end = start; end >=0; end--) {
    //         sum += nums[end]
    //         if (sum === k) {
    //             count++
    //         }
    //     }
    // }
    // return count;

    // let count = 0;
    // for (let start = 0; start < nums.length; start++) {
    //     let sum = 0;
    //     for (let end = start; end <nums.length; end++) {
    //         sum += nums[end]
    //         if (sum === k) {
    //             count++
    //         }
    //     }
    // }
    // return count;

    const mp = new Map();
    mp.set(0,1)
    let count = 0,pre = 0;
    for (const x of nums) {
        pre+=x;
        if (mp.has(pre-k))  count+= mp.get(pre-k)
        if(mp.has(pre)) mp.set(pre,mp.get(pre)+1)
        else mp.set(pre,1)
    }
    return count
};
// @lc code=end

