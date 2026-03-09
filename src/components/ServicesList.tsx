import Button from "./Button";
import cls from "./ServicesList.module.scss";
import { useTranslation } from "../hooks/useTranslation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ServicesList = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); 

  // const handleNavigate = () => {
  //   localStorage.setItem("scrollPosition", window.scrollY.toString());
  //   navigate("/about#directions");
  // };
  // const categories = [
  //   {
  //     titleKey: t("servicesList.personalProblems"),
  //     //@ts-ignore
  //     itemsKey: t(`servicesList.personal.item`),
  //   },
  //   {
  //     titleKey: t("servicesList.relationshipProblems"),
  //     //@ts-ignore
  //     itemsKey: t(`servicesList.relationship.item`),
  //   },
  //   {
  //     titleKey: t("servicesList.mentalDisorders"),
  //     //@ts-ignore
  //     itemsKey: t(`servicesList.mental.item`),
  //   },
  // ];
  // const renderItems = (prefix: string, count: number) => {
  //   const items = [];
  //   for (let i = 1; i <= count; i++) {
  //     //@ts-ignore
  //     items.push(<li key={i}>{t(`${prefix}${i}`)}</li>);
  //   }
  //   return items;
  // };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 992);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // return (
  //   <section className={cls.wrapper}>
  //     <h2>{t("servicesList.title")}</h2>

  //     {!isMobile ? (
  //       <div className={cls.categories}>
  //         <div className={cls.category}>
  //           <h3>{t("servicesList.personalProblems")}</h3>
  //           <ul>{renderItems("servicesList.personal.item", 7)}</ul>
  //         </div>

  //         <div className={cls.category}>
  //           <h3>{t("servicesList.relationshipProblems")}</h3>
  //           <ul>{renderItems("servicesList.relationship.item", 7)}</ul>
  //         </div>

  //         <div className={cls.category}>
  //           <h3>{t("servicesList.mentalDisorders")}</h3>
  //           <ul>{renderItems("servicesList.mental.item", 6)}</ul>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className={cls.accordionGrid}>
  //         <details className={cls.category}>
  //           <summary>{t("servicesList.personalProblems")}</summary>
  //           <ul>{renderItems("servicesList.personal.item", 7)}</ul>
  //         </details>

  //         <details className={cls.category}>
  //           <summary>{t("servicesList.relationshipProblems")}</summary>
  //           <ul>{renderItems("servicesList.relationship.item", 7)}</ul>
  //         </details>

  //         <details className={cls.category}>
  //           <summary>{t("servicesList.mentalDisorders")}</summary>
  //           <ul>{renderItems("servicesList.relationship.item", 6)}</ul>
  //         </details>
  //       </div>
  //     )}

  //     <Button text={t("servicesList.button")} onClick={handleNavigate} />
  //   </section>
 // );
};

export default ServicesList;
