import fse from 'fs-extra'
import yaml from 'yaml'
import logger from './log'

interface Config {
    port: number
    baseUrl: string
}

const defaultConfig: Config = {
    port: 3000,
    baseUrl: '/api'
}

logger.info('Loading config...')

// 检查有没有配置文件 ./config.yaml

if (!fse.existsSync('./config.yaml')) {
    logger.warn('Config file not found, creating...')
    fse.writeFileSync('./config.yaml', yaml.stringify(defaultConfig))
    logger.info('Config file created, please edit it and restart the service.')
    process.exit(0)
}

// 读取配置文件
const config: Config = yaml.parse(fse.readFileSync('./config.yaml', 'utf-8'))

export default config
