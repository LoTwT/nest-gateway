import { parse } from "yaml"
const path = require("node:path")
const fs = require("node:fs")

// 获取项目运行环境
export const getEnv = () => process.env.RUNNING_ENV

// 读取项目配置
export const getConfig = () => {
  const environment = getEnv()

  let file

  try {
    file = fs.readFileSync(
      path.join(process.cwd(), `./.config/.${environment}.local.yaml`),
      "utf-8",
    )
  } catch (error) {
    file = fs.readFileSync(
      path.join(process.cwd(), `./.config/.${environment}.yaml`),
      "utf-8",
    )
  }

  const config = parse(file)

  return config
}
