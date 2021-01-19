import Header from '@includes/header'
import styles from './styles.module.css'


export default function DefaultLayout(props){
	return(
		<main className={styles.main}>
			<Header className={styles.header} />
			{props.children}
		</main>
	)
}
