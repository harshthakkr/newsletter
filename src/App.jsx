import "./App.css";
import signupMobile from "./assets/images/illustration-sign-up-mobile.svg";
import signupDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import listIcon from "./assets/images/icon-list.svg";
import successIcon from "./assets/images/icon-success.svg";
import { Button } from "./components/Button";
import { useState } from "react";
import zod from "zod";

function isValidEmail(email) {
  const emailSchema = zod.string().email();
  return emailSchema.safeParse(email).success;
}

function App() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setErrorMessage("Valid email required");
    } else {
      setErrorMessage("");
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-charcoal-grey">
      {isSubmitted || (
        <div
          className={`font-roboto bg-white flex flex-col justify-center items-center lg:flex-row-reverse space-y-10 lg:space-y-0 lg:space-x-reverse lg:space-x-16 max-w-[375px] lg:max-w-[1000px] lg:rounded-3xl`}
        >
          <div className="lg:p-5 lg:pl-0">
            <picture>
              <source srcSet={signupDesktop} media="(min-width: 1024px)" />
              <img src={signupMobile} />
            </picture>
          </div>
          <div className="px-6 pb-10 lg:p-0 lg:pl-16 max-w-sm">
            <h1 className="text-5xl font-bold text-dark-slate-grey mb-4">
              Stay updated!
            </h1>
            <p className="text-charcoal-grey mb-4 text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="text-charcoal-grey mb-10">
              <li className="flex items-start space-x-3 mb-2">
                <img src={listIcon} />
                <p>Product discovery and building what matters</p>
              </li>
              <li className="flex items-start space-x-3 mb-2">
                <img src={listIcon} />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className="flex items-start space-x-3">
                <img src={listIcon} />
                <p>And much more!</p>
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <label className="block text-sm font-semibold text-dark-slate-grey mb-2">
                  Email address
                </label>
                <div>
                  {errorMessage ? (
                    <p className="text-sm text-tomato font-medium">
                      {errorMessage}
                    </p>
                  ) : (
                    ``
                  )}
                </div>
              </div>
              <input
                type="text"
                placeholder="abc@example.com"
                className={`border border-grey placeholder:text-grey focus:outline-tomato rounded-lg px-5 py-3 w-full mb-6 ${
                  errorMessage ? `bg-tomato bg-opacity-20 text-tomato` : ``
                }`}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button title="Subscribe to monthly newsletter" />
            </form>
          </div>
        </div>
      )}
      {isSubmitted && (
        <div className="bg-white rounded-3xl px-12 py-10 max-w-[460px]">
          <img src={successIcon} className="mb-10" />
          <h1 className="text-5xl font-bold text-dark-slate-grey mb-4">
            Thanks for subscribing!
          </h1>
          <p className="text-sm text-charcoal-grey mb-10">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <Button title="Dismiss message" />
        </div>
      )}
    </div>
  );
}

export default App;
