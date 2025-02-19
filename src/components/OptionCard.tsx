interface OptionCardProps {
  children: React.ReactNode;
}

const OptionCard = ({ children }: OptionCardProps) => {
  return (
    <div className="relative flex flex-col gap-y-5 w-full lg:w-1/2 lg:mx-auto bg-black/50 p-5 rounded-lg font-forum border-[2px] border-[#E4C590]">
      {children}
    </div>
  );
};

export default OptionCard;
