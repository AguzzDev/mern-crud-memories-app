export const BubblesDecoration = () => {
  const Bubble = ({ size, position, opacity }) => (
    <div
      className={`absolute ${size} ${position} ${opacity} rounded-full bg-white backdrop-filter backdrop-blur-sm shadow-xl`}
    />
  );
  return (
    <section>
      <Bubble
        size="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
        position="-bottom-20 -left-10"
        opacity="bg-opacity-20"
      />
      <Bubble
        size="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"
        position="-top-20 -right-10"
        opacity="bg-opacity-60"
      />
      <Bubble
        size="md:w-[400px] md:h-[100px]"
        position="top-0 left-24"
        opacity="bg-opacity-30"
      />
    </section>
  );
};
