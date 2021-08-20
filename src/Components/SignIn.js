function SignIn(props) {
  return (
    <div className="App">
      {props.user ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>{props.user}</h1>
          <button
            onClick={() => {
              // signout
              props.signout();
            }}
          >
            Signout
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              props.signInWithGooglePopUp();
            }}
          >
            Login google
          </button>
          <button
            onClick={() => {
              props.signInWithFacebookPopUp();
            }}
          >
            Login fb
          </button>
        </div>
      )}
    </div>
  );
}

export default SignIn;
