const db = require('./conn.js');

class Donations {
    constructor(
        donation_id, 
        donation_name, 
        donation_cost, 
        donation_amount, 
        donation_store_name, 
        donation_giver, 
        donation_receiver,
        number_purchased,
        amount_still_needed,
        store_link
    ) {
        this.donation_id= donation_id; 
        this.donation_name= donation_name;
        this.donation_cost= donation_cost;
        this.donation_amount= donation_amount; 
        this.donation_store_name= donation_store_name;
        this.donation_giver= donation_giver; 
        this.donation_receiver= donation_receiver;
        this.number_purchased = number_purchased;
        this.amount_still_needed = amount_still_needed;
        this.store_link = store_link;
    }

    updateLeftoverDonationAmount() {
        try { const response = db.result(`
                UPDATE 
                    donations 
                SET 
                    amount_still_needed = donation_amount - number_purchased
        `);
            return response;
        } catch(error) {
            return error.message;
        }   
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

    static async getNGONamesForAllItems() {
        try {
            const response = await db.any(`
                SELECT
                    ngo_name,
                    donation_name,
                    donation_cost,
                    donation_store_name,
                    donation_amount,
                    donation_photo,
                    number_purchased,
                    amount_still_needed,
                    store_link,
                    donation_receiver
                FROM
                    ngo_profile,
                    donations
                WHERE
                    ngo_id = donation_receiver
            `);
            console.log(response);
            return response;
        } catch(error) {
            console.log("Error at getNGONamesForAllItems:", error.message);
            return error.message;
        }
    }
    
    static async getAllTypesForAllItems() {
        try {
            const response = await db.any(`
                SELECT
                    type_name
                    donatation_name
                FROM
                    ngo_types,
                    ngo_profile,
                    donations
                WHERE
                    ngo_type_id = type_id
                    AND
                    ngo_id = donation_receiver
            `);
            return response;
        } catch(error) {
            console.log("Error at getAllTypesForAllItem:", error.message);
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