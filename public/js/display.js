'use strict';

var Display = {
    login: function () {
        var fullPage = Render.div({classList: 'fullpage'});
            fullPage.onClick = function () { Game.login(); };

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
            .add(Render.input({id: 'email', type: 'email', placeholder: 'quePasa@quePues.com'}))
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