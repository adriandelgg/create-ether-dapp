import {
	toast,
	ToastOptions,
	Theme,
	ToastPosition,
	TypeOptions
} from 'react-toastify';

function handleToast(
	type: TypeOptions,
	message: string,
	position: ToastPosition = 'top-center',
	theme: Theme = 'colored'
) {
	const options: ToastOptions = {
		type,
		position,
		theme,
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true
	};

	toast(message, options);
}

export default handleToast;
