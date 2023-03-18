const loading = document.querySelector('#loading');
const error = document.querySelector('#error');

const showLoading = () => {
	loading.style.display = 'flex';
}

const showError = () => {
	error.style.display = 'flex';
}

export { showLoading, showError };