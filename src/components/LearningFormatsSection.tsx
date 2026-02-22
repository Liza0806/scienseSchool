import styles from "./LearningFormatsSection.module.scss";
import { useTheme } from "../context/ThemeContext";

interface Format {
  id: number;
  title: string;
  desc: string;
  benefits: string[];
}

const formats: Format[] = [
  {
    id: 1,
    title: "Індивідуальне навчання",
    desc: "Персональний підхід до кожного учня з урахуванням рівня знань та цілей.",
    benefits: [
      "Гнучкий графік занять",
      "Програма під рівень учня",
      "Максимум уваги від викладача",
      "Швидший прогрес",
    ],
  },
  {
    id: 2,
    title: "Навчання у групах",
    desc: "Командна робота та підтримка однодумців у процесі навчання.",
    benefits: [
      "Мотивація та спілкування",
      "Доступніша ціна",
      "Дискусії та обмін ідеями",
      "Структурована програма",
    ],
  },
];

export const LearningFormatsSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.formats} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h2 className={styles.title}>Формати навчання</h2>

      <div className={styles.grid}>
        {formats.map((format) => (
          <article key={format.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{format.title}</h3>
            <p className={styles.cardDesc}>{format.desc}</p>

            <ul className={styles.benefits}>
              {format.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className={styles.button}>Записатися</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearningFormatsSection;