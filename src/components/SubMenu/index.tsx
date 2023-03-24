import { useContext } from "react";
import { TasksContext } from "../../context/ContextTasks";
import styles from "./SubMenu.module.css";

export const SubMenu = () => {
  const { tasks } = useContext(TasksContext);
  const countTasks = tasks.length;

  return (
    <>
      <div className={styles.ContainerMenu}>
        <div className={styles.WrapperMenu}>
          <div className={styles.tasks}>
            <strong>
              Tarefas criadas <span>{countTasks}</span>
            </strong>
          </div>
        </div>
        <div className={styles.WrapperMenu}>
          <div className={styles.tasksCompleted}>
            <strong>
              Concluídas <span>0</span>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};
