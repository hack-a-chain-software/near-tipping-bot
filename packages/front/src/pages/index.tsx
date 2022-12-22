import {
  Footer,
  NavBar,
  Section,
  Button,
  Title,
  Text,
  Divider,
  DiscordIcon,
  TutorialCard,
  HighlightText,
  AvaiableTokens,
} from "@/components";
import tutorialItems from "@/json/tutorial.json";

function Index() {
  return (
    <main className="bg-primary">
      <NavBar />

      <Section
        id="send-token"
        className="pt-12 grid grid-cols-12 pb-[171px] justify-center"
      >
        <div className="col-span-6 max-w-[570px] flex flex-col justify-center items-start">
          <Title>
            Send <HighlightText>NEAR</HighlightText> and{" "}
            <HighlightText>NEP-141</HighlightText> tokens directly on discord.
          </Title>

          <Text className="my-12">
            Engage your community with ranking, social score, and token
            submissions with no fees, without opening your wallet.
          </Text>

          <Button
            onClick={() =>
              window.open(
                "https://discord.com/api/oauth2/authorize?client_id=1051851105300123668&permissions=2147503104&scope=bot"
              )
            }
          >
            <span>Get on your server </span>

            <DiscordIcon />
          </Button>
        </div>

        <div className="col-span-6 flex items-center justify-end">
          <img
            loading="lazy"
            alt="tipping bot waving"
            className="max-w-[536px]"
            src="/images/wave_tipping_bot.png"
          />
        </div>
      </Section>

      <Divider>
        <Section id="how-to-use" className="pt-24 pb-56">
          <div className="flex justify-center mb-16">
            <Title>
              How to <span className="text-pink my-4">use</span>
            </Title>
          </div>

          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(210px,250px))] gap-12 justify-center">
            {tutorialItems.map((step, id) => (
              <TutorialCard
                {...step}
                index={id}
                key={`how-to-use-peter-bot-step-${id}`}
              />
            ))}
          </div>
        </Section>
      </Divider>

      <Section id="available-tokens" className="pt-24 pb-32">
        <div className="text-center mb-16">
          <Title>
            Our <HighlightText>available tokens</HighlightText>
          </Title>
        </div>

        <AvaiableTokens />
      </Section>

      <Divider>
        <Section id="register-token" className="pt-32 pb-60">
          <div className="text-center mb-16">
            <Title>
              Didn’t find the <HighlightText>token you need?</HighlightText>
            </Title>
          </div>

          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              src="/images/tipping_bot.png"
              alt="Tipping bot"
            />

            <div className="flex flex-col pl-8">
              <p className="text-center pb-12 font-normal text-xl text-white">
                Make a request to add a new token{" "}
                <br className="hidden lg:block"></br>
                by using <span className="text-pink">/newtoken</span> command
              </p>

              <Button
                onClick={() =>
                  window.open(
                    "https://discord.com/api/oauth2/authorize?client_id=1051851105300123668&permissions=2147503104&scope=bot"
                  )
                }
              >
                <span>Get the bot on your server </span>

                <DiscordIcon />
              </Button>
            </div>
          </div>
        </Section>
      </Divider>

      <Footer />
    </main>
  );
}

export default Index;
