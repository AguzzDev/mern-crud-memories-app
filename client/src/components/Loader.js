import Loader from "react-loader-spinner";

export function LoaderComponent() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Loader type="Oval" color="gray" height={100} width={100} />
    </div>
  );
}
