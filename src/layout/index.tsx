import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import PageTransition from "@/components/page-transition";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navigation />
      <main className="py-16">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
