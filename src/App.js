import { useSettings } from "./context/SettingsContext";
import AdvancedToggleSwitch from "./components/AdvancedToggleSwitch";
import LengthSetting from "./components/LengthSetting";
import CountSetting from "./components/CountSetting";
import LowercaseLettersSetting from "./components/LowercaseLettersSetting";
import UppercaseLettersSetting from "./components/UppercaseLettersSetting";
import NumbersSetting from "./components/NumbersSetting";
import SpecialCharactersSetting from "./components/SpecialCharactersSetting";
import GenerateButton from "./components/GenerateButton";
import PasswordContainer from "./components/PasswordContainer";
import ToastContainer from "./components/ToastContainer";
import Footer from "./components/Footer";

const App = () => {
	const { advancedSettings } = useSettings();

	return (
		<div className="app">
			<div className="app-container">
				<div>
					<h1 className="app-heading">Cipher Gen</h1>
				</div>

				<AdvancedToggleSwitch />

				<div className="password-settings">
					<LengthSetting />

					{advancedSettings && <CountSetting />}

					<LowercaseLettersSetting />

					<UppercaseLettersSetting />

					<NumbersSetting />

					<SpecialCharactersSetting />
				</div>

				<GenerateButton />

				<PasswordContainer />
			</div>

			<ToastContainer />

			<Footer />
		</div>
	);
};

export default App;
