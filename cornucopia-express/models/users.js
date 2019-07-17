const db = require('./conn.js');

class User {
    constructor(
        user_id,
        first_name,
        last_name,
        user_email,
        user_password
    ) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_email = user_email;
        this.user_password = user_password;

        console.log('first name', first_name);
    }

    static async addUser(first_name, last_name, user_email, password) {
        console.log('Last name in add user   :', last_name);
        try {
            const response = await db.result(`
                INSERT INTO user_profile 
                    (
                        first_name,
                        last_name,
                        user_email,
                        user_password
                    ) 
                VALUES 
                    ('${first_name}', '${last_name}', '${user_email}', '${password}')
                `);
            console.log("user was created with email:", response.user_email);
            return response;
        } catch(error) {
            console.log("Error in addUser:", error.message);
            return error.message;
        }
    }

    static async getUserInfo(user_id) {
        const query = `
            SELECT *
            FROM user_profile 
            WHERE user_id = '${user_id}'
        `;

        try {
            const response = await db.one(query);
            return response;
        } catch(error) {
            console.log("Error in getUSerInfo:", error.message);
            return error.message;
        }
    }
}

module.exports = User;