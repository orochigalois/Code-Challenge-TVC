userOBJs = [];
class User {
    constructor(userObj) {
        this.Id = userObj.Id;
        this.Name = userObj.Name;
        this.Role = userObj.Role;
    }

    getSubordinateUsers() {
        const subordinateRoles = roleOBJs[this.Role].getSubordinateRoles();

        return userOBJs.filter((iter) => subordinateRoles.includes(iter.Role)).map((user) => ({
            Id: user.Id,
            Name: user.Name,
            Role: user.Role,
        }));
    };
}

module.exports = {
    User
}