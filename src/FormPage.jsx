import React, { useState } from "react";
import "./form.css";

function FormPage() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(input);
    setInput("");
  }

  return (
    <div className="form-container">
      <h1>Simple Form</h1>

      <form onSubmit={handleSubmit}>
        <input className="form-input" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something"
        />
        <button className="form-button2" type="submit">
          Submit
        </button>
      </form>

      {submitted && <p>You submitted: {submitted}</p>}
    </div>
  );
}

export default FormPage;