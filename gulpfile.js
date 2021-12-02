import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import sync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import imagemin, { mozjpeg, optipng, svgo } from 'gulp-imagemin';
import del from 'del';
import svgSprite from 'gulp-svg-sprite';
import pxToRem from 'gulp-px2rem-converter';
import webpack from 'webpack-stream';
import webpackConfig from './app/webpack.config.js';

const scss = gulpSass(sass);

// Styles
export const styles = () => {
	return gulp
		.src('app/scss/style.scss')
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(
			postcss([
				autoprefixer({
					overrideBrowserslist: ['last 5 version'],
					grid: true,
				}),
			])
		)
		.pipe(concat('style.min.css'))
		.pipe(pxToRem())
		.pipe(gulp.dest('app/css'))
		.pipe(sync.stream());
};

// Scripts for development
export const scripts = () => {
	return gulp
		.src([
			'app/js/index.js',
			'app/js/pages/*.js',
			'app/js/modules/*.js',
			'app/js/vendor/*.js',
		])
		.pipe(sync.stream());
};

// SVG sprites
export const svgSprites = () => {
	return gulp
		.src('app/images/svg/**.svg')
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
		.pipe(gulp.dest('app/images'));
};

// Browser sync (live reload)
export const browserSync = () => {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: 'app/',
		},
	});
};

// Build for production except scripts (they are handled by webpackBundle)
export const prodBuild = () => {
	return gulp
		.src(
			[
				'app/css/style.min.css',
				'app/fonts/**/*',
				'app/js/vendor/*.js',
				'app/js/local-data/*',
				'app/*.html',
			],
			{ base: 'app' }
		)
		.pipe(gulp.dest('dist'));
};

// Scripts for production. Webpack bundle + Babel transpile
export const webpackBundle = () => {
	return gulp
		.src('app/js/burgerMenu.js', 'app/js/index.js')
		.pipe(webpack(webpackConfig), webpack)
		.pipe(gulp.dest('./dist/js'));
};

// Images optimization
export const images = () => {
	return gulp
		.src('app/images/**/*')
		.pipe(
			imagemin([
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(gulp.dest('dist/images'));
};

// Watch
export const watch = () => {
	gulp.watch(['app/scss/**/*.scss'], styles);
	gulp.watch(['app/js/**/*.js'], scripts);
	gulp.watch(['app/*.html']).on('change', sync.reload);
	// watch(['app/images/svg/**.svg'], svgSprites);
};

// Clean dist folder
export const cleanDist = () => del('dist');

// Dev mode - gulp
export default gulp.parallel(styles, svgSprites, watch, browserSync);

// Production build - gulp build
export const build = () =>
	gulp.series(cleanDist, webpackBundle, svgSprites, images, prodBuild);
