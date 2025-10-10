# Changelog

All notable changes to this project will be documented in this file.
---


## [2.0.0] - 2025-10-09

### Added
* Global Toast API (toaster object):
You can now trigger toasts globally without using the `useToast()` hook.
Simply import toaster and call methods like:
```js
toaster.success("Data saved!");
toaster.error("Something went wrong!");
toaster.addToast("Custom message", "info", "top-left");
```
* Promise-Based Toasts:
Added support for `toaster.promise()` to handle async feedback states.
```js
toaster.promise(fetchData(), {
  loading: "Loading...",
  success: "Loaded successfully!",
  error: "Failed to load.",
});
```
* Accessibility improvements (ARIA roles, screen reader support).



## [1.0.4] - 2025-10-04

### Added

* Initial release of **Toastware** 🎉
* `ToastProvider` for managing global toast state.
* `useToast` hook to create and dismiss toasts.
* Configurable toast types: `info`, `success`, `warning`, `error`.
* Position support: `top-right`, `top-left`, `bottom-right`, `bottom-left`.
* Auto-dismiss with customizable duration.
* Pause on hover functionality.
* Stack handling for multiple toasts.

---


