import Header from '@includes/header'

export default function DefaultLayout(props){
	return(
		<main>
			<Header />
			{props.children}
		</main>
	)
}
