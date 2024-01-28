import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './contacts.module.css';


const Contacts = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('contacts'))
	}, [language] );

	return (
		state && <address className={ styles.contacts }>
			<div className={styles.line}></div>
			<div className={styles.wrapperSocial}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/mail.svg" alt="Почта"/>
				</div>
				<div className={styles.wrapperContacts}>
					<p className={ styles.email }>{state.email}</p>
					<a target="_blank" className={ styles.link } href="mailto:a.karpukhin21@mail.ru">a.karpukhin21@mail.ru</a>
				</div>
			</div>

			<div className={styles.wrapperSocial}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/telegram.svg" alt="Телеграм"/>
				</div>
				<div className={styles.wrapperContacts}>
					<p className={ styles.telegram }>{state.telegram}</p>
					<a target="_blank" className={ styles.link } href="https://t.me/LembrarB">t.me/LembrarB</a>
				</div>
			</div>

			<div className={styles.wrapperSocial}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/phone.svg" alt="Телефон"/>
				</div>
				<div className={styles.wrapperContacts}>
					<p className={ styles.phone }>{state.phone}</p>
					<a target="_blank" className={ styles.link } href="tel:+79683747857">+7 (968) 374-78-57</a>
				</div>
			</div>

			<div className={styles.wrapperSocial}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/projects/git.svg" alt="ГитХаб"/>
				</div>
				<div className={styles.wrapperContacts}>
					<p className={ styles.gitHub }>GitHub</p>
					<a target="_blank" className={ styles.link } href="https://github.com/AntonKarpukhin">github.com/AntonKarpukhin</a>
				</div>
			</div>

			<div className={styles.wrapperSocial}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/location.svg" alt="Адрес"/>
				</div>
				<div className={styles.wrapperContacts}>
					<p className={ styles.address }>{state.address}</p>
					<p className={ styles.link }>Russia, Moscow</p>
				</div>
			</div>
		</address>
	)
}

export default Contacts;