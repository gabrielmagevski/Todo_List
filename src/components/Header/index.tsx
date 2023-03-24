import LogoTodo from "../../assets/Logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={LogoTodo} alt="logo_Todo_Rocket" />
      </header>
    </>
  );
};
