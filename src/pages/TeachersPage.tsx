import styles from "./TeachersPage.module.scss";
import { useTheme } from "../context/ThemeContext"; 

interface Teacher {
  id: number;
  name: string;
  subjects: string;
  experience: string;
  education: string;
  approach: string;
  achievements: string[];
  photo: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Олена Коваль",
    subjects: "Біологія, Хімія",
    experience: "10 років викладання та підготовки до НМТ",
    education: "Магістр біології, Харківський національний університет",
    approach: "Пояснюю складні теми простими словами та прикладами з життя.",
    achievements: [
      "Понад 200 учнів успішно склали НМТ",
      "Автор власних методичних матеріалів",
    ],
    photo: "/teachers/teacher1.jpg",
  },
  {
    id: 2,
    name: "Ігор Мельник",
    subjects: "Фізика, Математика",
    experience: "8 років підготовки абітурієнтів",
    education: "Магістр фізики, Львівський національний університет",
    approach: "Навчаю мислити логічно та не боятися складних задач.",
    achievements: [
      "Учні — призери олімпіад",
      "Розробник інтерактивних курсів",
    ],
    photo: "/teachers/teacher2.jpg",
  },
  {
    id: 3,
    name: "Марія Шевченко",
    subjects: "Хімія, Біологія",
    experience: "7 років роботи з учнями різного рівня",
    education: "Магістр хімії, Київський національний університет",
    approach: "Мотивую та підтримую кожного учня на шляху до результату.",
    achievements: [
      "Понад 150 випускників",
      "Спікер освітніх конференцій",
    ],
    photo: "/teachers/teacher3.jpg",
  },
];

export const TeachersPage = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${styles.page} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <h1 className={styles.title}>Наші викладачі</h1>

      <div className={styles.list}>
        {teachers.map((teacher) => (
          <article key={teacher.id} className={styles.card}>
            <div className={styles.photoWrapper}>
              <img src={teacher.photo} alt={teacher.name} />
            </div>

            <div className={styles.info}>
              <h2 className={styles.name}>{teacher.name}</h2>
              <p className={styles.subjects}>{teacher.subjects}</p>

              <p><strong>Досвід:</strong> {teacher.experience}</p>
              <p><strong>Освіта:</strong> {teacher.education}</p>
              <p><strong>Підхід:</strong> {teacher.approach}</p>

              <ul className={styles.achievements}>
                {teacher.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <button className={styles.button}>Записатися на заняття</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeachersPage;