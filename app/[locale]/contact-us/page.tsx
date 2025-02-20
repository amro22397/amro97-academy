"use client";

import React, { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { IoMdClose } from "react-icons/io";

import { FaCheckCircle } from "react-icons/fa";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

const page = ({
  isAbsolute,
  showRequestForm,
  setShowRequestForm,
}: {
  isAbsolute: boolean;
  showRequestForm: boolean;
  setShowRequestForm: (showRequestForm: boolean) => void;
}) => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = () => {
    setMessageSuccess(false);
    setError("");
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    formData.append("access_key", "fdfbe3b9-e72d-44f0-a653-9be0118a84c3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (
      yourName === "" ||
      phoneNumber === "" ||
      email === "" ||
      message === "" ||
      whatsappNumber === ""
    ) {
      setMessageSuccess(false);

      return;
    }

    setLoading(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    if (res.ok) {
      setMessageSuccess(true);
      setYourName("");
      setEmail("");
      setPhoneNumber("");
      setWhatsappNumber("");
      setMessage("");
    } else {
      setMessageSuccess(false);
    }
    const result = await res.json();
    if (result.success) {
      console.log(result);
    }

    setLoading(false);
  };

  const inputClassName =
    "bg-white border-none rounded-xl text-black placeholder-gray-400";

  const contactPage = useTranslations("ContactPage");

  const locale = useLocale();

  return (
    <div className="flex items-center justify-center mb-[78px]">
      <div
        className={`xl:h-[54%] order-2 xl:order-none max-sm:w-full 
        ${
          isAbsolute
            ? "absolute top-[8.27rem] bottom-0 left-0 right-0 h-full max-w-[600px] mx-auto"
            : ""
        }`}
      >
        {isAbsolute && (
          <IoMdClose
            className="absolute right-3 top-3 text-2xl
                hover:text-black/80 cursor-pointer hover:scale-95"
            onClick={() => setShowRequestForm(false)}
          />
        )}

        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-6 p-10 max-sm:w-full bg-indigo-300/90 dark:bg-indigo-400/90
            ${isAbsolute ? "bg-indigo-300/95 dark:bg-indigo-400" : ""}`}
        >
          <h3
            className={`text-stone-600 dark:text-stone-100
              ${locale === "ar" ? "text-3xl" : "text-3xl"}`}
          >
            {contactPage("Let's work together")}
          </h3>
          {/* <p className="text-black">{contactPage("fillTheForm")}</p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="name"
              placeholder={contactPage("p-Your Name")}
              name="Customer Name"
              className={`${inputClassName}`}
              value={yourName}
              onChange={(e) => {
                handleChange();
                setYourName(e.target.value);
              }}
              style={{ borderRadius: ".25rem" }}
            />

            <Input
              type="email"
              placeholder={contactPage("p-Email address")}
              name="Email address"
              className={`${inputClassName}`}
              value={email}
              onChange={(e) => {
                handleChange();
                setEmail(e.target.value);
              }}
              style={{ borderRadius: ".25rem" }}
            />

            <Input
              type="phone"
              placeholder={contactPage("p-Phone number")}
              name="Phone number"
              className={`${inputClassName}`}
              value={phoneNumber}
              onChange={(e) => {
                handleChange();
                setPhoneNumber(e.target.value);
              }}
              style={{ borderRadius: ".25rem" }}
            />

            <Input
              type="text"
              placeholder={contactPage("p-Whatsapp number")}
              name="Whatsapp number"
              className={`${inputClassName}`}
              value={whatsappNumber}
              onChange={(e) => {
                handleChange();
                setWhatsappNumber(e.target.value);
              }}
              style={{ borderRadius: ".25rem" }}
            />

            <Input
              type="text"
              name="Website name"
              className={`${inputClassName} hidden`}
              value={"amro97-academy"}
              // onChange={(e) => {
              //   handleChange();
              //   setWhatsappNumber(e.target.value);
              // }}
              style={{ borderRadius: ".25rem" }}
            />
          </div>

          <select
            onChange={handleChange}
            id="service"
            className="bg-white text-black/80 px-3
              py-3 border border-gray-50/10 hidden"
          >
            <option value="Frontend">
              {contactPage("Frontend Development")}
            </option>
            <option value="Backend">
              {contactPage("Backend Development")}
            </option>
            <option value="Full Stack">
              {contactPage("Full Stack Development")}
            </option>
          </select>

          <Textarea
            className={`${inputClassName}`}
            style={{ borderRadius: ".25rem" }}
            rows={6}
            value={message}
            onChange={(e) => {
              handleChange();
              setMessage(e.target.value);
            }}
            placeholder={contactPage("p-textAreaMessage")}
            name="Message"
          />

          <Button
            type="submit"
            size="sm"
            className="max-w-40 py-2 bg-indigo-600 hover:bg-indigo-700
              active:scale-95 text-white disabled:bg-gray-400"
            disabled={loading}
            style={{ borderRadius: ".25rem" }}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              contactPage("Send message")
            )}
          </Button>

          {messageSuccess && (
            <div
              className="flex flex-row items-center justify-center text-white text-xl
                gap-2"
            >
              <FaCheckCircle className="text-green-600" size={25} />

              <span>{contactPage("Message sent successfully")}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
