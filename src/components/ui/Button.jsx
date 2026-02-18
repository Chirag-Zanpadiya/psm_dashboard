// const Button = ({
//   children,
//   variant = "primary",
//   size = "md",
//   className = "",
//   leftIcon,
//   rightIcon,
//   bg,
//   hoverBg,
//   ...props
// }) => {
//   const base =
//     "flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus:outline-none";

//   const variants = {
//     primary: "text-white bg-brand hover:bg-brand-dark",
//     outline: "border border-brand text-brand hover:bg-brand/10",
//     ghost: "text-brand hover:bg-brand/10",
//   };

//   const sizes = {
//     sm: "px-3 py-1.5 text-sm",
//     md: "px-4 py-2 text-sm sm:text-base sm:px-5",
//     lg: "px-5 py-2.5 text-base sm:px-6",
//   };

//   const dynamicBg = bg ? bg : variants[variant];
//   const dynamicHover = hoverBg ? hoverBg : "";

//   return (
//     <button
//       className={`
//         ${base}
//         ${sizes[size]}
//         ${dynamicBg}
//         ${dynamicHover}
//         ${className}
//       `}
//       {...props}
//     >
//       {leftIcon && <span className="shrink-0">{leftIcon}</span>}
//       {children}
//       {rightIcon && <span className="shrink-0">{rightIcon}</span>}
//     </button>
//   );
// };

// export default Button;
const Button = ({
  children,
  size = "md",
  weight = "medium",
  className = "",
  leftIcon,
  rightIcon,
  bg, // undefined | "secondary"
  ...props
}) => {
  const base =
    "flex items-center justify-center gap-2 rounded-full transition-all duration-200 focus:outline-none";

  // 🔠 Font weight system
  const fontWeights = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  // 📐 Responsive padding + text size
  const sizes = {
    sm: "px-3 py-2 text-xs sm:text-sm",
    md: "px-4 py-3 text-sm sm:text-base",
    lg: "px-5 py-4 text-base sm:text-lg",
  };

  // 🎨 Hover behavior logic
  const hoverStyle =
    bg === "secondary"
      ? "hover:bg-secondary hover:text-black"
      : "hover:bg-primary hover:text-white";

  return (
    <button
      className={`
        ${base}
        ${sizes[size]}
        ${fontWeights[weight]}
        bg-white
        text-black
        ${hoverStyle}
        ${className}
      `}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
