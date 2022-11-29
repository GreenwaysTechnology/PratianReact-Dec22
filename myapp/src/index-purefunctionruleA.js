//pure functions

//Rule:A
//If function receives input, the function returns the same input without any mutation.

//impure function
// function displayProfile(profile) {
//     profile.city = 'Delhi'
//     return profile
// }
//pure function
function displayProfile(profile) {
    //profile.city = 'Delhi'
    return profile
}
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore'
}
displayProfile(profile)