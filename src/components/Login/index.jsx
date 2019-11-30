import React from 'react';
import './style.scss';
import { withRouter } from 'react-router-dom';
class Login extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			username: '',
			password: ''
		};
    
    this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsername = this.handleChange('username');
    this.handlePassChange = this.handleChange('password');
  }

  componentDidMount(){
    localStorage.isAuthenticated && this.props.history.push('/slides');
  }
  
  handleChange(key) {
		return (event)=>{
			this.setState({[key]: event.target.value});
		}
	}
  
	get isDisabled() {
		return !(this.state.username && this.state.password);
  }
  
  checkValidation(){
    if(this.state.username==='shaadi' && this.state.password ==='123') {
      this.setState({
        error: ''
      })
      return true;
    } else {
      this.setState({
        error: 'Invalid credentials.'
      })
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
   if(this.checkValidation()) {
      localStorage.setItem('isAuthenticated','true');
      this.props.history.push({
        pathname: '/slides',
        username: this.state.username
      });
   }
  }
  render(){
    return(
      <div className="wrapper login-page">
        <h1>Welcome to slider testing</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            username:
            <input type="text" value={this.state.username} onChange={e=>this.handleUsername(e)} />
          </label>
          </div>
          <div>
          <label>
            password:
            <input type="password" value={this.state.password} onChange={e=>this.handlePassChange(e)} />
          </label>
          </div>
          <span className="error">{this.state.error}</span>
          <input type="submit" value="Submit" disabled={this.isDisabled} className="submit"/>
        </form>
      </div>
      )
    }
  }

  export default withRouter(Login);