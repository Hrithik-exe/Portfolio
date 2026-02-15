# Portfolio Website

A minimalist black and white portfolio website with an admin panel for easy content management.

## 🌐 Live Site

Your portfolio is live at: `https://hrithik-exe.github.io/Portfolio`

## 📝 How to Update Your Portfolio

### Method 1: Using Admin Panel (Recommended)

1. **Open Admin Panel**
   - Open `admin.html` in your browser (double-click the file)
   - All your current content will load automatically

2. **Edit Your Content**
   - Update any section: Hero, About, Experience, Skills, Projects, Contact
   - Add or remove experiences and projects using the buttons
   - Click "Save Changes" to save your edits (saves in browser)

3. **Export Updated HTML**
   - Click "Export HTML" button
   - A new `index.html` file will download
   - Replace the old `index.html` with this new file

4. **Push to GitHub**
   ```bash
   git add index.html
   git commit -m "Updated portfolio content"
   git push
   ```

5. **Wait 1-2 Minutes**
   - Your live site will update automatically
   - Refresh your browser to see changes

### Method 2: Direct HTML Editing

1. Open `index.html` in any text editor
2. Find and edit the content you want to change
3. Save the file
4. Push to GitHub:
   ```bash
   git add index.html
   git commit -m "Updated content"
   git push
   ```

## 📁 File Structure

```
Portfolio/
├── index.html          # Main portfolio page
├── style.css           # All styles
├── script.js           # Animations and interactions
├── admin.html          # Admin panel for editing
├── admin.js            # Admin panel logic
├── profile.jpeg        # Your profile picture
└── README.md           # This file
```

## 🖼️ Updating Profile Picture

1. Replace `profile.jpeg` with your new photo (keep the same filename)
2. Or rename your photo to `profile.jpeg`
3. Push to GitHub:
   ```bash
   git add profile.jpeg
   git commit -m "Updated profile picture"
   git push
   ```

## 🎨 Customizing Colors

The site uses CSS variables in `style.css`. To change colors, edit these lines:

```css
:root {
    --black: #000000;
    --white: #ffffff;
    --gray-100: #f5f5f5;
    /* ... more colors */
}
```

## 🚀 First Time Setup

If you haven't set up GitHub Pages yet:

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/Portfolio`

## 💡 Tips

- **Admin Panel**: Your changes in the admin panel are saved in your browser. Always click "Export HTML" to get the updated file.
- **Testing Locally**: Use Live Server extension in VS Code or Kiro to test changes before pushing.
- **Backup**: Keep a backup of your `index.html` before making major changes.
- **Git Commands**: Always commit and push after making changes to update your live site.

## 🛠️ Common Git Commands

```bash
# Check status of your files
git status

# Add all changed files
git add .

# Commit with a message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes (if editing from multiple devices)
git pull
```

## 📧 Contact

For issues or questions about this portfolio, contact: hrithik@example.com

---

**Built with:** HTML, CSS, JavaScript (No frameworks)
**Hosted on:** GitHub Pages
