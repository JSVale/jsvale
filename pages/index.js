import { getAllPosts } from '@api';
import Head from 'next/head'
import Link from 'next/link'
import Header from '@includes/header'
import styles from '../styles/Home.module.css'

export default function Home(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Vale</title>
				<link rel="icon" href="https://avatars3.githubusercontent.com/u/57258568?v=4" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
			</Head>
			<Header />
			<ul>
				{props.posts.map((post, idx) => (
					<li key={idx}>
						<Link href={'/posts/'+post.slug}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>

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

export async function getStaticProps() {
	const allPosts = await getAllPosts();
	return {
		props: {
			posts: allPosts
		}
	}
}
