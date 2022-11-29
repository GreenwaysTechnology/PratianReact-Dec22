
//impure function :it does not return immutable object 
// function updateProfile(profile,city) {
//     profile.city = city 
//     return profile ;
// }

//return new object after modifiication/mutation

//way -1 : create new object and copy the all the properties and update the property which you want to modify
// function updateProfile(profile, city) {
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

//way 2 : clone api 
// function updateProfile(profile, city) {
//     return Object.assign({}, profile, { city: city })
// }
//way 3: using spread operator(...)
function updateProfile(profile, city) {
    return { ...profile, city: city }
}
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Delhi'
}
console.log('before update', profile)
let result = updateProfile(profile, 'Coimbatore')
console.log('after update', result)
//Test whether function is pure or not: the function returns the same object or different object.
console.log('same profile ', profile === result ? 'same' : 'different')
/////////////////////////////////////////////////////////////////////////////////////
                   //Arrays and immutablity

//impure function
//array push method modifies existing array memory address
//push is mutable api : dont use
// function addTodo(todos, todo) {
//     return todos.push(todo) // modifies the existing array.
// }    
// //pure function
// function addTodo(todos, todo) {
//     return todos.concat(todo) //returns new array after add
// }
function addTodo(todos, todo) {
    return [...todos,todo] //returns new array after add
}
let todos = [{
    title: 'Learn react',
    done: true
}];
Object.freeze(todos)
let addedTodos = addTodo(todos, { title: 'Learn Pure functions', done: false })
console.log(addedTodos)

