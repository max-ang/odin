"use strict";

/**
 * Route Mappings
 *
 * Your routes map URLs to views and controllers
 */

module.exports = {
    routes: {

        // Users

        'POST /users/login': 'User.login', // LOGOUT missing!!!
        'GET /users/refreshToken': 'User.refreshToken',

<<<<<<< HEAD
        'GET /users/first': { blueprint: 'first', model: 'user' },
        'HEAD /users/first': { controller: 'Head', action: 'Head', model: 'user'},

        'GET /users/last': { blueprint: 'last', model: 'user' },
        'HEAD /users/last': {controller: 'Head', action: 'Head', model: 'user'},

        'PATCH /users/:id' : { blueprint: 'update', model: 'user' },
        'HEAD /users/:id': { controller: 'Head', action: 'Head', model: 'user'},
        // 'OPTIONS /users/:id': { controller : 'Option', model: 'user', action: 'collection' },

        'OPTIONS /users': { controller : 'Options', model: 'user', action: 'collection' },
=======
        'GET /users/first': {
            blueprint: 'first',
            model: 'user'
        },
        'HEAD /users/first': {
            controller: 'Head',
            action: 'Head',
            model: 'user'
        },

        'GET /users/last': {
            blueprint: 'last',
            model: 'user'
        },
        'HEAD /users/last': {
            controller: 'Head',
            action: 'Head',
            model: 'user'
        },

        'PATCH /users/:id': {
            blueprint: 'update',
            model: 'user'
        },
        'HEAD /users/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'user'
        },
        'OPTIONS /users/:id': {
            controller: 'user',
            model: 'user',
            action: 'foo'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865


        // Organizations

<<<<<<< HEAD
        'GET /organizations/first': { blueprint: 'first', model: 'organization' },
        'HEAD /organizations/first': { controller: 'Head', action: 'Head', model: 'organization'},

        'GET /organizations/last': { blueprint: 'last', model: 'organization' },
        'HEAD /organizations/last': {controller: 'Head', action: 'Head', model: 'organization'},

        'PATCH /organizations/:id' : { blueprint: 'update', model: 'organization' },
        'HEAD /organizations/:id': { controller: 'Head', action: 'Head', model: 'organization'},
=======
        'GET /organizations/first': {
            blueprint: 'first',
            model: 'organization'
        },
        'HEAD /organizations/first': {
            controller: 'Head',
            action: 'Head',
            model: 'organization'
        },

        'GET /organizations/last': {
            blueprint: 'last',
            model: 'organization'
        },
        'HEAD /organizations/last': {
            controller: 'Head',
            action: 'Head',
            model: 'organization'
        },

        'PATCH /organizations/:id': {
            blueprint: 'update',
            model: 'organization'
        },
        'HEAD /organizations/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'organization'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /organizations/:id': { blueprinst: 'update', model: 'organization' },


        // Categories

<<<<<<< HEAD
        'GET /categories/first': { blueprint: 'first', model: 'category' },
        'HEAD /categories/first': { controller: 'Head', action: 'Head', model: 'category'},

        'GET /categories/last': { blueprint: 'last', model: 'category' },
        'HEAD /categories/last': {controller: 'Head', action: 'Head', model: 'category'},

        'PATCH /categories/:id' : { blueprint: 'update', model: 'category' },
        'HEAD /categories/:id': { controller: 'Head', action: 'Head', model: 'category'},
=======
        'GET /categories/first': {
            blueprint: 'first',
            model: 'category'
        },
        'HEAD /categories/first': {
            controller: 'Head',
            action: 'Head',
            model: 'category'
        },

        'GET /categories/last': {
            blueprint: 'last',
            model: 'category'
        },
        'HEAD /categories/last': {
            controller: 'Head',
            action: 'Head',
            model: 'category'
        },

        'PATCH /categories/:id': {
            blueprint: 'update',
            model: 'category'
        },
        'HEAD /categories/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'category'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /categories/:id': { blueprinst: 'update', model: 'category' },


        // Statuses

<<<<<<< HEAD
        'GET /statuses/first': { blueprint: 'first', model: 'status' },
        'HEAD /statuses/first': { controller: 'Head', action: 'Head', model: 'status'},

        'GET /statuses/last': { blueprint: 'last', model: 'status' },
        'HEAD /statuses/last': {controller: 'Head', action: 'Head', model: 'status'},

        'PATCH /statuses/:id' : { blueprint: 'update', model: 'status' },
        'HEAD /statuses/:id': { controller: 'Head', action: 'Head', model: 'status'},
=======
        'GET /statuses/first': {
            blueprint: 'first',
            model: 'status'
        },
        'HEAD /statuses/first': {
            controller: 'Head',
            action: 'Head',
            model: 'status'
        },

        'GET /statuses/last': {
            blueprint: 'last',
            model: 'status'
        },
        'HEAD /statuses/last': {
            controller: 'Head',
            action: 'Head',
            model: 'status'
        },

        'PATCH /statuses/:id': {
            blueprint: 'update',
            model: 'status'
        },
        'HEAD /statuses/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'status'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /statuses/:id': { blueprinst: 'update', model: 'status' },


        // Filetypes

<<<<<<< HEAD
        'GET /filetypes/first': { blueprint: 'first', model: 'filetype' },
        'HEAD /filetypes/first': { controller: 'Head', action: 'Head', model: 'filetype'},

        'GET /filetypes/last': { blueprint: 'last', model: 'filetype' },
        'HEAD /filetypes/last': {controller: 'Head', action: 'Head', model: 'filetype'},

        'PATCH /filetypes/:id' : { blueprint: 'update', model: 'filetype' },
        'HEAD /filetypes/:id': { controller: 'Head', action: 'Head', model: 'filetype'},
=======
        'GET /filetypes/first': {
            blueprint: 'first',
            model: 'filetype'
        },
        'HEAD /filetypes/first': {
            controller: 'Head',
            action: 'Head',
            model: 'filetype'
        },

        'GET /filetypes/last': {
            blueprint: 'last',
            model: 'filetype'
        },
        'HEAD /filetypes/last': {
            controller: 'Head',
            action: 'Head',
            model: 'filetype'
        },

        'PATCH /filetypes/:id': {
            blueprint: 'update',
            model: 'filetype'
        },
        'HEAD /filetypes/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'filetype'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /filetypes/:id': { blueprinst: 'update', model: 'filetype' },


        // Files

<<<<<<< HEAD
        'GET /files/first': { blueprint: 'first', model: 'file' },
        'HEAD /files/first': { controller: 'Head', action: 'Head', model: 'file'},

        'GET /files/last': { blueprint: 'last', model: 'file' },
        'HEAD /files/last': {controller: 'Head', action: 'Head', model: 'file'},

        'PATCH /files/:id' : { blueprint: 'update', model: 'file' },
        'HEAD /files/:id': { controller: 'Head', action: 'Head', model: 'file'},
=======
        'GET /files/first': {
            blueprint: 'first',
            model: 'file'
        },
        'HEAD /files/first': {
            controller: 'Head',
            action: 'Head',
            model: 'file'
        },

        'GET /files/last': {
            blueprint: 'last',
            model: 'file'
        },
        'HEAD /files/last': {
            controller: 'Head',
            action: 'Head',
            model: 'file'
        },

        'PATCH /files/:id': {
            blueprint: 'update',
            model: 'file'
        },
        'HEAD /files/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'file'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /files/:id': { blueprinst: 'update', model: 'file' },


        // Databases

<<<<<<< HEAD
        'GET /databases/first': { blueprint: 'first', model: 'database' },
        'HEAD /databases/first': { controller: 'Head', action: 'Head', model: 'database'},

        'GET /databases/last': { blueprint: 'last', model: 'database' },
        'HEAD /databases/last': {controller: 'Head', action: 'Head', model: 'database'},

        'PATCH /databases/:id' : { blueprint: 'update', model: 'database' },
        'HEAD /databases/:id': { controller: 'Head', action: 'Head', model: 'database'},
=======
        'GET /databases/first': {
            blueprint: 'first',
            model: 'database'
        },
        'HEAD /databases/first': {
            controller: 'Head',
            action: 'Head',
            model: 'database'
        },

        'GET /databases/last': {
            blueprint: 'last',
            model: 'database'
        },
        'HEAD /databases/last': {
            controller: 'Head',
            action: 'Head',
            model: 'database'
        },

        'PATCH /databases/:id': {
            blueprint: 'update',
            model: 'database'
        },
        'HEAD /databases/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'database'
        },
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
        // 'OPTIONS /databases/:id': { blueprinst: 'update', model: 'database' },


        // Datasets

<<<<<<< HEAD
        'GET /datasets/first': { blueprint: 'first', model: 'dataset' },
        'HEAD /datasets/first': { controller: 'Head', action: 'Head', model: 'dataset'},

        'GET /datasets/last': { blueprint: 'last', model: 'dataset' },
        'HEAD /datasets/last': {controller: 'Head', action: 'Head', model: 'dataset'},

        'PATCH /datasets/:id' : { blueprint: 'update', model: 'dataset' },
        'HEAD /datasets/:id': { controller: 'Head', action: 'Head', model: 'dataset'},
        // 'OPTIONS /datasets/:id': { blueprinst: 'update', model: 'dataset' },

        // Files

        'POST /files/upload': 'File.upload',
        'GET /files/download/:filename': 'File.download'
=======
        'GET /datasets/first': {
            blueprint: 'first',
            model: 'dataset'
        },
        'HEAD /datasets/first': {
            controller: 'Head',
            action: 'Head',
            model: 'dataset'
        },

        'GET /datasets/last': {
            blueprint: 'last',
            model: 'dataset'
        },
        'HEAD /datasets/last': {
            controller: 'Head',
            action: 'Head',
            model: 'dataset'
        },

        'PATCH /datasets/:id': {
            blueprint: 'update',
            model: 'dataset'
        },
        'HEAD /datasets/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'dataset'
        },
        // 'OPTIONS /datasets/:id': { blueprinst: 'update', model: 'dataset' },


        // Tags

        'GET /tags/first': {
            blueprint: 'first',
            model: 'tag'
        },
        'HEAD /tags/first': {
            controller: 'Head',
            action: 'Head',
            model: 'tag'
        },

        'GET /tags/last': {
            blueprint: 'last',
            model: 'tag'
        },
        'HEAD /tags/last': {
            controller: 'Head',
            action: 'Head',
            model: 'tag'
        },

        'PATCH /tags/:id': {
            blueprint: 'update',
            model: 'tag'
        },
        'HEAD /tags/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'tag'
        },


        // UpdateFrequencies

        'GET /updatefrequencies/first': {
            blueprint: 'first',
            model: 'updatefrequency'
        },
        'HEAD /updatefrequencies/first': {
            controller: 'Head',
            action: 'Head',
            model: 'updatefrequency'
        },

        'GET /updatefrequencies/last': {
            blueprint: 'last',
            model: 'updatefrequency'
        },
        'HEAD /updatefrequencies/last': {
            controller: 'Head',
            action: 'Head',
            model: 'updatefrequency'
        },

        'PATCH /updatefrequencies/:id': {
            blueprint: 'update',
            model: 'updatefrequency'
        },
        'HEAD /updatefrequencies/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'updatefrequency'
        },


        // Configs

        'GET /configs/first': {
            blueprint: 'first',
            model: 'config'
        },
        'HEAD /configs/first': {
            controller: 'Head',
            action: 'Head',
            model: 'config'
        },

        'GET /configs/last': {
            blueprint: 'last',
            model: 'config'
        },
        'HEAD /configs/last': {
            controller: 'Head',
            action: 'Head',
            model: 'config'
        },

        'PATCH /configs/:id': {
            blueprint: 'update',
            model: 'config'
        },
        'HEAD /configs/:id': {
            controller: 'Head',
            action: 'Head',
            model: 'config'
        }
>>>>>>> 60880e099c3547eb1022c456e4945cdbecb62865
    }
};
