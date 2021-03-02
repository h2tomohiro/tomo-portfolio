import Head from "next/head";
import React from 'react';
import Link from 'next/link'

const Layout = ({children}) => {
	const head = () => (
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
					integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
		)

const nav = () => (
	<ul className="nav nav-tabs bg-warning">
		<li className="nav-item">
			<Link href="/">
				<a className="nav-link text-dark">
					Home
				</a>
			</Link>
		</li>
	</ul>
);
	return <React.Fragment> {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
	</React.Fragment>
}
export default Layout;