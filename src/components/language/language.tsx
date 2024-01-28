import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './language.module.css';

const Language = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('language'))
	}, [language] );


	return (
		state && <section className={ styles.language }>
			<div className={ styles.line }></div>
			<p className={styles.languageTitle}>Languages</p>
			<div className={styles.wrapperLanguage}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/russia.svg" alt="Русский"/>
				</div>
				<div className={styles.wrapperItems}>
					<p className={ styles.title }>{state.russia}</p>
					<p className={ styles.subTitle }>Native</p>
				</div>
			</div>

			<div className={styles.wrapperLanguage}>
				<div className={ styles.wrapperImg }>
					<img className={ styles.img } src="/profile/english.svg" alt="Великобритания"/>
				</div>
				<div className={styles.wrapperItems}>
					<p className={ styles.title }>{state.english}</p>
					<p className={ styles.subTitle }>Elementary</p>
				</div>
			</div>
		</section>
	)
}

export default Language;