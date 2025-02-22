'use client'

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import sgMail from "@sendgrid/mail";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

const page = () => {

  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const sendEmail = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/send-email-mailtrap", {
        email: 'amroalmutasim22@gmail.com',
        subject: 'Hello',
        message: 'Hello'
      })

      console.log(res);

      toast({
        title: "email sent",
      })

      setLoading(false);

    e.preventDefault();
    } catch (error: any) {
      
      toast({
        title: error.message,
      })

    }

    
  };

  return (
    <div>
      <Button onClick={(e) => sendEmail(e)} type="button"
        className="active:scale-95 hover:bg-green-600">Send</Button>
        <></>
    </div>
  );
};

export default page;
