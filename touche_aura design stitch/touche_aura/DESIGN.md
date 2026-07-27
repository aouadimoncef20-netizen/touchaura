---
name: Touche Aura
colors:
  surface: '#fdf9f6'
  surface-dim: '#ddd9d6'
  surface-bright: '#fdf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f0'
  surface-container: '#f1edea'
  surface-container-high: '#ebe7e4'
  surface-container-highest: '#e5e2df'
  on-surface: '#1c1b1a'
  on-surface-variant: '#544244'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f4f0ed'
  outline: '#877273'
  outline-variant: '#d9c1c2'
  surface-tint: '#97444f'
  primary: '#3e0110'
  on-primary: '#ffffff'
  primary-container: '#5b1623'
  on-primary-container: '#dc7b86'
  inverse-primary: '#ffb2b9'
  secondary: '#9e3e4c'
  on-secondary: '#ffffff'
  secondary-container: '#fd8896'
  on-secondary-container: '#761f2f'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdadc'
  primary-fixed-dim: '#ffb2b9'
  on-primary-fixed: '#3f0110'
  on-primary-fixed-variant: '#792d39'
  secondary-fixed: '#ffdadb'
  secondary-fixed-dim: '#ffb2b9'
  on-secondary-fixed: '#40000f'
  on-secondary-fixed-variant: '#7f2736'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fdf9f6'
  on-background: '#1c1b1a'
  surface-variant: '#e5e2df'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
  element-gap: 16px
---

## Brand & Style
The design system embodies a "Minimalist Luxury" aesthetic tailored for a high-end modest fashion boutique. It prioritizes grace, exclusivity, and a serene shopping experience. The visual language is inspired by editorial fashion magazines, utilizing heavy whitespace to allow product photography to breathe. 

The emotional response should be one of "Affluent Calm"—sophisticated but welcoming. The style blends classical elegance (through high-contrast serifs) with modern digital precision. Key stylistic markers include hairline gold borders, refined transitions, and a deliberate lack of clutter.

## Colors
This design system utilizes a palette of deep wine tones and metallic accents to evoke quality and heritage. 

- **Primary & Secondary:** Burgundy shades are used for brand-critical elements, headers, and primary buttons.
- **Accent:** Gold is reserved for decorative flourishes, active states, and call-to-action highlights. It should be used sparingly to maintain its premium feel.
- **Background & Surface:** The foundation is built on Cream and Soft Beige, providing a warmer, more sophisticated alternative to pure white.
- **Text:** Contrast is maintained by using Dark Burgundy for readability on light surfaces, ensuring the brand identity is present even in the smallest details.

## Typography
The typography strategy relies on the tension between the ornate **Playfair Display** and the functional **Poppins**. 

- **Headlines:** Use Playfair Display for all titles. Large display sizes should use a slight negative letter-spacing to enhance the editorial feel.
- **Body:** Poppins provides clarity for product descriptions and long-form text. 
- **Labels:** Button text and small UI labels use uppercase Poppins with generous letter-spacing to create a sense of "luxury branding" similar to high-end fashion labels.

## Layout & Spacing
The design system follows a **Fixed Grid** model for desktop to maintain a controlled, editorial composition, transitioning to a fluid model for mobile devices.

- **Desktop:** 12-column grid with a 1280px max-width. Margins are intentionally wide (64px) to emphasize the minimalist aesthetic.
- **Rhythm:** Vertical spacing between sections should be aggressive (120px+) to ensure the UI never feels crowded.
- **Reflow:** On mobile, margins reduce to 20px, and section gaps compress to 64px. Content typically stacks into a single column, with product carousels allowed to bleed off-edge to indicate horizontal scrolling.

## Elevation & Depth
Depth is handled with extreme subtlety to maintain a flat, editorial look. 

- **Shadows:** Use only one type of shadow—an "Ambient Glow." This is a very soft, high-blur (30px+), low-opacity (5-8%) Burgundy-tinted shadow used only on primary cards and modals.
- **Tonal Layers:** Differentiation is primarily achieved through color blocking (switching between Cream and Soft Beige backgrounds) rather than heavy drop shadows.
- **Outlines:** Use 1px "Gold Hairline" borders (#D4AF37 at 40% opacity) to define input fields and secondary containers. This provides structure without visual weight.

## Shapes
This design system uses **Soft** shapes. A slight 4px radius on buttons and cards prevents the UI from feeling "sharp" or aggressive, aligning with the feminine brand narrative, while still feeling more architectural and modern than fully rounded "pill" shapes. 

Product images should remain sharp (0px radius) to mimic the look of a printed fashion lookbook.

## Components
- **Buttons:** 
  - *Primary:* Solid Burgundy background, White text, uppercase label. On hover, a subtle "Gold Glow" (inner shadow or thin border).
  - *Secondary:* Transparent background, 1px Gold border, Dark Burgundy text.
- **Cards:** Product cards should use the "Soft Beige" for the background with no border. On hover, the image should scale slightly (1.05x) and a soft ambient shadow should appear.
- **Input Fields:** Bottom-border only style (1px Gold) is preferred to maintain a clean, "minimalist boutique" appearance.
- **Chips/Filters:** Used for sizes and colors. Selected states use a solid Burgundy background; unselected states use a Cream background with a faint Gold hairline border.
- **Decorative Lines:** Use horizontal 1px Gold lines to separate logical sections or to frame "New Arrivals" headlines, emphasizing the luxury editorial feel.
- **Lists:** Editorial-style lists with ample line height and Burgundy "bullet" icons (small gold dots or serif numbers).