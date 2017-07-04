//Challenge 1
function print_students(stu) {
    for (var i = 0; i < stu.length; i++) {
        var display = "Name: " + stu[i]["name"] + ", Cohort: " + stu[i]["cohort"];
        console.log(display);
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

print_students(students);


//Challenge 2
function print_emp_man(obj) {
    for (var key in obj) {
        var a = key.toUpperCase();
        console.log(a);
        for (var i = 0; i < obj[key].length; i++) {
            let str = '' + (i + 1);
            let last_name = obj[key][i]["last_name"];
            let first_name = obj[key][i]["first_name"];
            let len = last_name.length + first_name.length;
            str = str + " - " + last_name.toUpperCase() + ", " + first_name.toUpperCase() + " - " + len;
            console.log(str);
        };
    };
};

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

 print_emp_man(users);