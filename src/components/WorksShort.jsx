function WorksShort() {
  return (
    <div className="bg-black bg-opacity-80 container flex flex-row justify-center items-center py-3 lg:mt-10 mx-auto">
      <div className=" font-unica font-bold text-md xs:text-xl md:text-2xl text-gray-800">download my cv</div>

      <button type="button" className="py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105">
        <a href={resume} download="Kóta Viktória CV 2024 02.pdf">
          HERE
        </a>
      </button>
    </div>
  );
}

export default WorksShort;
