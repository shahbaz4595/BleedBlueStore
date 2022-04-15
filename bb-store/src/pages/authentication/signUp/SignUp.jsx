import { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InputField, SubmitButton } from "../../../BleedBlueStore";
import {
  emailReducer,
  passwordReducer,
  nameReducer,
} from "../../../reducers/authReducer";
export const SignUp = () => {
  const [firstNameState, dispatchFirstName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });
  const [lastNameState, dispatchLastName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [confirmPasswordState, dispatchConfirmPassword] = useReducer(
    passwordReducer,
    {
      value: "",
      isValid: null,
    }
  );
  const [termAccepted, setTermAccepted] = useState(false);
  const [passwordMatchValidated, setPasswordMatchValidated] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: firstNameIsValid } = firstNameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: confirmPasswordIsValid } = confirmPasswordState;

  useEffect(() => {
    setFormIsValid(
      firstNameIsValid &&
        lastNameIsValid &&
        emailIsValid &&
        passwordIsValid &&
        confirmPasswordIsValid &&
        termAccepted &&
        passwordMatchValidated
    );
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    passwordIsValid,
    confirmPasswordIsValid,
    termAccepted,
    passwordMatchValidated,
  ]);

  const firstNameChangeHandler = (event) => {
    dispatchFirstName({ type: "USER_INPUT", payload: event.target.value });
  };

  const lastNameChangeHandler = (event) => {
    dispatchLastName({ type: "USER_INPUT", payload: event.target.value });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const confirmPasswordChangeHandler = (event) => {
    dispatchConfirmPassword({
      type: "USER_INPUT",
      payload: event.target.value,
    });
  };

  const termConsentChangeHandler = (event) => {
    setTermAccepted(() => !termAccepted);
  };

  const passwordValidationHandler = (event) => {
    if (passwordState.isValid && confirmPasswordState.isValid) {
      passwordState.value.trim() === confirmPasswordState.value.trim()
        ? setPasswordMatchValidated(true)
        : setPasswordMatchValidated(false);
    } else {
      setPasswordMatchValidated(null);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ "fName": firstNameState.value, "lName": lastNameState.value, "email": emailState.value, "password": passwordState.value });
  };

  return (
    <section className="page-container form-container">
      <form
        className="form login-form"
        id="bb-signup-form"
        onSubmit={submitHandler}
      >
        <h4 className="text-center">Sign Up</h4>
        <InputField
          type="text"
          placeholder="First Name"
          valid={firstNameState.isValid}
          value={firstNameState.value}
          changeHandler={firstNameChangeHandler}
        />

        <InputField
          type="text"
          placeholder="Last Name"
          valid={lastNameState.isValid}
          value={lastNameState.value}
          changeHandler={lastNameChangeHandler}
        />

        <InputField
          type="email"
          placeholder="Email"
          valid={emailState.isValid}
          value={emailState.value}
          changeHandler={emailChangeHandler}
        />

        <InputField
          type="password"
          placeholder="Password"
          valid={passwordState.isValid}
          value={passwordState.value}
          changeHandler={passwordChangeHandler}
          onBlur={passwordValidationHandler}
        />

        <InputField
          type="password"
          placeholder="Confirm Password"
          valid={confirmPasswordState.isValid}
          value={confirmPasswordState.value}
          changeHandler={confirmPasswordChangeHandler}
          onBlur={passwordValidationHandler}
        />

        {passwordMatchValidated === false && (
          <label className="text-sm-size danger-text">
            password doesn't match
          </label>
        )}

        <div>
          <input
            type="checkbox"
            name="terms and conditions"
            onChange={termConsentChangeHandler}
          />
          <label className="padder-hz-xs">
            I accept all <Link to="">Terms and Conditions</Link>
          </label>
        </div>

        <SubmitButton buttonText="Sign Up" formIsValid={formIsValid} />

        <div className="form-group">
          <p className="text-center">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
