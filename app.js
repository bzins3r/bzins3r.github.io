// $.get('https://jsonplaceholder.typicode.com/posts', function(data) {
// console.log(data);
// });

axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => {
    console.log(resp);
});

