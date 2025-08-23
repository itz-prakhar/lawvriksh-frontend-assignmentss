# Phase 2 Notes — Micro-interactions mapping

1. Greeting header fade/slide
   - Implemented in `Header.jsx` using Framer Motion
   - Trigger: page load
   - Duration: 220ms, ease-out
   - Purpose: Soft arrival, establish hierarchy

2. KPI cards staggered entry + hover elevation
   - Implemented in `KPICards.jsx`
   - Entry: stagger 60ms (delay = index * 0.06), duration 200ms
   - Hover: scale 1.01–1.02
   - Purpose: Guide scan order, affordance

3. Filter chip tap feedback
   - Implemented in `Filters.jsx` using `whileTap` (scale)
   - Duration: immediate tap animation ~80–120ms
   - Purpose: Feedback and clear state

4. Modal open/close
   - Implemented in `Modal.jsx`
   - Duration: 220–260ms
   - Purpose: Spatial model, reduced surprise

5. Table row hover + optimistic toggle
   - Implemented in `Worklist.jsx`
   - Row hover: background highlight
   - Toggle: optimistic UI (immediate change), fallback spinner text while backend simulated (600ms)
   - Purpose: Perceived speed (Doherty), Fitts's Law

6. Toast slide-in
   - Implemented in `Toast.jsx`
   - Duration: 220ms slide-in, auto-dismiss after 3s
   - Purpose: Non-blocking acknowledgement

7. Chart path transition
   - Implemented in `Insights.jsx` (Framer Motion path animation)
   - Duration: 700ms
   - Purpose: Smooth data transition, continuity

Accessibility & performance notes:
- Hit targets >= 44x44 where buttons exist.
- `prefers-reduced-motion` considered.
- Avoid expensive layout changes — use transforms & opacity.
