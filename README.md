# 🔑 Cipher Gen | Advanced Password Generator

A sleek and customizable password generator built with React — generate secure passwords using advanced setting options, smart defaults, and a beautiful UI.

## 🚀 Features

-   🎚 **Sliders for Control** – Easily drag to set password length and how many you want to generate.

-   🔠 **Character Options** – Toggle uppercase, lowercase, numbers, and special symbols.

-   🎛 **Advanced Toggle** – One switch to unlock detailed customization like character sets with 🔄 reset functionality.

-   ⚡ **Instant Copy** – Click on a generated password to copy one and `📋Icon` to copy all.

-   🔔 **Toast Notifications** – Feedback on copy actions and generation events.

-   🌈 **Responsive UI** – Built with modern React practices, clean design with animated switch and tailored for a smooth UX.

-   📦 **State Management** – Context API to manage settings cleanly and controlled inputs via React State.

-   ✨ **Pure React and JavaScript** – No external libraries used.

## 📸 Demo

Live Preview: 👉 [Check it out on Vercel](https://cipher-gen.vercel.app)

## 🧪 Try It Out

```bash
git clone https://github.com/mahesh-pgit/cipher-gen
cd cipher-gen
npm install
npm start
```

The app will open at http://localhost:3000

## ⚙️ How It Works

-   **Context-Based State Management:**

    All user settings like password length, count, and character types are stored globally in `SettingsContext.js` using `React.createContext`, allowing seamless access and updates across components.

-   **Sliders for Dynamic Input:**

    Sliders in `LengthSetting.js` and `CountSetting.js` allow users to adjust password length and number of passwords. These are bound to context state for real-time updates.

-   **Character Type Toggles:**

    Each individual toggle component (`LowercaseLettersSetting.js`, `UppercaseLettersSetting.js`, etc.) updates the context based on checkbox inputs, determining which character sets will be included.

-   **Advanced Toggle Switch:**

    The advanced toggle switch (`AdvancedToggleSwitch.js`) expands and collapses the additional password customization options dynamically keeping the UI clean by default.

-   **Input Sanitization:**

    Each character input field removes duplicate characters and characters that don’t match the expected type (e.g., only lowercase in `LowercaseLettersSetting.js`).

-   **Password Generation:**

    The `GenerateButton` triggers a utility function `generatePassword()` which validates that at least one character type is selected and randomly assembles characters based on user preferences giving instant feedback on success:

    > ✅ "Password(s) generated successfully"

-   **Error Handling & Feedback:**

    If no character types are selected, a toast message is shown:

    > ❗"To generate password you must select at least one checkbox"

    If character type is selected but no characters are provided (in advanced mode), a toast message is shown:

    > ❗"No characters are provided for password generation"

-   **Copy-to-Clipboard Functionality:**

    -   Clicking a generated password (inside `PasswordContainer.js`) copies it to clipboard using the `navigator.clipboard.writeText()` API and shows a confirmation toast:

    > ☑️ "Password is copied to clipboard"

    -   If multiple passwords are generated, it enables a "Copy All" button that copies the entire password list at once and shows a confirmation toast:

    > ☑️ "All passwords are copied to clipboard"

-   **Toast Notifications:**

    -   `ToastContainer.js` handles notifications with:

        -   Dynamic messages (like `"Password is copied to clipboard"`)

        -   Auto-dismiss after 2 seconds

        -   Stackable design so multiple messages don't overlap

-   **Component-Based Layout:**

    The app is modularly structured with reusable components, each handling a specific piece of UI logic, allowing for easy maintenance and future expansion.

## 🎨 Customization Tips

-   🛠️ Adjust the default settings in `SettingsContext.js` to change the initial state of the app.

-   💡 To increase password length or quantity, update the `max` values in `LengthSetting.js` and `CountSetting.js` accordingly.

-   🔔 Modify `ToastContainer.js` to change notification duration or style it using library like `react-toastify` for more features.

-   🎨 Style it your way by replacing `background.webp` in `src/assets/` and tweak `App.css`.

-   🎭 Customize UI and use your own icons by editing `SVGs.js`.

## 🔮 Ideas for V2

-   🌘 Dark mode support with smooth transitions

-   📋 Password strength indicator

-   💾 Save settings via `localStorage`

-   📦 Export passwords to CSV

-   🧠 AI-generated memorable passphrases

-   🌍 Multi-language UI support

## 🧑‍💻 Author

Built with 💙 by [Mahesh](https://github.com/mahesh-pgit)

> A passionate React developer focused on building clean and powerful user interfaces.

## Built From Scratch

This project was developed entirely by me without any templates or third-party starter kits. All code, structure, and logic are original unless otherwise credited.
