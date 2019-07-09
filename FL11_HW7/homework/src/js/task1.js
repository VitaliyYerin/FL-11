const userEmail = prompt('Enter your email', '');
const valueEmail = 6;
const valuePassword = 5;

if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
	const userPassword = prompt('Enter your password', '');
		if (userEmail === 'user@gmail.com') {
			if (userPassword === 'UserPass') {
				const anotherPassword = confirm('Do you want to change your password?');
					if (!anotherPassword) {
						alert('You have failed the change.');
					} else if (anotherPassword) {
						const userPassword = prompt('Enter your old password', '');
							if (userPassword === 'UserPass') {
								const newPassword = prompt('Enter your new password', '');
									if (newPassword.length < valuePassword) {
										alert('It’s too short password. Sorry')
									} else if (newPassword) {
										const confirmationPassword = prompt('enter the password again', '');
											if (confirmationPassword === newPassword) {
												alert('You have successfully changed your password.')
											} else {
												alert('You wrote the wrong password.')
											}
									}
							} else if (userPassword === null || userPassword === '') {
									alert('Canceled');
							} else {
								alert('Wrong password');
							}
					}
			} else if (userPassword === null || userPassword === '') {
					alert('Canceled');
			} else {
					alert('Wrong password');
			}
		} else if (userEmail === 'admin@gmail.com') {
			if (userPassword === 'AdminPass') {
				const anotherPassword = confirm('Do you want to change your password?');
				if (!anotherPassword) {
						alert('You have failed the change.');
				} else if (anotherPassword) {
					const userPassword = prompt('Enter your old password', '');
						if (userPassword === 'AdminPass') {
							const newPassword = prompt('Enter your new password', '');
								if (newPassword.length < valuePassword) {
									alert('It’s too short password. Sorry')
								} else if (newPassword) {
									const confirmationPassword = prompt('Enter the password again', '');
										if (confirmationPassword === newPassword) {
											alert('You have successfully changed your password.')
										} else {
											alert('You wrote the wrong password.')
										}
								}
						} else if (userPassword === null || userPassword === '') {
								alert('Canceled');
						} else {
								alert('Wrong password');
						}
				}
			} else if (userPassword === null || userPassword === '') {
					alert('Canceled');
			} else {
					alert('Wrong password');
			}
		}
} else if (userEmail === null || userEmail === '') {
	alert('Canceled');
} else if (userEmail.length < valueEmail) {
	alert('I don\'t know any emails having name length less than 6 symbols');
} else {
	alert('I don’t know you');
}