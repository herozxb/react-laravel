import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios'

import './App.css';

function App() {

    axios.get('http://localhost:8000/transactions/status')
      .then(res => console.log(res.data));


  return (
    <div className="App">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login 123</div>

                <div class="card-body">
                    <form method="POST" action="login">	

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address 123</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="email" required autocomplete="email" autofocus>
				</input>
                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password 123</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
				</input>
                                    <span class="invalid-feedback" role="alert">
                                        <strong>message</strong>
                                    </span>

                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >
				    </input>
                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
		
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                     <a class="btn btn-link" >
                                        Forgot Your Password?
                                    </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
