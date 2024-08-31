import style from "./Sidebar.module.css";
import explorerIcon from "/assets/explorer_icon.svg";
import githubIcon from "/assets/github_icon.svg";
import projectsIcon from "/assets/projects_icon.svg";
import articlesIcon from "/assets/articles_icon.svg";
import contactIcon from "/assets/contact_icon.svg";
import aboutIcon from "/assets/about_icon.svg";
import settingsIcon from "/assets/settings_icon.svg";

export default function Sidebar() {
  return (
    <aside className={style.aside}>
      <div>
        <img className={style.icon + " " + style.selected} src={explorerIcon} alt="explorer icon" />
        <img className={style.icon} src={githubIcon} alt="github icon" />
        <img className={style.icon} src={projectsIcon} alt="projects icon" />
        <img className={style.icon} src={articlesIcon} alt="articles icon" />
        <img className={style.icon} src={contactIcon} alt="contacts icon" />
      </div>

      <div>
        <img className={style.icon} src={aboutIcon} alt="about icon" />
        <img className={style.icon} src={settingsIcon} alt="settings icon" />
      </div>
    </aside>
  );
}
