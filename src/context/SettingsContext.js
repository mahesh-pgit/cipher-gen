import { createContext, useState, useContext } from "react";
import {
	DEFAULT_LOWERCASE_LETTERS,
	DEFAULT_UPPERCASE_LETTERS,
	DEFAULT_NUMBERS,
	DEFAULT_SPECIAL_CHARACTERS,
} from "../utils/constants";

const SettingsContext = createContext(null);

const SettingsProvider = ({ children }) => {
	const [advancedSettings, setAdvancedSettings] = useState(false);

	const [passwordLength, setPasswordLength] = useState(15);

	const [passwordsCount, setPasswordsCount] = useState(1);

	const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(true);
	const [lowercaseLetters, setLowercaseLetters] = useState(DEFAULT_LOWERCASE_LETTERS);

	const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(true);
	const [uppercaseLetters, setUppercaseLetters] = useState(DEFAULT_UPPERCASE_LETTERS);

	const [includeNumbers, setIncludeNumbers] = useState(true);
	const [numbers, setNumbers] = useState(DEFAULT_NUMBERS);

	const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(true);
	const [specialCharacters, setSpecialCharacters] = useState(DEFAULT_SPECIAL_CHARACTERS);

	const [passwords, setPasswords] = useState([]);

	const settings = {
		advancedSettings,
		setAdvancedSettings,
		passwordLength,
		setPasswordLength,
		passwordsCount,
		setPasswordsCount,
		includeLowercaseLetters,
		setIncludeLowercaseLetters,
		lowercaseLetters,
		setLowercaseLetters,
		includeUppercaseLetters,
		setIncludeUppercaseLetters,
		uppercaseLetters,
		setUppercaseLetters,
		includeNumbers,
		setIncludeNumbers,
		numbers,
		setNumbers,
		includeSpecialCharacters,
		setIncludeSpecialCharacters,
		specialCharacters,
		setSpecialCharacters,
		passwords,
		setPasswords,
	};

	return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
};

const useSettings = () => useContext(SettingsContext);

export { SettingsProvider, useSettings };
