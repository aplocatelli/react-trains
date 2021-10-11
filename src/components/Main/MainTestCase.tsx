import { useState } from "react";
import styles from "./MainTestCase.module.css";
import Trains from "../../trains/trains";

const MainTestCase = () => {
	const [graphInput, setGraphInput] = useState("");
	const [validGraphInput, setValidGraphInput] = useState(true);
	const [results, setResults] = useState<string[]>([]);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const allResults = new Trains(graphInput).getResults();
		setResults(allResults);

		if (allResults.length === 0) {
			setValidGraphInput(false);
		} else {
			setValidGraphInput(true);
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setGraphInput(event.target.value);
	};

	return (
		<div>
			<h2>Test input</h2>
			<form onSubmit={onSubmitHandler} className={styles.form}>
				{!validGraphInput && (
					<span className={styles.invalid}>Invalid input</span>
				)}
				<input
					type="text"
					name="graphInput"
					onChange={onChangeHandler}
					className={!validGraphInput ? styles["invalid"] : undefined}
				/>
				<p className={styles.example}>
					Example: AB5, BC4, CD8, DC8, DE6, AD5, CE2, EB3, AE7
				</p>
				<button type="submit">Run</button>
			</form>

			{results.length > 0 && (
				<>
					<h2>Test Output</h2>
					<ul>
						{results.map((result, index) => (
							<li key={index}>
								<span>{result}</span>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default MainTestCase;
