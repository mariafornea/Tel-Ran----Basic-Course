let users = [
    "Вася", // 0
    'Петя', // 1
    "Маша", // 2
  ];
  
let someUsers = users.filter(
    item => item[3] === 'я'
);
  
let someUsers2 = users.filter(
    function(item) {
        return item[3] === 'я'
    }
  );
  
  console.log(someUsers,someUsers2);
  