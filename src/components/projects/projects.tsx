import { useLanguage } from "../../contex/context.tsx";
import { useEffect, useState } from "react";
import styles from './projects.module.css';

const Projects = () => {

	const { language, getTextByCategory } = useLanguage();
	const [state, setState] = useState<any>();

	useEffect( () => {
		setState(getTextByCategory('projects'))
	}, [language] );

	return (
		state && <section className={ styles.projects }>
			<h2 className={ styles.h2 }>{state.projects}</h2>

            <div className={ styles.wrapper }>

                <div className={ styles.wrapperItem }>
                    <div className={ styles.wrapperTitle }>
                        <img className={ styles.imgTitle } src="/projects/procharity.jpg" alt="Procharity"/>
                        <div>
                            <p className={ styles.title }>Procharity</p>
                            <p className={ styles.subTitle }>{ state.procharityText }</p>
                        </div>
                    </div>
                    <div className={ styles.wrapperSocial }>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/git.svg" alt="ГитХаб"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://procharity.ru/">{ state.link }</a>
                        </div>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/link.svg" alt="Cсылка"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://github.com/AntonKarpukhin">GitHub</a>
                        </div>
                    </div>
                </div>


                <div className={ styles.wrapperItem }>
                    <div className={ styles.wrapperTitle }>
                        <img className={ styles.imgTitle } src="/projects/midas.jpg" alt="Midas"/>
                        <div>
                            <p className={ styles.title }>Midas</p>
                            <p className={ styles.subTitle }>{ state.midasText }</p>
                        </div>
                    </div>
                    <div className={ styles.wrapperSocial }>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/git.svg" alt="ГитХаб"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://midas.antonkarpukhin.com/">{ state.link }</a>
                        </div>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/link.svg" alt="Cсылка"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://github.com/AntonKarpukhin/midas-frontend">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className={ styles.wrapperItem }>
                    <div className={ styles.wrapperTitle }>
                        <img className={ styles.imgTitle } src="/projects/cinema.jpg" alt="MovieDB"/>
                        <div>
                            <p className={ styles.title }>MovieDB</p>
                            <p className={ styles.subTitle }>{ state.movieDBText }</p>
                        </div>
                    </div>
                    <div className={ styles.wrapperSocial }>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/git.svg" alt="ГитХаб"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://cinema.antonkarpukhin.com/">{ state.link }</a>
                        </div>
                        <div className={ styles.wrapperLink }>
                            <div className={ styles.wrapperImg }>
                                <img className={ styles.img } src="/projects/link.svg" alt="Cсылка"/>
                            </div>
                            <a target="_blank" className={ styles.link }
                               href="https://github.com/AntonKarpukhin/cinema-nextjs">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}

export default Projects;