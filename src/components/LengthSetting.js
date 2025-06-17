import { useSettings } from "../context/SettingsContext";

const LengthSetting = () => {
	const { advancedSettings, passwordLength, setPasswordLength } = useSettings();
	return (
		<div className="setting">
			<div className="sub-setting">
				<label>Password Length</label>
				<input
					className="number-input"
					type="number"
					value={Math.min(
						Math.max(passwordLength, advancedSettings ? 1 : 6),
						advancedSettings ? 128 : 32
					)}
					onClick={(e) => e.target.select()}
					onChange={(e) =>
						setPasswordLength(
							Math.min(
								Math.max(e.target.value, advancedSettings ? 1 : 6),
								advancedSettings ? 128 : 32
							)
						)
					}
					min={advancedSettings ? 1 : 6}
					max={advancedSettings ? 128 : 32}
				/>
			</div>

			<input
				className="range-input"
				type="range"
				value={passwordLength}
				onChange={(e) => setPasswordLength(e.target.value)}
				min={advancedSettings ? 1 : 6}
				max={advancedSettings ? 128 : 32}
				step={1}
			/>
		</div>
	);
};

export default LengthSetting;
