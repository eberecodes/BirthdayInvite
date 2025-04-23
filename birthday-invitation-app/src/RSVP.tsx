import React, { useState } from "react";
import ShutdownScreen from "./ShutdownScreen"

const RSVP = () => {

  const [form, setForm] = useState({ name: "", rsvp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (navigator.vibrate) navigator.vibrate(60);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxe0ZoXNRTGnQVf18V5nrCv598PkiiECWfcmSl6RxT-9-3wwL_wwFDxbm0XJtO9hyv1/exec";

    setIsSubmitting(true);
    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: form.name,
          rsvp: form.rsvp,
        }),
      });

      console.log("Form submitted successfully");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

  return (
    <div className="overflow-hidden relative flex flex-col justify-center w-full max-w-lg sm:max-w-md p-6 z-10 text-white text-lg">
    {!submitted ? (
       <form onSubmit={handleSubmit} className="space-y-4 text-white">
           <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-black border border-green-400 rounded text-base sm:text-lg"
            />
             <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
               <label className="flex items-center">
                 <input
                   type="radio"
                   name="rsvp"
                  value="Yes, I'll be there"
                  onChange={handleChange}
                  checked={form.rsvp === "Yes, I'll be there"}
                  required
                  className="mr-3 scale-125"
                />
                  Yes, I'll be there
               </label>
               <label className="flex items-center">
                 <input
                   type="radio"
                   name="rsvp"
                   value="Sorry, can't make it"
                   onChange={handleChange}
                   checked={form.rsvp === "Sorry, can't make it"}
                   className="mr-3 scale-125"
                 />
                 Sorry, can't make it
               </label>
             </div>
             <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-500 text-black font-bold py-3 px-6 rounded hover:bg-green-400 text-base sm:text-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
             >
                {isSubmitting ? (
                    <span>Submitting...</span> // Loading text when submitting
                 ) : (
                "Submit"
                 )}
             </button>
       </form>
       ) : (
       <ShutdownScreen rsvp={form.rsvp} />
       )}
    </div>

  );
};

export default RSVP;