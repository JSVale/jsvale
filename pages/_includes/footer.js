import Link from 'next/link'
import styles from "../../styles/Footer.module.css"
import { FaAt, FaDiscord } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Nossos links</p>
			<div className={styles.links}>
				<Link href="https://discord.gg/vGH7wJN9"><a><FaDiscord size={40} /></a></Link>
				<Link href="mailto:jsinvale@gmail.com"><a><FaAt size={40} /></a></Link>
				<Link href="https://www.notion.so/JS-Vale-df525e12f8ae492698c2bef0dd4d8276"><a><SiNotion size={40} /></a></Link>
			</div>
		</footer>
	)

}
