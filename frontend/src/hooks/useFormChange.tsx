import { useState, ChangeEvent } from "react";

export function useFormChange<T extends Record<string, unknown>>(
	formValues: T
) {
	const [values, setValues] = useState(formValues);

	function handleChange({
		currentTarget
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
		const { name, value } = currentTarget;

		setValues(prev => ({ ...prev, [name]: value }));
	}

	const resetForm = () => setValues(formValues);

	return [values, handleChange, resetForm, setValues] as const;
}
