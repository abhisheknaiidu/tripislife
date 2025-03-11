/**
 * Font utility functions for the ivypresto-display font family
 */

export const ivyprestoFont = {
  // Regular weight (400)
  regular: {
    fontFamily: '"ivypresto-display", serif',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  regularItalic: {
    fontFamily: '"ivypresto-display", serif',
    fontWeight: 400,
    fontStyle: 'italic',
  },
  // Bold weight (700)
  bold: {
    fontFamily: '"ivypresto-display", serif',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  boldItalic: {
    fontFamily: '"ivypresto-display", serif',
    fontWeight: 700,
    fontStyle: 'italic',
  },
};

// CSS class names for use with className
export const ivyprestoClasses = {
  regular: 'font-ivypresto font-normal not-italic',
  regularItalic: 'font-ivypresto font-normal italic',
  bold: 'font-ivypresto font-bold not-italic',
  boldItalic: 'font-ivypresto font-bold italic',
}; 