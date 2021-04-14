const rutValid = rutDestructured => {
	rutDestructured = destructured(rutDestructured);
	if (!rutDestructured) return rutDestructured;

	let dvIn = typeof rutDestructured[1] === 'number' ? rutDestructured[1] : rutDestructured[1].toUpperCase();
	let dvOut = dvCorrect();

	function dvCorrect() {
		let rutNumberReverse = rutDestructured[0].split('').reverse();
		let sumAll = rutNumberReverse.reduce((acum, digit, index) => {
			if (index + 2 === 8) index = 0;
			if (index + 2 === 9) index = 1;
			let multipler = index + 2;

			acum += digit * multipler;

			return acum;
		}, 0);

		return module11(sumAll);
	}

	function module11(num) {
		let quotient = Math.trunc(num / 11);
		let division = 11 - Math.trunc(num - 11 * quotient);

		switch (division) {
			case 11:
				return 0;
			case 10:
				return 'K';
			default:
				return division;
		}
	}

	return dvIn == dvOut;
};

const rutFormated = rutDestructured => {
	rutDestructured = destructured(rutDestructured);
	if (!rutDestructured) return rutDestructured;

	rutDestructured[0] = Number(rutDestructured[0]).toLocaleString('es-CL');
	return rutDestructured.join('-').trim();
};

function destructured(rut) {
	if (rut.length < 8) return false;
	let rutOnlyNumber = rut.replace(/\.|-/g, '').slice(0, -1);
	let dv = rut.slice(-1);
	return [rutOnlyNumber, dv];
}

export { rutFormated, rutValid };
