import React from "react";
import { DataStore } from "@aws-amplify/datastore";
import { EmailList } from "./../../models";

const FormEvent = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    var email = document.getElementById("email_input");
    await DataStore.save(new EmailList({ Email: email.value }));
    email.value = "";
    alert("Thanks for joining in! We'll keep you posted.")
  }
  return (
    <form>
      <input type="email" id="email_input" placeholder="Email address" />
      <button type="submit" onClick={handleSubmit}>
        Join waitlist
      </button>
    </form>
  );
};

export default FormEvent;
