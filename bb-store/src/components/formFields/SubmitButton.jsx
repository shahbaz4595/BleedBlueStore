export const SubmitButton = (props) => {
    const { formIsValid, buttonText } = props;
    return ( 
        <button
          className={`btn ${formIsValid ? "btn-primary" : "btn-disabled"}`}
          type="submit"
          disabled={!formIsValid}
        >
         {buttonText}
        </button>
     );
}
 
