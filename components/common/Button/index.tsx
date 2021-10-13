type ButtonTypes = {
  click?: () => void;
  success?: boolean;
  danger?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  transparent?: boolean;
};

const Button: React.FC<ButtonTypes> = ({
  children,
  click,
  danger,
  className = "",
  type = "button",
  disabled,
  transparent,
  success = !transparent,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={click}
      className={`${
        success && "hover:bg-blue-600 bg-blue-500 focus:bg-blue-600  shadow-lg"
      } ${
        danger && "hover:bg-gray-400 bg-gray-500 focus:bg-gray-400  shadow-lg"
      } ${
        transparent && "bg-transparent hover:opacity-80 text-blue-500"
      } ${className} px-6 py-2 text-white rounded font-medium inline-block ring-black ring-opacity-5 transition ease-in-out disabled:opacity-40`}
    >
      {children}
    </button>
  );
};

export default Button;
