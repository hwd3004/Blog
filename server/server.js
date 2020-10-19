import app from "./app";
import config from "./config/index";

const { PORT } = config;

app.listen(PORT, () => {
  console.log(`서버 포트 ${PORT}`);
});
