# bfull — University Order-Ahead Canteen

A high-fidelity, cross-platform (Web · Android · iOS) prototype for the
**Human & Computer Interaction (COMP6800001)** project. Students order food
ahead at *kantin binus*, pay cashlessly, and track their order in real time —
so they skip the physical queue and reclaim their break.

Built with **Expo (React Native) + Expo Router + NativeWind (Tailwind)** so a
single codebase ships to the web and to native phones, exactly like the
reference apps.

---

## ✨ Features (mapped to HCI principles)

| Feature | HCI principle demonstrated |
|---|---|
| Student login / register + demo account | Recognition over recall, error prevention (`@binus.ac.id` validation) |
| Campus location selector (8 BINUS campuses) | User control & freedom, flexibility for real-world context |
| Tenant-first browsing (A&W, Starbucks, Yoshinoya, …) + flat Menu | Two interaction styles: browse-by-stall vs. quick search |
| Tenant chip on every dish → jumps to the stall | Recognition, discoverability, consistency |
| Search + category filtering | User control & freedom, flexibility |
| Food detail + free-text customization | Match between system & real world |
| Single-tenant cart with "start a new order?" guard | Error prevention, clear constraints (GrabFood pattern) |
| Cart with quantity steppers, vouchers & live total | Visibility of system status, reversibility |
| QRIS cashless payment | Real-world metaphor, consistency |
| Live order tracker (Confirmed → Cooking → Ready) | **Visibility of system status**, feedback |
| Star rating + quick tags + comment after pickup | Closed-loop feedback, evaluation |
| Favorites (heart), order history, bfull Pay wallet & points | Recognition, personalization, user control |
| Toast notifications with semantic icons (success/error/info) | Immediate, non-blocking, consistent feedback |
| Persistent state (AsyncStorage / localStorage) | Consistency across sessions |
| Responsive: full desktop website (top navbar, multi-column grid, 2-column login) on web; native app shell (bottom tabs) on phones | Mobile-friendly + flexibility across devices (rubric requirement) |

---

## 🧰 Tech stack

- **Expo SDK 56** + **Expo Router** (file-based navigation, web URLs)
- **React Native 0.85** / React 19 / TypeScript
- **NativeWind v4** (Tailwind CSS for React Native)
- **AsyncStorage** for persistence, **expo-image**, **expo-linear-gradient**, **lucide-react-native** icons

---

## ▶️ Run locally

Prerequisites: **Node 18+** (you have v24).

```bash
npm install

# Web (opens in your browser)
npm run web

# Phone — install "Expo Go" from the Play Store / App Store,
# then scan the QR code shown by:
npm start
```

Type-check: `npm run typecheck`

### Demo account
On the login screen tap **“Try the demo account”**, or sign in with any
`@binus.ac.id` email:

```
Email:    demo@binus.ac.id
Password: bfull2026
```

---

## 🚀 Deploy

Two artefacts, mirroring the reference app: **one web URL** (desktop + iOS via
Safari) and **one Android APK** — both from your own Expo account.

### 0) One-time setup

You need a **free Expo account** (https://expo.dev). These commands use *your*
login, so run them yourself:

```bash
npm install -g eas-cli      # or prefix every command with: npx eas-cli@latest
eas login                   # sign in to your Expo account
eas init                    # creates the project & writes its id into app.json
```

### 1) Web + iOS  →  EAS Hosting (one shareable URL)

```bash
npm run deploy:web          # = expo export -p web && eas deploy --prod
```

EAS prints a production URL like `https://bfull.expo.app`. That single link is
your **web app** — it opens on desktop browsers and, on iPhone, in Safari
(installable to the home screen as a PWA). Optionally shorten it with bit.ly for
the poster, exactly like the reference.

### 2) Android APK  →  EAS Build (cloud)

```bash
npm run build:apk           # = eas build -p android --profile preview
```

When the cloud build finishes, EAS prints a page on `expo.dev/...builds/...`
with a downloadable **`.apk`** — install it on any Android phone (same as the
reference's "Android APK" link). The `preview` profile in `eas.json` is already
set to output an installable APK.

### 3) Native iOS build (optional)

The web URL above already covers iPhone users. A standalone iOS build only
matters for the App Store / TestFlight and needs a paid Apple Developer account:
`npm run build:ios`. For quick on-device testing without that, run `npm start`
and open the QR in the **Expo Go** app.

---

## 📁 Project structure

```
app/                     # Expo Router routes
  _layout.tsx            # providers (store, toast) + navigation stack
  index.tsx              # auth gate / splash
  login.tsx, register.tsx
  (tabs)/                # bottom-tab app shell (auth-guarded)
    _layout.tsx          # Canteen / Tray / Profile tabs
    index.tsx            # Home: order tracker + search + menu grid
    cart.tsx
    profile.tsx
  food/[id].tsx          # food detail + customization (modal)
  payment.tsx            # QRIS cashless payment (modal)
  review.tsx             # post-pickup rating (modal)
components/              # FoodCard, OrderTracker, Toast
lib/                     # types, constants (menu), format, store (state)
eas.json                 # EAS Build profiles (APK / AAB)
```

---

*bfull — skip the queue, enjoy instant food at kantin binus.*
