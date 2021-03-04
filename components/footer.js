import React from 'react';
import styles from "../styles/menubar.module.scss";

export const Footer = ({children}) => {
	const footer = () => (
		<div className={styles.footer}>
			© 2021 Copyright: I love Baseball MANGA!
		</div>
	);
	return <React.Fragment> {footer()}
		<div className="footer">{children}</div>
	</React.Fragment>
}