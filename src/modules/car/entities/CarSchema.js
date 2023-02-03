"use strict";
exports.__esModule = true;
exports.CarsSchema = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    city: {
        type: String
    },
    name: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: String
    },
    km: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    created_at: {
        type: Date,
        "default": new Date()
    },
    updated_at: {
        type: Date,
        "default": new Date()
    }
});
exports.CarsSchema = (0, mongoose_1.model)("Cars", schema);
