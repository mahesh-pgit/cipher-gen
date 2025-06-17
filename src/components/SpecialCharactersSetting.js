import { useSettings } from "../context/SettingsContext";
import { DEFAULT_SPECIAL_CHARACTERS } from "../utils/constants";
import { RESET_SVG } from "../assets/SVGs";

const SpecialCharactersSetting = () => {
	const {
		includeSpecialCharacters,
		setIncludeSpecialCharacters,
		advancedSettings,
		specialCharacters,
		setSpecialCharacters,
	} = useSettings();

	return (
		<div className="setting">
			<div className="sub-setting">
				<div className="sub-sub-setting">
					<label>
						<input
							className="checkbox-input"
							type="checkbox"
							checked={includeSpecialCharacters}
							onChange={(e) => setIncludeSpecialCharacters(e.target.checked)}
						/>
						Special Characters<span>(!@#$%&?/...)</span>
					</label>
				</div>

				{advancedSettings && includeSpecialCharacters && (
					<div
						className="reset-btn"
						title="Reset Special Characters"
						onClick={() => setSpecialCharacters(DEFAULT_SPECIAL_CHARACTERS)}>
						{RESET_SVG}
					</div>
				)}
			</div>

			{advancedSettings && (
				<input
					className="text-input"
					type="text"
					value={specialCharacters}
					onChange={
						(e) =>
							setSpecialCharacters(
								Array.from(new Set(e.target.value))
									.join("")
									.replace(/[^!#$%&\"'()*+,\-./:;<=>?@[\\\]^_`{|}~]+/g, "")
							) // Remove duplicates and non-special characters
					}
					disabled={!includeSpecialCharacters}
				/>
			)}
		</div>
	);
};

export default SpecialCharactersSetting;
