import { useContext } from "react";
import { TasksContext } from "../../context/ContextTasks";
import { Done } from "./Done";
import { Pendent } from "./Pendent";
import styles from "./Tasks.module.css";

export const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <div className={styles.containerTasks}>{tasks.length !== 0 ? <Pendent /> : <Done />}</div>
    </>
  );
};
