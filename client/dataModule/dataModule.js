import axios from 'axios';
import View from '../viewModule/viewModule.js'

const dataModule = {
    sendDataFromInput: function () {
        const inputData = document.querySelector('.input-field').value;
        console.log(inputData)
        axios.get(`/input?data=${inputData}`).then((result) => {
            if (result.data === true) {
                View.addResultField(true)
            } else if (result.data === false) { 
                View.addResultField(false)
            } else {
                View.addResultField(undefined)
            }
        }).catch((err) => console.log(err))
    }
}

export default dataModule;
