/**
 * @callback onSuccessCallback
 * @param {HTMLFormElement} form
 */

/**
 * @callback onErrorCallback
 * @param {HTMLFormElement} form
 */

/**
 * A simple form validator plugin
 *
 * @param {string} element element selector string
 * @param {onSuccessCallback} onSubmitSuccess on submit success callback
 * @param {onErrorCallback} onSubmitError on submit error callback
 */
function formValidator(
    element,
    onSubmitSuccess = null,
    onSubmitError = null,
    onBeforeSend = null
) {
    element = document.querySelectorAll(element);

    element.forEach((el) => {
        el.noValidate = true;

        el.addEventListener('submit', validateForm);
    });

    function validateForm(e) {
        e.preventDefault();

        /**
         * @type HTMLFormElement
         */
        const form = e.target;

        const fields = Array.from(form.elements);

        let submitButton;

        fields.forEach((field) => {
            if (field.attributes.type.nodeValue === 'submit') {
                submitButton = field;
            }

            if (field.checkValidity()) {
                field.classList.remove('input--is-invalid');
            } else {
                field.classList.add('input--is-invalid');
            }
        });

        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        }

        if (onBeforeSend) {
            onBeforeSend(form);
        }

        submitButton.disabled = true;
        submitButton.classList.add('is-loading');

        const url = form.getAttribute('action');
        const data = new FormData(form);

        fetch(url, {
            method: 'post',
            body: data,
        })
            .then((response) => {
                if (response.status < 200 || response.status > 299) {
                    throw Error(response.statusText);
                }
                console.log(`Form: ${form} is successfully send`, response);

                return response.json();
            })
            .then((json) => {
                if (onSubmitSuccess) {
                    onSubmitSuccess(form);
                }
            })
            .catch((error) => {
                console.log(`Form: ${form} did not send because ${error}`);

                if (onSubmitError) {
                    onSubmitError(form);
                }
            })
            .finally(() => {
                submitButton.classList.remove('is-loading');
                submitButton.disabled = false;
            });
    }
}

export default formValidator;
