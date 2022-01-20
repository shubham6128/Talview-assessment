function findMean(a,n)
{
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += a[i];
 
    return sum / n;
}
 
// Function for
// calculating median
function findMedian(a,n)
{
    // First we sort
    // the array
    a.sort();
 
    // check for
    // even case
    if (n % 2 != 0)
        return a[n / 2];
 
    return (a[Math.floor((n-1)/2)] +
            a[n / 2]) / 2;
}
//Calculate length of array arr    
    int length = sizeof(arr)/sizeof(arr[0]);    
        
    //Initialize max with first element of array.    
    int max = arr[0];    
        
    //Loop through the array    
    for (int i = 0; i < length; i++) {     
        //Compare elements of array with max    
       if(arr[i] > max)    
           max = arr[i];    
    }      
    printf("Largest element present in given array: %d\n", max);

let arr1=[8,1,6,2,6,4,2,0,7];
let MaxNumber=Math.max(...arr1);



function findMean(arr1){
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i]
    }
    return sum/arr1.length;
}
 let medaian=findMean(arr1)
 
 
 function findMedian(arr1){
   const middle = (arr1.length + 1) / 2;
   const sorted = [...arr1].sort((a, b) => a - b);
   const isEven = sorted.length % 2 === 0;
   return isEven ? (sorted[middle - 1.5]+ sorted[middle - 0.5]) / 2 : sorted[middle - 1];
 }
 
 let Median=findMedian(arr1)
 
 let all_numbers={"Median":Median,"medaian":medaian,'MaxNumber':MaxNumber}
 let New_array=[(all_numbers)]
 console.log(New_array)