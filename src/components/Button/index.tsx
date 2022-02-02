import cx from "classnames";

interface IButtonProps {
  isOutlined?: boolean | undefined;
  children: string;
}

export function Button({ children, isOutlined }: IButtonProps) {
  return (
    <a
      href="#"
      className={cx(
        `block
        w-full 
        py-3
        text-center 
        uppercase
        font-semibold
        text-xl
        rounded-[10px]
        hover:brightness-90
        transition`,
        isOutlined ? "text-white" : "text-pricingTable-blue",
        isOutlined ? "bg-pricingTable-blue" : "transparent",
        !isOutlined && "border-2 border-pricingTable-blue/70"
      )}
    >
      {children}
    </a>
  );
}
