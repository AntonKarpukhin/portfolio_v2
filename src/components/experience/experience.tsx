import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './experience.module.css';

const Experience = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('experience'))
	}, [language] );

	return (
		state && <section className={ styles.experience }>
			<h2 className={ styles.h2 }>{state.experience}</h2>

			<div className={ styles.wrapperExperience }>
				<div className={ styles.line }></div>
				<img className={ styles.dot } src="/litle-dot.svg" alt="Точка"/>
				<div className={ styles.wrapperGrid }>
					<div className={ styles.wrapper }>
						<p className={ styles.info }>{state.january}  2023 - {state.now}</p>
						<div className={ styles.wrapperJob }>
							<img className={ styles.imgJob } src="/experience/help.svg" alt="help"/>
							<div className={ styles.wrapperInfo }>
								<p className={ styles.info }>Junior Full-Stack Developer</p>
								<p className={ styles.name }>Procharity</p>
							</div>
						</div>
					</div>
					<p className={ styles.text }>{state.jobOne}</p>
				</div>
			</div>

			<div className={ styles.wrapperExperience }>
				<div className={ `${ styles.line } ${ styles.lineNext }` }></div>
				<img className={ styles.dot } src="/litle-dot.svg" alt="Точка"/>
				<div className={ styles.wrapperGrid }>
					<div className={ styles.wrapper }>
						<p className={ styles.info }>{state.november} 2023 - {state.december} 2023</p>
						<div className={ styles.wrapperJob }>
							<img className={ styles.imgJob } src="/experience/magnit.svg" alt="magnit"/>
							<div className={ styles.wrapperInfo }>
								<p className={ styles.info }>Trainee Frontend Developer</p>
								<p className={ styles.name }>Magnit</p>
							</div>
						</div>
					</div>
					<p className={ styles.text }>{state.jobTwo}</p>
				</div>
			</div>

			<div className={ styles.wrapperExperience }>
				<div className={ `${ styles.line } ${ styles.lineNext }` }></div>
				<img className={ styles.dot } src="/litle-dot.svg" alt="Точка"/>
				<div className={ styles.wrapperGrid }>
					<div className={ styles.wrapper }>
						<p className={ styles.info }>{state.september} 2022 - {state.december} 2023</p>
						<div className={ styles.wrapperJob }>
							<img className={ styles.imgJob } src="/experience/yandex.svg" alt="yandex"/>
							<div className={ styles.wrapperInfo }>
								<p className={ styles.info }>Training Full-Stack Developer</p>
								<p className={ styles.name }>Yandex</p>
							</div>
						</div>
					</div>
					<p className={ styles.text }>{state.jobThree}</p>
				</div>
			</div>

		</section>
	)
}

export default Experience;