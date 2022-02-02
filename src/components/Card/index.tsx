import Image from "next/image";
import clsx from "clsx";
import cx from "classnames";
import checkIcon from "../../assets/check.svg";
import { Button } from "../Button";

interface CardProps {
  planName: string;
  price?: string;
  descriptionPlan?: string;
  isPopular?: boolean;
  className?: string;
}

export function Card({
  isPopular,
  planName,
  price,
  descriptionPlan,
  className
}: CardProps) {
  return (
    <div
      className={clsx(
        "w-[355px] rounded-lg shadow-md hover:shadow-xl",
        className
      )}
    >
      <div className={cx(isPopular ? "bg-pricingTable-yellow" : "bg-white")}>
        <header className="px-[30px] py-[25px]  flex items-center justify-between">
          <span
            className={cx(
              `font-semibold text-[20px] ${
                isPopular
                  ? "text-pricingTable-blue"
                  : "text-pricingTable-priceColor"
              }`
            )}
          >
            {planName}
          </span>

          {isPopular && (
            <span className="block py-2 px-6 bg-pricingTable-blue text-white text-xs font-semibold rounded-[40px]">
              Popular
            </span>
          )}
        </header>
      </div>

      <div className="py-[30px] px-[30px] font-sans bg-white ">
        <div className="mt-5 border-b">
          <div>
            <strong className="text-xl font-black text-priceColor md:text-4xl">
              R$ {price}
              <span className="text-[14px]  md:text-[18px]">,00</span>
              <span className="ml-1 text-[14px] font-light text-pricingTable-gray md:text-[18px]">
                /mês
              </span>
            </strong>
          </div>

          <p className="mt-[10px] mb-5  text-[14px] text-pricingTable-gray font-normal text-left">
            {descriptionPlan}
          </p>
        </div>

        <div className="mt-5 mb-[70px]">
          <ul className="flex flex-col gap-4">
            {/* reusable class, made using @apply. */}
            <li className="itemListCard">
              <Image src={checkIcon} alt="check icon" /> Lorem ipsum dolor sit
              amet
            </li>
            <li className="itemListCard">
              <Image src={checkIcon} alt="check icon" /> Lorem ipsum dolor sit
              amet
            </li>
            <li className="itemListCard">
              <Image src={checkIcon} alt="check icon" /> Lorem ipsum dolor sit
              amet
            </li>
          </ul>
        </div>

        <Button isOutlined={isPopular}>Assinar</Button>
      </div>
    </div>
  );
}
