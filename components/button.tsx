import { ReactNode, useState } from "react";

interface IButton {
  onClick?: () => void;
  disabled?: boolean;
  color: string;
  isAnimated?: boolean;
  className?: string;
  children?: ReactNode;
}

const Button: React.FC<IButton> = ({
  onClick = () => {},
  disabled = false,
  color = "blue",
  isAnimated = true,
  className = "",
  children,
}) => {
  const [effect, setEffect] = useState(false);

  // const buttonColors = `from-${color}-600 via-${color}-800 to-${color}-700`;
  // console.log(buttonColors);
  const buttonColors = "from-blue-600 via-blue-800 to-blue-700";

  return (
    <button
      className={`select-none font-semibold rounded-md shadow-md text-white border-white border-2 px-2 z-10 ${
        effect ? "animate-expand" : ""
      } bg-gradient-to-b ${buttonColors} disabled:from-gray-400 disabled:via-gray-600 disabled:to-gray-500 disabled:text-gray-700 disabled:border-gray-600 ${className}`}
      disabled={disabled}
      onClick={() => {
        if (isAnimated) {
          setEffect(true);
        }
        onClick();
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      {children}
    </button>
  );
};

export default Button;
