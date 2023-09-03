const Header = () => {
  return (
    <header className="flex items-center justify-center w-full flex-col">
      <div className="bg-light-green bg-opacity-90 relative z-80 rounded-lg mt-10 p-0 mx-0 sm:mx-5 lg:mx-20 xl:mx-60">
        <div className="overflow-y-auto h-96 my-5 px-5 md:my-10 md:px-10 text-center">
          {/*my-2 md:my-5 p-4 md:p-10 py-2 px-3 lg:px-8 flex-col flex justify-center items-center text-center*/}
          <p className="text-lg font-bold leading-6 text-neutral-800">
            Cześć! Cieszę się że tu jesteś ;)
          </p>
          <p className="text-sm leading-7 text-neutral-800 mt-6 font-bold ">
            Z okazji moich 30 urodzin postanowiłam wysłać parę moich prac w
            świat. W ten sposób, chcę wykorzystać moje zdolności artystyczne jako
            narzędzie do zbliżenia się do realizacji kolejnych górskich
            wędrówek.
          </p>
          <p className="text-sm  leading-7 text-neutral-800 mt-6">
            Zakup jeden z moich produktów, dzięki czemu nie tylko dostaniesz
            unikalną pracę wysokiej jakości, ale także sprawisz, że będę krok
            bliżej mojej jednej z wymarzonych wypraw w góry. To jeden z lepszych prezentów jakim sprwisz, że moje 30 urodziny będą wyjątkowe.  ;>.
          </p>
          <p className="text-sm leading-7 text-neutral-800 mt-6 font-bold ">
            Przeglądając tę stronę, odkryjesz moje artystyczne prace: rysunki, obrazy
            malarskie a także ostatnie sztuki limitowanych kwietników mojego
            projektu. Każda z prac jest wyjątkowa i wykonana z największą starannością. A co
            najważniejsze, każda z tych prac jest dostępna do zakupu poprzez
            odnośnik do aukcji.
          </p>
          <p className="text-sm leading-7 text-neutral-800 mt-6 ">
            Śmiało! Ruszaj odkrywać mój świat sztuki :)
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
