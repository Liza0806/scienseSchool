import cls from "./TeachersSection.module.scss";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation"; 
import { translations } from "../locales/translations";

type TranslationKeys = keyof typeof translations.UA;

interface Teacher {
  id: number;
  nameKey: TranslationKeys;
  subjectsKey: TranslationKeys;
  bioKey: TranslationKeys;
  photo: TranslationKeys;
}

const teachers: Teacher[] = [
  {
    id: 1,
    nameKey: "teachers.teacher1.name",
    subjectsKey: "teachers.teacher1.subjects",
    bioKey: "teachers.teacher1.bio",
    //@ts-ignore
    photo: "1cat.jpg",
  },
  {
    id: 2,
    nameKey: "teachers.teacher2.name",
    subjectsKey: "teachers.teacher2.subjects",
    bioKey: "teachers.teacher2.bio",
     //@ts-ignore
    photo: "2cat.jpg",
  },
  {
    id: 3,
    nameKey: "teachers.teacher3.name",
    subjectsKey: "teachers.teacher3.subjects",
    bioKey: "teachers.teacher3.bio",
     //@ts-ignore
    photo: "3cat.jpg",
  },
];

export const TeachersSection = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <section
      className={`${cls.teachers} ${theme === "dark" ? cls.dark : cls.light}`}
    >
      <h2 className={cls.title}>{t("teachers.title")}</h2>
      <p className={cls.description}>{t("teachers.description")}</p>

      <div className={cls.grid}>
        {teachers.map((teacher) => (
          <article key={teacher.id} className={cls.card}>
            <div className={cls.photoWrapper}>
              <img src={teacher.photo} alt={t(teacher.nameKey)} />
            </div>

            <div className={cls.content}>
              <h3 className={cls.name}>{t(teacher.nameKey)}</h3>
              <span className={cls.subjects}>{t(teacher.subjectsKey)}</span>
              <p className={cls.bio}>{t(teacher.bioKey)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeachersSection;