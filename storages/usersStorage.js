// Fake database for users storage


class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email, age, bio}) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++;

    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName, email, age, bio }) {
        this.storage[id] = { id, firstName, lastName, email, age, bio };
    }

    searchUsers(query) {
        if (!query) {
            return this.getUsers();
        }

        const lowerQuery = query.toLowerCase();
        const allUsers = this.getUsers();

        return allUsers.filter(user =>
            user.firstName.toLowerCase().includes(lowerQuery) ||
            user.lastName.toLowerCase().includes(lowerQuery) ||
            user.email.toLowerCase().includes(lowerQuery)

        );

    }

    deleteUser(id) {
        delete this.storage[id];
    }


}

module.exports = new UsersStorage();