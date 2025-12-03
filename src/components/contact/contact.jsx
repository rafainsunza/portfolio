import "./contact.scss";

import { useTranslations } from "../../context/language-context";
import SocialMediaBox from "../social-media-box/social-media-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import validator from "validator";

const Contact = () => {
  const { translation } = useTranslations();

  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [isValidName, setIsValidName] = useState(null);
  const [nameErrorMessage, setNameErrorMessage] = useState(null);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);

  const [message, setMessage] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const maxMessageLength = 500;
  const minMessageLength = 10;

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
    const isEmail = validator.isEmail(value.trim());

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

  // MESSAGE VALIDATION
  const handleMessageChange = (e) => {
    const value = e.target.value;

    setMessage(value);
    setMessageLength(value.length);
  };

  useEffect(() => {
    if (isValidName && isValidEmail && messageLength >= minMessageLength && messageLength <= maxMessageLength) {
      setIsValid(true);
    } else setIsValid(false);
  }, [isValidName, isValidEmail, messageLength]);

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
        <div className={`contact__form__group ${isValidName ? "valid" : isValidName === false ? "invalid" : ""}`}>
          <label htmlFor="name">{translation("contact.form.name")}</label>
          <div className="contact__form__input__wrapper">
            <input
              className="contact__form__input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              minLength={2}
              maxLength={150}
              required
            />

            <span className="contact__form__input__icon">
              {nameErrorMessage && <FontAwesomeIcon icon={faTriangleExclamation} />}
              {isValidName && <FontAwesomeIcon icon={faCheck} />}
            </span>
          </div>

          {nameErrorMessage && <div className="contact__form__input__error-message">{nameErrorMessage}</div>}
        </div>

        <div className={`contact__form__group ${isValidEmail ? "valid" : isValidEmail === false ? "invalid" : ""}`}>
          <label htmlFor="email">EMAIL</label>
          <div className="contact__form__input__wrapper">
            <input
              className="contact__form__input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              maxLength={254}
              required
            />

            <span className="contact__form__input__icon">
              {emailErrorMessage && <FontAwesomeIcon icon={faTriangleExclamation} />}
              {isValidEmail && <FontAwesomeIcon icon={faCheck} />}
            </span>
          </div>

          {emailErrorMessage && <div className="contact__form__input__error-message">{emailErrorMessage}</div>}
        </div>

        <div className="contact__form__group">
          <label htmlFor="message" className="contact__form__group__message__label">
            {translation("contact.form.message")}
            <span className="contact__form__message__count">
              {messageLength} / {maxMessageLength}
            </span>
          </label>
          <div className="contact__form__input__wrapper">
            <textarea
              className="contact__form__input"
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              minLength={minMessageLength}
              maxLength={maxMessageLength}
              required
            />
          </div>
        </div>

        <button type="submit" className={`contact__form__submit-button ${isValid ? "active" : ""}`} disabled={!isValid}>
          {translation("contact.form.submit")} <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
