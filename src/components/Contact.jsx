import React from "react";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Contact Us</h2>
      <form>
        <div>
          <input type="text" placeholder="Your Name" required style={{ padding: "8px", margin: "5px", width: "80%" }} />
        </div>
        <div>
          <input type="email" placeholder="Your Email" required style={{ padding: "8px", margin: "5px", width: "80%" }} />
        </div>
        <div>
          <textarea placeholder="Your Message" required style={{ padding: "8px", margin: "5px", width: "80%", height: "100px" }}></textarea>
        </div>
        <button type="submit" style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
