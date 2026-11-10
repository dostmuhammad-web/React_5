import "./LoginForm.css";

function LoginForm() {
  return (
 
    <div className="loginform">
   <div className="loginform__container">
    <header>
      <h1 className="loginform__header"></h1>
    </header>
   </div>

      <div className="loginform__left">
        <h2 className="loginform__title">Welcome Back</h2>
        <p className="loginform__subtitle">Login in to your account</p>
        <img src="image 55.png" alt="" />
      </div>
      <div className="loginform__right">
        <form>
          <label>
            <span>Email</span>
            <input placeholder="Enter your email address" type="text" />
          </label>
          <label>
            <span>Password</span>
            <input placeholder="Enter your password" type="password" />
          </label>
          <button>Login</button>
        </form>

        <button className="btn__google">
          <img src="02.png" alt="" />
          Login with Google
        </button>
        <button className="btn__facebook">
          <img src="01.png" alt="" />
          Login with Facebook
          
        </button>

      </div>

      <div>
        
      </div>
    </div>
    
  );
}

export default LoginForm;
