import "./signup.css";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <p className="signup-text">Please enter your username:</p>
        <input type="text" className="signup-input" placeholder="Username" />
      </div>
    </div>
  );
}

export default SignUp;
