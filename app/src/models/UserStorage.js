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
}

module.exports = UserStorage;