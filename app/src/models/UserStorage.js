'use strict';

class UserStorage {
    static #users = {
        id: ["abcd","나개발","김팀장"],
        psword: ["1234","1234","123456"],
        name: ["테스트","나개발","김팀장"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        console.log('필드 => ',fields);
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;