# 🍞 toastware

A lightweight, customizable, and developer-friendly **toast notification system** for React.

---

## ✨ Features

* 🔥 Multiple positions support (`top-right`, `top-left`, `bottom-right`, `bottom-left`)
* ⏳ Built-in auto-dismiss with smooth progress bar
* 🖱 Pause on hover
* 🎨 Fully customizable with CSS classes
* 📦 Tiny footprint and zero external dependencies

---

## 📦 Installation

```bash
npm install toastware
# or
yarn add toastware
```

---

## ⚡ Quick Start

### 1. Wrap your app with `ToastProvider`

```tsx
import { ToastProvider } from "toastware";

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}
```

---

### 2. Use the `useToast` hook

```tsx
import { useToast } from "toastware";

function DemoButton() {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          message: "Hello World!",
          type: "success",
          position: "top-right",
          duration: 3000,
        })
      }
    >
      Show Toast
    </button>
  );
}
```

---

## 🛠 API Reference

### `ToastProvider`

* Wraps your app and manages state of all toasts.
* Props (optional):

  * `defaultPosition` → `"top-right" | "top-left" | "bottom-right" | "bottom-left"` (default: `"top-right"`)
  * `defaultDuration` → number in ms (default: `3000`)

---

### `useToast`

Hook that gives you access to toast actions.

```ts
const { addToast, removeToast, clearToasts } = useToast();
```

* `addToast(options: ToastItem)` → Adds a toast.

  * `message: string` – text to show
  * `type: "info" | "success" | "warning" | "error"`
  * `position?: string`
  * `duration?: number` (ms)

* `removeToast(id: string | number)` → Manually removes a toast.

* `clearToasts()` → Removes all active toasts.

---

### ToastItem Type

```ts
type ToastItem = {
  id?: string | number;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  duration?: number;
};
```

---

## 🎨 Styling

Default classes provided:

* `.toast-container` – wrapper for each position group
* `.toast` – base toast style
* `.toast-content` – content area
* `.toast-close` – close button
* `.toast-progress` – progress bar

👉 You can override or extend styles by importing your own CSS.

---

## 💡 Best Practices

* Use `position` to avoid overlapping with app UI.
* Keep messages short and clear.
* For error messages, prefer `duration: 5000` for better visibility.
* Don’t overload user with too many toasts simultaneously.

---

## 🧪 Example

```tsx
addToast({
  message: "Profile updated successfully!",
  type: "success",
  position: "bottom-left",
  duration: 4000,
});
```

---

## 📖 License

MIT © [Amresh Maurya](amreshmaurya.com)


