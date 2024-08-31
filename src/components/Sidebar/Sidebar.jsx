import style from "./Sidebar.module.css";
import explorerIcon from "/assets/explorer_icon.svg";
import githubIcon from "/assets/github_icon.svg";
import projectsIcon from "/assets/projects_icon.svg";
import articlesIcon from "/assets/articles_icon.svg";
import contactIcon from "/assets/contact_icon.svg";
import aboutIcon from "/assets/about_icon.svg";
import settingsIcon from "/assets/settings_icon.svg";

export default function Sidebar({ currentTab, changeTab }) {
  return (
    <aside className={style.aside}>
      <div>
        <a
          onClick={() => {
            changeTab("");
          }}
          href="explorer"
          className={currentTab == "" ? style.selected : ""}
        >
          <img className={style.icon} src={explorerIcon} alt="explorer icon" />
        </a>

        <a
          onClick={() => {
            changeTab("github");
          }}
          href="github"
          className={currentTab == "github" ? style.selected : ""}
        >
          <img className={style.icon} src={githubIcon} alt="github icon" />
        </a>

        <a
          onClick={() => {
            changeTab("projects");
          }}
          href="projects"
          className={currentTab == "projects" ? style.selected : ""}
        >
          <img className={style.icon} src={projectsIcon} alt="projects icon" />
        </a>

        <a href="articles">
          <img className={style.icon} src={articlesIcon} alt="articles icon" />
        </a>

        <a href="contacts">
          <img className={style.icon} src={contactIcon} alt="contacts icon" />
        </a>
      </div>

      <div>
        <a href="about">
          <img className={style.icon} src={aboutIcon} alt="about icon" />
        </a>

        <a href="settings">
          <img className={style.icon} src={settingsIcon} alt="settings icon" />
        </a>
      </div>
    </aside>
  );
}
