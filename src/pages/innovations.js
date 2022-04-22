import * as React from "react";
import tw from "twin.macro";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

function Submenu({ sections }) {
  function handleClick(e, idx) {
    sections[idx].current.scrollIntoView();
  }

  return (
    <div tw="bg-white sticky top-20 z-10">
      <ul tw="py-8 w-10/12 mx-auto text-px16 flex font-circular-book items-center justify-between">
        <li>
          <a
            href="#"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 0)}
          >
            World Class Design
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#city-like-performance"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 1)}
          >
            City-Like Performance
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#smart-affordability"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 2)}
          >
            Smart Affordability
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#premium-materials"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 3)}
          >
            Premium Materials
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#advanced-manufacturing"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 4)}
          >
            Advanced Manufacturing
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#africa-tough"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 5)}
          >
            Africa Tough
          </a>
        </li>
        <li>
          <span tw="h-1 w-1 border-r-2 border-charcoal-10"></span>
        </li>
        <li>
          <a
            href="#designed-in-the-usa"
            tw="px-4 inline-block cursor-pointer hover:text-solar-100 active:text-solar-80"
            onClick={(e) => handleClick(e, 6)}
          >
            Designed in the USA
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Innovation() {
  const section1 = React.useRef();
  const section2 = React.useRef();
  const section3 = React.useRef();
  const section4 = React.useRef();
  const section5 = React.useRef();
  const section6 = React.useRef();
  const section7 = React.useRef();

  const scrollOnInit = () => {
    console.clear();
    console.log(window.location);

    switch (window.location.hash) {
      case "#city-like-performance":
        console.clear();
        console.log(section1);
        section1.current.scrollIntoView();
        break;
      // case "#smart-affordability":
      //   section2.scrollIntoView();
      //   break;
    }
  };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     scrollOnInit();
  //   }, 2000);
  // }, []);

  return (
    <Layout pageTitle="Innovations">
      <Submenu
        sections={[
          section1,
          section2,
          section3,
          section4,
          section5,
          section6,
          section7,
        ]}
      />
      <div tw="py-48 bg-sitegray">
        <div ref={section1} tw="px-4 lg:px-0 items-stretch flex ">
          <div tw="lg:w-9/12 mx-auto flex flex-col">
            <div tw="grid grid-cols-1 lg:grid-cols-5 mb-16">
              <div tw="mb-8 lg:mb-0 text-4xl lg:text-px54 col-span-2 leading-normal">
                World Class Design
              </div>
              <div tw="text-px21 col-span-3">
                Performance without compromise takes innovation. Reliability in
                rugged environments takes innovation. Performance with
                affordability takes innovation. Our field experience informs our
                engineering, and hours spent with partners and customers are
                backed by hours in the lab to ensure that every Amped appliance
                lives up to Smart Performance. Each product we create is unique,
                with features that set it apart from others in the market. Each
                product is tailor-designed with the appropriate circuitry,
                software and mechanical design balancing performance alongside
                reliability and affordability.
              </div>
            </div>
            <div tw="flex items-center justify-center relative">
              <StaticImage src="../images/innov-world-class.png" />
            </div>
          </div>
        </div>
      </div>

      <div ref={section2} tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="w-9/12 grid grid-cols-1 lg:grid-cols-5 mx-auto lg:mb-32 mb-16">
          <div tw="mb-8 col-span-2 text-4xl lg:text-px54 leading-normal">
            City-like Performance
          </div>
          <div tw="col-span-3 text-px21">
            We analyze every component in our appliances to find opportunities
            for efficiency improvement. We build our own proprietary circuits,
            software, and mechanical designs to deliver appliances that perform
            like those in the city but with the efficiency need for off-grid
            applications.
          </div>
        </div>
        <div tw="flex items-center justify-center relative">
          <StaticImage src="../images/innov-city-like-performance.png" />
        </div>
      </div>
      <div ref={section3} tw="px-4 lg:px-0 py-16 lg:py-48 bg-sitegray">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 lg:mb-32 mb-16">
          <div tw="text-4xl lg:text-px54 col-span-2 mb-8 lg:mb-0  leading-normal">
            Smart Affordability
          </div>
          <div tw="text-px21 col-span-3">
            Others focus on product affordability. We focus on the total cost of
            ownership of a product. The hours we have spent with partners
            assisting in building operation capacity informs our engineering. We
            take those learnings - building innovative and unique features that
            make our products the lowest cost to operate. Our systems report any
            issue with an error code so if there is a problem, it can be
            resolved over the phone without the cost of sending a technician.
          </div>
        </div>
        <div tw="flex items-center justify-center relative">
          <StaticImage src="../images/innov-smart-affordable.png" />
        </div>
      </div>
      <div ref={section4} tw="px-4 lg:px-0 py-16 lg:py-48">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0 leading-normal">
            Premium Materials
          </div>
          <div tw="col-span-3 text-px21">
            Performance demands quality, and that begins with the exceptional
            materials we use to build our products. We start with XYZ
            polycarbonate plastic for our lights fusing them with a special
            process so they are highly resistant to damage. For our handheld
            torch, we start with 6061 aerospace grade aluminum for incredible
            durability.
          </div>
        </div>
        <div tw="flex items-center justify-center relative">
          <StaticImage src="../images/innov-premium-materials.png" />
        </div>
      </div>

      <div ref={section5} tw="px-4 lg:px-0 py-16 lg:py-48 bg-sitegray">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0 leading-normal">
            Advanced Manufacturing
          </div>
          <div tw="col-span-3 text-px21">
            Our customers operate in some of the world’s most demanding
            environments. Ambient temperatures that exceed 40 degrees Celsius.
            Humidity that hovers around 90%+. And, clouds dust and sand that can
            block out the sun. We study every warranty claim to find
            opportunities for reliability improvement. Even a single claim can
            inspire a reliability innovation. We do our own mechanical and
            electrical designs to gain even the smallest improvements like …
          </div>
        </div>
        <div tw="flex items-center justify-center relative">
          <StaticImage src="../images/innov-advanced-manufacturing.png" />
        </div>
      </div>

      <div ref={section6} tw="px-4 lg:px-0 py-16 lg:py-48 ">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-32">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0 leading-normal">
            Africa Tough
          </div>
          <div tw="col-span-3 text-px21">
            Our customers operate in some of the world’s most demanding
            environments. Ambient temperatures that exceed 40 degrees Celsius.
            Humidity that hovers around 90%+. And, clouds dust and sand that can
            block out the sun. We study every warranty claim to find
            opportunities for reliability improvement. Even a single claim can
            inspire a reliability innovation. We do our own mechanical and
            electrical designs to gain even the smallest improvements like …
          </div>
        </div>
        <div tw="flex items-center justify-center relative">
          <StaticImage src="../images/innovation-africa_tough.jpg" />
        </div>
      </div>
      <div
        ref={section7}
        tw="px-4 lg:px-0 pt-16 lg:pt-48 mb-16 lg:mb-32 pb-32 bg-sitegray"
      >
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="col-span-2 text-4xl lg:text-px54 mb-8 lg:mb-0 leading-normal">
            Designed in the USA
          </div>
          <div tw="col-span-3 text-px21">
            <div>
              Innovation is one of the most overused terms in the marketplace.
              Everyone claims it.
            </div>
            <div>
              But Amped lives it. At Amped, innovation is the never-ending
              challenge to improve. Always experimenting. Always inventing.
              Always pushing prototypes beyond the point of breaking until we
              have finally arrived at a solar appliance that meets our exacting
              demands. Innovation is always pushing the boundaries.
            </div>
            <div>
              At Amped, innovation is attention to details. It starts with
              listening and watching our customers with an eye to improving the
              customer experience. Then it’s the critical analysis of every
              component in an appliance to find opportunities for efficiency
              improvement. It ends with custom-designed componentry with
              exceptional materials. Innovation makes Amped appliances feel like
              you live in the city while living off-grid. No compromise.
            </div>
            <div>
              At Amped, innovation is our people. We’re not a big faceless
              factory, but rather a workplace of innovators who design and build
              the world’s best solar appliances and power generation systems
              using our minds and hearts. We do it by sharing ideas and always
              asking the next question to find what can be done to make this
              better. Our products are designed one at time right here on San
              Francisco, USA, following hundreds of meticulous steps and passing
              through many sets of hands.
            </div>
            <div>
              We are out there in the same places in the same unforgiving
              conditions that you are. Amped Innovation is applied experience.
              Lifetimes of it.
            </div>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 pb-16 lg:pb-48">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-10 gap-4">
          <div tw="col-span-3">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/innovation-us_design-01.png"
              layout="fullWidth"
            />
          </div>
          <div tw="flex flex-col gap-4 col-span-4">
            <div>
              <StaticImage
                alt=""
                loading="eager"
                placeholder="none"
                src="../images/innovation-us_design-02.png"
                layout="fullWidth"
              />
            </div>
            <div tw="grid grid-cols-2 gap-4">
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/innovation-us_design-03.png"
                  layout="fullWidth"
                />
              </div>
              <div>
                <StaticImage
                  alt=""
                  loading="eager"
                  placeholder="none"
                  src="../images/innovation-us_design-04.png"
                  layout="fullWidth"
                />
              </div>
            </div>
          </div>
          <div tw="col-span-3">
            <StaticImage
              alt=""
              loading="eager"
              placeholder="none"
              src="../images/innovation-us_design-05.png"
              layout="fullWidth"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
