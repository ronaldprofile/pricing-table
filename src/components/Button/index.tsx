interface IButtonProps {
  children: string;
}

export function Button({ children }: IButtonProps) {
  return (
    <a
      href="#"
      className="
      block
      w-full 
      py-3
      bg-pricingTable-blue
      text-center 
      text-white
      uppercase
      font-semibold
      text-xl
      rounded-[10px]
      hover:brightness-90
      transition
      "
    >
      {children}
    </a>
  );
}
