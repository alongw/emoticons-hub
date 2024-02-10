import { Router } from 'express'
import fse from 'fs-extra'

import { getImgList } from './../utils/getImg'

// import logger from './../utils/log'

const router = Router()

// 传递哈希值，解析目录下的文件
router.get('/getImgList', async (req, res) => {
    if (!req.query.hash) {
        return res.send({
            status: 400,
            msg: 'Hash is required.'
        })
    }

    // 先判断有没有 data 目录
    if (!fse.existsSync('./data')) {
        return res.send({
            status: 404,
            msg: 'Data directory not found.'
        })
    }

    const result = getImgList(req.query.hash.toString())

    if (result.status !== 1) {
        return res.send({
            status: 404,
            msg: 'Can not find the target folder.',
            data: {
                raw: {
                    msg: result.msg,
                    status: result.status
                }
            }
        })
    }

    res.send({
        status: 200,
        msg: 'Success.',
        data: {
            fileList: result.data.fileList,
            hash: result.data.hash
        }
    })
})

export default router
