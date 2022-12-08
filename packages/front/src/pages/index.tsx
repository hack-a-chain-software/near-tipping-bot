import {
  SendToken,
  HowToUse,
  AvaiableTokens,
  RegisterToken,
  Footer,
  NavBar,
} from "@/components";

function Index() {
  return (
    <div className="font-sans">
      <NavBar />

      <div className="bg-lpbg bg-cover bg-clip-content">
        <SendToken />
        <HowToUse />
        <AvaiableTokens />
        <RegisterToken />
      </div>

      <Footer />
    </div>
  );
}

export default Index;
