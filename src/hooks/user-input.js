import { useState } from 'react';

const UserInput = validateValue => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && enteredValueTouched;

    const valueInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };
    
    const valueInputBlurHandler = (event) => {
        setEnteredValueTouched(true);
    };

    const resetInputValue = () => {
        setEnteredValue('');
        setEnteredValueTouched(false);
    };

    return {
        enteredValue,
        hasError,
        enteredValueIsValid,
        valueInputChangeHandler,
        valueInputBlurHandler,
        resetInputValue
    };
}

export default UserInput;