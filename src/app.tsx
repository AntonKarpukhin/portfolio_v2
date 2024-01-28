import styles from './app.module.css';
import LayoutLeft from "./containers/layout-left/layout-left.tsx";
import LayoutRight from "./containers/layout-right/layout-right.tsx";

function App() {


  return (
	  <div className={ styles.app }>
		  <LayoutLeft/>
		  <LayoutRight/>
	  </div>
  )
}

export default App
