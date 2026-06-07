# 📷 Range to Image Render for Google Sheets

![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)
![Google Apps Script](https://img.shields.io/badge/Apps%20Script-4285F4?style=for-the-badge&logo=google&logoColor=white)
![html2canvas](https://img.shields.io/badge/html2canvas-FF6F00?style=for-the-badge&logo=html5&logoColor=white)

A powerful and elegant Google Apps Script project that allows you to instantly convert any selected cell range in Google Sheets into a high-quality, perfectly formatted image (PNG). 

Say goodbye to manual screenshots! This tool flawlessly preserves your formatting, cell dimensions, and merged cells, offering up to 3x Ultra HD resolution rendering.

---

## ✨ Features

- **Pixel-Perfect Rendering**: Accurately preserves background colors, font colors, font sizes, weights, alignments, and text wrapping.
- **Merge Cell Support**: Flawlessly handles merged rows and columns.
- **Dynamic Resolution Scaling**: Choose between 1× Normal, 2× HD, or 3× Ultra resolutions to get crisp, high-definition images.
- **Seamless UI/UX**: Features a beautiful, modern Google Workspace-inspired user interface with a smooth sine-wave loading animation.
- **Powered by `html2canvas`**: Uses the robust `html2canvas` library to render an exact HTML replica directly to an image canvas.

---

## 🚀 Installation Guide

Follow these simple steps to install the script in your Google Sheet:

1. Open your Google Sheet.
2. In the top menu, go to **Extensions** > **Apps Script**.
3. Clear any existing code in the script editor.
4. Create two files in the Apps Script editor:
   - `Code.gs` (Script file)
   - `Preview.html` (HTML file)
5. Copy the code from this repository into their respective files.
6. Click **Save** (💾).
7. Refresh your Google Sheet. You will now see a new menu item called **📷 Range2Image** in the top bar.

---

## 📖 How to Use

1. **Select** the range of cells you want to convert into an image.
2. Click on the **📷 Range2Image** menu at the top of your Google Sheet.
3. Select **Convert Selection to Image**.
4. A beautiful modal dialog will appear, processing your selection and rendering the image.
5. Once rendered, you can adjust the desired **Resolution** (1×, 2× HD, or 3× Ultra) from the top toolbar.
6. **Right-click** the generated image to copy it to your clipboard or save it to your computer!

---

## 🛠️ Technical Details

- **Backend (`Code.gs`)**: Extracts the exact visual metadata, styling, and dimensions of the user's `ActiveRange` using the Apps Script Spreadsheet service.
- **Frontend (`Preview.html`)**: HTML / Vanilla CSS / JavaScript constructs an invisible replica table based on the extracted metadata.
- **Rendering Engine**: [html2canvas (v1.4.1)](https://html2canvas.hertzen.com/) translates the DOM table elements into a downloadable base64 image.

---

## 👤 Credits & Author

This project was developed by **0xkabir**.

*If you found this tool useful, feel free to star the repository and share it with others!*
