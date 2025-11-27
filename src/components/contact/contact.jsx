import "./contact.scss";

import { useTranslations } from "../../context/language-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaBox from "../social-media-box/social-media-box";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  const { translation } = useTranslations();
  return (
    <div className="contact">
      <h1 className="section__title section__title__sm-screens">Contact</h1>
      <h1 className="section__title">{translation("contact.title")}</h1>

      <p className="contact__message">
        {translation("contact.message")
          .split("?")
          .map((part, i) =>
            i === translation("contact.message").split("?").length - 1 ? (
              <span className="contact__message__emphasize">{part}</span>
            ) : (
              <>
                {part}?
                <br />
              </>
            )
          )}
      </p>

      <SocialMediaBox />

      <form className="contact__form">
        <div className="contact__form__group">
          <label htmlFor="name">{translation("contact.form.name")}</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="contact__form__group">
          <label htmlFor="tel">{translation("contact.form.tel")}</label>
          <input type="tel" id="tel" name="tel" />
        </div>

        <div className="contact__form__group">
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="contact__form__group">
          <label htmlFor="message">{translation("contact.form.message")}</label>
          <textarea id="message" name="message" />
        </div>

        <button className="contact__form__submit-button">
          {translation("contact.form.submit")} <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
