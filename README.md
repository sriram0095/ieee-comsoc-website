This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# IEEE ComSoc Chapter Website

A modern, responsive, and interactive web application built for the IEEE Communications Society (ComSoc) student chapter, featuring a permanent dark theme and native 3D web graphics.

---

## 🚀 Tech Stack
* **Framework:** Next.js (App Router / Turbopack)
* **Styling:** Tailwind CSS v4
* **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), and Drei (`@react-three/drei`)
* **Version Control:** Git & GitHub

---

## 🌟 Key Features Implemented
1. **Permanent Dark Theme:** Locked-in deep navy backgrounds and crisp soft-white text using Tailwind v4 custom theme variables.
2. **Native 3D Model Rendering:** High-performance `.glb` model integration directly into the DOM (no heavy third-party iframe watermarks or unwanted UI control boxes).
3. **Smooth 360° Rotation:** Continuous custom animation frames (`useFrame`) spinning the 3D model automatically.
4. **Clean Component Architecture:** Reusable components for navigation, events filtering, and interactive UI states.

---

## 🛠️ Developer Quick Reference & Cheat Sheet

Future reference guide for tweaking, resizing, and customizing website components.

### 1. Resizing & Tweaking the 3D Model (`src/components/Model3D.js`)
To change the size, scale, or camera zoom of your 3D telescope/satellite model:
* **Change Model Size (`scale`):** 
  Locate the `<primitive>` component and adjust the `scale` value. A higher number makes it bigger (e.g., `scale={2.2}`).
  ```javascript
  <primitive object={scene} scale={2.2} position={[0, -0.5, 0]} />
