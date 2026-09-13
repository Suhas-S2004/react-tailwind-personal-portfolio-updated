export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer";

  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
    glass:
      "backdrop-blur-md bg-white/10 dark:bg-slate-900/40 border border-white/20 text-foreground hover:bg-white/20 dark:hover:bg-slate-900/60 shadow-lg",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};