import { BubblesDecoration } from "./BubblesDecoration";

export const Layout = ({ children }) => {
  return (
    <main
      className="relative w-screen h-screen grid place-content-center overflow-hidden"
      style={{
        backgroundColor: "#7A7A7A",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%237A7A7A' cx='50' cy='0' r='50'/%3E%3Cg fill='%23757575' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23717171' cx='50' cy='100' r='50'/%3E%3Cg fill='%236c6c6c' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23686868' cx='50' cy='200' r='50'/%3E%3Cg fill='%23646464' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f5f5f' cx='50' cy='300' r='50'/%3E%3Cg fill='%235b5b5b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23575757' cx='50' cy='400' r='50'/%3E%3Cg fill='%23525252' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%234e4e4e' cx='50' cy='500' r='50'/%3E%3Cg fill='%234a4a4a' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23464646' cx='50' cy='600' r='50'/%3E%3Cg fill='%23424242' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%233d3d3d' cx='50' cy='700' r='50'/%3E%3Cg fill='%23393939' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23353535' cx='50' cy='800' r='50'/%3E%3Cg fill='%23323232' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%232e2e2e' cx='50' cy='900' r='50'/%3E%3Cg fill='%232a2a2a' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23262626' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
      }}
    >
      <section className="h-full absolute inset-0 m-auto z-50 flex flex-col bg-white bg-opacity-40 max-w-6xl max-h-[90vh] rounded-xl backdrop-filter backdrop-blur-sm  shadow-xl border-black p-5">
        {children}
      </section>

      <BubblesDecoration />
    </main>
  );
};
