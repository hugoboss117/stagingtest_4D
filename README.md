# 4D Construction Staging Viewer

This project provides a simple static viewer that simulates a 4D construction timeline using pre-rendered images.

## Usage

Open `index.html` in any modern web browser. Use the slider at the bottom to move through construction stages. The current stage name and date are displayed above the slider.

### Adding or editing stages

1. Place the stage image in the `images/` folder.
2. Add an entry to `stages.js` with the stage name, date (`YYYY-MM-DD`), and image path.
3. Adjust any styling in `style.css` using the provided CSS variables.

The setup is intentionally lightweight so it can be easily extended with custom styles, icons, or additional UI elements.
