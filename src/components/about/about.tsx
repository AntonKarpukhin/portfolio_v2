import styles from './about.module.css';
import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";

const About = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('about'))
	}, [language] );

	return (
		state && <section className={ styles.about }>
			<h2 className={ styles.h2 }>{state[3]}</h2>
			<p className={ styles.text }>
				{ state[ 0 ] }
				<br/><br/>
				{ state[ 1 ] }
				<br/><br/>
				{ state[ 2 ] }
			</p>
		</section>
	)
}

export default About;