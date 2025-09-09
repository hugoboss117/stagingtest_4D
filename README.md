# 4D Construction Staging Viewer

This project provides a simple static viewer that simulates a 4D construction timeline using pre-rendered images.

## Usage

Open `index.html` in any modern web browser. Use the slider at the bottom to move through construction stages. The current stage name and date are displayed above the slider.
No build step or server is required; all assets are static.

### Adding or editing stages

1. Place the stage image in the `images/` folder.
2. Add an entry to `stages.js` with the stage name, date (`YYYY-MM-DD`), image path, and `position` (0–100) to control where the stage falls on the timeline.
3. Adjust any styling in `style.css` using the provided CSS variables such as `--timeline-bg` and `--handle-img` to swap in your own timeline and slider handle imagery. Placeholder SVGs (`images/timeline-placeholder.svg` and `images/handle-placeholder.svg`) are included.

The setup is intentionally lightweight so it can be easily extended with custom styles, icons, or additional UI elements.
