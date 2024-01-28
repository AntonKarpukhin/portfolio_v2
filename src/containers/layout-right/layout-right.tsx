import styles from './layout-right.module.css';
import Education from "../../components/education/education.tsx";
import Skills from "../../components/skills/skills.tsx";
import Experience from "../../components/experience/experience.tsx";
import Projects from "../../components/projects/projects.tsx";
import About from "../../components/about/about.tsx";

const LayoutRight = () => {

	return (
		<section className={ styles.layoutRight }>
			<About/>
			<Projects/>
			<Experience/>
			<Education/>
			<Skills/>
		</section>
	)
}

export default LayoutRight;