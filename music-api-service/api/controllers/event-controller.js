'use strict';
/*
 'use strict' is not required but helpful for turning syntactical errors into true errors in the program flow
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
*/

/*
 Modules make it possible to import JavaScript files into your application.  Modules are imported
 using 'require' statements that give you a reference to the module.
  It is a good idea to list the modules that your application depends on in the package.json in the project root
 */
let util = require('util');
let faker = require('faker');
const jsf = require('json-schema-faker');
//const name = ["Maksim", "Nikita", "Igor", "Artem"]
/*
 Once you 'require' a module you can reference the things that it exports.  These are defined in module.exports.
 For a controller in a127 (which this is) you should export the functions referenced in your Swagger document by name.
 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document
  In the starter/skeleton project the 'get' operation on the '/hello' path has an operationId named 'hello'.  Here,
  we specify that in the exports of this module that 'hello' maps to the function named 'hello'
 */
module.exports = {
  events: getEvents,
};


/*
  Functions in a127 controllers used for operations should take two parameters:
  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
function getEvents(req, res) {
  // this sends back a JSON response which is a single string
  const typeOfLesson = ["Lecture", "Practice", "Seminar", "Colloquium", "Coursework" ]
  const names = ["Matanaliz", "Geometry", "Algebra", "English", "Programming", "Information Technology", "Political science"]
  res.json([{
    
    "id": "" + faker.random.number(),

    "name1": "" + faker.name.findName(),
    "subj1": "" + names[Math.floor(Math.random() * names.length)] ,
    "time1": " 8:15 - 9:35 ",
    "location1": "аудитория: " + faker.random.number({
      min:400,
      max:430}),
    "kind1": "" + typeOfLesson[Math.floor(Math.random() * typeOfLesson.length)],
    
  }, {
    
    "id": "" + faker.random.number(),

    "name1": "" + faker.name.findName(),
    "subj1": "" + names[Math.floor(Math.random() * names.length)] ,
    "time1": " 9:45 - 11:05 ",
    "location1": "аудитория: " + faker.random.number({
      min:400,
      max:430}),
    "kind1": "" + typeOfLesson[Math.floor(Math.random() * typeOfLesson.length)],
    
  }, {
    
    "id": "" + faker.random.number(),

    "name1": "" + faker.name.findName(),
    "subj1": "" + names[Math.floor(Math.random() * names.length)] ,
    "time1": " 11:15 - 12:35 ",
    "location1": "аудитория: " + faker.random.number({
      min:400,
      max:430}),
    "kind1": "" + typeOfLesson[Math.floor(Math.random() * typeOfLesson.length)],
    
  },{
    
    "id": "" + faker.random.number(),

    "name1": "" + faker.name.findName(),
    "subj1": "" + names[Math.floor(Math.random() * names.length)] ,
    "time1": " 13:00 - 14:20 ",
    "location1": "аудитория: " + faker.random.number({
      min:400,
      max:430}),
    "kind1": "" + typeOfLesson[Math.floor(Math.random() * typeOfLesson.length)],
    
  }]);
}


