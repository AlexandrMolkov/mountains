import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import cleanCss from 'gulp-clean-css'
import autoprefixer from 'gulp-autoprefixer'
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import rename from 'gulp-rename'
import {deleteAsync} from 'del'
import browserSync from 'browser-sync'
import webpack from 'webpack-stream'


const sass = gulpSass(dartSass);
const BUILD_FOLDER = './dist'
const SOURCE_FOLDER = './src'

const reset = () => {
    return deleteAsync(BUILD_FOLDER)
}

const html = ()=> {
    return gulp.src(`${SOURCE_FOLDER}/*.html`)
        .pipe(plumber(
            notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
            )
        )
        .pipe(gulp.dest(BUILD_FOLDER))
        .pipe(browserSync.stream())
        
}

const scss = () => {
    return gulp.src(`${SOURCE_FOLDER}/style.scss`, {sourcemaps: true})
        .pipe(plumber(
            notify.onError({
                title: "scss",
                message: "Error: <%= error.message %>"
            })
            )
        )
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(gulp.dest(`${BUILD_FOLDER}/css`))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(gulp.dest(`${BUILD_FOLDER}/css`))
        .pipe(gulp.src(`${SOURCE_FOLDER}/**.css`, {sourcemaps: true}))
        .pipe(gulp.dest(`${BUILD_FOLDER}/css`))
        .pipe(browserSync.stream())
}

const images = ()=> {
    return gulp.src(`${SOURCE_FOLDER}/img/**/*`)
        .pipe(plumber(
            notify.onError({
                title: "images",
                message: "Error: <%= error.message %>"
            })
            )
        )
        .pipe(gulp.dest(`${BUILD_FOLDER}/img`))
}

const js = () => {
    return buildJS()
        .pipe(browserSync.stream()) 
}

const buildJS = ()=> {
    return gulp.src(`${SOURCE_FOLDER}/js/script.js`, {sourcemaps: true})
    .pipe(plumber(
        notify.onError({
            title: "js",
            message: "Error: <%= error.message %>"
        })
        )
    )
    .pipe(webpack({
        mode: 'development',
        devtool: 'source-map',
        output: {
            filename: 'app.min.js',
        }
    }))
    .pipe(gulp.dest(`${BUILD_FOLDER}/js`))
}

const watch = () => {
    gulp.watch(`${SOURCE_FOLDER}/**/*.html`, html)
    gulp.watch(`${SOURCE_FOLDER}/**/*.scss`, scss)
    gulp.watch(`${SOURCE_FOLDER}/**/*.js`, js)
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: `${BUILD_FOLDER}/`
        },
        notify: false,
        port: 3000,
    })
}

const fonts = () => {
    return gulp.src(`${SOURCE_FOLDER}/fonts/*.*`)
        .pipe(plumber(
            notify.onError({
                title: "fonts",
                message: "Error: <%= error.message %>"
            })
            )
        )
        .pipe(gulp.dest(`${BUILD_FOLDER}/fonts`))
}

const mainTasks = gulp.parallel(html,scss,js,images,fonts)

gulp.task('default', gulp.series(reset, mainTasks, gulp.parallel(watch, server)))
gulp.task('images', gulp.parallel(images))
gulp.task('scripts', gulp.parallel(buildJS))
gulp.task('fonts', gulp.parallel(fonts))