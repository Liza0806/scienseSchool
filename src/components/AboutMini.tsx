import { useTranslation } from "../hooks/useTranslation";
import Button from "./Button";
import cls from "./AboutMini.module.scss";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../context/ModalContext";

const AboutMini = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
const { openModal } = useModalContext();

  const handleNavigate = () => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    navigate("/about#start");
  };
  return (
    <div className={cls.wrapper}>
      <h2>{t("aboutMini.title")}</h2>
      <div className={cls.infoWrapper}>
        <div className={cls.photo}></div>
        <div className={cls.info}>
          <article>
            <p>{t("aboutMini.paragraph1")}</p>
            <p>{t("aboutMini.paragraph2")}</p>
            <p>{t("aboutMini.paragraph3")}</p>
            <p>{t("aboutMini.paragraph4")}</p>
          </article>
          <Button text={t("button.learnMore")} onClick={openModal} />
        </div>
      </div>
    </div>
  );
};

export default AboutMini;
