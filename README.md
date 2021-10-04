# report-collector
研究に使うデータを収集する

## setup
mysqlでDBを用意する
```yaml
mysqlConfig = {
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "password",
  database: "lab",
}
```
[最新の設定](https://github.com/kakubin/report-collector/blob/master/config/index.ts)


用意できたらマイグレーションを実行
```sh
deno run --allow-net ./config/index.ts
```

.envrcにappID(cinii API利用者個別に発行)を設定
```sh
echo 'APPID = xxxxxxx' > .envrc
```
