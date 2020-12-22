/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/auth.context';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';

export default function AuthPage() {
  const auth = useContext(AuthContext);
  const {
    loading,
    error,
    request,
    clearError,
  } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({ email: '', password: '' });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  function changeHandler({ target }) {
    setForm({ ...form, [target.name]: target.value });
  }

  async function registerHandler() {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (e) {}
  }

  async function loginHandler() {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>URL Shortener</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="email@email.com"
                  id="email"
                  name="email"
                  type="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  placeholder="*******"
                  id="password"
                  name="password"
                  type="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" type="button" onClick={loginHandler}>Sign In</button>
            <button className="btn yellow lighten-1 black-text" type="button" onClick={registerHandler}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
