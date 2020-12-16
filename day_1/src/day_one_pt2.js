let myFetch2 = async () => {
  let response = await fetch('./input.txt');
  let data = await response.text();
  let data_arr = data.split('\n').map(item => {
    return parseInt(item, 10);
  })
  return data_arr;
}

let question_input = [];

myFetch2().then(res => {
  console.log(starGrabber2(res));
})
.catch(err => {
  console.log(err);
})


let starGrabber2 = (arr) => {
  let result = 0;
  let special_number = 2020;


  
  for(let i=0; i<arr.length-2; i++) {

    for(let j=i+1; j<arr.length-1; j++) {
      
      for(let k=j; k<arr.length; k++) {
        if((special_number - (arr[i] + arr[j] + arr[k])) == 0) {
          result = arr[i] * arr[j] * arr[k];
        }
      }
    }
  }
  return result;
};