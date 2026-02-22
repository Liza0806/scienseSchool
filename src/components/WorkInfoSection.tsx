import { useTranslation } from "../hooks/useTranslation";
import cls from "./WorkInfoSection.module.scss";
import { useInView } from "react-intersection-observer";

const WorkInfoSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const sections = [
    {
      icon: "🖊️",
      title: t("workStartTitle"),
      description: t("workStartDescription"),
    },
    {
      icon: "🧭",
      title: t("workFormatsTitle"),
      description: t("workFormatsDescription"),
    },
    {
      icon: "🕒",
      title: t("workOrganizationalTitle"),
      description: t("workOrganizationalDescription"),
    },
    {
      icon: "🌿",
      title: t("workSimpleTitle"),
      description: t("workSimpleDescription"),
    },
  ];

  return (
    <section className={cls.sectionWrapper}>
      <div className={`${cls.backgroundCircle} ${cls.topLeft}`}></div>
      <div className={`${cls.backgroundCircle} ${cls.bottomRight}`}></div>

      {/* Десктопная сетка карточек */}
      <div className={cls.cardGrid} ref={ref}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`${cls.card} ${inView ? cls.fadeIn : ""}`}
          >
            <div className={cls.icon}>{section.icon}</div>
            <h2 className={cls.title}>{section.title}</h2>
            <div className={cls.decorativeLine}></div>
            <p className={cls.description}>{section.description}</p>
          </div>
        ))}
      </div>

      {/* Мобильный аккордеон */}
      <div className={cls.accordionGrid}>
        {sections.map((section, index) => (
          <details key={index}>
            <summary>
              {section.icon} {section.title}
            </summary>
            <p>{section.description}</p>
          </details>
        ))}
      </div>

      <div className={cls.whisper}>{t("workSectionBottom")}</div>
    </section>
  );
};

export default WorkInfoSection;
