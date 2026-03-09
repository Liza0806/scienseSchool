import styles from "./LearningFormatsSection.module.scss";
import { useTheme } from "../context/ThemeContext";
import { useModalContext } from "../context/ModalContext";
import { useTranslation } from "../hooks/useTranslation";
import { translations } from "../locales/translations";

type TranslationKeys = keyof typeof translations.UA;

interface Format {
  id: number;
  titleKey: TranslationKeys;
  descKey: TranslationKeys;
  benefitsKeys: TranslationKeys[];
}

const formats: Format[] = [
  {
    id: 1,
    titleKey: "formats.individual.title",
    descKey: "formats.individual.desc",
    benefitsKeys: [
      "formats.individual.benefit1",
      "formats.individual.benefit2",
      "formats.individual.benefit3",
      "formats.individual.benefit4",
    ],
  },
  {
    id: 2,
    titleKey: "formats.group.title",
    descKey: "formats.group.desc",
    benefitsKeys: [
      "formats.group.benefit1",
      "formats.group.benefit2",
      "formats.group.benefit3",
      "formats.group.benefit4",
    ],
  },
];

export const LearningFormatsSection = () => {
  const { theme } = useTheme();
  const { openModal } = useModalContext();
  const { t } = useTranslation();

  return (
    <section
      className={`${styles.formats} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h2 className={styles.title}>{t("formats.title")}</h2>

      <div className={styles.grid}>
        {formats.map((format) => (
          <article key={format.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{t(format.titleKey)}</h3>
            <p className={styles.cardDesc}>{t(format.descKey)}</p>

            <ul className={styles.benefits}>
              {format.benefitsKeys.map((key, index) => (
                <li key={index}>{t(key)}</li>
              ))}
            </ul>

            <button className={styles.button} onClick={openModal}>
              {t("formats.button")}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearningFormatsSection;