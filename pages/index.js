import { getAllPosts } from '@api';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home(props) {
	return (
		<div className={styles.container}>
			<Head>
				<title>JS Vale</title>
				<link rel="icon" href="https://avatars3.githubusercontent.com/u/57258568?v=4" />
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>
			{props.posts.map((post, idx) => (
				<article key={idx}>
					<Link href={'/posts/' + post.slug}>
						<a><h3>{post.title}</h3></a>
						<p>{post.description}</p>
					</Link>
				</article>
			))}

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
