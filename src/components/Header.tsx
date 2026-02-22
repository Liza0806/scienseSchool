import { NavLink } from "react-router-dom";
import cls from "./Header.module.scss";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export const Header = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cls.header}>
      <div
        className={`${cls.burger} ${isMenuOpen ? cls.open : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={isMenuOpen ? cls.open : ""}>
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t("header.home")}
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t("header.about")}
        </NavLink>
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          to="/WorkInfoSection"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? `${cls.link} ${cls.active}` : cls.link
          }
        >
          {t("header.WorkInfoSection")}
        </NavLink>
        <a
          href="#footer"
          className={cls.link}
          onClick={() => setIsMenuOpen(false)}
        >
          {t("header.contacts")}
        </a>
      </nav>
      <div className={cls.languageSwitcher}>
        {["UA", "RU", "EN"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang as "UA" | "RU" | "EN")}
            className={language === lang ? cls.active : ""}
          >
            {lang}
          </button>
        ))}
      </div>
      <div className={cls.languageSwitcher}>
        <ThemeToggle />
      </div>
    </div>
  );
};
