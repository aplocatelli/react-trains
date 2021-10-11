import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p>
					<b>Development Candidate</b>
					<br />
					{"//"} Coding Test
				</p>
			</div>
		</footer>
	);
};

export default Footer;
