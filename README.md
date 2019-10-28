# worker-sites-pwa-template
A CloudFlare Worker Sites template updated to pass the Chrome Lighthouse PWA Audit

![Lighthouse Audit](/chrome_lighthouse_audit.png)

An example site can be viewed [here.](https://worker-site-pwa-template.tmarsden.workers.dev/)
## Usage

clone
```bash
git clone https://github.com/temarsden/worker-sites-pwa-template.git
```
install [`wrangler`](https://github.com/cloudflare/wrangler).

### ... with `npm`

```bash
npm i @cloudflare/wrangler -g
```

### ... or with `cargo`

```bash
cargo install wrangler
```

### Enter your CloudFlare Workers Account ID in wrangler.toml

```bash
account_id = "<your-cloudflare-workers-account-id>"
```

### Publish

```bash
wrangler publish
```
