# JawyXdevs Portfolio

Build a 3D Creator portfolio landing page for **"JawyXdevs"** using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a dark theme (#0C0C0C background) with the font Kanit (Google Fonts, weights 300-900). The page title is **"JawyXdevs -- Elite Web Engineering & Digital Experiences"**.

[L3] GLOBAL STYLES
[L4] Background: #0C0C0C on html, body, #root, and the main wrapper
[L5] Font family: 'Kanit', sans-serif
[L6] Global reset: box-sizing border-box, margin 0, padding 0
[L7] CSS class .hero-heading: gradient text using background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%) with -webkit-background-clip: text and -webkit-text-fill-color: transparent
[L8] Main wrapper has overflowX: 'clip'

[L9] SECTION ORDER
[L10] HeroSection
[L11] MarqueeSection
[L12] AboutSection
[L13] ServicesSection
[L14] ProjectsSection

[L15] 1. HERO SECTION
[L16] Full viewport height (h-screen), flex column layout with overflowX: clip.

[L18] Navbar: Horizontal nav bar with 4 links -- "About", "Services", "Projects", "Contact" -- evenly spaced with justify-between. Text color #D7E2EA, font-medium, uppercase, tracking-wider. Sizes: text-sm md:text-lg lg:text-[1.4rem]. Padding: px-6 md:px-10 pt-6 md:pt-8. Hover: opacity 70% with 200ms transition.

[L20] Hero Heading: Massive h1 with text **"JAWYXDEVS"**. Uses the .hero-heading gradient text class. Font-black, uppercase, tracking-tight, leading-none, whitespace-nowrap, w-full. Font sizes: text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]. Margin top: mt-6 sm:mt-4 md:-mt-5. Wrapped in overflow-hidden container.

[L22] Bottom bar: Flexbox justify-between items-end with pb-7 sm:pb-8 md:pb-10:

[L24] Left: paragraph text **"ELITE WEB ENGINEERING & DIGITAL EXPERIENCES"**, color #D7E2EA, font-light, uppercase, tracking-wide, leading-snug. Font size: clamp(0.75rem, 1.4vw, 1.5rem). Max-width: max-w-[160px] sm:max-w-[220px] md:max-w-[260px].

[L25] Right: ContactButton component (see below).

[L26] Hero Visual: Centered absolutely. Replace the original personal 3D creator portrait with a premium futuristic 3D digital/web-development visual. Use a sophisticated abstract 3D object, chrome/digital sphere, futuristic interface object, or similar creative-tech visual. It should communicate premium web engineering and digital experiences rather than being a portrait of a person.

Positioning: absolute left-1/2 -translate-x-1/2 z-10. Width: w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]. On mobile: top-1/2 -translate-y-1/2. On sm+: sm:top-auto sm:translate-y-0 sm:bottom-0.

Use a Magnet component (mouse-following magnetic effect) wrapping the visual. Magnet settings: padding 150, strength 3, activeTransition "transform 0.3s ease-out", inactiveTransition "transform 0.6s ease-in-out".

[L28] FadeIn animations: Navbar fades in with delay 0, y -20. Heading: delay 0.15, y 40. Left text: delay 0.35, y 20. Contact button: delay 0.5, y 20. Hero visual: delay 0.6, y 30.

[L30] 2. MARQUEE SECTION

Two rows of project/website images that scroll horizontally based on page scroll position. Background #0C0C0C. Padding: pt-24 sm:pt-32 md:pt-40 pb-10.

Use the actual JawyXdevs project websites as the content represented in this section:

1. barbershopkwc.com
2. cambriancustompainting.com
3. tigar.ca
4. bxc-pied.vercel.app
5. fadedistrictcuts.com
6. snowbrosptbo.ca

Do NOT use the old motionsites.ai demo GIFs.

Use project screenshots/visual previews from these actual projects where available.

Row 1 and Row 2 should repeat the available project visuals enough times for seamless scrolling.

[L57] Row 1: project images duplicated for seamless scrolling. Moves RIGHT on scroll.
[L58] Row 2: project images duplicated for seamless scrolling. Moves LEFT on scroll.
[L59] Scroll offset calculated as: (window.scrollY - sectionTop + window.innerHeight) * 0.3
[L60] Each image tile: 420px x 270px, rounded-2xl, object-cover, lazy loaded.
[L61] Gap between tiles: gap-3. Gap between rows: gap-3.
[L62] Uses willChange: 'transform' for performance. Scroll listener is passive.

[L63] 3. ABOUT SECTION

Full-height centered section with min-h-screen, padding px-5 sm:px-8 md:px-10 py-20.

[L66] Four decorative 3D images positioned absolutely in corners. Keep the same decorative 3D visual concept and positioning from the original design, but use them as abstract creative-tech decorations rather than creator-personality elements.

[L68] Top-left: Moon icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] left-[1%] sm:left-[2%] md:left-[4%]. FadeIn: delay 0.1, x -80, y 0, duration 0.9.

