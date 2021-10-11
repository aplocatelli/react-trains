import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<p>
					<b>Problem Three</b>
				</p>
				<h1>
					<b>Trains</b>
				</h1>
			</div>
		</header>
	);
};

export default Header;
