import { useSettings } from "../context/SettingsContext";
import { useToasts } from "../context/ToastsContext";
import { KEY_SVG } from "../assets/SVGs";

const GenerateButton = () => {
	const {
		passwordLength,
		passwordsCount,
		includeLowercaseLetters,
		lowercaseLetters,
		includeUppercaseLetters,
		uppercaseLetters,
		includeNumbers,
		numbers,
		includeSpecialCharacters,
		specialCharacters,
		setPasswords,
	} = useSettings();

	const { showToast } = useToasts();

	const generatePassword = () => {
		if (
			!includeLowercaseLetters &&
			!includeUppercaseLetters &&
			!includeNumbers &&
			!includeSpecialCharacters
		) {
			showToast("To generate password you must select atleast one checkbox", "error");
			return;
		}

		let characterList = "";
		if (includeLowercaseLetters) characterList += lowercaseLetters;
		if (includeUppercaseLetters) characterList += uppercaseLetters;
		if (includeNumbers) characterList += numbers;
		if (includeSpecialCharacters) characterList += specialCharacters;

		if (characterList.length === 0) {
			showToast("No characters are provided for password generation", "error");
			return;
		}

		let passwordsArray = new Array(passwordsCount).fill("");
		for (let i = 0; i < passwordsCount; i++) {
			let generatedPassword = "";
			for (let j = 0; j < Number(passwordLength); j++) {
				let randomIndex = Math.floor(Math.random() * characterList.length);
				generatedPassword += characterList[randomIndex];
			}
			passwordsArray[i] = generatedPassword;
		}

		setPasswords(passwordsArray);

		showToast("Password(s) generated successfully", "success");
	};

	return (
		<div className="generate-btn" onClick={generatePassword}>
			Generate<div>{KEY_SVG}</div>
		</div>
	);
};

export default GenerateButton;
