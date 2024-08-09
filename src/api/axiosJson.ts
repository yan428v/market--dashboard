import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const base_url = import.meta.env.VITE_BASE_URL;
const axiosJson = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosJson
