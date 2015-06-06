'use strict';

var Game = {
    firebase: new Firebase('https://aerze.firebaseio.com/'),
    users: function () { return this.firebase.child('users'); },
    auth: {
        data: {},
        login: function (info, callback) {
            Game.firebase.authWithPassword({
                email    : info.email,
                password : info.pass
            }, function(error, authData) {
                if (error) {
                    console.log('Login Failed!', error);
                    callback(error, null, info);
                } else {
                    console.log('login successful');
                    console.log(this);
                    Game.auth.data = authData;
                    Game.users().child(authData.uid).set({
                        provider: authData.provider,
                        name: getName(authData)
                    });
                    callback(null, authData, info);
                }
            });

            function getName(authData) {
                switch(authData.provider) {
                case 'password':
                    return authData.password.email.replace(/@.*/, '');
                case 'twitter':
                    return authData.twitter.displayName;
                case 'facebook':
                    return authData.facebook.displayName;
                }
            }
        },
        signup: function (info, callback) {
            Game.firebase.createUser({
                email    : info.email,
                password : info.pass
            }, function(error, userData) {
                if (error) {
                    console.log('Error creating user', error);
                    callback(error, null, info);
                } else {
                    console.log('Successfully created user account with uid:', userData);
                    callback(null, userData, info);
                }
            });
        },
        logout: function () {
            Game.firebase.unauth();
        },
        getAuth: function () {
            return Game.firebase.getAuth();
        }
    }
};