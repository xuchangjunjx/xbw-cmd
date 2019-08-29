/**
 * @author xubowen
 * 为了读取项目初始化路径
 */
const path = require('path');

module.exports = {
  isLocalPath(templatePath) {
    return /^[./]|(^[a-zA-Z]:)/.test(templatePath);
  },

  getTemplatePath(templatePath) {
    return path.isAbsolute(templatePath)
      ? templatePath
      : path.normalize(path.join(process.cwd(), templatePath));
  }
};
