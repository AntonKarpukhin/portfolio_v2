import styles from './app.module.css';
import LayoutLeft from "./containers/layout-left/layout-left.tsx";
import LayoutRight from "./containers/layout-right/layout-right.tsx";
import { useLanguage } from "./contex/context.tsx";
import { useEffect, useState } from "react";

function App() {

	const { language } = useLanguage();
	const [opacity, setOpacity] = useState('');
	const [languageChanged, setLanguageChanged] = useState(false);

	useEffect( () => {
		if (!languageChanged) {
			setOpacity('1');
			setLanguageChanged(true);
			return;
		}

		setOpacity('0.3');

		const timeoutId = setTimeout(() => {
			setOpacity('1');
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [language] );


  return (
	  <div className={ `${ styles.app } ${ styles[opacity] }` } style={{opacity: opacity}}>
		  <LayoutLeft/>
		  <LayoutRight/>
	  </div>
  )
}

export default App
