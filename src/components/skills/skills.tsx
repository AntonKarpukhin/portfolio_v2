import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './skills.module.css';

const Skills = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('skills'))
	}, [language] );

	return (
		state && <section className={ styles.skills }>
			<h2 className={ styles.h2 }>{state.skills}</h2>

			<div className={ styles.wrapperGrid }>
				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/html.svg" alt="html"/>
					<p className={ styles.name }>Html</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/css.svg" alt="css"/>
					<p className={ styles.name }>Css</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/sass.svg" alt="sass"/>
					<p className={ styles.name }>Sass</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/javaScript.svg" alt="javaScript"/>
					<p className={ styles.name }>JavaScript</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/typescript.svg" alt="typescript"/>
					<p className={ styles.name }>TypeScript</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/react.svg" alt="react"/>
					<p className={ styles.name }>React</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/next-js.svg" alt="next"/>
					<p className={ styles.name }>Next</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/redux.svg" alt="redux"/>
					<p className={ styles.name }>Redux</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/node.svg" alt="node"/>
					<p className={ styles.name }>Node</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/express.svg" alt="express"/>
					<p className={ styles.name }>Express</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/nest.svg" alt="nest"/>
					<p className={ styles.name }>Nest</p>
				</div>

				<div className={ styles.wrapper }>
					<img className={ styles.img } src="/skills/sql.svg" alt="sql"/>
					<p className={ styles.name }>Sql</p>
				</div>
			</div>
		</section>
	)
}

export default Skills;