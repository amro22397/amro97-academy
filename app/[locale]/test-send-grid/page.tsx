'use client'

import { Button } from "@/components/ui/button";
import React from "react";
import sgMail from "@sendgrid/mail";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

const page = () => {
  const sendEmail = async (e: any) => {

    axios.post("/api/send-mail")

    e.preventDefault();

    
  };

  return (
    <div>
      <Button onClick={(e) => sendEmail(e)} type="button"
        className="active:scale-95 hover:bg-green-600">Send</Button>
    </div>
  );
};

export default page;
