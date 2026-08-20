export default function Model3D() {
  const EMBED_URL =
    "https://sketchfab.com/models/fc2cc9a2fa9249e888feba705301c0e2/embed?autostart=1&transparent=1&ui_theme=dark";

  return (
    // The container background is set to transparent so it matches the homepage perfectly
    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-cyan-500/30 bg-transparent shadow-2xl shadow-cyan-500/10 flex items-center justify-center">
      
      <iframe
        title="IEEE ComSoc 3D Radio Telescope Model"
        // CSS TRICK: 
        // 1. invert: Turns the white background black
        // 2. hue-rotate-180: Restores the original color hues
        // 3. mix-blend-screen: Makes the new black background completely transparent
        // 4. opacity-90: Blends the model slightly into the dark theme
        className="absolute top-[-12%] left-[-10%] w-[120%] h-[125%] border-0 invert hue-rotate-180 mix-blend-screen opacity-90 contrast-125"
        src={EMBED_URL}
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
      
    </div>
  );
}