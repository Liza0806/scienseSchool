import Button from "./Button";
import cls from "./Hero.module.scss";
import HeroLeft from "./HeroLeft";
import { useTranslation } from "../hooks/useTranslation";
import { useModalContext } from "../context/ModalContext";

const Hero = () => {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  return (
    <>
      <div className={cls.info}>
        <h1>{t("hero.schoolTitle")}</h1>
        <h3>{t("hero.subtitle")}</h3>
        <ul className={cls.abilities}>
          <li>{t("hero.ability.one")}</li>
          <li>{t("hero.ability.two")}</li>
          <li>{t("hero.ability.three")}</li>
          <li>{t("hero.ability.four")}</li>
        </ul>
        <Button text={t("button.bookAppointment")} onClick={openModal} />
      </div>
   <div className={cls.photoWrapper}>
              <img src="../../public/photo_2026-02-22_17-13-10-removebg-preview.png" alt="Логотип школи"/>
            </div>
    </>
  );
};

export default Hero;
