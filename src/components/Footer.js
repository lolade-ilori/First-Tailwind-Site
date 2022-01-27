

function Footer() {
  return (
    <div className="p-10 bg-indigo-800 text-indigo-400 flex justify-between items-center">
        {/* LEFT */}
        <div className="md:w-1/2">
            <h3 className="mb-2 text-lg">Join the NewsLetter</h3>
            <form className="flex">
                <input type="email" className="rounded-l w-full py-3 px-4 outline-none"/>
                <button className="bg-red-300 text-red-800 hover:bg-red-400 rounded-r px-4">Join</button>
            </form>
        </div>

        {/* RIGHT */}
        <div>
            Copyright &copy; Doggos 2021 - Infinity
        </div>
    </div>
  );
}

export default Footer;
