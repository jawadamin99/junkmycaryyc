"use client";

import { useState } from "react";

export default function HeroQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (typeof window !== "undefined") {
      formData.append("pageUrl", window.location.href);
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitMessage("Thanks. Your quote request has been sent.");
      form.reset();
    } catch {
      setSubmitMessage("Something went wrong. Please call us or try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="hero-form" onSubmit={handleSubmit}>
      <div className="hero-form-heading">
        <p className="eyebrow">Vehicle Quote Form</p>
        <h2>Get your cash offer.</h2>
        <p>Tell us the year, make, model, and condition. We will get back to you quickly.</p>
      </div>

      <div className="hero-form-grid">
        <label>
          <span>Name *</span>
          <input className="field" type="text" name="name" required placeholder="Full name" />
        </label>
        <label>
          <span>Phone *</span>
          <input className="field" type="tel" name="phone" required placeholder="Best phone number" />
        </label>
        <label>
          <span>Make / Model / Year *</span>
          <input className="field" type="text" name="vehicleYear"  required placeholder="Ford / Escape / 2022" />
        </label>
        <label>
          <span>Email</span>
          <input className="field" type="email" name="email" placeholder="abc@xyz.com" />
        </label>
        <label>
          <span>Vehicle Condition *</span>
          <select className="field" name="condition" defaultValue="" required>
            <option value="" disabled>
              Select condition
            </option>
            <option value="running">Running</option>
            <option value="not-running">Not running</option>
            <option value="damaged">Damaged</option>
            <option value="scrap">Scrap / end-of-life</option>
          </select>
        </label>
        <label>
          <span>City / Area *</span>
          <input className="field" type="text" name="city" required placeholder="Calgary, Airdrie, NE, etc." />
        </label>
      </div>

      <label>
        <span>Additional Information</span>
        <textarea
          className="field field-textarea"
          name="message"
          rows={4}
          placeholder="Additional message..."
        />
      </label>

      <button type="submit" className="primary-button primary-button-block">
        {isSubmitting ? "Sending..." : "Request My Quote"}
      </button>

      {submitMessage ? <p className="form-message">{submitMessage}</p> : null}
    </form>
  );
}
