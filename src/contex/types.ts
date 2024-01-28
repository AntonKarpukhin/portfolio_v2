import React from "react";

export type Language = 'ru' | 'en';

export interface PersonData {
	name: string;
	quote: string;
}

export interface ContactsData {
	email: string;
	telegram: string;
	phone: string;
	address: string;
}

export interface LanguageData {
	person: { [key in Language]: PersonData };
	contacts: { [key in Language]: ContactsData };
	language: { [key in Language]: { russia: string; english: string } };
	about: { [key in Language]: { about: string; text: string[] } };
	projects: { [key in Language]: { projects: string; procharityText: string; midasText: string; link: string } };
	experience: {
		[key in Language]: {
			experience: string;
			november: string;
			september: string;
			december: string;
			january: string;
			now: string;
			jobOne: string;
			jobTwo: string;
			jobThree: string;
		}
	};
	education: {
		[key in Language]: { education: string; november: string; september: string; december: string; may: string; march: string; january: string }
	};
	skills: { [key in Language]: { skills: string } };
}

export interface LanguageContextProps {
	language: Language;
	toggleLanguage: () => void;
	getTextByCategory: (category: keyof LanguageData) => string[] | undefined;
}

export interface PersonInfoProps {
	children?: React.ReactNode;
}