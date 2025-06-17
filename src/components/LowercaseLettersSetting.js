import { useSettings } from "../context/SettingsContext";
import { DEFAULT_LOWERCASE_LETTERS } from "../utils/constants";
import { RESET_SVG } from "../assets/SVGs";

const LowercaseLettersSetting = () => {
	const {
		includeLowercaseLetters,
		setIncludeLowercaseLetters,
		advancedSettings,
		lowercaseLetters,
		setLowercaseLetters,
	} = useSettings();

	return (
		<div className="setting">
			<div className="sub-setting">
				<div className="sub-sub-setting">
					<label>
						<input
							className="checkbox-input"
							type="checkbox"
							checked={includeLowercaseLetters}
							onChange={(e) => setIncludeLowercaseLetters(e.target.checked)}
						/>
						Lowercase Letters<span>(a-z)</span>
					</label>
				</div>

				{advancedSettings && includeLowercaseLetters && (
					<div
						className="reset-btn"
						title="Reset Lowercase Letters"
						onClick={() => setLowercaseLetters(DEFAULT_LOWERCASE_LETTERS)}>
						{RESET_SVG}
					</div>
				)}
			</div>

			{advancedSettings && (
				<input
					className="text-input"
					type="text"
					value={lowercaseLetters}
					onChange={
						(e) =>
							setLowercaseLetters(
								Array.from(new Set(e.target.value.toLowerCase()))
									.join("")
									.replace(/[^a-z]+/g, "")
							) // Remove duplicates and non-lowercase characters
					}
					disabled={!includeLowercaseLetters}
				/>
			)}
		</div>
	);
};

export default LowercaseLettersSetting;
