import styles from "../Tasks.module.css";
import DoneTasks from "../../../assets/Clipboard.svg";

export const Done = () => {
  return (
    <>
      <div className={styles.containerDone}>
        <div>
          <img src={DoneTasks} alt="ClipBoardDone" />
        </div>
        <div className={styles.wrapperTitle}>
          <h2>Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer</h2>
        </div>
      </div>
    </>
  );
};
