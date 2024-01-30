import PersonInfo from "../../components/person-info/person-info.tsx";
import Contacts from "../../components/contacts/contacts.tsx";
import Language from "../../components/language/language.tsx";
import styles from './layout-left.module.css';

const LayoutLeft = () => {
	return (
		<section className={styles.layoutLeft}>
			<PersonInfo/>
			<Contacts/>
			<Language/>
		</section>
	)
}

export default LayoutLeft;