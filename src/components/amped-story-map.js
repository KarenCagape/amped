import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import 'twin.macro';

export default function AmpedStoryMap({ ...rest }) {
  const parentRef = React.useRef();
  const imageContainerRef = React.useRef();
  const dotsIndicator = React.useRef();
  const showIndicator = React.useRef(false);
  const isHovering = React.useRef(false);
  const [currentDotIdx, setCurrentDotIdx] = React.useState(0);

  function getPosition(objectX, objectY) {
    const rect = parentRef.current.getBoundingClientRect();

    return {
      x: `${objectX - rect.x}px`,
      y: `${objectY - rect.y}px`,
    };
  }

  function handleMouseOver(e) {
    const position = getPosition(e.clientX, e.clientY);

    imageContainerRef.current.style.opacity = 1;
    imageContainerRef.current.style.left = position.x;
    imageContainerRef.current.style.top = position.y;

    setCurrentDotIdx(e.target.dataset.idx);
    isHovering.current = true;
    dotsIndicator.current.style.opacity = 0;
  }

  function handleMouseOut(e) {
    imageContainerRef.current.style.opacity = 0;
    isHovering.current = false;
    dotsIndicator.current.style.opacity = 1;
  }

  React.useEffect(() => {
    const domDots = document.querySelectorAll('.dots');

    function repositionIndicator(dots) {
      const idx = Math.floor(Math.random() * dots.length);
      const dot = dots[idx];
      const rect = dot.getBoundingClientRect();
      const position = getPosition(
        rect.x + rect.width / 2,
        rect.y + rect.height / 2
      );

      dotsIndicator.current.style.left = position.x;
      dotsIndicator.current.style.top = position.y;
    }

    repositionIndicator(domDots);
    const intervalId = setInterval(() => {
      if (isHovering.current) {
        return;
      }
      repositionIndicator(domDots);
    }, 5000);

    const intervalId2 = setInterval(() => {
      showIndicator.current = !showIndicator.current;
      if (isHovering.current) {
        return;
      }

      if (showIndicator.current) {
        dotsIndicator.current.style.transform =
          'translate(-50%, -50%) scale(1.5)';
        return;
      }

      dotsIndicator.current.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 500);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div ref={parentRef} tw="relative">
      <div
        ref={dotsIndicator}
        tw="ease-in duration-500 pointer-events-none border border-solar-100 absolute z-10 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `${(16 / 333) * 100}%`,
          height: `${(16 / 333) * 100}%`,
        }}
      ></div>
      <div
        ref={imageContainerRef}
        tw="p-1 w-1/2 pointer-events-none ease-out duration-500 -translate-x-1/2 -translate-y-1/2 absolute bg-sitegray rounded-md"
        style={{ opacity: 0 }}
      >
        {currentDotIdx === 'idx-4' && (
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../images/map-amped_impact-02.jpg"
          />
        )}
        {currentDotIdx === 'idx-1' && (
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../images/map-amped_impact-01.jpg"
          />
        )}
        {currentDotIdx === 'idx-5' && (
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../images/map-amped_impact-03.jpg"
          />
        )}
        {currentDotIdx === 'idx-3' && (
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../images/map-amped_impact-04.jpg"
          />
        )}
        {currentDotIdx === 'idx-2' && (
          <StaticImage
            alt=""
            loading="eager"
            placeholder="none"
            src="../images/map-amped_impact-05.jpg"
          />
        )}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 633 628">
        <g id="map-dots_africa" transform="translate(-985.053 -7594.854)">
          <path
            id="Path_599"
            data-name="Path 599"
            d="M30.782,85.088a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,30.782,85.088"
            transform="translate(1035.23 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_600"
            data-name="Path 600"
            d="M58.1,85.088a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,58.1,85.088"
            transform="translate(1058.105 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_601"
            data-name="Path 601"
            d="M85.412,85.088a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,85.412,85.088"
            transform="translate(1080.974 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_602"
            data-name="Path 602"
            d="M112.727,85.088a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_604"
            data-name="Path 604"
            d="M167.358,85.088a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_605"
            data-name="Path 605"
            d="M194.673,85.088a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_606"
            data-name="Path 606"
            d="M221.988,85.088A15.391,15.391,0,1,0,206.6,100.479a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_607"
            data-name="Path 607"
            d="M249.3,85.088a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,85.088"
            transform="translate(1218.192 7653.132)"
            fill="#b5c4ca"
          />
          <path
            id="Path_608"
            data-name="Path 608"
            d="M58.1,61.856A15.391,15.391,0,1,0,42.706,77.247,15.391,15.391,0,0,0,58.1,61.856"
            transform="translate(1058.105 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_609"
            data-name="Path 609"
            d="M85.412,61.856A15.391,15.391,0,1,0,70.021,77.247,15.391,15.391,0,0,0,85.412,61.856"
            transform="translate(1080.974 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_610"
            data-name="Path 610"
            d="M112.727,61.856A15.391,15.391,0,1,0,97.336,77.247a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_611"
            data-name="Path 611"
            d="M140.043,61.856a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_612"
            data-name="Path 612"
            d="M167.358,61.856a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_613"
            data-name="Path 613"
            d="M194.673,61.856a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_614"
            data-name="Path 614"
            d="M221.988,61.856A15.391,15.391,0,1,0,206.6,77.247a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7633.75)"
            fill="#b5c4ca"
          />
          <path
            id="Path_615"
            data-name="Path 615"
            d="M85.412,38.623A15.391,15.391,0,1,0,70.021,54.014,15.391,15.391,0,0,0,85.412,38.623"
            transform="translate(1080.974 7614.302)"
            fill="#b5c4ca"
          />
          <path
            id="Path_616"
            data-name="Path 616"
            d="M112.727,38.623A15.391,15.391,0,1,0,97.336,54.014a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7614.302)"
            fill="#b5c4ca"
          />
          <path
            id="Path_617"
            data-name="Path 617"
            d="M140.043,38.623a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7614.302)"
            fill="#b5c4ca"
          />
          <path
            id="Path_618"
            data-name="Path 618"
            d="M140.043,15.39a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,140.043,15.39"
            transform="translate(1126.714 7594.854)"
            fill="#b5c4ca"
          />
          <path
            id="Path_619"
            data-name="Path 619"
            d="M30.782,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1035.23 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_620"
            data-name="Path 620"
            d="M58.1,108.321a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,58.1,108.321"
            transform="translate(1058.105 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_622"
            data-name="Path 622"
            d="M112.727,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_623"
            data-name="Path 623"
            d="M140.043,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_624"
            data-name="Path 624"
            d="M167.358,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_625"
            data-name="Path 625"
            d="M194.673,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_626"
            data-name="Path 626"
            d="M221.988,108.321A15.391,15.391,0,1,0,206.6,123.712a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_627"
            data-name="Path 627"
            d="M249.3,108.321a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,108.321"
            transform="translate(1218.192 7672.558)"
            fill="#b5c4ca"
          />
          <path
            id="Path_628"
            data-name="Path 628"
            d="M30.782,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1035.23 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_629"
            data-name="Path 629"
            d="M30.782,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(985.053 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_630"
            data-name="Path 630"
            d="M58.1,131.554a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,58.1,131.554"
            transform="translate(1058.105 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_631"
            data-name="Path 631"
            d="M85.412,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1080.974 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_632"
            data-name="Path 632"
            d="M112.727,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_633"
            data-name="Path 633"
            d="M140.043,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_634"
            data-name="Path 634"
            d="M167.358,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_635"
            data-name="Path 635"
            d="M194.673,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_636"
            data-name="Path 636"
            d="M221.988,131.554A15.391,15.391,0,1,0,206.6,146.945a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_637"
            data-name="Path 637"
            d="M249.3,131.554a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,131.554"
            transform="translate(1218.192 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_638"
            data-name="Path 638"
            d="M58.1,154.787a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,58.1,154.787"
            transform="translate(1058.105 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_639"
            data-name="Path 639"
            d="M85.412,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1080.974 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_640"
            data-name="Path 640"
            d="M112.727,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1103.844 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_641"
            data-name="Path 641"
            d="M140.043,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_642"
            data-name="Path 642"
            d="M167.358,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_643"
            data-name="Path 643"
            d="M194.673,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_644"
            data-name="Path 644"
            d="M221.988,154.787A15.391,15.391,0,1,0,206.6,170.178a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_645"
            data-name="Path 645"
            d="M249.3,154.787a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,154.787"
            transform="translate(1218.192 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_646"
            data-name="Path 646"
            d="M140.043,178.019a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7730.835)"
            fill="#b5c4ca"
          />
          <path
            id="Path_647"
            data-name="Path 647"
            d="M167.358,178.019a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7730.835)"
            fill="#b5c4ca"
          />
          <path
            id="Path_648"
            data-name="Path 648"
            d="M194.673,178.019a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7730.835)"
            fill="#b5c4ca"
          />
          <path
            id="Path_650"
            data-name="Path 650"
            d="M249.3,178.019a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,178.019"
            transform="translate(1218.192 7730.835)"
            fill="#b5c4ca"
          />
          <path
            id="Path_651"
            data-name="Path 651"
            d="M140.043,201.252a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_652"
            data-name="Path 652"
            d="M167.358,201.252a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_653"
            data-name="Path 653"
            d="M194.673,201.252a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_654"
            data-name="Path 654"
            d="M221.988,201.252A15.391,15.391,0,1,0,206.6,216.643a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_655"
            data-name="Path 655"
            d="M249.3,201.252a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,201.252"
            transform="translate(1218.192 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_656"
            data-name="Path 656"
            d="M167.358,224.485a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7769.687)"
            fill="#b5c4ca"
          />
          <path
            id="Path_657"
            data-name="Path 657"
            d="M194.673,224.485a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7769.687)"
            fill="#b5c4ca"
          />
          <path
            id="Path_658"
            data-name="Path 658"
            d="M221.988,224.485A15.391,15.391,0,1,0,206.6,239.876a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7769.687)"
            fill="#b5c4ca"
          />
          <path
            id="Path_659"
            data-name="Path 659"
            d="M249.3,224.485a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,224.485"
            transform="translate(1218.192 7769.687)"
            fill="#b5c4ca"
          />
          <path
            id="Path_660"
            data-name="Path 660"
            d="M167.358,247.717a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7789.112)"
            fill="#b5c4ca"
          />
          <path
            id="Path_661"
            data-name="Path 661"
            d="M194.673,247.717a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7789.112)"
            fill="#b5c4ca"
          />
          <path
            id="Path_662"
            data-name="Path 662"
            d="M221.988,247.717A15.391,15.391,0,1,0,206.6,263.108a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7789.112)"
            fill="#b5c4ca"
          />
          <path
            id="Path_663"
            data-name="Path 663"
            d="M249.3,247.717a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,247.717"
            transform="translate(1218.192 7789.112)"
            fill="#b5c4ca"
          />
          <path
            id="Path_664"
            data-name="Path 664"
            d="M140.043,270.95a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1126.714 7808.538)"
            fill="#b5c4ca"
          />
          <path
            id="Path_666"
            data-name="Path 666"
            d="M194.673,270.95a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7808.538)"
            fill="#b5c4ca"
          />
          <path
            id="Path_667"
            data-name="Path 667"
            d="M221.988,270.95A15.391,15.391,0,1,0,206.6,286.341a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7808.538)"
            fill="#b5c4ca"
          />
          <path
            id="Path_668"
            data-name="Path 668"
            d="M249.3,270.95a15.391,15.391,0,1,0-15.391,15.391A15.391,15.391,0,0,0,249.3,270.95"
            transform="translate(1218.192 7808.538)"
            fill="#b5c4ca"
          />
          <path
            id="Path_669"
            data-name="Path 669"
            d="M167.358,294.183a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7827.92)"
            fill="#b5c4ca"
          />
          <path
            id="Path_670"
            data-name="Path 670"
            d="M194.673,294.183a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7827.92)"
            fill="#b5c4ca"
          />
          <path
            id="Path_671"
            data-name="Path 671"
            d="M221.988,294.183A15.391,15.391,0,1,0,206.6,309.574a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7827.92)"
            fill="#b5c4ca"
          />
          <path
            id="Path_672"
            data-name="Path 672"
            d="M276.619,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1241.063 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_673"
            data-name="Path 673"
            d="M303.934,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1263.938 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_674"
            data-name="Path 674"
            d="M331.25,131.554a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1286.803 7691.984)"
            fill="#b5c4ca"
          />
          <path
            id="Path_675"
            data-name="Path 675"
            d="M276.619,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1241.063 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_676"
            data-name="Path 676"
            d="M276.619,178.019a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1241.063 7730.835)"
            fill="#b5c4ca"
          />
          <path
            id="Path_677"
            data-name="Path 677"
            d="M276.619,201.252a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1241.063 7750.261)"
            fill="#b5c4ca"
          />
          <path
            id="Path_679"
            data-name="Path 679"
            d="M303.934,154.787a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1263.938 7711.409)"
            fill="#b5c4ca"
          />
          <path
            id="Path_680"
            data-name="Path 680"
            d="M303.934,247.717a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1263.938 7789.112)"
            fill="#b5c4ca"
          />
          <path
            id="Path_681"
            data-name="Path 681"
            d="M303.934,270.95a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1263.938 7808.538)"
            fill="#b5c4ca"
          />
          <path
            id="Path_682"
            data-name="Path 682"
            d="M167.358,317.416a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7847.368)"
            fill="#b5c4ca"
          />
          <path
            id="Path_683"
            data-name="Path 683"
            d="M194.673,317.416a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7847.368)"
            fill="#b5c4ca"
          />
          <path
            id="Path_684"
            data-name="Path 684"
            d="M221.988,317.416A15.391,15.391,0,1,0,206.6,332.807a15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1195.322 7847.368)"
            fill="#b5c4ca"
          />
          <path
            id="Path_685"
            data-name="Path 685"
            d="M167.358,340.648a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1149.584 7866.815)"
            fill="#b5c4ca"
          />
          <path
            id="Path_686"
            data-name="Path 686"
            d="M194.673,340.648a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
            transform="translate(1172.452 7866.815)"
            fill="#b5c4ca"
          />
          <g
            id="Component_82_5"
            data-name="Component 82 – 5"
            transform="translate(1235.978 7723)"
          >
            <path
              className="dots"
              id="Path_621"
              data-idx="idx-1"
              data-name="Path 621"
              d="M85.412,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
              transform="translate(-54.63 -92.93)"
              fill="#fc4803"
              tw="cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </g>
          <g
            id="Component_82_3"
            data-name="Component 82 – 3"
            transform="translate(1486.909 8106.712)"
          >
            <path
              className="dots"
              id="Path_621-2"
              data-idx="idx-2"
              data-name="Path 621"
              d="M85.412,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
              transform="translate(-54.63 -92.93)"
              fill="#fc4803"
              tw="cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </g>
          <g
            id="Component_82_4"
            data-name="Component 82 – 4"
            transform="translate(1286.155 8064.032)"
          >
            <path
              className="dots"
              id="Path_621-3"
              data-idx="idx-3"
              data-name="Path 621"
              d="M85.412,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
              transform="translate(-54.63 -92.93)"
              fill="#fc4803"
              tw="cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </g>
          <g
            id="Component_82_1"
            data-name="Component 82 – 1"
            transform="translate(1135.604 7765.488)"
          >
            <path
              className="dots"
              id="Path_621-4"
              data-idx="idx-4"
              data-name="Path 621"
              d="M85.412,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
              transform="translate(-54.63 -92.93)"
              fill="#fc4803"
              tw="cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </g>
          <g
            id="Component_82_2"
            data-name="Component 82 – 2"
            transform="translate(1386.526 7893.462)"
          >
            <path
              className="dots"
              id="Path_621-5"
              data-idx="idx-5"
              data-name="Path 621"
              d="M85.412,108.321a15.391,15.391,0,1,0-15.391,15.391,15.391,15.391,0,0,0,15.391-15.391"
              transform="translate(-54.63 -92.93)"
              fill="#fc4803"
              tw="cursor-pointer"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
