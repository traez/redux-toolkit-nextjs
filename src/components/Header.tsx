import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-slate-950 text-slate-200 border-b-[1px] border-b-slate-700">
      <nav className="py-6 flex items-center justify-between mx-auto px-4">
        <Link href={"/"}>
          <h1 className="text-lg font-semibold hover:text-white duration-200">
            Todo Application
          </h1>
        </Link>
        <ul className="flex items-center gap-x-10 text-slate-300">
          <footer className=" flex gap-1">
            <a
              href="https://github.com/traez/redux-toolkit-nextjs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white duration-200 cursor-pointer"
            >
              Redux Toolkit Nextjs
            </a>
            <b>©2024 Trae Zeeofor</b>
          </footer>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
