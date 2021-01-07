import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Vale</title>
				<link rel="icon" href="https://avatars3.githubusercontent.com/u/57258568?v=4" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
			</Head>

			<main className={styles.main}>
				<section className={styles.notReady}>
					<h1>Em construção</h1>
					<div className={styles.loader}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</section>
				<section className={styles.socialMedia}>
					<h3>Entre em contato conosco</h3>
					<div className={styles.socialMediaIcons}>
						<a href="https://discord.gg/vGH7wJN9"><i class="fab fa-discord fa-2x"></i></a>
						<a href="mailto:jsinvale@gmail.com"><i class="fas fa-at fa-2x"></i></a>
					</div>
				</section>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
