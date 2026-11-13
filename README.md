# ANIMA — Yoga brand website

A polished, responsive one-page site designed for GitHub Pages. It uses a calm editorial layout, the supplied palette, an Instagram connection, and deliberately editable placeholders instead of invented business details.

## Edit first

The page is plain HTML, CSS, and JavaScript—no build step needed.

- Update the studio name, short copy, and practice descriptions in `index.html`.
- Replace `[ Your city / online ]`, `[ Add format / duration ]`, `@yourhandle`, and `hello@example.com` with real details when ready.
- Change the Instagram URL in the `instagram-link` anchor in `index.html` if the featured post changes.
- The cover uses the supplied class photograph in `assets/hero-yoga-class.jpg`. Replace it with an image you own whenever needed, and update the reference in `styles.css` if its filename changes.

## Typography

The page falls back to Playfair Display and DM Sans from Google Fonts so it renders immediately. To use your licensed **Ogg TRIAL** and **PP Mori** files:

1. Create a `fonts/` directory at the project root.
2. Add the licensed `.woff2` files as `Ogg-Regular.woff2` and `PPMori-Regular.woff2` (or change those filenames in `styles.css`).
3. Uncomment the two `@font-face` lines at the top of `styles.css`.

Do not commit font files unless your font licence permits web hosting and distribution.

## Publish with GitHub Pages

1. Create a new GitHub repository and upload these files to its default branch (`main`).
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. GitHub displays the public site URL after deployment. Updates pushed to `main` republish automatically.

For a project repository, the published URL normally looks like `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Files

```
index.html           Page content and editable links
styles.css           Visual design, responsive layout, font setup
script.js            Mobile navigation and footer year
assets/hero-yoga-class.jpg User-supplied yoga class cover image
```
