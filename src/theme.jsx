export const themes = [
  "light",
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error"
];

export const themeColors = {
  light: "bg-white text-black",
  neutral: "bg-neutral text-white",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  accent: "bg-accent text-white",
  info: "bg-info text-white",
  success: "bg-success text-white",
  warning: "bg-warning text-black",
  error: "bg-error text-white",
};

// Function to apply the theme
export const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
