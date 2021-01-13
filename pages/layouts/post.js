import DefaultLayout from "@layouts/default";
import Head from 'next/head'

export default function PostLayout(props){
	return(
		<DefaultLayout>
			<Head>
				<title>{props.title}</title>
				<meta name='description' content={props.description} />
			</Head>
			<article>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<div dangerouslySetInnerHTML={{__html:props.content}} />
			</article>
		</DefaultLayout>
	)
}
