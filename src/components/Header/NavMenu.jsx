import NavMenuItem from "./NavMenuItem";

const NavMenu = ({ menu }) => {
  return (
    <div className="flex gap-6 ml-5">
      {menu.map(({ id, title }) => (
        <NavMenuItem key={id} title={title} />
      ))}
    </div>
  );
};

export default NavMenu;
