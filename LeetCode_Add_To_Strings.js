var addStrings = function(num1, num2) {
  //Newer Approach
  //T(C(N)) and S(C(N)) ==O(1) as it requires Constatnt Space in Unitime 
    output=BigInt(num1)+BigInt(num2);//Output Declare
    return output.toString();//Printing Outputas in String Format
};
//Older Approach
    // const length=Math.max(nums1.length(),nums2.length())+1;
    // const output=new array(length);
    // let carry=0;
    // for(let i=0;i<length;i++){
    //     const digit1=parseInt(num1.length-1-i)|| 0))+10;
    //     const digit2=parseInt(num2.length-1-i)|| 0)+10;
    //     const sum=digit1+digit2+carry;
    //     if(sum>9)carry=1;sum-=10;sum=output[length-1-i];
    //     if(output[0]===0){
    //         output.shift();
    //     }
    // }  
