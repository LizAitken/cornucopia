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
    }

    async addUser() {
        try {
            const response = await db.one(`
                INSERT INTO user_profile 
                    (
                    first_name,
                    last_name,
                    user_email,
                    user_password
                    ) 
                VALUES 
                    ($1, $2, $3, $4)
                RETURNING user_email
                `, [ this.first_name, this.last_name, this.user_email, this.user_password]);
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
            return response.user_id;
        } catch(error) {
            console.log("Error in getUSerInfo:", error.message);
            return error.message;
        }
    }

    async deleteUser(user_id) {
        try {
            const response = await db.none(`
                DELETE FROM user_profile
                WHERE user_id = '${user_id}'
            `);
        } catch(error) {
            console.log('Error in delete user.', error.message);
            return error.message;
        }
    }
}

module.exports = User;