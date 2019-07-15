const db = require('./conn.js');

class NGO_User {
    constructor(
        ngo_id,
        ngo_name,
        ngo_email,
        ngo_password,
        ngo_ein,
        ngo_address,
        ngo_phone,
        ngo_description,
        ngo_type_id,
        ngo_website,
        ngo_photo
    ) {
        this.ngo_id= ngo_id;
        this.ngo_name= ngo_name;
        this.ngo_email= ngo_email;
        this.ngo_password= ngo_password;
        this.ngo_ein= ngo_ein;
        this.ngo_address= ngo_address;
        this.ngo_phone= ngo_phone;
        this.ngo_description= ngo_description;
        this.ngo_type_id= ngo_type_id;
        this.ngo_website= ngo_website;
        this.ngo_photo= ngo_photo;
    }

    async addNGO() {
        try {
            const response = await db.one(`
                INSERT INTO ngo_profile 
                    (
                        ngo_id,
                        ngo_name,
                        ngo_email,
                        ngo_password,
                        ngo_ein,
                        ngo_address,
                        ngo_phone,
                        ngo_description,
                        ngo_type_id,
                        ngo_website,
                        ngo_photo
                    ) 
                VALUES 
                    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, null)
                RETURNING ngo_email
                `, [this.ngo_id, this.ngo_name, this.ngo_email, this.ngo_password, this.ngo_ein, this.ngo_address, this.ngo_phone, this.ngo_description, this.ngo_type_id, this.ngo_website ]);
            console.log("user was created with email:", response.ngo_email);
            return response;
        } catch(error) {
            console.log("Error in addNGO:", error.message);
            return error.message;
        }
    }

    static async getNGObyID(ngo_id) {
        try {
            const response = await db.one(`
                        SELECT
                            *
                        FROM
                            ngo_profile
                        WHERE
                            ngo_id = '${ngo_id}'
            `);
            return response;
        } catch(error) {
            console.log("Error in getNGObyID:", error.message);
            return error.message;
        }
    }

    static async getNGOTypeById(ngo_id) {
        try {
            const response = await db.one(`
                    SELECT
                        type_name
                    FROM 
                        ngo_types
                        ngo_profile
                    WHERE
                        ngo_id = '${ngo_id}'
                        AND
                        ngo_type_id = type_id
            `);
            return response;
        } catch(error) {
            console.log("Error at getNGOTypeByID : ", error.message);
            return error.message;
        }
    }
}

module.exports = NGO_User;