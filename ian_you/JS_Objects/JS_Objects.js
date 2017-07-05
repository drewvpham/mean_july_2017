// Challenge 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (let i= 0; i< students.length; i++){
  console.log('Name:',students[i]['name'],', Cohort:',students[i]['cohort']);
}

// Challenge 2

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (let user in users){
  console.log(user.toUpperCase())
  if (user == 'employees'){
    for (let i = 0; i < users['employees'].length; i++){
      console.log((i+1).toString()+' - '+users['employees'][i]['last_name']+', '+users['employees'][i]['first_name']+" - "+(users['employees'][i]['last_name'].length + users['employees'][i]['first_name'].length).toString());
    }
  }
  else{
    for (let i = 0; i < users['managers'].length; i++){
      console.log((i+1).toString()+' - '+users['managers'][i]['last_name']+', '+users['managers'][i]['first_name']+" - "+(users['managers'][i]['last_name'].length + users['managers'][i]['first_name'].length).toString());
    }
  }
}
