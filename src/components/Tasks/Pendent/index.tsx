import { Trash } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { TasksContext } from "../../../context/ContextTasks";
import styles from "../Tasks.module.css";

export const Pendent = () => {
  const [checkedTask, setCheckedTask] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);

  const onDeleteTask = (taskDelete: string) => {
    const isTaskDelete = tasks.filter((task) => {
      return task !== taskDelete;
    });

    setTasks(isTaskDelete);
  };

  const handleClickMarkChecked = () => {
    if (!checkedTask) {
      setCheckedTask(true);
    }
  };

  return (
    <>
      {tasks.map((task: string) => {
        return (
          <div key={task} className={styles.cardTask}>
            <div className={styles.checkboxTask}>
              <input onClick={handleClickMarkChecked} type="checkbox" />
            </div>
            <div className={styles.wrapperTextTask}>
              <p className={checkedTask ? styles.paragraphChecked : styles.paragraphUnchecked}>{task}</p>
            </div>
            <div onClick={() => onDeleteTask(task)} className={styles.trashTask}>
              <Trash size={24} color="#7f7f7f" />
            </div>
          </div>
        );
      })}
    </>
  );
};
