import formValidator from '../lib/formValidator';

const Forms = {
    init() {
        formValidator(
            '.form',
            this._onSuccess,
            this._onError,
            this._removeMessage
        );
    },

    /**
     *
     * @param {HTMLFormElement} form
     */
    _onSuccess(form) {
        const message = form.getAttribute('data-success-message');

        const messageElement = document.createElement('p');

        messageElement.textContent = message;
        messageElement.classList.add('form__message', 'form__message--success');

        form.prepend(messageElement);

        form.reset();

        setTimeout(() => Forms._removeMessage(form), 6000);
    },

    _onError(form) {
        const message = form.getAttribute('data-error-message');

        const messageElement = document.createElement('p');

        messageElement.textContent = message;
        messageElement.classList.add('form__message', 'form__message--error');

        form.prepend(messageElement);

        setTimeout(() => Forms._removeMessage(form), 6000);
    },

    _removeMessage(form) {
        const messageElement = form.querySelector('.form__message');

        if (messageElement) {
            messageElement.remove();
        }
    },
};

export default Forms;
