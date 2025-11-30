import "./contact.scss";

import { useTranslations } from "../../context/language-context";
import SocialMediaBox from "../social-media-box/social-media-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import validator from "validator";

const Contact = () => {
  const { translation } = useTranslations();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [isValidName, setIsValidName] = useState(null);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);

  const [emailTouched, setEmailTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);

  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // NAME VALIDATION
  const validateName = (value) => {
    const regex = /.*\p{L}.*/u;
    const hasValidCharacters = regex.test(value.trim());
    const isValidLength = value.trim().length > 1;

    if (!value.trim().length) setNameErrorMessage(translation("contact.form.errors.nameRequired"));
    else if (!isValidLength) setNameErrorMessage(translation("contact.form.errors.nameTooShort"));
    else if (!hasValidCharacters) setNameErrorMessage(translation("contact.form.errors.invalidCharacters"));
    else setNameErrorMessage(null);

    return hasValidCharacters && isValidLength;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;

    setName(value);

    if (nameTouched) setIsValidName(validateName(value));
  };

  const handleNameBlur = () => {
    setNameTouched(true);
    setIsValidName(validateName(name));
  };

  // EMAIL VALIDATION
  const validateEmail = (value) => {
    const isEmail = validator.isEmail(value);

    if (!isEmail) setEmailErrorMessage(translation("contact.form.errors.invalidEmail"));
    else setEmailErrorMessage(null);

    return isEmail;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;

    setEmail(value);

    if (emailTouched) setIsValidEmail(validateEmail(value));
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setIsValidEmail(validateEmail(email));
  };

  useEffect(() => {}, [name, email, tel, message, isValidName, nameTouched]);

  return (
    <div className="contact">
      <h1 className="section__title section__title__sm-screens">Contact</h1>
      <h1 className="section__title">{translation("contact.title")}</h1>

      <p className="contact__message">
        {translation("contact.message")
          .split("?")
          .map((part, i) =>
            i === translation("contact.message").split("?").length - 1 ? (
              <span className="contact__message__emphasize" key={i}>
                {part}
              </span>
            ) : (
              <React.Fragment key={i + part}>
                {part}?
                <br />
              </React.Fragment>
            )
          )}
      </p>

      <SocialMediaBox />

      <form onSubmit={handleSubmit} className="contact__form">
        <div
          className={`contact__form__group ${isValidName === false ? "invalid" : isValidName === true ? "valid" : ""} `}
        >
          <label htmlFor="name">{translation("contact.form.name")}</label>
          <input
            className="contact__form__input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            required
          />
          <div className={`contact__form__input__error-message ${isValidName === false ? "" : "displaynone"}`}>
            <FontAwesomeIcon icon={faCircleExclamation} /> {nameErrorMessage}
          </div>
        </div>

        <div
          className={`contact__form__group ${
            isValidEmail === false ? "invalid" : isValidEmail === true ? "valid" : ""
          } `}
        >
          <label htmlFor="email">EMAIL</label>
          <input
            className="contact__form__input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            required
          />
          <div className={`contact__form__input__error-message ${isValidEmail === false ? "" : "displaynone"}`}>
            <FontAwesomeIcon icon={faCircleExclamation} /> {emailErrorMessage}
          </div>
        </div>

        <div className="contact__form__group">
          <label htmlFor="tel">
            {translation("contact.form.tel")[0]} <span>{translation("contact.form.tel")[1]}</span>
          </label>
          <input
            className="contact__form__input"
            type="tel"
            id="tel"
            name="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>

        <div className="contact__form__group">
          <label htmlFor="message">{translation("contact.form.message")}</label>
          <textarea
            className="contact__form__input"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="contact__form__submit-button">
          {translation("contact.form.submit")} <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