[L69] Bottom-left: 3D object -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png -- w-[100px] sm:w-[140px] md:w-[180px], positioned bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]. FadeIn: delay 0.25, x -80, y 0, duration 0.9.

[L70] Top-right: Lego icon -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png -- w-[120px] sm:w-[160px] md:w-[210px], positioned top-[4%] right-[1%] sm:right-[2%] md:right-[4%]. FadeIn: delay 0.15, x 80, y 0, duration 0.9.

[L71] Bottom-right: 3D group -- https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png -- w-[130px] sm:w-[170px] md:w-[220px], positioned bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]. FadeIn: delay 0.3, x 80, y 0, duration 0.9.

[L72] Heading: **"About JawyXdevs"** using .hero-heading gradient text, font-black, uppercase, leading-none, tracking-tight, centered. Font size: clamp(3rem, 12vw, 160px). FadeIn: delay 0, y 40.

[L74] Animated paragraph: Uses a character-by-character scroll-driven opacity animation.

Text:

**"JawyXdevs is an elite web engineering studio focused on building high-performance digital experiences. We create modern, responsive, interactive and visually striking websites that help businesses and brands stand out online. From custom web development to immersive interactions, every project is built with performance, design and user experience in mind."**

Color #D7E2EA, font-medium, centered, leading-relaxed, max-w-[700px], font size clamp(1rem, 2vw, 1.35rem).

Each character animates from opacity 0.2 to 1 based on scroll progress, with scroll offset ['start 0.8', 'end 0.2'].

[L76] Contact button below the text block. Gap between heading/text: gap-10 sm:gap-14 md:gap-16. Gap between text block and button: gap-16 sm:gap-20 md:gap-24.

[L78] 4. SERVICES SECTION

