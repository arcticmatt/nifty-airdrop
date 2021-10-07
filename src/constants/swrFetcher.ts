import axios from "axios";

const swrFetcher = (url: string) => axios.get(url).then((res) => res.data);

export default swrFetcher;
