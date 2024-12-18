function Header() {
  return (
    <div className="flex items-center justify-between p-6 md:mx-32 ">
      <div className="text-4xl">
        {/*Logo*/}
        <h1 className="">TP2</h1>
      </div>
      <div className="flex gap-10 rounded-3xl text-white text-sm">
        <button className=" py-2 px-3 rounded-3xl bg-black">Sign Up</button>
        <button className=" py-2 px-3 rounded-3xl bg-orange-500">Login</button>
      </div>
    </div>
  );
}

export default Header;
