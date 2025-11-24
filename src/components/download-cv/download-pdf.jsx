import "./download-pdf.scss";

import cvEN from "../../assets/files/Rafael_Insunza_Castro_FrontEndDeveloper_EN.pdf";
import cvNL from "../../assets/files/Rafael_Insunza_Castro_FrontEndDeveloper_NL.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "../../context/language-context";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadPdf = () => {
  const { language } = useTranslations();

  return (
    <a href={language === "en" ? cvEN : language === "nl" ? cvNL : null} className="download-pdf" download>
      <FontAwesomeIcon icon={faDownload} />
      <div className="download-pdf__text">DOWNLOAD PDF</div>
    </a>
  );
};

export default DownloadPdf;
