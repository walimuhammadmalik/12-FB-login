// models/user.js
const { DataTypes } = require('sequelize');
// const sequelize = require('../db');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        facebookId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return User;
};