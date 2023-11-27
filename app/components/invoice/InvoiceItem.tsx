import { motion } from "framer-motion";
import { IconArrowRight } from "~/assets/icons";
import { type InvoiceType } from "~/global";
import StatusCard from "../StatusCard";

/**Variants start */
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
/**Variants end */

const InvoiceItem = (props: InvoiceType) => {
  const { id, amount, date, status, to } = props;
  return (
    <motion.li
      variants={item}
      className="grid grid-cols-2 grid-rows-3 md:grid-rows-1 md:grid-cols-[.5fr_1fr_1fr_1fr_1fr_2rem] justify-items-center items-center bg-white rounded-lg py-6 px-4 shadow-md dark:bg-blue-1000 border-[1px] border-transparent hover:border-purple-1000 generic-transition"
    >
      <p className="tertiary-heading-normal">#{id}</p>
      <div className="text-body-one !text-indigo-1050">Due {date}</div>
      <div className="text-body-one !text-indigo-2000 col-start-2  row-start-1 md:col-start-auto md:row-start-auto">
        {to}
      </div>
      <p className="tertiary-heading col-start-1 row-start-3 md:col-start-auto md:row-start-auto">
        ${amount}
      </p>
      <div className="col-start-2 row-start-2 row-span-2 md:col-start-auto md:row-start-auto">
        <StatusCard status={status} />
      </div>
      <button className="justify-self-end hidden md:block">
        <IconArrowRight />
      </button>
    </motion.li>
  );
};

export default InvoiceItem;
