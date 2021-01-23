import Footer from '@includes/footer'
import Header from '@includes/header'
import styles from '../../styles/Default.module.css'
import Head from 'next/head'

export default function DefaultLayout(props) {
	return (
		<main className={styles.main}>
			<Head>
				<title>JS Vale</title>
				<link rel="icon" href="https://avatars3.githubusercontent.com/u/57258568?v=4" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>
			<Header />
			{props.children}
			<Footer />
		</main>
	)
}
