import axios from "axios";

axios.defaults.headers.common["Connection"] = "keep-alive";
axios.defaults.headers.common["Keep-Alive"] = "timeout=120, max=1000";

export default axios;
