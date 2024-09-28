import React from "react";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <main className={styles.loginContainer}>
      <div className={styles.mainContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60236c604df73fc065dbcded228e57853526bc1a9431f88f781657eb215f7796?placeholderIfAbsent=true&apiKey=e18a87abae224efd8cddb8351647661f"
          className={styles.backgroundImage}
          alt="Background"
        />
        <header>
          <h1 className={styles.logo}>Your Logo</h1>
        </header>
        <section className={styles.loginForm}>
          <div className={styles.formHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.headerContent}>
                <p className={styles.welcomeText}>
                  Welcome to{" "}
                  <span className={styles.highlightedText}>LOREM</span>
                </p>
                <h2 className={styles.signInTitle}>Sign in</h2>
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.signUpText}>
                No Account ?<br />
                <a href="/signup" className={styles.highlightedText}>Sign up</a> {/* Added link */}
              </p>
            </div>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="usernameOrEmail" className={styles.inputLabel}>
              Enter your username
            </label>
            <input
              id="usernameOrEmail"
              type="text"
              className={styles.inputField}
              placeholder="Username or email address"
              aria-label="Username or email address"
            />
            <label htmlFor="password" className={styles.passwordLabel}>
              Enter your password
            </label>
            <input
              id="password"
              type="password"
              className={styles.passwordField}
              placeholder="Password"
              aria-label="Password"
            />
            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot Password
            </a> {/* Fixed the href link */}
            <button type="submit" className={styles.signInButton}>
              Sign in
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
