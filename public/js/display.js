'use strict';

var Display = {
    loginPage: function () {
        Display.removeFullPage();
        var fullPage = Render.div({classList: 'fullpage'});

        var container = Render.div({classList: 'container'});
        var loginForm = Render.form({classList: ['pure-form', 'pure-form-stacked', 'login']});
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                return false;
            });
        var fieldset = Render.fieldset();

        fieldset
            .add(Render.legend({text: ''}))
            .add(Render.label({for: 'email', text: 'Email'}))
            .add(Render.input({
                id: 'email',
                type: 'email',
                placeholder: 'ohhhh@quePues.com',
                name: 'email',
                required: true}))
            .add(Render.label({for: 'password', text: 'Password'}))
            .add(Render.input({
                id: 'password',
                type: 'password',
                placeholder: 'tamales',
                name: 'password',
                required: true}))
            .add(Render.button({
                type: 'submit',
                classList: ['pure-button', 'pure-button-primary'],
                text: 'Login',
                onclick: Game.loginButton}))
            .add(Render.button({
                type: 'submit',
                classList: ['pure-button', 'pure-button-primary', 'pull-right'],
                text: 'Sign up',
                onclick: Game.signupButton}));

        loginForm
            .add(fieldset);

        container
            .add(Render.h1({classList: 'header', text: 'QuePues!'}))
            .add(Render.p({classList: 'sub-header', text: 'The game where you play a game.'}))
            .add(loginForm);

        fullPage
            .add(container);

        Render.fullpage(fullPage);
    },
    loginError: function (error, info) {
        var oldMessage = document.querySelector('.message');
        if (oldMessage) oldMessage.remove();

        var container = document.querySelector('.container');
        var errMessage = Render.p({classList: ['message', 'error-message']});

        switch(error.code) {
            case 'INVALID_EMAIL':
                if (info.email.length === 0) {
                    errMessage.textContent = 'You didn\'t even type in the email.';
                } else {
                    errMessage.textContent = 'That\'s not even a real email.';
                } break;
            case 'INVALID_PASSWORD':
                if (info.pass.length === 0) {
                    errMessage.textContent = 'You didn\'t even type in a password.';
                } else {
                    errMessage.textContent = 'That\'s not the right password, I checked twice.';
                } break;
            case 'INVALID_USER':
                errMessage.textContent = 'You need to sign up first, duh.';
                break;
            default:
                console.err(error);
        }

        container.add(errMessage);
    },
    signupError: function (error, info) {
        var oldMessage = document.querySelector('.message');
        if (oldMessage) oldMessage.remove();

        var container = document.querySelector('.container');
        var errMessage = Render.p({classList: ['message', 'error-message']});

        switch(error.code) {
            case 'INVALID_EMAIL':
                if (info.email.length === 0) {
                    errMessage.textContent = 'You didn\'t even type in the email.';
                } else {
                    errMessage.textContent = 'That\'s not even a real email.';
                } break;
            case 'INVALID_PASSWORD':
                if (info.pass.length === 0) {
                    errMessage.textContent = 'You didn\'t even type in a password.';
                } else {
                    errMessage.textContent = 'That\'s not the right password, I checked twice.';
                } break;
            case 'INVALID_USER':
                errMessage.textContent = 'You need to sign up first, duh.';
                break;
            default:
                console.err(error);
        }

        container.add(errMessage);
    },
    loginSuccess: function (authData) {
        var oldMessage = document.querySelector('.message');
        if (oldMessage) oldMessage.remove();

        var container = document.querySelector('.container');
        var message = Render.p({
            classList: ['message', 'success-message'],
            text: 'Yeah that\'s right, gimme a sec..'
        });

        console.log(authData);
        container.add(message);

        Display.roomListPage();
    },
    signupSuccess: function (authData) {
        var oldMessage = document.querySelector('.message');
        if (oldMessage) oldMessage.remove();

        var container = document.querySelector('.container');
        var message = Render.p({
            classList: ['message', 'success-message'],
            text: 'Ok you\'re in!'
        });

        console.log(authData);
        container.add(message);

        Display.roomListPage();
    },

    roomListPage: function () {
        Display.removeFullPage();
    },
    removeFullPage: function () {
        var fullpage = document.querySelector('.fullpage');
        var container = document.querySelector('.container');
        if (fullpage) {
            setTimeout( function () {
                container.classList.add('fade-out');
                setTimeout(function () {
                    fullpage.remove();
                }, 2000);
            }, 2000);
        }
    }
};