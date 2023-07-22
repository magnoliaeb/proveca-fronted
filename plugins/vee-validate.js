import { extend } from 'vee-validate';
import {
	required,
	alpha,
	email,
	min,
	max,
	confirmed,
	digits,
	regex,
} from 'vee-validate/dist/rules';

extend('required', {
	...required,
	message: '{_field_} es requerido',
});
extend('requiredF', {
	...required,
	message: '{_field_} es requerida',
});

extend('email', {
	...email,
	message: 'El correo electrónico debe ser válido',
});

extend('min', {
	...min,
	message: '{_field_} debe tener {length} caracteres.',
	// message: '{_field_} needs to be {length} digits. ({_value_})',
});

extend('max', {
	...max,
	message: '{_field_} no puede tener más de {length} caracteres.',
});

extend('confirmed', {
	...confirmed,
	message: 'Las contraseñas no coinciden',
});

extend('digits', {
	...digits,
	message: '{_field_} debe tener {length} digitos. ({_value_})',
});

extend('regex', {
	...regex,
	message: '{_field_} {_value_} does not match {regex}',
});

extend('numeric', (value) => {
	const regex = /^([0-9]+)$/;
	if (regex.test(value)) {
		return true;
	}

	return 'El campo campo solo puede contener caracteres numéricos';
});
