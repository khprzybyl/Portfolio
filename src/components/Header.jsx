import logoIcon from '../assets/images/logo_28.jpg';
import background from '../assets/images/background.png';

const Header = () => {
  return (
    <div
      className=" bg-cover bg-no-repeat bg-center h-[100vh]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className=" absolute flex items-center justify-center mt-20 w-full flex-col">
        <img
          src={logoIcon}
          alt="mastercraft icon"
          className="w-14 z-20 right-0 left-0 mx-auto rounded-full"
        />
        <h1 className="m-4 text-lg md:text-2xl text-light-green tracking-widest text-center">
          THE MOUNTAINS ARE CALLING AND I MUST GO
        </h1>
        <div className="bg-light-green bg-opacity-90 relative z-80 rounded-lg mt-10 p-0 mx-0 sm:mx-5 lg:mx-20 xl:mx-60">
          <div className="overflow-y-auto h-96 my-5 px-5 md:my-10 md:px-10 text-center">
            {/*my-2 md:my-5 p-4 md:p-10 py-2 px-3 lg:px-8 flex-col flex justify-center items-center text-center*/}
            <p className="text-lg font-bold leading-6 text-neutral-800">
              Cześć! Cieszę się że tu jesteś ;)
            </p>
            <p className="text-sm leading-7 text-neutral-800 mt-6 font-bold ">
              Miło mi Cię powitać na stronie z wyprzedażą moich prac. Strona
              powstała z okazji moich 30 urodzin! Postanowiłam wykorzystać moje
              artystyczne umiejętności jako środek do spełnienia kolejnych
              górskich wędrówek.
            </p>
            <p className="text-sm  leading-7 text-neutral-800 mt-6">
              Jeśli zastanawiasz się, co podarować mi z okazji moich urodzin, to
              mam dla Ciebie propozycję: zakup jeden z moich produktów, dzięki
              czemu nie tylko dostaniesz unikalną pracę wysokiej jakości, ale
              także sprawisz, że będę krok bliżej mojej jednej z wymarzonych
              wypraw w góry.
            </p>
            <p className="text-sm leading-7 text-neutral-800 mt-6 font-bold ">
              Przeglądając tę stronę, odkryjesz moje artystyczne prace: od
              subtelnych fotografii, przez precyzyjne rysunki, pełne pasji
              obrazy malarskie aż po ostatnie sztuki limitowanych kwietników
              mojego projektu. Każda z prac jest wyjątkowa i pełna emocji. A co
              najważniejsze, każda z tych prac jest dostępna do zakupu poprzez
              odnośnik do aukcji.
            </p>
            <p className="text-sm leading-7 text-neutral-800 mt-6 ">
              Zapraszam do dalszego odkrywania mojego świata sztuki i do
              dzielenia się nim z innymi.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
