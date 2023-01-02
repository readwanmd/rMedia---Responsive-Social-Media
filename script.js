//sidebar
const menuItems = document.querySelectorAll('.menu-item');

// messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme
const theme = document.getElementById('theme');
const themeModal = document.querySelector('.customized-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// remove active class from menu items
const changeActiveItem = () => {
	menuItems.forEach((item) => {
		item.classList.remove('active');
	});
};

menuItems.forEach((item) => {
	item.addEventListener('click', () => {
		changeActiveItem();
		item.classList.add('active');

		if (item.id != 'notifications') {
			document.querySelector('.notifications-popup').style.display = 'none';
		} else {
			document.querySelector('.notifications-popup').style.display = 'block';
			document.querySelector(
				'#notifications .notification-count'
			).style.display = 'none';
		}
	});
});

// messages
//search chats
const searchMessage = () => {
	const val = messageSearch.value.toLowerCase();
	console.log(val);
	message.forEach((user) => {
		let name = user.querySelector('h5').textContent.toLowerCase();
		if (name.indexOf(val) != -1) {
			user.style.display = 'flex';
		} else {
			user.style.display = 'none';
		}
	});
};

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight message card when message is cliked in menu
messagesNotification.addEventListener('click', () => {
	messagesNotification.querySelector('.notification-count').style.display =
		'none';
	messages.style.boxShadow = '0 0 1rem var(--color-primary)';
	setTimeout(() => {
		messages.style.boxShadow = 'none';
	}, 2000);
});

//Theme Customization
const openThemeModal = () => {
	themeModal.style.display = 'grid';
};

//open modal
theme.addEventListener('click', openThemeModal);

const closeThemeModal = (e) => {
	if (e.target.classList.contains('customized-theme')) {
		themeModal.style.display = 'none';
	}
};

//close modal
themeModal.addEventListener('click', closeThemeModal);

const removeSizeSelector = () => {
	fontSizes.forEach((size) => {
		size.classList.remove('active');
	});
};

// Fonts
fontSizes.forEach((size) => {
	size.addEventListener('click', () => {
		removeSizeSelector();
		let fontSize;
		size.classList.add('active');

		if (size.classList.contains('font-size-1')) {
			fontSize = '10px';
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '5.4rem');
		} else if (size.classList.contains('font-size-2')) {
			fontSize = '13px';
			root.style.setProperty('--sticky-top-left', '5.4rem');
			root.style.setProperty('--sticky-top-right', '-7rem');
		} else if (size.classList.contains('font-size-3')) {
			fontSize = '15px';
			root.style.setProperty('--sticky-top-left', '-2rem');
			root.style.setProperty('--sticky-top-right', '-17rem');
		} else if (size.classList.contains('font-size-4')) {
			fontSize = '17px';
			root.style.setProperty('--sticky-top-left', '-5rem');
			root.style.setProperty('--sticky-top-right', '-25rem');
		} else if (size.classList.contains('font-size-5')) {
			fontSize = '19px';
			root.style.setProperty('--sticky-top-left', '-12rem');
			root.style.setProperty('--sticky-top-right', '-35rem');
		}

		//change html root font size
		document.querySelector('html').style.fontSize = fontSize;
	});
});

const removeColorSelector = () => {
	colorPalette.forEach((color) => {
		color.classList.remove('active');
	});
};

// change primary color
colorPalette.forEach((color) => {
	color.addEventListener('click', () => {
		removeColorSelector();
		let primaryHue;
		color.classList.add('active');

		if (color.classList.contains('color-1')) {
			primaryHue = 252;
		} else if (color.classList.contains('color-2')) {
			primaryHue = 52;
		} else if (color.classList.contains('color-3')) {
			primaryHue = 352;
		} else if (color.classList.contains('color-4')) {
			primaryHue = 152;
		} else if (color.classList.contains('color-5')) {
			primaryHue = 202;
		}

		root.style.setProperty('--primary-color-hue', primaryHue);
	});
});

// change background color
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
	root.style.setProperty('--light-color-lightness', lightColorLightness);
	root.style.setProperty('--white-color-lightness', whiteColorLightness);
	root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

Bg1.addEventListener('click', () => {
	lightColorLightness = '95%';
	whiteColorLightness = '100%';
	darkColorLightness = '17%';

	// add active class
	Bg1.classList.add('active');
	//remove active class
	Bg2.classList.remove('active');
	Bg3.classList.remove('active');
	changeBG();
});

Bg2.addEventListener('click', () => {
	lightColorLightness = '10%';
	whiteColorLightness = '20%';
	darkColorLightness = '100%';

	// add active class
	Bg2.classList.add('active');
	//remove active class
	Bg1.classList.remove('active');
	Bg3.classList.remove('active');
	changeBG();
});

Bg3.addEventListener('click', () => {
	lightColorLightness = '5%';
	whiteColorLightness = '8%';
	darkColorLightness = '100%';

	// add active class
	Bg3.classList.add('active');
	//remove active class
	Bg1.classList.remove('active');
	Bg2.classList.remove('active');
	changeBG();
});
