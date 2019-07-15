CREATE DATABASE cornucopia;

CREATE TABLE user_profile (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_email VARCHAR(255),
    user_password VARCHAR(50)
);

CREATE TABLE ngo_types (
    type_id SERIAL PRIMARY KEY,
    type_name VARCHAR(250)
);

CREATE TABLE ngo_profile (
    ngo_id SERIAL PRIMARY KEY,
    ngo_name VARCHAR(200),
    ngo_email VARCHAR(500),
    ngo_password VARCHAR(50),
    ngo_ein VARCHAR(50),
    ngo_address VARCHAR(500),
    ngo_website VARCHAR(500),
    ngo_photo VARCHAR(500),
    ngo_description VARCHAR(1000),
    ngo_type_id INT REFERENCES ngo_types (type_id)
);

CREATE TABLE donations (
    donation_id SERIAL PRIMARY KEY,
    donation_name VARCHAR(300),
    donation_cost DECIMAL(8,2),
    donation_amount INT,
    donation_store_name VARCHAR(250),
    donation_receiver INT REFERENCES ngo_profile (ngo_id),
    donation_giver INT REFERENCES user_profile (user_id)
);

