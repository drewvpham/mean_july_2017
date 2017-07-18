// Create a database called 'my_first_db'.

use my_first_db

// Create students collection.

db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

db.students.insert({ name: 'Ian You', home_state: 'Washington', lucky_number: 27, birthday: { month: 2, day: 27, year: 1987 }})

// Create 5 students with the appropriate info.

db.students.insert({ name: 'Jin You', home_state: 'New York', lucky_number: 7, birthday: { month: 2, day: 7, year: 1990 }})
db.students.insert({ name: 'Friend You', home_state: 'California', lucky_number: 17, birthday: { month: 12, day: 7, year: 1990 }})
> db.students.insert({ name: 'Friend Who', home_state: 'Texas', lucky_number: 37, birthday: { month: 12, day: 17, year: 1995 }})
> db.students.insert({ name: 'You Who', home_state: 'California', lucky_number: 777, birthday: { month: 1, day: 17, year: 1992 }})

// Get all students.

db.students.find()
// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

db.students.find( {$or: [ { home_state: 'California' },{ home_state: 'Washington' }] }).pretty()

// Get all students whose lucky number is:
// greater than 3

db.students.find({ lucky_number: {$gt: 3} }).pretty()

// less than or equal to 10

db.students.find({ lucky_number: {$lte: 10} }).pretty()

// between 1 and 9 (inclusive)

db.students.find({ $and : [{lucky_number: {$gte:1}}, {lucky_number: {$lte:9}}] }).pretty()

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

db.students.update({}, { $set: { interests: ['coding' ,'brunch' , 'MongoDB'] }}, {upsert: false, multi: true} )

// Add some unique interests for each particular students into each of their interest arrays.

db.students.update( { name: 'Ian You' },  { $push : { interests : 'Express' } })
db.students.update( { name: 'Jin You' },  { $push : { interests : 'Hello' } })
db.students.update( { name: 'Friend Who' },  { $push : { interests : 'World' } })
db.students.update( { name: 'Friend You' },  { $push : { interests : 'JavaScript' } })
db.students.update( { name: 'You Who' },  { $push : { interests : 'Good Food' } })

// Add the interest 'taxes' into someone's interest array.

db.students.update( { name: 'Ian You' },  { $push : { interests : 'Taxes' } })

// Remove the 'taxes' interest you just added.

db.students.update( { name: 'Ian You' },  { $pop : { interests : 1 } })

// Remove all students who are from California (or Washington).

db.students.remove({ home_state : 'California'})

// Remove a user by name.
db.students.remove({ name : 'Friend Who'})

// Remove a student whose lucky number is greater than 5 (JUST ONE)

db.students.remove({ lucky_number : {$gt: 5} }, { justOne: true })

// Add a field to each student collection called 'number_of_belts' and set it to 0.

db.students.update({}, {$set : {number_of_belts : 0} }, {upsert : false, multi: true } )

// Increment this field by 1 for all students in Washington (Seattle Dojo).

db.students.update({ home_state: 'Washington' }, {$inc : { number_of_belts: 1 }} )


// Rename the 'number_of_belts' field to 'belts_earned'

db.students.update({}, {$rename : { 'number_of_belts' : 'belts_earned' }} )

// Remove the 'lucky_number' field.

db.students.update({}, {$unset : { lucky_number: ""}})

// Add a 'updated_on' field, and set the value as the current date.

db.students.update({}, {$currentDate: { updated_on : {$type : 'date'}} })
