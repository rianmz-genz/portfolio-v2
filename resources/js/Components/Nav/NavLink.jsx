import { Link } from "@inertiajs/react";

const NavLink = ({ children, target }) => {
  return (
    <li>
      <Link
        href={target}
        className={` text-base ${
          window.location.pathname == target
            ? "font-bold text-white dark:text-white underline rounded-md"
            : "text-gray-500 dark:text-white[0.5] dark:hover:text-white rounded-md"
        } hover:text-white transition-all duration-300`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;