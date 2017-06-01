'use strict';

var authors = require('./authorData').authors;
var _ = require('lodash');

var _generatedId = function(author){
    return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var AuthorApi = {
    getAllAuthors: function() {
        return _.clone(authors);
    },

    getAuthorById: function(id) {
        var author = _.find(authors, {id: id});
        return _.clone(author);
    },

    saveAuthor: function(author){
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if (author.id) {
            var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
        } else {
            author.id = _generatedId(author);
            authors.push(author);
        }

        return _.clone(author);
    },

    deleteAuthor: function(id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        _.remove(authors, {id: id});
    }
};

module.exports = AuthorApi;