function createNumberObjects(arr){
    // let obj = {number : '', isEven: '', double:''}
     let result = [{}]
     
     for(let i=0; i< arr.length; i++){
       if(arr[i] % 2 === 0){
         result[i] = { number: arr[i], isEven: true, double: arr[i] + arr[i] }
       }else {
         result[i] ={ number: arr[i], isEven: false, double: arr[i] + arr[i] }
       }
     }
     return result
  }
  
  console.log(createNumberObjects([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))