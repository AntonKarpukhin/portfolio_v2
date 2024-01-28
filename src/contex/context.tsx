import React, { createContext, useContext, useState } from 'react';
import { Language, LanguageContextProps, LanguageData, PersonInfoProps } from "./types.ts";
import { dataLanguage } from "./data.ts";

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<PersonInfoProps> = ({ children }) => {
	const [language, setLanguage] = useState<Language>('en');

	const toggleLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'ru' : 'en'));
	};

	const getTextByCategory = (category: keyof LanguageData): any => {
		const categoryData = dataLanguage[category];
		if (categoryData) {
			const languageData = categoryData[language] || categoryData['en'];

			if ('text' in languageData) {
				return [languageData.text].flat();
			}
		}
		if (dataLanguage[category]) {
			return dataLanguage[category][language] || dataLanguage[category]['en'];
		}
		return undefined;
	};

	const value: LanguageContextProps = {
		language,
		toggleLanguage,
		getTextByCategory,
	};

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextProps => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};
