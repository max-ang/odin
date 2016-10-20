"use strict";

/**
 * Chart
 * @description :: Model for storing Chart records
 */

const shortId = require('shortid');
const _ = require('lodash');

module.exports = {
    schema: true,

    attributes: {
        id: {
            type: 'string',
            unique: true,
            index: true,
            defaultsTo: shortId.generate,
            primaryKey: true,
            size: 15
        },
        name: {
            type: 'string',
            required: true,
            unique: true,
            size: 150,
            minLength: 1
        },
        description: {
            type: 'string',
            size: 350
        },
        notes: {
            type: 'string',
            size: 500
        },
        type: {
            type: 'string',
            enum: ['bar', 'pie', 'line', 'stackedbar', 'heatmap']
        },
        url: {
            type: 'string',
            url: true,
            size: 500
        },
        link: {
            type: 'string',
            url: true,
            size: 500
        },
        data: {
            type: 'json'
        },
        dataSeries: {
            type: 'array'
        },
        status: {
            model: 'status'
        },
        dataType: {
            type: 'string',
            enum: ['quantitative', 'qualitative']
        },
        embedCode: {
            type: 'string',
            size: 500
        },
        publishedAt: {
            type: 'datetime'
        },
        file: {
            model: 'file'
                // required: true
        },
        createdBy: {
            model: 'user'
                // required: true
        },
        toJSON() {
            return this.toObject();
        }
    },

    searchables: ['name', 'description'],

    beforeUpdate: (values, next) => next(),

    beforeCreate: (values, next) => {

        Config.findOne({
            key: 'defaultStatus'
        }).exec(function (err, record) {
            values.status = record.value;

            values.url = _.replace(values.url, 'model', 'charts');
            values.url = _.replace(values.url, 'id', values.id);
            next();
        });


    },
    afterUpdate: (values, next) => {
        next();
    },
    afterCreate: (values, next) => {
        next();
    },
    afterDestroy: (destroyedRecords, next) => {
        next();
    }
};
