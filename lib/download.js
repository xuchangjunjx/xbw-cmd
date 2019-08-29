const ora = require('ora')
const downloadgit = require('download-git-repo')
const exists = require('fs').existsSync
const logger = require('../lib/logger')
const rm = require('rimraf').sync
const { getTemplatePath } = require('../lib/local-path')

module.exports = function download (template, projectName, tmp) {
  // loading
  const spinner = ora('downloading template')
  // 获取项目初始化地址
  const tmppath = getTemplatePath(projectName + tmp)
  spinner.start() // loading begin
  // 如果目标目录已经存在就删除
  if (exists(tmppath)) rm(tmppath)
  return new Promise((resolve, reject) => {
    // 从git上下载
    downloadgit(template, tmppath, err => {
      if (err) {
        spinner.fail(
          `Failed to download repo ${template}: ${err.message.trim()} `
        )
        reject(err)
      } else {
        spinner.succeed()
        logger.success('init project succeed! please run command:')
        logger.info('')
        logger.success(`$ cd ${projectName}\n$ npm install`)
        logger.info('')
        resolve(tmppath, projectName)
      }
    })
  })
}
