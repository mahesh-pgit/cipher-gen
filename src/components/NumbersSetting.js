import { useSettings } from "../context/SettingsContext";
import { DEFAULT_NUMBERS } from "../utils/constants";
import { RESET_SVG } from "../assets/SVGs";

const NumbersSetting = () => {
	const { includeNumbers, setIncludeNumbers, advancedSettings, numbers, setNumbers } =
		useSettings();

	return (
		<div className="setting">
			<div className="sub-setting">
				<div className="sub-sub-setting">
					<label>
						<input
							className="checkbox-input"
							type="checkbox"
							checked={includeNumbers}
							onChange={(e) => setIncludeNumbers(e.target.checked)}
						/>
						Numbers<span>(0-9)</span>
					</label>
				</div>

				{advancedSettings && includeNumbers && (
					<div
						className="reset-btn"
						title="Reset Numbers"
						onClick={() => setNumbers(DEFAULT_NUMBERS)}>
						{RESET_SVG}
					</div>
				)}
			</div>

			{advancedSettings && (
				<input
					className="text-input"
					type="text"
					value={numbers}
					onChange={
						(e) =>
							setNumbers(
								Array.from(new Set(e.target.value)).join("").replace(/\D+/g, "")
							) // Remove duplicates and non-numeric characters
					}
					disabled={!includeNumbers}
				/>
			)}
		</div>
	);
};

export default NumbersSetting;
