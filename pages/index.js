import { getAllPosts } from '@api';
import Footer from '@includes/footer';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ allPosts }) {
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
					{allPosts.map((post) => (
						<article key={post.slug}>
							<Link href={'/posts/' + post.slug}>
								<a className={styles.linkPost}>{post.title}</a>
							</Link>
							<p className={styles.description}>
								{post.excerpt}
							</p>
						</article>
					))}
				</section>
			</main>
			<Footer />
		</div>

	)
}

export async function getStaticProps() {
	const allPosts = await getAllPosts([
		'title',
		'excerpt',
	]);
	return {
		props: {
			allPosts
		}
	}
}
