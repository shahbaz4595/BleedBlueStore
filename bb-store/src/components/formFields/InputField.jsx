export const InputField = (props) => {
    const { type, placeholder, valid, value, changeHandler } = props;
    return ( 
        <input
          className={`form-field ${
            valid === false ? "invalid" : "valid"
          }`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
          onBlur={props?.onBlur}
        />
     );
}
 
