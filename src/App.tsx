import { Input } from "./components/Input";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { SubMenu } from "./components/SubMenu";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Input />
        <SubMenu />
        <Tasks />
      </main>
    </>
  );
}

export default App;
