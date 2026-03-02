import Button from "../components/Button";
import cls from "./Hero.module.scss";
import HeroLeft from "../components/HeroLeft";
import { useTranslation } from "../hooks/useTranslation";
import { useModalContext } from "../context/ModalContext";
import IconPupil from "../assets/icons/children.svg?react";
import IconStudent from "../assets/icons/student.svg?react";
import IconDoctor from "../assets/icons/doctor.svg?react";
import IconPeople from "../assets/icons/people.svg?react";

const Hero = () => {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  return (
    <div>
      <div className={cls.heroWrapper}>
        <div className={cls.photoWrapper}>
          <div className={cls.droppingTexts }>
            <div>
              <IconPupil/>
              Учням
              </div>
            <div>
              <IconStudent/>
              Студентам
            </div>
            <div>
              <IconDoctor/>
              Врачам
              </div>
            <div>
              <IconPeople/>
               Кожному
              </div>
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
