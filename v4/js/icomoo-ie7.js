/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-plus' : '&#x61;',
			'icon-arrow-down' : '&#x62;',
			'icon-cd' : '&#x64;',
			'icon-list' : '&#x66;',
			'icon-statistics' : '&#x22;',
			'icon-warning' : '&#x23;',
			'icon-new' : '&#x24;',
			'icon-cube' : '&#x25;',
			'icon-lock' : '&#x26;',
			'icon-network' : '&#x21;',
			'icon-drive' : '&#x27;',
			'icon-cross' : '&#x28;',
			'icon-cog' : '&#x29;',
			'icon-cross-2' : '&#x2b;',
			'icon-users' : '&#x2a;',
			'icon-user' : '&#xe000;',
			'icon-camera' : '&#xe001;',
			'icon-hourglass' : '&#xe002;',
			'icon-broadcast' : '&#xe004;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};