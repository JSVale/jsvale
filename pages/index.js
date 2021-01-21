import { getAllPosts } from '@api';
import Head from 'next/head'
import Link from 'next/link'
import { FaAt, FaDiscord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si'
import styles from '../styles/Home.module.css'

export default function Home(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Vale</title>
				<link rel="icon" href="https://avatars3.githubusercontent.com/u/57258568?v=4" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>
			<main>
				<p className={styles.instructions}>Instruções para o curso de desenvolvimento web</p>
				<p className={styles.dateCourse}>O curso vai acontecer nos dias 25, 26 e 27 de Janeiro de 2021</p>
				<section className={styles.posts}>
					{props.posts.map((post, idx) => (
						<article key={idx}>
							<Link href={'/posts/' + post.slug}>
								<a className={styles.linkPost}>{post.title}</a>
							</Link>
						</article>
					))}
				</section>
			</main>
			<footer className={styles.footer}>
				<p>Nossos links</p>
				<div className={styles.links}>
					<Link href="https://discord.gg/vGH7wJN9"><a><FaDiscord size={40} /></a></Link>
					<Link href="mailto:jsinvale@gmail.com"><a><FaAt size={40} /></a></Link>
					<Link href="https://www.notion.so/JS-Vale-df525e12f8ae492698c2bef0dd4d8276"><a><SiNotion size={40} /></a></Link>
				</div>
			</footer>
		</div>

	)
}

export async function getStaticProps() {
	const siteData = await import('../config.json');
	const allPosts = await getAllPosts();
	return {
		props: {
			posts: allPosts,
			title: siteData.default.title,
			description: siteData.default.description,
		}
	}
}
