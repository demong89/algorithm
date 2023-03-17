/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (73.59%)
 * Likes:    654
 * Dislikes: 0
 * Total Accepted:    114.7K
 * Total Submissions: 151.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let list = [];
    backtrack(list,[],nums)
    return list
};
function backtrack(list,temp,nums){
    if (temp.length == nums.length) {
        return list.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
       if (temp.includes(nums[i])) continue;
        temp.push(nums[i])
        backtrack(list,temp,nums)
        temp.pop()
    }
}
// @lc code=end
const search = (nodes, path) => {
    if(path.length === nodes.length){ // 当路径长度等于 nums 数组长度说明这是一个排列
        result.push([...path]) // 这时候将路径储存
        return // 推出递归
    }

    for(let i = 0; i < nodes.length; i++){  // 每次将数组的节点全部遍历一边
        path.push(nodes[i])   // 这一次遍历需要处理这个节点 首先把值存入路径数组
        const temp = [...nodes]  
        temp.splice(i,1) // 这一步和上一步意思是这个节点处理完了 不能用了 把剩下的节点继续递归处理
        search(temp, path)  // 继续递归
        path.pop()  // 这个节点递归处理完了之后把它从路径中删除  这里要好好想想
    }
}
const permute = function(nums) {
    const path = []  // 记录路径
    const result = []  // 结果
    search(nums, path) // 开始递归处理
    return result //返回结果
};

