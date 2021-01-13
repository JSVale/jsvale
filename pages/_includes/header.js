import Link from 'next/link'
import styles from "../../styles/Header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<ul>
				<li><Link href="/"><a>Voltar</a></Link></li>
			</ul>
		</header>
	)
}
