import styles from "./Input.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../context/ContextTasks";

export const Input = () => {
  const { setTasks, tasks } = useContext(TasksContext);
  const [newTask, setNewTask] = useState<string>("");

  const onRegisterNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setNewTask(event.target.value);
  };

  const onRegisterTasksInQueue = (event: FormEvent) => {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <>
      <form onSubmit={onRegisterTasksInQueue} className={styles.formInput}>
        <input className={styles.inputTask} type="text" placeholder="Adicione uma nova tarefa" value={newTask} onChange={onRegisterNewTask} />
        <button className={styles.buttonTask} type="submit">
          Criar <PlusCircle size={16} color={"#F2F2F2"} />
        </button>
      </form>
    </>
  );
};
