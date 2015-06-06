'use strict';

var Display = {
    login: function () {
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
            .add(Render.input({id: 'email', type: 'email', placeholder: 'ohhhh@quePues.com'}))
            .add(Render.label({for: 'password', text: 'Password'}))
            .add(Render.input({id: 'password', type: 'password', placeholder: 'tamales'}))
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

        Render.node(fullPage);
    },
    loginError: function (error, info) {
        var oldErr = document.querySelector('.message');
        if (oldErr) oldErr.remove();

        var container = document.querySelector('.container');
        var errMessage = Render.p({classList: ['error', 'error-message']});

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
        var oldErr = document.querySelector('.message');
        if (oldErr) oldErr.remove();

        var container = document.querySelector('.container');
        var errMessage = Render.p({classList: ['error', 'error-message']});

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
        console.log(authData);
    },
    signupSuccess: function (authData) {
        console.log(authData);
    }
};

// <form class="pure-form pure-form-stacked">
//     <fieldset>
//         <legend>A Stacked Form</legend>

//         <label for="email">Email</label>
//         <input id="email" type="email" placeholder="Email">

//         <label for="password">Password</label>
//         <input id="password" type="password" placeholder="Password">

//         <label for="state">State</label>
//         <select id="state">
//             <option>AL</option>
//             <option>CA</option>
//             <option>IL</option>
//         </select>

//         <label for="remember" class="pure-checkbox">
//             <input id="remember" type="checkbox"> Remember me
//         </label>

//         <button type="submit" class="pure-button pure-button-primary">Sign in</button>
//     </fieldset>
// </form>