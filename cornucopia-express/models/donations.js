const db = require('./conn.js');

class Donations {
    constructor(
        donation_id, 
        donation_name, 
        donation_cost, 
        donation_amount, 
        donation_store_name, 
        donation_giver, 
        donation_receiver
    ) {
        this.donation_id= donation_id; 
        this.donation_name= donation_name;
        this.donation_cost= donation_cost;
        this.donation_amount= donation_amount; 
        this.donation_store_name= donation_store_name;
        this.donation_giver= donation_giver; 
        this.donation_receiver= donation_receiver;

    }

    static async getAllDonationItems() {
        try {
            const response = await db.any(`
                SELECT
                    *
                FROM
                    donations
            `);
            return response;
        } catch(error) {
            console.log("Error at getAllDonationItems:", error.message);
            return error.message;
        }
    } 

    static async getAllDonationsByUserID(user_id) {
        try {
            const response = await db.any(`
                SELECT
                    donation_name, 
                    donation_cost, 
                    donation_amount, 
                    donation_store_name
                FROM
                    donations,
                    user_profile
                WHERE
                    user_id = '${user_id}'
                    AND
                    donation_giver = user_id
            `);
            return response;
        } catch(error) {
            console.log("Error on getAllDonationsByUserID:", error.message);
            return error.message;
        }
    }

    static async getAllDonationsByNGOid(ngo_id) {
        try {
            const response = await db.any(`
                SELECT
                    donation_name, 
                    donation_cost, 
                    donation_amount, 
                    donation_store_name
                FROM
                    donations,
                    ngo_profile
                WHERE
                    ngo_id = '${ngo_id}'
                    AND
                    donation_receiver = ngo_id
            `);
            return response;
        } catch(error) {
            console.log("Error on getAllDonationsByNGOID:", error.message);
            return error.message;
        }
    }
}

module.exports = Donations;