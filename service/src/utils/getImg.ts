import fse from 'fs-extra'
import CryptoJS from 'crypto-js'

import logger from './log'

// 获取文件下的所有文件夹
let dirs: string[] = null

try {
    !fse.existsSync('./data') && fse.mkdirSync('./data')
    const files = fse.readdirSync('./data')
    // 过滤掉文件 只需要文件夹
    dirs = files.filter((file) => fse.statSync(`./data/${file}`).isDirectory())
} catch (err) {
    logger.error(err)
}

export const getImgHash = () => {
    if (!dirs) {
        return []
    }
    try {
        const hashList = dirs.map((dir) => {
            return {
                dir: dir,
                hash: CryptoJS.MD5(dir).toString()
            }
        })

        return hashList
    } catch (error) {
        return []
    }
}

export const getImgList = (hash: string) => {
    if (!hash || !dirs) {
        return {
            status: -1,
            msg: 'Invalid hash or dirs.'
        }
    }
    // 将所有文件夹转换为哈希值
    const hashList = dirs.map((dir) => {
        return {
            dir: dir,
            hash: CryptoJS.MD5(dir).toString()
        }
    })

    // 查找哈希值对应的文件夹
    const target = hashList.find((item) => item.hash === hash)
    if (!target) {
        return {
            status: -1,
            msg: 'Can not find the target folder.'
        }
    }

    try {
        // 读取文件夹下的所有文件
        const files = fse.readdirSync(`./data/${target.dir}`)

        return {
            status: 1,
            data: {
                fileList: files,
                dir: target.dir,
                hash: target.hash
            }
        }
    } catch (error) {
        return {
            status: -1,
            msg: 'Can not find the target folder.'
        }
    }
}
