import { useSettings } from "../context/SettingsContext";
import { useToasts } from "../context/ToastsContext";
import { CLIPBOARD_COPY_SVG } from "../assets/SVGs";

const PasswordContainer = () => {
	const { passwords } = useSettings();

	const { showToast } = useToasts();

	const copySingle = (password) => {
		navigator.clipboard.writeText(password);
		showToast("Password is copied to clipboard", "info");
	};

	const copyAll = () => {
		navigator.clipboard.writeText(passwords.join("\n"));
		showToast("All passwords are copied to clipboard", "info");
	};

	return (
		<div className="password-container">
			{passwords.length > 0 ? (
				<>
					{passwords.length > 1 && (
						<div className="copy-all" onClick={copyAll}>
							{CLIPBOARD_COPY_SVG}
							<span>Copy All</span>
						</div>
					)}

					<ul>
						{passwords.map((password, index) => (
							<li
								className="password"
								key={index}
								title="Click to copy this password"
								onClick={() => copySingle(password)}>
								{password}
							</li>
						))}
					</ul>
				</>
			) : (
				<div className="no-password">No passwords generated yet.</div>
			)}
		</div>
	);
};

export default PasswordContainer;
