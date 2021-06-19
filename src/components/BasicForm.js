import userInput from '../hooks/user-input';

const BasicForm = (props) => {
  const {
    enteredValue: enteredName,
    hasError: enteredNameError,
    enteredValueIsValid: enteredNameIsValid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    resetInputValue: setEnteredName
  } = userInput(enteredValue => enteredValue.trim() !== '');

  const { 
    enteredValue: enteredEmail,
    hasError: enteredEmailError,
    enteredValueIsValid: enteredEmailIsValid,
    valueInputChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    resetInputValue: setEnteredEmail
  } = userInput(enteredValue => enteredValue.trim() !== '');

  const { 
    enteredValue: enteredLastName,
    hasError: enteredLastNameError,
    enteredValueIsValid: enteredLastNameIsValid,
    valueInputChangeHandler: lastNameChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    resetInputValue: setEnteredLastName
  } = userInput(enteredValue => enteredValue.trim() !== '');

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid || !enteredEmailIsValid){
      return;
    }

    // const enteredVal = nameInputRef.current.value;
    setEnteredName('');
    setEnteredEmail('');
    setEnteredLastName('');
  };

  const nameInputClassesForName = (!enteredNameError && 'form-control') || 'form-control invalid';
  const nameInputClassesForEmail = (!enteredEmailError && 'form-control') || 'form-control invalid';
  const nameInputClassesForLastName = (!enteredLastNameError && 'form-control') || 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClassesForName}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name'
            onChange={nameInputChangeHandler} 
            onBlur={nameInputBlurHandler}
            value={enteredName} 
          />
         {enteredNameError && <p className="error-text">Name must not be empty!</p>}
        </div>
        <div className={nameInputClassesForEmail}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={lastNameChangeHandler} 
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {enteredLastNameError && <p className="error-text">Last Name must not be empty!</p>}
        </div>
      </div>
      <div className={nameInputClassesForLastName}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text' 
          id='name'
          onChange={emailChangeHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail} 
        />
       {enteredEmailError && <p className="error-text">E-Mail Address must not be empty!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