White background (#FFFFFF), with rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] top corners. Padding: px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32.

[L81] Heading: **"Services"** in #0C0C0C, font-black, uppercase, centered, font size clamp(3rem, 12vw, 160px). Margin bottom: mb-16 sm:mb-20 md:mb-28.

[L83] 5 service items in a vertical list, max-w-5xl, centered:

[L85] 01 - **Web Development**: "High-performance, responsive websites built with modern technologies, clean architecture and production-ready code."

[L86] 02 - **Interactive Web Design**: "Modern interfaces with smooth animations, micro-interactions and thoughtful user experiences designed to make websites memorable."

[L87] 03 - **3D & Motion Experiences**: "Immersive digital experiences featuring sophisticated motion, scroll interactions and 3D-inspired visual elements."

[L88] 04 - **Performance & SEO**: "Fast, responsive and search-friendly websites engineered for strong technical performance, accessibility and discoverability."

[L89] 05 - **Business Websites**: "Professional, conversion-focused websites built for businesses and brands that need a strong and credible digital presence."

[L91] Each item: horizontal layout with number (font-black, font size clamp(3rem, 10vw, 140px), color #0C0C0C) on the left and name + description stacked vertically on the right. Name: font-medium, uppercase, font size clamp(1rem, 2.2vw, 2.1rem). Description: font-light, leading-relaxed, max-w-2xl, font size clamp(0.85rem, 1.6vw, 1.25rem), opacity 0.6. Items separated by 1px borders (rgba(12, 12, 12, 0.15)). Padding: py-8 sm:py-10 md:py-12. Staggered FadeIn: each item delays by i * 0.1.

[L92] 5. PROJECTS SECTION

Dark background (#0C0C0C), rounded top corners rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px], pulled up with -mt-10 sm:-mt-12 md:-mt-14, z-10.

[L95] Heading: **"Projects"** using .hero-heading gradient, same styling as other headings.

[L97] **6 sticky-stacking project cards** that scale down as you scroll past them (card stacking effect using Framer Motion useScroll and useTransform). Each card is sticky top-24 md:top-32 inside an h-[85vh] container.

[L99] Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03. Each card offset by top: ${index * 28}px.

[L101] Each card has: rounded-[40px] sm:rounded-[50px] md:rounded-[60px], border-2 border-[#D7E2EA], background #0C0C0C, padding p-4 sm:p-6 md:p-8.

[L103] Card layout:

[L105] Top row: Number (huge, same style as services), category label, project name, and a **"Live Project"** ghost button (rounded-full, border-2 #D7E2EA, uppercase, tracking-widest).

[L106] Bottom row: Two-column image grid -- left column (40% width) has 2 stacked images, right column (60% width) has 1 tall image. All images have heavy border radius rounded-[40px] sm:rounded-[50px] md:rounded-[60px]. Left top image height: clamp(130px, 16vw, 230px). Left bottom image height: clamp(160px, 22vw, 340px).

[L107] PROJECT DATA

Use these EXACT JawyXdevs projects and URLs.

Do NOT use any old project names or fake projects.

[L109] Project 01 - **"Barbershop KWC"** (Client):

URL:
https://barbershopkwc.com/

Category:
WEB DEVELOPMENT

Description:
"Modern professional website created for a barbershop business with a clean and engaging digital presence."

Use website screenshots/visual previews from the actual project for the card images.

[L114] Project 02 - **"Cambrian Custom Painting"** (Client):

URL:
https://cambriancustompainting.com/

Category:
BUSINESS WEBSITE

Description:
"Professional service-business website designed to present the company and its services with a polished online experience."

Use website screenshots/visual previews from the actual project for the card images.

[L119] Project 03 - **"Tigar"** (Client):

URL:
https://tigar.ca/

Category:
WEB DEVELOPMENT

Description:
"Modern responsive web experience built with a strong visual presentation and professional digital interface."

Use website screenshots/visual previews from the actual project for the card images.

[L124] Project 04 - **"BXC"** (Client):

URL:
https://bxc-pied.vercel.app/

Category:
DIGITAL EXPERIENCE

Description:
"Interactive web experience focused on modern design, responsive layouts and smooth visual interactions."

Use website screenshots/visual previews from the actual project for the card images.

[L129] Project 05 - **"Fade District Cuts"** (Client):

URL:
https://www.fadedistrictcuts.com/

Category:
BUSINESS WEBSITE

Description:
"Modern professional website designed for a barbershop brand and its online presence."

Use website screenshots/visual previews from the actual project for the card images.

[L134] Project 06 - **"Snow Bros PTBO"** (Client):

URL:
https://snowbrosptbo.ca/

Category:
BUSINESS WEBSITE

Description:
"Professional business website designed to create a strong online presence and clearly present the company's services."

Use website screenshots/visual previews from the actual project for the card images.

==================================================
REUSABLE COMPONENTS
===================

ContactButton: Rounded-full pill button with gradient background linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%), inner box-shadow 0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, white 2px outline with -3px offset. Text: white, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4, text text-xs sm:text-sm md:text-base. Label: **"Contact JawyXdevs"**.

The ContactButton should link to:
mailto:jawyXdevs@gmail.com

LiveProjectButton: Ghost/outline pill button. Rounded-full, border-2 border-[#D7E2EA], text color #D7E2EA, font-medium, uppercase, tracking-widest. Sizes: px-8 py-3 sm:px-10 sm:py-3.5, text text-sm sm:text-base. Hover: bg-[#D7E2EA]/10. Label: **"Live Project"**.

Every LiveProjectButton must open the corresponding real project URL in a new tab.

Use:
target="_blank"
rel="noopener noreferrer"

[L129] FadeIn: Framer Motion wrapper using whileInView with viewport={{ once: true, margin: "50px", amount: 0 }}. Accepts delay, duration (default 0.7), x (default 0), y (default 30). Easing: [0.25, 0.1, 0.25, 1]. Uses motion.create() for dynamic element types.

[L131] Magnet: Mouse-following magnetic hover effect. Tracks mouse position relative to element center, applies translate3d transform divided by strength factor. Activates when cursor is within padding distance of element edge. Smooth transition in (0.3s ease-out) and out (0.6s ease-in-out). Uses willChange: 'transform'.

[L133] AnimatedText: Character-by-character scroll-reveal text animation. Each character goes from opacity 0.2 to 1 based on its position in the text relative to scroll progress. Uses Framer Motion useScroll targeting the paragraph element with offset ['start 0.8', 'end 0.2']. Each character uses invisible placeholder + absolute positioned animated span.

[L135] KEY DEPENDENCIES
[L136] react, react-dom (^18.3.1)
[L137] framer-motion (^12.38.0)
[L138] lucide-react (^0.344.0)
[L139] tailwindcss (^3.4.1)
[L140] vite, typescript

[L141] RESPONSIVE BREAKPOINTS
[L142] All sections use Tailwind's default breakpoints (sm: 640px, md: 768px, lg: 1024px) with mobile-first approach. Heavy use of clamp() for fluid typography. The entire design scales gracefully from mobile to ultra-wide screens.

==================================================
CONTACT INFORMATION
===================

Phone:
03151082775

Email:
[jawyXdevs@gmail.com](mailto:jawyXdevs@gmail.com)

Add the contact information naturally to the Contact area/footer.

Phone link:
tel:03151082775

Email link:
mailto:jawyXdevs@gmail.com

==================================================
CRITICAL BRAND REPLACEMENT RULE
===============================

Completely remove the original "Jack" identity.

Never display:

Jack
Hi, i'm jack
3D Creator
Nextlevel Studio
Aura Brand Identity
Solaris Digital

The website must consistently use:

JawyXdevs

Brand tagline:

ELITE WEB ENGINEERING & DIGITAL EXPERIENCES

Actual projects:

barbershopkwc.com
cambriancustompainting.com
tigar.ca
bxc-pied.vercel.app
fadedistrictcuts.com
snowbrosptbo.ca

Actual contact:

03151082775
[jawyXdevs@gmail.com](mailto:jawyXdevs@gmail.com)

Keep the original visual structure, premium dark aesthetic, typography, Framer Motion animations, magnetic interactions, scroll-based marquee and sticky project-card experience. Only the identity/content/project data should be transformed from the original Jack portfolio into the JawyXdevs premium web engineering studio.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://jawy-digital-showcase.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/54a1559c-0138-4201-bac8-51d230aa0f8c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
