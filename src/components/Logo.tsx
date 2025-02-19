import Image from "next/image";
import logo from "../../public/logo-2.svg";
import spoon from "../../public/spoon.svg";
import fork from "../../public/fork.svg";

const Logo = () => {
  return (
    <div className="flex space-x-2 items-center cursor-pointer w-fit">
      <div className="w-40 md:w-48">
        <Image src={logo} priority alt="la saveur authentique" />
      </div>
      <div className="flex items-center space-x-1">
        <Image src={spoon} alt="spoon" width={8} height={10} />
        <Image src={fork} alt="fork" width={8} height={10} />
      </div>
    </div>
  );
};

export default Logo;
