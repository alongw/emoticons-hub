import axios, { type Response } from '@/utils/axios'

export const getImgList = (data: { hash: string }) => {
  return axios.get<
    Response<{
      fileList: string[]
      hash: string
    }>
  >(`/getImgList?hash=${data.hash}`)
}
