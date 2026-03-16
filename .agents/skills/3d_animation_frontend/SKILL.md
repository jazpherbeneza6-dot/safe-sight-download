---
name: 3D Animation Front End Design
description: Specialized instructions for creating high-end, immersive 3D web experiences and animations.
---

# 3D Animation Front End Design Skill

This skill empowers the agent to design and implement cutting-edge 3D animations and immersive front-end interfaces.

## 🚀 Core Technologies
- **WebGL/Three.js**: The foundation for 3D on the web.
- **React Three Fiber (R3F)**: Declarative Three.js for React.
- **Drei**: Essential helpers for R3F.
- **GSAP (GreenSock)**: Professional-grade animation for complex timelines.
- **Framer Motion**: Smooth UI transitions and basic 3D animations.
- **Spline**: For interactive 3D design and easy integration.

## 🛠 Best Practices
1. **Asset Optimization**:
   - Always use `.glb` format with Draco compression for 3D models.
   - Resize textures to the smallest possible power-of-two (e.g., 512x512, 1024x1024).
   - Use `useGLTF` from Drei for efficient loading and caching.

2. **Performance**:
   - Implement `RequestAnimationFrame` optimizations.
   - Use `Suspense` for loading states to prevent UI jank.
   - Offload heavy calculations to Web Workers if necessary.
   - Monitor draw calls and vertex counts.

3. **Immersive UI (UX/UI)**:
   - Combine 3D elements with HTML overlays (using Drei `<Html />`).
   - Implement smooth scroll-triggered animations (using GSAP ScrollTrigger).
   - Use camera transitions to guide the user's attention.

4. **Lighting & Shadows**:
   - Use `Environment` maps for realistic lighting without heavy calculations.
   - Bake shadows into textures when possible for better performance on mobile.
   - Use soft shadows with `ContactShadows`.

## 🎨 Creative Guidelines
- **Glassmorphism**: Use `MeshPhysicalMaterial` with transmission and roughness for premium glass effects.
- **Micro-interactions**: Every click or hover should have a subtle 3D response.
- **Color Theory**: Use vibrant gradients and HSL color spaces for dynamic themes.

## 📝 Implementation Workflow
1. **Scene Setup**: Define the Canvas, Camera, and Basic Lighting.
2. **Model Loading**: Import and optimize 3D assets.
3. **Animation Logic**: Define GSAP timelines or R3F `useFrame` loops.
4. **Interaction Layer**: Connect mouse movement, scroll, or clicks to 3D state.
5. **Post-Processing**: Apply Bloom, Noise, or Vignette for a cinematic feel.
