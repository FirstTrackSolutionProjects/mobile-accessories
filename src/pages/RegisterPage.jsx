import React from 'react';

const RegisterPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Register</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Enter your name" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Enter your email" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Enter your password" style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
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
    backgroundColor: '#e9ecef', // Lighter background color
  },
  card: {
    padding: '30px', // Increased padding for better spacing
    borderRadius: '12px', // Slightly rounded corners for a modern look
    backgroundColor: '#fff',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Subtle box shadow
    width: '300px', // Adjusted width for better space utilization
    textAlign: 'center',
  },
  header: {
    marginBottom: '25px', // Increased margin for better spacing
    fontSize: '24px', // Adjusted header font size for better readability
    fontWeight: '500', // Slightly bolded font for emphasis
  },
  form: {
    marginBottom: '25px', // Increased margin for better spacing
  },
  inputGroup: {
    marginBottom: '20px', // Increased margin for better spacing between inputs
  },
  label: {
    marginBottom: '6px', // Slightly increased margin
    display: 'block',
    fontSize: '14px', // Adjusted font size for consistency
    fontWeight: '500', // Slightly bolded for better legibility
  },
  input: {
    width: '100%',
    padding: '10px 15px', // Added extra padding on the right to create more space
    borderRadius: '6px', // Slightly more rounded corners
    border: '1px solid #ccc',
    fontSize: '14px', // Consistent font size with label
    marginBottom: '15px', // Space between input fields
    boxSizing: 'border-box', // Ensures padding doesn't affect width calculation
  },
  button: {
    width: '100%',
    padding: '6px', // Further reduced padding for a smaller button
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px', // Slightly more rounded corners
    fontSize: '14px', // Reduced font size for a more compact button
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Added transition for hover effect
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker blue when hovered
  },
  text: {
    fontSize: '14px',
    color: '#666', // Slightly darker text for better contrast
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none', // Remove underline
    fontWeight: '500', // Slightly bolded link for better emphasis
  },
};

export default RegisterPage;
