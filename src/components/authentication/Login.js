import loginTemplate from './login.tpl.html';
import { setAuthToken, setUserName } from '../../utils/storageUtils';
import emitter from '../../emitter';
import state from '../../state';
import apiSettings from '../../urlConfig';
import './Login.css';

class Login {
  constructor() {
    this.removeEventListener();
  }

  async login() {
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const url = apiSettings.login;
      const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      const json = await resp.json();
      if (json.success) {
        setAuthToken(json.token);
        setUserName(json.email);
        location.hash = '#search';
      }
    } catch (e) {
      throw e;
    }
  }

  async signup() {
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const url = apiSettings.signup;
      const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      const json = await resp.json();
      if (json.success) {
        setAuthToken(json.token);
        setUserName(json.email);
        location.hash = '#search';
      }
    } catch (e) {
      throw e;
    }
  }

  onClick(e) {
    if (e.target.id === 'btn-signup') {
      e.preventDefault();
      this.signup();
    } else if (e.target.id === 'btn-login') {
      e.preventDefault();
      this.login();
    }
  }

  attachEventListener() {
    document.querySelector('#main').addEventListener('click', this.onClick.bind(this));
  }

  removeEventListener() {
    document.querySelector('#main').removeEventListener('click', this.onClick.bind(this));
  }

  render() {
    this.attachEventListener();
    document.querySelector('#main').innerHTML = loginTemplate();
  }
}

export default Login;
