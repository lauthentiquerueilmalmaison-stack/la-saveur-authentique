interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

const Section = ({ title, id, children }: SectionProps) => {
  return (
    <section id={id} className="w-[90%] mx-auto h-screen text-white ">
      <div className="relative w-full h-[30vh] flex justify-center items-center font-arizonia uppercase  text-[50px] text-center rounded-lg overflow-hidden">
        <h1 className="tracking-widest ">{title}</h1>
      </div>
      {children}
    </section>
  );
};

export default Section;
