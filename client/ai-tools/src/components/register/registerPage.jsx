import React from "react";
import style from "./registerPage.module.css";

function RegisterPage() {
  return (
    <section className={style.registerWrap}>
      <div className={`${style["main-w3layouts"]} ${style["wrapper"]}`}>
        <h1 className={style.registerHeading}>Login to MyAI</h1>
        <div className={`${style["main-agileinfo"]}`}>
          <div className={`${style["agileits-top"]}`}>
            <form>
              <input
                className={`${style["text"]}  ${style["registerInput"]}`}
                type='text'
                name='Username'
                placeholder='Username'
                required
              />
              <input
                className={`${style["text"]} ${style["registerInput"]} ${style["email"]}`}
                type='email'
                name='email'
                placeholder='Email'
                required
              />
              <input
                className={`${style["text"]} ${style["registerInput"]}`}
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <input
                className={`${style["text"]} ${style["w3lpass"]} ${style["registerInput"]}`}
                type='password'
                name='password'
                placeholder='Confirm Password'
                required
              />
              <div className={`${style["wthree-text"]}`}>
                <label className={`${style["anim"]}`}>
                  <input
                    type='checkbox'
                    className={`${style["checkbox"]} ${style["terms"]}`}
                    required
                  />
                  <span>I Agree To The Terms &amp; Conditions</span>
                </label>
                <div className='clear'> </div>
              </div>
              <input
                className={`${style["regiterFormSubmit"]}`}
                type='submit'
                defaultValue='SIGNUP'
              />
            </form>
            <p>
              Don't have an Account? <a href='#'> Login Now!</a>
            </p>
          </div>
        </div>
        <ul className={`${style["colorlib-bubbles"]}`}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </section>
  );
}

export default RegisterPage;
