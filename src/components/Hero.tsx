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
          <div className={cls.droppingTexts}>
            <div>
              <IconPupil />
              <h3> Учням</h3>
            </div>
            <div>
              <IconPupil />
              <h3>Студентам</h3>
            </div>
            <div>
              <IconDoctor />
              <h3> Врачам</h3>
            </div>
            <div>
              <IconPupil />
              <h3>Кожному</h3>
            </div>
          </div>
        </div>
        <div className={cls.info}>
          <div className={cls.headOne}>
            <h1>{t("hero.schoolTitle")}</h1>
          </div>
          <div className={cls.infoBottom}>
            <h2>{t("hero.subtitle")}</h2>
            <ul className={cls.abilities}>
              <li>{t("hero.ability.one")}</li>
              <li>{t("hero.ability.two")}</li>
              <li>{t("hero.ability.three")}</li>
              <li>{t("hero.ability.four")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Button text={t("button.bookAppointment")} onClick={openModal} />
    </div>
  );
};

export default Hero;
