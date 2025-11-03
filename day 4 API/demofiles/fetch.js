fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>response.json())
.then(value => console.log(value))
.catch((error) => console.log(error.message));

// post data
const newTodo = {
    "userId": 1,
    "title": "delectus aut autem",
    "completed": false,
    "id": 1
}
fetch('https://jsonplaceholder.typicode.com/todos',
    {
        method: 'POST',
        body:JSON.stringify(newTodo)
    },
    {
        headers:{
        'content-type':'application/json'
        }
    }   
)
    .then((response) =>response.json())
    .then(value =>console.log(value));
