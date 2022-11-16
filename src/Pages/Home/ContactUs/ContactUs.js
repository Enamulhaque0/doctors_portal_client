import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton";

const ContactUs = () => {
  return (
    <section className="mt-16 h-96"
    style={{
        background: `url(${appointment})`,
        backgroundSize: "cover",
        width: "100%"
        
      }}
      
    >

<div className="flex flex-col gap-4 justify-center items-center h-96">
    <h4 className="text-primary font-bold pt-3">Contact Us</h4>
    <h2 className="text-white text-3xl font-bold">Stay connected with us</h2>

<input type="text" placeholder="Email Address" className="input input-bordered input-info w-full max-w-xs" />
<input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs" />
<textarea className="textarea textarea-primary" placeholder="Your message"></textarea>

<PrimaryButton>Submit</PrimaryButton>
</div>


    </section>
  );
};

export default ContactUs;
