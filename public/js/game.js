'use strict';

var Game = {
    loginButton: function () {
        console.log('logging in');
        var info = this.getInfo();
        if (info.pass.length === 0) return;
        else {
            var password = document.querySelector('#password');
            password.focus();
            password.blur();
        }
        var ref = new Firebase('https://aerze.firebaseio.com/');
            ref.authWithPassword({
                email    : info.email,
                password : info.pass
            }, function(error, authData) {
                if (error) {
                    console.log('Login Failed!', error);
                    Display.loginError(error, info);
                } else {
                    console.log('Authenticated successfully with payload:', authData);
                    Display.loginSuccess(authData);
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
                    Display.signupError(error, info);
                } else {
                    console.log('Successfully created user account with uid:', userData);
                    Display.signupSuccess(userData);
                }
            });

    }
};