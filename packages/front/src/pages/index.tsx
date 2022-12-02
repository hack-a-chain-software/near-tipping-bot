import {NavBar} from '@/components/navbar/';

import {SendToken} from '@/components/sendtoken/'
import {HowToUse} from '@/components/howtouse/';
import {AvaiableTokens} from '@/components/availabletokens/';
import {RegisterToken} from '@/components/registertoken/';
import {Footer} from '@/components/footer/';

function Index() {
  return (
    <div className="font-sans">
      <NavBar />

      {/* <div className="bg-lpbg bg-cover bg-clip-content">
        <SendToken />
        <HowToUse />
        <AvaiableTokens />
        <RegisterToken />
      </div>

      <Footer /> */}
    </div>


  );
}

export default Index;
