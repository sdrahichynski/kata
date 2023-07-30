import Container from "@/components/container";
import * as LC from "./components";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <LC.Logo />
            <LC.Search />
            <LC.UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
