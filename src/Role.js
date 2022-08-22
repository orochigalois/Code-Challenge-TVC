roleOBJs = [];
class Role {
    constructor(roleObj) {
        this.Id = roleObj.Id;
        this.Name = roleObj.Name;
        this.Parent = roleObj.Parent;
    }

    getSubordinateRoles() {
        const currentRoleId = this.Id;

        const parent = new Map();
        const subTree = [];

        roleOBJs.forEach((iter) => {
            parent.set(iter.Id, iter.Parent);
        });

        // Uncomment this line to add the current user to his/her subordinates as well
        // subTree.push(currentRoleId);

        roleOBJs.forEach((iter) => {
            let k = iter.Id;
            while (k !== 0) {
                if (parent.has(k) && parent.get(k) === currentRoleId) {
                    subTree.push(iter.Id);
                    break;
                }
                k = parent.has(k) ? parent.get(k) : -1;
            }
        });

        return subTree;
    };
}

module.exports = {
    Role
}