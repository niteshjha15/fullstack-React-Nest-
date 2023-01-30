import React from "react";
import style from "./loginPage.module.css";

function LoginPage() {
  return (
    <>
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
                  className={`${style["text"]} ${style["registerInput"]}`}
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                />
                <input
                className={`${style["regiterFormSubmit"]}`}
                type='submit'
                defaultValue='LOGIN'
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
    </>
  );
}

export default LoginPage;
