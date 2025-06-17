import { useSettings } from "../context/SettingsContext";

const CountSetting = () => {
	const { passwordsCount, setPasswordsCount } = useSettings();

	return (
		<div className="setting">
			<div className="sub-setting">
				<label>Passwords Count</label>
				<input
					className="number-input"
					type="number"
					value={passwordsCount}
					onClick={(e) => e.target.select()}
					onChange={(e) => setPasswordsCount(Math.min(Math.max(e.target.value, 1), 100))}
					min={1}
					max={100}
				/>
			</div>

			<input
				className="range-input"
				type="range"
				value={passwordsCount}
				onChange={(e) => setPasswordsCount(e.target.value)}
				min={1}
				max={100}
				step={1}
			/>
		</div>
	);
};

export default CountSetting;
