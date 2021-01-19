import Link from 'next/link'
import styles from "../../styles/Header.module.css"
import {FaArrowLeft} from 'react-icons/fa'

export default function Header() {
	return (
		<header className={styles.header}>
			<ul>
				<li>
					<FaArrowLeft />
					<Link href="/"><a>Voltar</a></Link></li>
			</ul>
		</header>
	)
}
