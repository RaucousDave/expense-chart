export default function Header() {
  return (
    <>
      <div className="flex justify-between bg-red-dark w-full md:w-[50%] items-center px-6 py-3 rounded-2xl">
        {/* container for budget*/}
        <div className="flex flex-col text-red-light gap-2">
          <p>My balance</p>
          <h1 className="font-semibold text-4xl">$921.48</h1>
        </div>
        {/* Logo container */}
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
      </div>
    </>
  );
}
