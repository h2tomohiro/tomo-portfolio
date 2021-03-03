// import { useRouter } from 'next/router';
// import React from 'react';
// import Link from 'next/link'
//
// export const Header = ({children}) => {
// 	const router = useRouter();
// 	const head = () => (
// 		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
// 					integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
// 	)
// 	const nav = () => (
// 		<ul className="nav nav-tabs bg-warning">
// 			<li className="nav-item">
// 				<Link href="/">
// 					<a className="nav-link text-dark">
// 						<div onClick={() => router.push('/')}>Home</div>
// 					</a>
// 				</Link>
// 			</li>
// 			<li className="nav-item">
// 				<Link href="/">
// 					<a className="nav-link text-dark">
// 						<div onClick={() => router.push('/touch')}>Touch</div>
// 					</a>
// 				</Link>
// 			</li>
// 			<li className="nav-item">
// 				<Link href="/">
// 					<a className="nav-link text-dark">
// 						<div onClick={() => router.push('/dokaben')}>Dokaben</div>
// 					</a>
// 				</Link>
// 			</li>
// 		</ul>
// 	);
// 	return <React.Fragment> {head()} {nav()}
// 		<div className="container pt-5 pb-5">{children}</div>
// 	</React.Fragment>
// }