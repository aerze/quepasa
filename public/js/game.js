'use strict';

var Game = {
    loginButton: function () {
        console.log('logging in');

        var info = this.getInfo();
        var ref = new Firebase('https://aerze.firebaseio.com/');
            ref.authWithPassword({
                email    : info.email,
                password : info.pass
            }, function(error, authData) {
                if (error) {
                    console.log('Login Failed!', error);
                } else {
                    console.log('Authenticated successfully with payload:', authData);
                }
            });

    },

    signupButton: function () {
        console.log('signing up');

        var info = this.getInfo();
        var ref = new Firebase('https://aerze.firebaseio.com/');
            ref.createUser({
                email    : info.email,
                password : info.pass
            }, function(error, userData) {
                if (error) {
                    console.log('Error creating user:', error);
                } else {
                    console.log('Successfully created user account with uid:', userData.uid);
                    console.log(userData);
                }
            });

    }
};