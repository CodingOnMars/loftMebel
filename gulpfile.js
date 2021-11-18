const { src, dest, watch, parallel, series } = require('gulp');
const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const pxToRem = require('gulp-px2rem-converter');
const webpack = require('webpack-stream');
const webpackConfig = require('./app/webpack.config');

// Webpack bundle + Babel transpile
function webpackBundle() {
	return gulp
		.src('app/js/burgerMenu.js', 'app/js/index.js')
		.pipe(webpack(webpackConfig), webpack)
		.pipe(gulp.dest('./dist/js'));
}

function svgSprites() {
	return src('app/images/svg/**.svg')
		.pipe(
			svgSprite({
				mode: {
					stack: {
						sprite: '../sprite.svg',
					},
					symbol: true,
				},
			})
		)
		.pipe(dest('app/images'));
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/',
		},
	});
}

function cleanDist() {
	return del('dist');
}

function images() {
	return src('app/images/**/*')
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(dest('dist/images'));
}

function scripts() {
	return src([
		'app/js/index.js',
		'app/js/pages/*.js',
		'app/js/modules/*.js',
		'app/js/vendor/*.js',
	]).pipe(browserSync.stream());
}

function styles() {
	return src('app/scss/style.scss')
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(concat('style.min.css'))
		.pipe(pxToRem())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ['last 5 version'],
				grid: true,
			})
		)
		.pipe(dest('app/css'))
		.pipe(browserSync.stream());
}

function build() {
	return src(
		[
			'app/css/style.min.css',
			'app/fonts/**/*',
			'app/js/vendor/*.js',
			'app/js/local-data/*',
			'app/*.html',
		],
		{ base: 'app' }
	).pipe(dest('dist'));
}

function watching() {
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/**/*.js'], scripts);
	watch(['app/*.html']).on('change', browserSync.reload);
	// watch(['app/images/svg/**.svg'], svgSprites);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.svgSprites = svgSprites;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, webpackBundle, svgSprites, images, build);
exports.default = parallel(styles, svgSprites, browsersync, watching);
