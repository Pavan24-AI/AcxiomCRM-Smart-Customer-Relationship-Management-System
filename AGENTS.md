<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use a browser-safe React context for session-only sample CRM records; this frontend-only assignment must not imply server persistence or real authentication.
- Place shareable modules in separate TanStack routes and reuse a common workspace shell and record views to keep navigation and validation consistent.
- Keep all visual theme values in the global design system so shared controls and charts stay consistent.
