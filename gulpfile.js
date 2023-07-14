const {src, dest, watch, parallel, series} = require('gulp');
/*parallel - позволяет осуществлять несколько процессов друг за другом,
series - позволяет выбирать какой процесс за каким пойдет*/

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');


/*если надо подключить несколько файлов 
    return src([
        'node_modules/swiper/swiper-bundle.js'
        'src/js/main.js'

        'src/js/*.js',  возмет все js файлы из указанной папки
        '!src/js/main.min.js'  кроме этого
    ]) */
function scripts() {
    return src('src/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('src/js'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('src/sass/**/*.+(scss|sass)')
        .pipe (autoprefixer({ overrideBrowserslist: ['last 10 version']}))
        .pipe(concat('style.min.css'))
        .pipe(scss({outputStyle: 'compressed' }))
        .pipe(dest('src/css'))
        .pipe(browserSync.stream())
}

function watching() {
    watch(['src/sass/**/*.+(scss|sass)'], styles)
    watch(['src/js/main.js'], scripts)
    watch(['src/*.html']).on('change', browserSync.reload)
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
}

function cleanDist() {
    return src('dist')
        .pipe(clean())
}

function building() {
    return src([
        'src/css/style.min.css',
        'src/js/main.min.js',
        'src//**/*.html'
    ], {base: 'src'})
        .pipe(dest('dist'))
} 
/* таск build копирует в dist выбранные файлы дабы отсеять мусор*/
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);
exports.cleanDist = cleanDist;
exports.default = parallel(styles, scripts, browsersync, watching);