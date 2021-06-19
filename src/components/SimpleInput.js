import userInput from '../hooks/user-input';

const SimpleInput = (props) => {
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

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
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
  };

  const nameInputClassesForName = (!enteredNameError && 'form-control') || 'form-control invalid';
  const nameInputClassesForEmail = (!enteredEmailError && 'form-control') || 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClassesForName}>
        <label htmlFor='name'>Your Name</label>
        <input 
          //ref={nameInputRef}
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {enteredNameError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={nameInputClassesForEmail}>
        <label htmlFor='email'>Your Email</label>
        <input 
          //ref={nameInputRef}
          type='text' 
          id='email' 
          onChange={emailChangeHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailError && <p className="error-text">Email must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );  
};

export default SimpleInput;
