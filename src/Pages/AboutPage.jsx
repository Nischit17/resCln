import { DP_URL, SOCIAL_ICONS_SET } from "../Utilities/Constants";

const AboutPage = () => {
  return (
    <div className="w-full bg-[#e9ecee] px-4 pt-12">
      <div className="flex flex-col items-center py-8">
        <div className="text-center text-5xl font-bold text-defBlack">
          Hi. I'm Nischit D S
        </div>
        <div className="mt-5 h-2 w-[20%] bg-defColor"></div>
      </div>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-4 py-8 md:flex-row ">
        <div className="">
          <img
            src={DP_URL}
            className="h-[250px] w-[250px] rounded-full lg:h-[350px] lg:w-[350px]"
          ></img>
        </div>
        <div className="lg:py-8">
          <div className="border-b-[1px] border-b-[#80808042] pb-5 text-2xl font-semibold">
            I'm a tech enthusiast and i love designing websites.
          </div>
          <div>
            <div className="mx-0 my-4 text-2xl font-semibold">
              More about me
            </div>
            <div>
              <ul className="list-none text-xl">
                <li>👀 I’m interested in web developement</li>
                <li>🌱 I’m currently learning React</li>
                <li>📫 Reach me via : nischit819@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 text-2xl font-semibold text-defBlack md:flex-row">
        Connect with me on :
        <div className="flex">
          <a href="https://www.linkedin.com/in/nischitds/" target="_blank">
            <img src={SOCIAL_ICONS_SET.linkedIn} />
          </a>
          <a href="https://www.instagram.com/its.me.nischh/" target="_blank">
            <img src={SOCIAL_ICONS_SET.insta} />
          </a>
          <a href="mailto::nischit819@gmail.com" target="_blank">
            <img src={SOCIAL_ICONS_SET.gmail} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
