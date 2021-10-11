import MainIntro from "./MainIntro";
import MainDescription from "./MainDescription";
import MainTestCase from "./MainTestCase";
import styles from "./Main.module.css";

const Main = () => {
	return (
		<main className="container">
			<MainIntro></MainIntro>
			<div className={styles.row}>
				<MainDescription></MainDescription>
				<MainTestCase></MainTestCase>
			</div>
		</main>
	);
};

export default Main;
