import { useSettings } from "../context/SettingsContext";
import { DEFAULT_UPPERCASE_LETTERS } from "../utils/constants";
import { RESET_SVG } from "../assets/SVGs";

const UppercaseLettersSetting = () => {
	const {
		includeUppercaseLetters,
		setIncludeUppercaseLetters,
		advancedSettings,
		uppercaseLetters,
		setUppercaseLetters,
	} = useSettings();

	return (
		<div className="setting">
			<div className="sub-setting">
				<div className="sub-sub-setting">
					<label>
						<input
							className="checkbox-input"
							type="checkbox"
							checked={includeUppercaseLetters}
							onChange={(e) => setIncludeUppercaseLetters(e.target.checked)}
						/>
						Uppercase Letters<span>(A-Z)</span>
					</label>
				</div>

				{advancedSettings && includeUppercaseLetters && (
					<div
						className="reset-btn"
						title="Reset Uppercase Letters"
						onClick={() => setUppercaseLetters(DEFAULT_UPPERCASE_LETTERS)}>
						{RESET_SVG}
					</div>
				)}
			</div>

			{advancedSettings && (
				<input
					className="text-input"
					type="text"
					value={uppercaseLetters}
					onChange={
						(e) =>
							setUppercaseLetters(
								Array.from(new Set(e.target.value.toUpperCase()))
									.join("")
									.replace(/[^A-Z]+/g, "")
							) // Remove duplicates and non-uppercase characters
					}
					disabled={!includeUppercaseLetters}
				/>
			)}
		</div>
	);
};

export default UppercaseLettersSetting;
