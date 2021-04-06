const rigisterRouter = require('./registerUser');
const loginRouter = require('./loginUser')
const postRoiter = require('./postTask')


function routes(app) {

    app.use('/api/auth', rigisterRouter)
    app.use('/api/auth', loginRouter)
    app.use('/api/task', postRoiter)

}

module.exports = routes