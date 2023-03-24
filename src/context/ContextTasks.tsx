import { createContext, useState } from "react";

interface TasksContextProps {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

interface TypesContext {
  children: React.ReactNode;
}

export const TasksContext = createContext<TasksContextProps>({});

export const TasksProvider = ({ children }: TypesContext) => {
  const [tasks, setTasks] = useState<string[]>(["Fazer Compras", "Limpar o banheiro"]);

  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};
