const Footer = () => {
  return (
    <footer className="bg-dark-green flex justify-center flex-col h-72  mt-10">
      <div className="text-sm flex flex-col justify-center items-center mb-10 gap-2">
        <p className="mb-10 text-xs font-bold ">
          A może... chcesz mi towarzyszyć podczas wyprawy?
        </p>
        <p>Daj mi znać! a jeśli masz pytania, pisz lub dzwoń śmiało:</p>
        <button className="font-bold">
          <a href="mailto:khprzybyl@gmail.com ">khprzybyl@gmail.com</a>
        </button>
        <p className="font-bold">tel: +48 605 300 172</p>
      </div>
      <p className="text-xs flex justify-center items-end mb-5">
        © 2023 Katarzyna Przybył
      </p>
    </footer>
  );
};

export default Footer;
