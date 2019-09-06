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

    static async updateDonatedAmountNumbers(donation_id, number_purchased) {
        try {
            const response = await db.result(`
                UPDATE 
                    donations
                SET 
                    amount_still_needed = donation_amount - number_purchased - '${number_purchased}',
                    number_purchased = number_purchased + '${number_purchased}'
                WHERE 
                    donation_id = '${donation_id}';
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
                    *
                FROM
                    ngo_profile,
                    donations,
                    ngo_types
                WHERE
                    ngo_id = donation_receiver
                    AND
                    ngo_type_id = type_id
            `);
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
                    donation_store_name,
                    number_purchased,
                    amount_still_needed
                FROM
                    donations,
                    user_profile
                WHERE
                    user_id = '${user_id}'
                    AND
                    donation_giver = user_id
            `);
            console.log('response is HERERERE: ', response);
            return response;
        } catch(error) {
            console.log("Error on getAllDonationsByUserID:", error.message);
            return error.message;
        }
    }

    static async getAllDonationsByNGOid(ngo_id) {
        console.log("getting to donations model");
        try {
            const response = await db.any(`
                SELECT
                    donation_id,
                    donation_name, 
                    donation_cost, 
                    donation_amount, 
                    donation_store_name,
                    donation_photo,
                    number_purchased,
                    amount_still_needed
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

    static async addDonation(donation_name, donation_cost, donation_photo, donation_amount, number_purchased, donation_store_name, donation_receiver, store_link) {
        try {
            const response = await db.result(`
                INSERT INTO donations
                    (
                        donation_name,
                        donation_cost,
                        donation_photo,
                        donation_amount,
                        number_purchased,
                        donation_store_name,
                        donation_receiver,
                        store_link
                    )
                VALUES
                    ('${donation_name}', '${donation_cost}', '${donation_photo}', '${donation_amount}', '${number_purchased}','${donation_store_name}', '${donation_receiver}', '${store_link}')
            `)
            return response
        } catch(error) {
            console.log("Error in addDonation:", error.message);
            return error.message;
        }
    }

    static async getItemsByTypeName(type_id) {
        try {
            const response = await db.any(`
                SELECT 
                    *
                FROM
                    donations,
                    ngo_profile,
                    ngo_types
                WHERE
                    donation_receiver = ngo_id
                AND
                    ngo_type_id = type_id
                AND
                    type_id = '${type_id}'
            `)
            console.log(response);
            return response;
        } catch(err) {
            console.log('Error at get items by type id :', err.message);
            return err.message;
        }
    }

    static async deleteDonationById(item_id) {
        try {
            const response = await db.any(`
                DELETE 
                FROM
                    donations
                WHERE
                    donation_id = '${item_id}'
            `)
        }catch(err) {
            console.log('Error at delete donation by id', err.message);
            return err.message;
        }
    }

}

module.exports = Donations;