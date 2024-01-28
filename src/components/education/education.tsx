import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './education.module.css';

const Education = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('education'))
	}, [language] );

	return (
		state && <section className={ styles.education }>
			<h2 className={ styles.h2 }>{state.education}</h2>

			<div className={ styles.wrapperGrid }>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/yandex.svg" alt="Coursera"/>
						<p className={ styles.school }>Yandex Practicum</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Full-Stack Developer</p>
						<p className={ styles.day }>{state.november} 2022 - {state.december} 2023</p>
					</div>
				</div>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/node-svgrepo-com.svg" alt="Coursera"/>
						<p className={ styles.school }>Purple School</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Node.js</p>
						<p className={ styles.day }>{state.september} 2023</p>
					</div>
				</div>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/next-js.svg" alt="Next.js"/>
						<p className={ styles.school }>Purple School</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Next.js</p>
						<p className={ styles.day }>{state.may} 2023</p>
					</div>
				</div>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/udemy.svg" alt="Udemy"/>
						<p className={ styles.school }>Udemy</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Typescript and Design Patterns</p>
						<p className={ styles.day }>{state.september} 2023</p>
					</div>
				</div>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/coursera.svg" alt="Coursera"/>
						<p className={ styles.school }>Coursera</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Frontend Developer</p>
						<p className={ styles.day }>{state.march} 2022</p>
					</div>
				</div>

				<div className={ styles.wrapper }>
					<div className={ styles.wrapperImg }>
						<img className={ styles.img } src="/education/udemy.svg" alt="Udemy"/>
						<p className={ styles.school }>Udemy</p>
					</div>
					<div className={ styles.wrapperName }>
						<p className={ styles.name }>Full course Frontend Developer</p>
						<p className={ styles.day }>{state.january} 2022</p>
					</div>
				</div>

			</div>

		</section>
	)
}

export default Education;