const RESET_SVG = (
	<svg width={18} height={18} viewBox="0 0 21 21">
		<g
			fill="none"
			fillRule="evenodd"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1}>
			<path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"></path>
			<path d="M7.5 6.5h-4v-4"></path>
		</g>
	</svg>
);

const KEY_SVG = (
	<svg width={20} height={20} viewBox="0 0 150 153" fill="none">
		<path d="M143.75 66.938h-37.5v19.124h37.5V66.939Z" fill="#188038" />
		<path
			d="M40.625 111.562C21.719 111.562 6.25 95.784 6.25 76.5s15.469-35.063 34.375-35.063S75 57.216 75 76.5c0 19.284-15.469 35.062-34.375 35.062Zm0-51C32.031 60.563 25 67.734 25 76.5c0 8.766 7.031 15.938 15.625 15.938 8.594 0 15.625-7.172 15.625-15.938 0-8.766-7.031-15.938-15.625-15.938Z"
			fill="#4285F4"
		/>
		<path
			d="M131.25 86.063h-25v19.125h12.5v-6.376c0-3.506 2.812-6.374 6.25-6.374s6.25 2.868 6.25 6.374v6.376h12.5V86.062h-12.5Z"
			fill="#34A853"
		/>
		<path
			d="M73.75 66.938H53.125C55 69.647 56.25 72.834 56.25 76.5c0 3.666-1.25 6.853-3.125 9.563H73.75C74.531 83.034 75 79.847 75 76.5c0-3.347-.469-6.534-1.25-9.563Z"
			fill="#EA4335"
		/>
		<path
			d="M106.25 66.938h-32.5C74.531 69.966 75 73.153 75 76.5c0 3.347-.469 6.534-1.25 9.563h32.5V66.936Z"
			fill="#FBBC04"
		/>
	</svg>
);

const CLIPBOARD_COPY_SVG = (
	<svg width={16} height={16} viewBox="0 0 16 16">
		<path
			fill="currentColor"
			d="M0 2.729V2a1 1 0 0 1 1-1h2v1H1v12h4v1H1a1 1 0 0 1-1-1zM12 5V2a1 1 0 0 0-1-1H9v1h2v3zm-1 1h2v9H6V6zV5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2z"></path>
		<path
			fill="currentColor"
			d="M7 10h5V9H7zm0-2h5V7H7zm0 4h5v-1H7zm0 2h5v-1H7zM9 2V1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1h1V1h4v1zM3 3h6V2H3z"></path>
	</svg>
);

const GITHUB_SVG = (
	<svg width={36} height={36} viewBox="0 0 24 24">
		<mask id="lineMdGithubLoop0" width={24} height={24} x={0} y={0}>
			<g fill="#fff">
				<ellipse cx={9.5} cy={9} rx={1.5} ry={1}></ellipse>
				<ellipse cx={14.5} cy={9} rx={1.5} ry={1}></ellipse>
			</g>
		</mask>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}>
			<path
				strokeDasharray={32}
				strokeDashoffset={32}
				d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					dur="1.225s"
					values="32;0"></animate>
			</path>
			<path
				strokeDasharray={10}
				strokeDashoffset={10}
				d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5">
				<animate
					attributeName="d"
					dur="5.25s"
					repeatCount="indefinite"
					values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"></animate>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.4s"
					dur="0.35s"
					values="10;0"></animate>
			</path>
		</g>
		<rect width={8} height={4} x={8} y={11} fill="currentColor" mask="url(#lineMdGithubLoop0)">
			<animate
				attributeName="y"
				dur="17.5s"
				keyTimes="0;0.45;0.46;0.54;0.55;1"
				repeatCount="indefinite"
				values="11;11;7;7;11;11"></animate>
		</rect>
	</svg>
);

const LINKEDIN_SVG = (
	<svg width={36} height={36} viewBox="0 0 24 24">
		<circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
			<animate fill="freeze" attributeName="fill-opacity" dur="0.3s" values="0;1"></animate>
		</circle>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3.5}>
			<path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.3s"
					dur="0.4s"
					values="12;0"></animate>
			</path>
			<path strokeDasharray={12} strokeDashoffset={12} d="M10 10v10">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="0.9s"
					dur="0.4s"
					values="12;0"></animate>
			</path>
			<path
				strokeDasharray={24}
				strokeDashoffset={24}
				d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.3s"
					dur="0.4s"
					values="24;0"></animate>
			</path>
		</g>
	</svg>
);

export { RESET_SVG, KEY_SVG, CLIPBOARD_COPY_SVG, GITHUB_SVG, LINKEDIN_SVG };
