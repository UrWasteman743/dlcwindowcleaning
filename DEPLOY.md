# How to put this website on GitHub Pages (free hosting)

The website builds itself into plain HTML/CSS/JS files, so it can be hosted
free on GitHub Pages. Follow these steps once — after that, every time you
update the files, GitHub rebuilds and republishes the site automatically
(takes about 2–3 minutes).

## 1. Get a GitHub account

Sign up at https://github.com if you don't have one yet.

## 2. Create a repository

1. On GitHub, click the **+** in the top-right corner and choose **New repository**.
2. Give it a name, e.g. `dlc-window-cleaning`.
   - Tip: if you name the repository exactly `<your-username>.github.io`,
     the site will live at `https://<your-username>.github.io` with no extra
     part in the address. Any other name works too — the site will then be at
     `https://<your-username>.github.io/<repository-name>/`.
3. Set it to **Public**, leave all other options unticked, and click **Create repository**.

## 3. Upload the files

1. Unzip this package. You'll see the website files (including `package.json`
   inside the `dlc-window-cleaning-source` folder) — upload everything,
   including the hidden `.github` folder.
2. The easiest way is GitHub's drag-and-drop uploader:
   https://github.com/new — scroll down and use **"uploading an existing file"**,
   then drag the contents of the unzipped folder in and click **Commit changes**.

   > Note: the web uploader skips hidden folders. If `.github` doesn't go up,
   > create the folder `github/workflows` on GitHub by adding the file
   > `deploy-pages.yml` (from this package's `.github/workflows/` folder) at
   > path `.github/workflows/deploy-pages.yml` — use **"Create new file"** and
   > type that path in the name box.

## 4. Turn on GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. Within a couple of minutes the site goes live at the address shown
in Settings → Pages (and on the green tick in the **Actions** tab).

## Updating the site later

Edit or re-upload any file and commit — GitHub rebuilds and republishes
automatically. If a change doesn't appear, check the **Actions** tab for a
failed run, then hard-refresh the page (Ctrl+Shift+R).

## Good to know

- **Contact form:** on GitHub Pages the quote form doesn't send emails anywhere
  (same as on the current live site) — it nudges visitors to call
  07887 376762 instead. If you want a working form, a free form service
  (e.g. Formspree or Web3Forms) can be wired in later.
- **Lovable hosting still works:** this project can also keep being published
  with the Publish button in Lovable — the two don't conflict.
