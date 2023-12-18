# Google Gemini 免翻墙代理

## 自己部署

### Deno

点击[这个链接][1]，可以快速一键部署到 Deno Deploy 上。

然后在 Settings 选项卡里可以设置自定义二级域名，或者绑定自己的域名。

## 本地开发

```bash
deno run --allow-net --allow-read --allow-env --watch deno.ts
```

[1]: https://dash.deno.com/new?url=https://raw.githubusercontent.com/mylxsw/gemini-proxy/main/deno.ts
