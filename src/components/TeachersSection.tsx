import cls from "./TeachersSection.module.scss";
import { useTheme } from "../context/ThemeContext"; 

interface Teacher {
  id: number;
  name: string;
  subjects: string;
  bio: string;
  photo: string;
}

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Олена Коваль",
    subjects: "Біологія, Хімія",
    bio: "Викладач із 10-річним досвідом підготовки до НМТ та вступних іспитів.",
    photo: "/1cat.jpg",
  },
  {
    id: 2,
    name: "Ігор Мельник",
    subjects: "Фізика, Математика",
    bio: "Пояснюю складні теми просто і на прикладах з реального життя.",
    photo: "/2cat.jpg",
  },
  {
    id: 3,
    name: "Марія Шевченко",
    subjects: "Хімія, Біологія",
    bio: "Допомагаю учням полюбити природничі науки та зрозуміти логіку предметів.",
    photo: "/3cat.jpg",
  },
];

export const TeachersSection = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`${cls.teachers} ${
        theme === "dark" ? cls.dark : cls.light
      }`}
    >
      <h2 className={cls.title}>Наші викладачі</h2>

      <div className={cls.grid}>
        {teachers.map((teacher) => (
          <article key={teacher.id} className={cls.card}>
            <div className={cls.photoWrapper}>
              <img src={teacher.photo} alt={teacher.name} />
            </div>

            <div className={cls.content}>
              <h3 className={cls.name}>{teacher.name}</h3>
              <span className={cls.subjects}>{teacher.subjects}</span>
              <p className={cls.bio}>{teacher.bio}</p>
              <button className={cls.button}>Детальніше</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeachersSection;