import { RiNotification2Line } from "react-icons/ri";

export function NotificationIcon() {
  return (
    <div className="relative bg-primary-50 w-fit p-3 rounded-full">
      <RiNotification2Line size={20} />
      <span className="text-xs absolute top-[-10%] right-[-20%] z-10 w-5 h-5 center--xy bg-red-500 text-white rounded-full">
        {"5"}
      </span>
    </div>
  );
}
