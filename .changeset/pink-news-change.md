---
'@andrsrxn/icons': major
---

Breaking: ESM-only package

`@andrsrxn/icons` is now distributed as an ESM-only package.

CommonJS consumers using `require()` are no longer supported. Your project must use a supported Node.js version and enable ESM by setting `"type": "module"` in `package.json`.

Supported Node.js versions:

- `20.16.0` or higher
- `22.19.0` or higher
- `24.0.0` or higher

Add the following to your `package.json`:

```json
{
  "type": "module"
}
```

If your application is currently CommonJS-only, migrate it to ESM before upgrading to this version.

If you use TypeScript, make sure your module configuration is compatible with ESM.
