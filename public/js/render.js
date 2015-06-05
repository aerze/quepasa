'use strict';

var Render = {
    mainNode: document.querySelector('body'),
    node: function (node) {
        this.mainNode.innerHTML = '';
        this.mainNode.appendChild(node);
    },

    element: function (elementType, options) {
        var element = document.createElement(elementType);
            element.add = function (node) {
                this.appendChild(node);
                return this;
            };
            element.addTo = function (node) {
                node.appendChild(this);
                return this;
            };

        if (options) {
            if (options.classList) {
                if (Array.isArray(options.classList)) {
                    for (var i = 0; i <= options.classList.length - 1; i+=1) {
                        element.classList.add(options.classList[i]);
                    }
                } else { element.classList.add(options.classList); }
            }
            if (options.id) {
                element.id = options.id;
            }
            if (options.text) {
                var text = document.createTextNode(options.text);
                element.appendChild(text);
            }
        }

        return element;
    },
    html: function (html) {
        this.mainNode.innerHTML = html;
    },

    div: function (options) {
        return this.element('div', options);
    },

    h1: function (options) {
        return this.element('h1', options);
    },

    p: function (options) {
        return this.element('p', options);
    },

    form: function (options) {
        return this.element('form', options);
    },

    fieldset: function (options) {
        return this.element('fieldset', options);
    },

    legend: function (options) {
        return this.element('legend', options);
    },

    label: function (options) {
        var label = this.element('label', options);
        if (options && options.for) {
            label.setAttribute('for', options.for);
        }
        return label;
    },

    input: function (options) {
        var input = this.element('input', options);
        if (options) {
            if (options.type) {
                input.setAttribute('type', options.type);
            }
            if (options.placeholder) {
                input.setAttribute('placeholder', options.placeholder);
            }
        }

        return input;
    },

    button: function (options) {
        var button = this.element('button', options);
        button.getInfo = function() {
            var form = this.parentElement.parentElement;
            var email = form.elements['email'].value;
            var pass = form.elements['password'].value;
            return {email: email, pass: pass};
        };
        if (options) {
            if (options.type) {
                button.setAttribute('type', options.type);
            }
            if (options.onclick) {
                button.onclick = options.onclick;
            }
        }
        return button;
    }
//         <button type="submit" class="pure-button pure-button-primary">Sign in</button>

};