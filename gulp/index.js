'use strict';

import gulp from 'gulp';

export default function(tasks) {
	tasks.forEach((task) => {
		gulp.task(task, require(`./tasks/${task}.js`));
	});

	return gulp;
}
