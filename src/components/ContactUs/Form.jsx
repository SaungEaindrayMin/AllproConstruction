"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full md:w-[500px] p-8 border border-primary/20 rounded-sm bg-muted/30"
    >
      {/* NAME */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-primary">Name</label>
        <Input
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="space-y-1 ">
        <label className="text-sm font-medium text-primary">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-primary">Message</label>
        <Textarea
          placeholder="Write your message"
          value={formData.message}
          rows={4}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <Button variant="default" type="submit" className="w-full">
        {loading ? "Sending..." : "Send Your Message"}
      </Button>
    </form>
  );
}
