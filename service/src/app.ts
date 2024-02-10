import logger from './utils/log'
import config from './utils/config'

import { getImgHash } from './utils/getImg'

import fse from 'fs-extra'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

logger.info('Emoticons Hub Service is starting...')
logger.info(
    'Powered by ALONGW | https://alongw.cn/ | https://github.com/alongw/emoticons-hub'
)

!fse.existsSync('./data') && fse.mkdirSync('./data')

const hashList = getImgHash()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(config.baseUrl, async (req, res, next) =>
    (await import('./router/index')).default(req, res, next)
)

hashList.forEach((e) => {
    app.use(`${config.baseUrl}/file/${e.hash}`, express.static(`./data/${e.dir}`))
})

app.all(config.baseUrl, (req, res) => {
    res.send({
        status: 200,
        msg: 'Emoticons Hub Service is running. | https://github.com/alongw/emoticons-hub | https://alongw.cn/',
        data: {
            author: 'ALONGW',
            github: 'https://github.com/alongw/emoticons-hub',
            webSize: 'https://alongw.cn/'
        }
    })
})

app.all('*', (req, res) => {
    res.status(404).send({
        status: 404,
        msg: 'Not Found.'
    })
})

app.listen(config.port, () => {
    logger.info(`Emoticons Hub Service is running at http://localhost:${config.port}`)
})
