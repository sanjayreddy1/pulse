# Pulse — Deployment

This folder contains the **deployment package** for the **Pulse** wearable fitness app.

## Contents

| Path | Purpose |
|---|---|
| `public/pulse_logo.png` | Pulse app logo (light theme) used by this page |
| `public/pulse_logo_1024.png` | Pulse app logo (1024px) |
| `public/pulse_mark.png` | Pulse app mark (icon only) |
| `public/pulse_mark_1024.png` | Pulse app mark (1024px) |
| `public/pulse-release.apk` | The generated Android APK of the Pulse app (release build) |
| `src/` | React source of this deployment landing page |
| `dist/` | Vite production build output |

## The app

**Pulse** — *“Train with your body’s signal, not just your step count.”*

A wearable-integrated fitness & wellness tracking system: Recovery Score hero, vitals
(steps, heart rate, sleep, calories), goal lifecycle, evidence-backed insights, coaching
proposals and BLE device sync (with simulator fallback).

## Download the APK

Open `src/App.jsx` → the **⬇ Download Pulse APK** button points at `public/pulse-release.apk`.

The button is a plain download link:

```jsx
<a className="download-btn" href="/pulse-release.apk" download="Pulse-release.apk">
  ⬇ Download Pulse APK
</a>
```

Clicking it downloads `Pulse-release.apk` to the visitor’s machine.

The file itself is served from the Vite `public/` directory, so it is copied into `dist/`
on every production build.

## Build this page locally

```bash
npm install
npm run dev     # local dev server
npm run build   # production build into dist/
npm run preview # serve the production build
```
