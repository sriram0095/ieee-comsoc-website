import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import "./globals.css";

export const metadata = {
  title: "IEEE ComSoc Student Chapter",
  description: "Advancing Communication Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#020611] text-[#f1f5f9] relative overflow-x-hidden">
        
        {/* Global Fixed Background Particles Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleColors={['#1D63B8', '#3b82f6', '#ffffff']}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
            alphaParticles={false}
            particleBaseSize={45}
            sizeRandomness={0.4}
            cameraDistance={20}
            disableRotation={true}
            pixelRatio={1}
          />
        </div>

        {/* Global Foreground Content Layers */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}