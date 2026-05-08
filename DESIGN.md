---
name: Mononyxx
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#725a39'
  on-secondary: '#ffffff'
  secondary-container: '#fbdbb0'
  on-secondary-container: '#765f3d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#858383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#feddb3'
  secondary-fixed-dim: '#e1c299'
  on-secondary-fixed: '#281801'
  on-secondary-fixed-variant: '#584324'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display:
    fontFamily: Bodoni Moda
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1:
    fontFamily: Bodoni Moda
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Bodoni Moda
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: 0em
  h3:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

The design system is rooted in the intersection of high-fashion editorial and functional minimalism. It targets an audience that values restraint, precision, and quiet luxury. The visual language avoids the noise of modern "SaaS" aesthetics in favor of a calm, confident presence that allows content to breathe.

The style is defined by extensive negative space, a rigid grid structure, and a deliberate lack of ornamentation. It leans heavily into **Minimalism** with an **Editorial** lens, treating every screen like a page in a premium physical publication. The goal is to evoke a sense of exclusivity and timelessness through perfect alignment and high-contrast composition.

## Colors

The palette is strictly monochromatic with a singular organic accent. **Deep Black (#000000)** is used for primary branding and high-impact typography to establish authority. **Warm Off-White (#FAF9F6)** serves as the primary canvas, providing a softer, more premium feel than pure digital white.

**Charcoal (#333333)** is reserved for body text to reduce eye strain while maintaining high legibility. **Subtle Beige (#D2B48C)** is applied sparingly as a signature accent for interactive states or specific callouts, grounding the digital experience in a tactile, earth-toned luxury. No gradients are permitted; color application must be flat and intentional.

## Typography

This design system employs a high-contrast typographic pairing. Headlines use **Bodoni Moda**, a sophisticated serif that brings editorial drama and elegance. These should be set with tight leading and slight negative letter-spacing for a modern, "Vogue-esque" appearance.

Supporting text utilizes **Hanken Grotesk**, an airy and contemporary sans-serif. Body text must maintain a generous line height (minimum 1.6x) to ensure the interface feels spacious and unhurried. Small labels and secondary metadata should be set in uppercase with increased letter-spacing to create a technical, curated look that balances the expressive nature of the serif headings.

## Layout & Spacing

The layout philosophy is built on a **Fixed Grid** system that prioritizes centered, curated content over fluid density. Large-scale desktop views utilize a 12-column grid with generous 64px margins to frame content like a gallery piece.

Vertical spacing is intentional and aggressive. Sections are separated by large "breathing rooms" (120px+), forcing the user to focus on one narrative block at a time. All spacing follows an 8px base unit, ensuring that while the layout feels free-form, it is mathematically disciplined and aligned.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than dramatic shadows. Surfaces primarily use the Warm Off-White base, with secondary elements appearing on Pure White to create a subtle lift.

When shadows are used, they are "Ambient Shadows"—extremely diffused, low-opacity (#000000 at 4-6%), and with a large blur radius. They should appear as a natural light falloff rather than a digital effect. Interaction depth is communicated through fine 1px borders in Light Gray (#F2F2F2) or Charcoal (#333333), maintaining a flat, sophisticated profile.

## Shapes

The design system uses a "Soft" approach to geometry. To maintain the editorial feel, corners are not aggressively rounded. A consistent **4px to 8px radius** is applied to buttons, input fields, and cards. This slight rounding softens the starkness of the black-and-white palette without losing the architectural precision of the grid. Larger containers may use the 8px radius, while smaller utility elements like checkboxes stay at 4px.

## Components

### Buttons
Primary buttons are solid Black (#000000) with White text, featuring a subtle 4px corner radius. Secondary buttons are outlined in 1px Charcoal with a "ghost" background. Hover states for both involve a subtle shift to the Beige (#D2B48C) accent or a gentle opacity change.

### Input Fields
Inputs are minimalist, defined by a single bottom border or a very light gray 1px frame. Focus states transition the border color to Black. Labels sit above the field in the `label-caps` typographic style.

### Cards
Cards are treated as frames for content. They use either a subtle Light Gray border or an extremely soft ambient shadow against the off-white background. No background color change is needed unless highlighting a specific "featured" state.

### Chips & Tags
Tags are small, pill-shaped with 1px Charcoal outlines and `label-caps` text. They should never have bright backgrounds.

### Navigation
The navigation bar is transparent or solid Off-White, utilizing wide spacing between menu items. Links use the sans-serif font in a medium weight, with a thin 1px underline appearing only on hover to maintain a clean aesthetic.