require('./data')
const { Role } = require('./role')
const { User } = require('./user')


function setRoles(arr) {
    arr.forEach((iter) => {
        roleOBJs[iter.Id] = new Role(iter);
    });
}

function setUsers(arr) {
    arr.forEach((iter) => {
        userOBJs[iter.Id] = new User(iter);
    });
}

function getSubOrdinates(userId) {
    if (typeof userOBJs[userId] === 'undefined') { return `The user with ID "${userId}" could not be found.`; }
    return userOBJs[userId].getSubordinateUsers();
}
module.exports = {
    setRoles,
    setUsers,
    getSubOrdinates
}


setRoles(roles);
setUsers(users);

if (process.env.NODE_ENV !== 'test') {
    userOBJs.forEach((iter)=>{
        console.log('Subordinates of user '+iter.Id+':');
        console.log(getSubOrdinates(iter.Id));
    })
    
}