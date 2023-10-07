 /**
 * * Tailwind Utilities classes
 * items-center: to align items along the center of the containers cross axis
 * justify-around: to justify items along the cointainers main axis, equal amound of space each side
 * justify-between: to justify items along the cointainers main axis, equal amound of space each item
 */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        figmaorange: "#F21919",
        figmablue: "#3357F8",
        figmastone: "#E0E0E0",
        figmasky: "#F2F5FF",
        figmablack: "#000000",
        figmagray: "#A8A8A8",
        figmateal: "#1093B5",
      },
      fontFamily: {
        display: ["poppins"],
        body: ["montserrat"],
      },
    },
  },
};