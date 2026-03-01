import Button from "./Button";
import cls from "./Hero.module.scss";
import HeroLeft from "./HeroLeft";
import { useTranslation } from "../hooks/useTranslation";
import { useModalContext } from "../context/ModalContext";

const Hero = () => {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  return (
    <div>
      <div className={cls.heroWrapper}>
        <div className={cls.photoWrapper}>
          <div className={cls.droppingTexts }>
            <div>Developers</div>
            <div>Designers</div>
            <div>Coders</div>
            <div>EVERYONE!</div>
          </div>
        </div>
        <div className={cls.info}>
          <div className={cls.headOne}>
            <h1>{t("hero.schoolTitle")}</h1>
          </div>
          <div className={cls.infoBottom}><h3>{t("hero.subtitle")}</h3>
          <ul className={cls.abilities}>
            <li>{t("hero.ability.one")}</li>
            <li>{t("hero.ability.two")}</li>
            <li>{t("hero.ability.three")}</li>
            <li>{t("hero.ability.four")}</li>
          </ul></div>
        
        </div>
      </div>
      <Button text={t("button.bookAppointment")} onClick={openModal} />
    </div>
  );
};

export default Hero;
