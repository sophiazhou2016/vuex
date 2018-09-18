const exec = require('child_process').exec
const { prompt } = require('inquirer')
console.log('exec:', exec)
// const chalk = require('chalk')
// 询问用户想运行哪个模块，放入module变量当中
const question = [
  {
    type: 'input',
    name: 'module',
    message: 'Module name:',
    validate(val) {
      if (val === '') {
        return 'Module name is required!'
      }
      return true
    }

  }
]
module.exports = prompt(question).then(({ module }) => {
  // 要运行的模块作为参数传给dev-server.js
  let cmdStr = `node ./build/dev-server.js ${module}`
  var child = exec(cmdStr)
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  child.stderr.on('data', function (err) {
    console.log(err)
    process.exit()
  })
})
