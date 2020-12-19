
// function myFetch() {
//   fetch('./input.txt').then(response => {
//     console.log(response);
//   });
// }

let myFetch = async () => {
  let response = await fetch("./input.txt");
  let data = await response.text();

  const rows = data.split('\n');

  return rows;
}

myFetch().then(res => {
  console.log(stringDecoder(res));
})
.catch(err => {
  console.log('Error!');
  console.log(err);
})

let stringDecoder = (arr) => {
  let results = 0;
  let firstHalf = "";
  let secondHalf = "";
  arr.forEach(element => {
    firstHalf = element.split(": ")[0];
    secondHalf = element.split(": ")[1];
    
    let numOfInstances = firstHalf.split(" ")[0];;
    let low = numOfInstances.split("-")[0];
    let high = numOfInstances.split("-")[1];
    
    let testChar = firstHalf.split(" ")[1];
    let testString = secondHalf;
    let numberOfTimesFound = 0;


    numberOfTimesFound = testString.split(testChar).length-1; 
    
    if(numberOfTimesFound >= low && numberOfTimesFound <= high) {
      results += 1;
    }
  });

  return results;
}

