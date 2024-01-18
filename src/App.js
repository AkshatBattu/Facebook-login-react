
import './App.css';

export function App() {
  return (
    <div className="main">
      <div className='name'>
      <h1>facebook</h1>
      </div>
      

      <div className="sub-main">
        <div className="user"><h2>Log in to facebook</h2>
          <input type="email" placeholder='Email address or Phone number'></input>
        </div>
        <div className="pass">
          <input type="password" placeholder='Password'></input>
        </div>
          <button className='btn'>Log in</button>
          <div className='link'>
            <div className='for'>
              <a href="#" id="hyperlink">Forgotten account?</a>
            </div>
            <div className='sign'>
              <a href="#" id="hyperlink">Sign up for Facebook</a>
            </div>
          </div>
      </div>
    </div>
  );
}  
export default App;

