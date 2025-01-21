import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Login</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Enter your email" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Enter your password" style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.text}>
          Don't have an account? <Link to="/register" style={styles.link}>Register</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef',
  },
  card: {
    padding: '30px', 
    borderRadius: '12px', 
    backgroundColor: '#fff',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', 
    width: '300px', 
    textAlign: 'center',
  },
  header: {
    marginBottom: '25px', 
    fontSize: '24px', 
    fontWeight: '500', 
  },
  form: {
    marginBottom: '25px', 
  },
  inputGroup: {
    marginBottom: '20px', 
  },
  label: {
    marginBottom: '6px', 
    display: 'block',
    fontSize: '14px', 
    fontWeight: '500', 
  },
  input: {
    width: '100%',
    padding: '10px 15px', 
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px', 
    marginBottom: '15px', 
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '6px', 
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', 
  },
  buttonHover: {
    backgroundColor: '#0056b3', 
  },
  text: {
    fontSize: '14px',
    color: '#666', 
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none', 
    fontWeight: '500', 
  },
};

export default LoginPage;
