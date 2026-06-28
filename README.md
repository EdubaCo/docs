# edubaco/docs

Public documentation repository for **Eduba**. Authors and translators contribute here;
the content is consumed back by the Eduba monorepo as a git submodule at `apps/docs/content/`.

## Structure

```
docs/               # English source pages
i18n/ar/            # Arabic translations
i18n/fa/            # Persian translations
```

## Contributing

1. Fork, edit files in `docs/` (English) or `i18n/<locale>/` (translations).
2. Run `node check-parity.mjs` to verify locale mirrors the source file set.
3. Open a PR with `git commit -s` (DCO sign-off).

## License

[MIT](LICENSE) — contributions are inbound MIT (ADR-0073).
