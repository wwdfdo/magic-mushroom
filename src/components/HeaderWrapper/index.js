const HeaderWrapper = ({ children }) => {
  return (
    <div className="header bg-black h-[80px] flex justify-between items-center">
      {children}
    </div>
  );
};

export default HeaderWrapper;
