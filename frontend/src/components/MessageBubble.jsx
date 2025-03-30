import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * A React component that renders a styled message bubble with an icon and text.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to display inside the message bubble.
 * @param {string} [props.type="info"] - The type of the message bubble, which determines its styling.
 *    Valid types are: "info", "error", "success", "warning", "neutral".
 *    Defaults to "info" if an invalid type is provided.
 * @returns {JSX.Element} A styled message bubble component.
 */
const MessageBubble = ({ children, type = "info" }) => {
  const valid_types = ["info", "error", "success", "warning", "neutral"];
  if (!valid_types.includes(type)) {
    type = "info";
  }
  const types = {
    info: {
      class: {
        border: "border-violet-700",
        background: "bg-violet-200",
        text: "text-violet-900",
      },
      icon: faCircleInfo,
    },
    error: {
      class: {
        border: "border-rose-700",
        background: "bg-rose-200",
        text: "text-rose-900",
      },
      icon: faCircleExclamation,
    },
    success: {
      class: {
        border: "border-green-700",
        background: "bg-green-200",
        text: "text-green-900",
      },
      icon: faCircleCheck,
    },
    warning: {
      class: {
        border: "border-amber-700",
        background: "bg-amber-200",
        text: "text-amber-900",
      },
      icon: faCircleExclamation,
    },
    neutral: {
      class: {
        border: "border-gray-700",
        background: "bg-gray-200",
        text: "text-gray-900",
      },
      icon: faCircleInfo,
    },
  };
  return (
    <div
      className={`
        flex items-center justify-center gap-4
        border font-inter
        ${types[type].class.border}
        ${types[type].class.text}
        ${types[type].class.background}
        rounded-full
        py-4 px-8
        cursor-default
        shadow-xl shadow-black/20
        animate animate-fade-up
        `}
    >
      <FontAwesomeIcon icon={types[type].icon} className="text-2xl" />
      <span>{children}</span>
    </div>
  );
};
export default MessageBubble;
