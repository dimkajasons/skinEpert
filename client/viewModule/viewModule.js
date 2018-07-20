const View = {
    inputContainer: document.querySelector('#input-container'),
    addResultField: function(type) {
        const mainField = document.querySelector('.main-field');
        const resultField = document.createElement('div');
        resultField.classList.add('result-field');
        resultField.innerHTML = document.querySelector('.input-field').value;
        this.inputContainer.insertBefore(resultField, mainField);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button')
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteButton.parentNode.parentNode.removeChild(deleteButton.parentNode);
        });

        resultField.appendChild(deleteButton)

        if (type === true) {
            resultField.classList.add('green-border')
        } else if (type === false) {
            resultField.classList.add('red-border')
        } else {
            resultField.classList.add('yellow-border')
        }
        this.addDeleteButton();
    },
    addDeleteButton: function (field) {
        
    },
    addNewField: function() {
        const mainField = document.createElement('div');
        mainField.classList.add('main-field');
        this.inputContainer.appendChild(mainField);
        this.viewInputField();
        this.viewAddButton();
    },
    viewAddButton: function () {
        const confirmButton = document.createElement('button');
        confirmButton.innerText = 'Confirm';
        confirmButton.classList.add('confirm-button');
        document.querySelector('.main-field').appendChild(confirmButton);
    },
    viewInputField: () => {
        const inputField = document.createElement('input');
        inputField.classList.add('input-field');
        document.querySelector('.main-field').appendChild(inputField);
    }
};

export default View;