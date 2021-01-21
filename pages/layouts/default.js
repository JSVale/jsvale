import Footer from '@includes/footer'
import Header from '@includes/header'
import styles from './styles.module.css'

export default function DefaultLayout(props){
	return(
		<main className={styles.main}>
			<Header />
			{props.children}
			<Footer />
		</main>

	)
}
