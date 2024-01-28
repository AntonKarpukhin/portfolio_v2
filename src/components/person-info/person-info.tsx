import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './person-info.module.css';

const PersonInfo = () => {

	const { language, getTextByCategory, toggleLanguage } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('person'))
	}, [language] );

	return (
		state && <section className={ styles.personInfo }>
            <p className={ styles.name }>{ state.name }</p>
            <p className={ styles.job }>Full-Stack Developer</p>
            <div className={ styles.wrapper }>
                <q className={ styles.quote }>{ state.quote }</q>
                <p className={ styles.quoteName }>Alan Perlis</p>

            </div>
            <button className={ styles.languageButton } onClick={ toggleLanguage }>
				{ language === 'en' ? 'Сменить язык' : 'Change language' }
            </button>
        </section>
	)
}

export default PersonInfo;