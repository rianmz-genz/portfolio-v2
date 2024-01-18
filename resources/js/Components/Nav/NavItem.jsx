const NavItem = ({ show, children }) => {
    return (
      <ul
        className={`flex flex-col gap-2 lg:flex lg:flex-row lg:items-center lg:gap-12 justify-center w-full`}
      >
        {children}
      </ul>
    );
  };
  
  export default NavItem;