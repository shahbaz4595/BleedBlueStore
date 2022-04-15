import { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { emailReducer, passwordReducer } from "../../../reducers/authReducer";
import { InputField, SubmitButton } from "../../../BleedBlueStore";

export const Login = () => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatchEmail({ type: "USER_INPUT", payload: "" });
    dispatchPassword({ type: "USER_INPUT", payload: "" });
  };

  return (
    <section className="page-container form-container">
      <form
        className="form login-form"
        id="bb-login-form"
        onSubmit={submitHandler}
      >
        <h4 className="text-center">LogIn</h4>

        <InputField
          type="email"
          placeholder="Email"
          valid={emailState.isValid}
          value={emailState.value}
          changeHandler={emailChangeHandler}
          onBlur=""
        />

        <InputField
          type="password"
          placeholder="Password"
          valid={passwordState.isValid}
          value={passwordState.value}
          changeHandler={passwordChangeHandler}
          onBlur=""
        />

        <SubmitButton buttonText="Log In" formIsValid={formIsValid} />

        <div className="form-group">
          <p className="text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
    </section>
  );
};
