var twoSum = function (nums, target) {
  let coupleNum = [];
  nums.map((el) => {
    if (
      nums.includes(target - el) &&
      nums.indexOf(target - el) !== nums.indexOf(el)
    ) {
      return coupleNum.push(nums.indexOf(el));
    }
  });

  return coupleNum;
};
