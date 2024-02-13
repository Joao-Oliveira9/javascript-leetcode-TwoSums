/* Problem
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
 */
function two_sum(nums,target)
{
   let pointer1 = 0;
   let pointer2 = 1;
   let flag = false;
   let index = [pointer1,pointer2];

   do
  { 
    do
    { 
        if(nums[pointer1] + nums[pointer2] == target)
        {
          flag = true;
        }
        else
        {
          pointer2++;
        }
     }
    while((pointer2 < nums.length) && (flag != true)); 
     if(flag != true)
    {
      pointer1++;
      pointer2 = pointer1 + 1;   
    } 
   }
  while(flag != true && pointer1 < nums.length); 

  index[0] = pointer1;
  index[1] = pointer2;

  return index;
}
