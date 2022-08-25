import { parse } from "yaml"
const path = require("node:path")
const fs = require("node:fs")

// 获取项目运行环境
export const getEnv = () => process.env.RUNNING_ENV

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv()
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`)
  const file = fs.readFileSync(yamlPath, "utf-8")
  const config = parse(file)

  return config
}
