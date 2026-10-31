import React from 'react';
import './App.css';

const APK_URL = '/pulse-release.apk';
const APK_NAME = 'Pulse-release.apk';

const FEATURES = [
  {
    icon: '🫀',
    title: 'Recovery Score',
    text: 'Composite readiness from sleep, resting heart rate, HRV trend and recent training load. The physiological signal leads — not step count.',
  },
  {
    icon: '📈',
    title: 'Vitals & Goals',
    text: 'Steps, heart rate, sleep and calories tracked against personal goals with live progress rings and lifecycle states.',
  },
  {
    icon: '💡',
    title: 'Insights & Coaching',
    text: 'Personalised insights arrive with an evidence trail. Coaching proposals for goal adjustments can be accepted, adjusted or declined.',
  },
  {
    icon: '⌚',
    title: 'Device Sync',
    text: 'BLE wearable pairing with a simulated device fallback, offline-first buffering and sub-5-second sync end to end.',
  },
  {
    icon: '🧭',
    title: 'Adaptive Design',
    text: 'One responsive UI across phone, tablet and desktop — bottom navigation, navigation rail and drawer at every breakpoint.',
  },
  {
    icon: '🛡️',
    title: 'Privacy First',
    text: 'Encrypted health data in transit and at rest, offline-first sync, and insights framed as lifestyle guidance, not medical advice.',
  },
];

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="logo-wrap">
          <img src="/pulse_logo.png" alt="Pulse app logo" className="logo" />
        </div>
        <h1 className="app-name">Pulse</h1>
        <p className="tagline">Train with your body’s signal, not just your step count.</p>

        <p className="intro">
          The wearable-integrated fitness and wellness tracking system. One platform that unifies steps, heart
          rate, sleep and calories from many wearable vendors, adds goals, personalised insights and coaching.
        </p>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <a className="download-btn" href={APK_URL} download={APK_NAME}>
          ⬇ Download Pulse APK
        </a>
        <p className="apk-note">Android · Release build · ~43 MB · Requires Android 8.0+</p>
      </div>
    </div>
  );
}
