import { useSettings } from "../context/SettingsContext";
import {
	DEFAULT_LOWERCASE_LETTERS,
	DEFAULT_UPPERCASE_LETTERS,
	DEFAULT_NUMBERS,
	DEFAULT_SPECIAL_CHARACTERS,
} from "../utils/constants";

const AdvancedToggleSwitch = () => {
	const {
		advancedSettings,
		setAdvancedSettings,
		passwordLength,
		setPasswordLength,
		passwordsCount,
		setPasswordsCount,
		lowercaseLetters,
		setLowercaseLetters,
		uppercaseLetters,
		setUppercaseLetters,
		numbers,
		setNumbers,
		specialCharacters,
		setSpecialCharacters,
	} = useSettings();

	!advancedSettings && passwordLength < 6 && setPasswordLength(6);
	!advancedSettings && passwordLength > 32 && setPasswordLength(32);

	!advancedSettings && passwordsCount > 1 && setPasswordsCount(1);

	!advancedSettings &&
		lowercaseLetters !== DEFAULT_LOWERCASE_LETTERS &&
		setLowercaseLetters(DEFAULT_LOWERCASE_LETTERS);

	!advancedSettings &&
		uppercaseLetters !== DEFAULT_UPPERCASE_LETTERS &&
		setUppercaseLetters(DEFAULT_UPPERCASE_LETTERS);

	!advancedSettings && numbers !== DEFAULT_NUMBERS && setNumbers(DEFAULT_NUMBERS);

	!advancedSettings &&
		specialCharacters !== DEFAULT_SPECIAL_CHARACTERS &&
		setSpecialCharacters(DEFAULT_SPECIAL_CHARACTERS);

	return (
		<div className="advanced-settings-toggle">
			<p>Advance</p>
			<div
				className={`switch ${advancedSettings ? "on" : ""}`}
				onClick={() => setAdvancedSettings(!advancedSettings)}>
				<div className="circle"></div>
			</div>
		</div>
	);
};

export default AdvancedToggleSwitch;
