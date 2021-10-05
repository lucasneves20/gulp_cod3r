const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

const antes = async (cb) => {
    await console.log('Tarefa de antes!!')
    return cb
}

const anterior = async (cb) => {
    await console.log('Tarefa anterior!!')
    return cb
}

const copiar = async (cb) => {
    await gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb
}

const posterior = async (cb) => {
    await console.log('Tarefa posterior!!')
    return cb
}

module.exports.default = series(
    parallel(antes, anterior),
    copiar,
    posterior,
)

