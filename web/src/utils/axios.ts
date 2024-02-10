import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_HTTP_BASE_URL

export type Response<T = any> = { status: number; msg: string; data: T }

export default axios
