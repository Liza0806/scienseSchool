import Button from "./Button";
import cls from "./CoursesSection.module.scss";
import { useTranslation } from "../hooks/useTranslation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CoursesSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem("scrollPosition", window.scrollY.toString());
    navigate("/about#directions");
  };
  const categories = [
    {
      titleKey: t("servicesList.courseOne"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseOne.item`),
    },
    {
      titleKey: t("servicesList.courseTwo"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseTwo.item`),
    },
        {
      titleKey: t("servicesList.courseThree"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseThree.item`),
    },
        {
      titleKey: t("servicesList.courseFour"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseFour.item`),
    },
    {
      titleKey: t("servicesList.courseFive"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseFive.item`),
    },
       {
      titleKey: t("servicesList.courseSix"),
      //@ts-ignore
      itemsKey: t(`servicesList.courseSix.item`),
    },
  ];
  const renderItems = (prefix: string, count: number) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      //@ts-ignore
      items.push(<li key={i}>{t(`${prefix}${i}`)}</li>);
    }
    return items;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={cls.wrapper}>
      <h2>{t("servicesList.title")}</h2>

      {!isMobile ? (
        <div className={cls.categories}>
          <div className={cls.category}>
            <h3>{t("servicesList.courseOne")}</h3>
            <ul>{renderItems("servicesList.courseOne.item", 4)}</ul>
          </div>

          <div className={cls.category}>
            <h3>{t("servicesList.courseTwo")}</h3>
            <ul>{renderItems("servicesList.courseTwo.item", 4)}</ul>
          </div>

          <div className={cls.category}>
            <h3>{t("servicesList.courseThree")}</h3>
            <ul>{renderItems("servicesList.courseThree.item", 4)}</ul>
          </div>

          <div className={cls.category}>
            <h3>{t("servicesList.courseFour")}</h3>
            <ul>{renderItems("servicesList.courseFour.item", 4)}</ul>
          </div>

          <div className={cls.category}>
            <h3>{t("servicesList.courseFive")}</h3>
            <ul>{renderItems("servicesList.courseFive.item", 4)}</ul>
          </div>

          <div className={cls.category}>
            <h3>{t("servicesList.courseSix")}</h3>
            <ul>{renderItems("servicesList.courseSix.item", 4)}</ul>
          </div>
        </div>
      ) : (
        <div className={cls.accordionGrid}>
          <details className={cls.category}>
            <summary>{t("servicesList.courseOne")}</summary>
            <ul>{renderItems("servicesList.courseOne.item", 4)}</ul>
          </details>

          <details className={cls.category}>
            <summary>{t("servicesList.courseTwo")}</summary>
            <ul>{renderItems("servicesList.courseTwo.item", 4)}</ul>
          </details>

          <details className={cls.category}>
            <summary>{t("servicesList.courseThree")}</summary>
            <ul>{renderItems("servicesList.courseThree.item", 4)}</ul>
          </details>

          <details className={cls.category}>
            <summary>{t("servicesList.courseFour")}</summary>
            <ul>{renderItems("servicesList.courseFour.item", 4)}</ul>
          </details>

          <details className={cls.category}>
            <summary>{t("servicesList.courseFive")}</summary>
            <ul>{renderItems("servicesList.courseFive.item", 4)}</ul>
          </details>

          <details className={cls.category}>
            <summary>{t("servicesList.courseSix")}</summary>
            <ul>{renderItems("servicesList.courseSix.item", 4)}</ul>
          </details>
        </div>
      )}

      <Button text={t("servicesList.button")} onClick={handleNavigate} />
    </section>
  );
};

export default CoursesSection;
