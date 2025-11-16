const mongoose = require('mongoose');


async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/BookVerseDB');


// Schema 
const authorSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
name: String,
nationality: String,
birthYear: Number
});


const ratingSchema = new mongoose.Schema({
user: String,
score: Number,
comment: String
}, { _id: false });


const bookSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
title: String,
genre: String,
publicationYear: Number,
authorId: mongoose.Schema.Types.ObjectId,
ratings: [ratingSchema]
});


const userSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
name: String,
email: String,
joinDate: Date
});


const Author = mongoose.model('Author', authorSchema, 'authors');
const Book = mongoose.model('Book', bookSchema, 'books');
const User = mongoose.model('User', userSchema, 'users');


await Author.deleteMany({});
await Book.deleteMany({});
await User.deleteMany({});


// Author IDs
const a1 = new mongoose.Types.ObjectId('64a100000000000000000001');
const a2 = new mongoose.Types.ObjectId('64a100000000000000000002');
const a3 = new mongoose.Types.ObjectId('64a100000000000000000003');

//insert
//Auther
await Author.insertMany([
{ _id: a1, name: 'Asha Verma', nationality: 'Indian', birthYear: 1980 },
{ _id: a2, name: 'Michael Stone', nationality: 'British', birthYear: 1972 },
{ _id: a3, name: 'Lina Garcia', nationality: 'Spanish', birthYear: 1990 }
]);


//Users
const users = [
{ _id: new mongoose.Types.ObjectId('64b200000000000000000011'), name: 'Ravi Kumar', email: 'ravi@example.com', joinDate: new Date('2025-05-10') },
{ _id: new mongoose.Types.ObjectId('64b200000000000000000012'), name: 'Sara Lee', email: 'sara@example.com', joinDate: new Date('2025-09-01') },
{ _id: new mongoose.Types.ObjectId('64b200000000000000000013'), name: 'Omar Ali', email: 'omar@example.com', joinDate: new Date('2024-12-20') }
];
await User.insertMany(users);

//Books
const books = [
{
_id: new mongoose.Types.ObjectId('64c300000000000000000a02'),
title: 'The Last Orchard',
genre: 'Fantasy',
publicationYear: 2012,
authorId: a1,
ratings: [
{ user: 'omar@example.com', score: 4, comment: 'Emotional.' }
]
},
{
_id: new mongoose.Types.ObjectId('64c300000000000000000a03'),
title: 'Quantum Drift',
genre: 'Science Fiction',
publicationYear: 2021,
authorId: a2,
ratings: [
{ user: 'ravi@example.com', score: 5, comment: 'Mind-blowing.' },
{ user: 'omar@example.com', score: 5, comment: 'A must-read.' },
{ user: 'sara@example.com', score: 4, comment: 'Complex but good.' }
]
},
{
_id: new mongoose.Types.ObjectId('64c300000000000000000a04'),
title: 'Wind of the Wild',
genre: 'Fantasy',
publicationYear: 2019,
authorId: a3,
ratings: []
},
{
_id: new mongoose.Types.ObjectId('64c300000000000000000a05'),
title: 'City of Echoes',
genre: 'Mystery',
publicationYear: 2016,
authorId: a1,
ratings: [
{ user: 'sara@example.com', score: 3, comment: 'Okay.' }
]
}
];


await Book.insertMany(books);


console.log('Data successfully seeded into BookVerseDB');
await mongoose.disconnect();
}


main().catch((err) => {
console.error('Error while seeding data:', err);
mongoose.disconnect();
});