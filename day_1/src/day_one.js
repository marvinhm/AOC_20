let myFetch = async () => {
  let response = await fetch('./input.txt');
  let data = await response.text();
  let data_arr = data.split('\n').map(item => {
    return parseInt(item, 10);
  })
  return data_arr;
}

let question_input = [];

myFetch().then(res => {
  console.log(day1(res));
})
.catch(err => {
  console.log(err);
})



let day1 = (list_of_numbers) => {
  let result;
  let special_number = 2020;
  let entry_num1 = 0;
  let entry_num2 = 0;

  if(list_of_numbers) {
    list_of_numbers.forEach(i => {
      entry_num1 = i;
      list_of_numbers.shift();
      list_of_numbers.forEach(j => {
        entry_num2 = j;
        if((i + j) === special_number) {
          result = [i, j];
        }
      });
    });
  }

  answer = result[0] * result[1];

  return answer;
};


console.log(day1(question_input));