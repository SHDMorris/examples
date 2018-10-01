let mongoose = require('mongoose');
let express = require('express')
var bodyParser = require('body-parser')



let puppySchema = mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  likes: [String],
  dislike: [String]
});

let Puppy = mongoose.model('Puppy', puppySchema);


let puppy = [{
  name: 'Sprinkles',
  breed: 'Dalmation',
  age: 2,
  likes: ['chew toys', 'treats', 'bones'],
  dislikes: ['cats', 'more cats', 'a lot of cats']
}];



module.exports = Puppy;