import DefaultLayout from "@layouts/default";
import Head from 'next/head'
import styles from '../../styles/Post.module.css'

export default function PostLayout(props){
	return(
		<DefaultLayout>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.description} />
			</Head>
			<article className={styles.article}>
				<h1>{props.title}</h1>
				<div dangerouslySetInnerHTML={{__html:props.content}} />
			</article>
		</DefaultLayout>
	)
}
