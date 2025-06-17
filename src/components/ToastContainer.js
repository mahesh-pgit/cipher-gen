import { useToasts } from "../context/ToastsContext";

const ToastContainer = () => {
	const { toasts } = useToasts();

	return (
		<div className="toast-container">
			{toasts.map((toast) => (
				<div key={toast.id} className={`toast ${toast.type}`}>
					{toast.message}
				</div>
			))}
		</div>
	);
};

export default ToastContainer;
