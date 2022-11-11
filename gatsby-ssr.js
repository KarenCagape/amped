const React = require("react");

const PreBodyComponents = [
    <div style={{ position: "relative", width: "100%", outline: "1px solid #00f", overflow: "hidden" }}>
        <div style={{ position: "relative", float: "left", height: "67px", padding: "0", margin: "0", border: "0", width: "250px" }}></div>
        <div style={{ position: "relative", float: "left", height: "54px", padding: "0", margin: "0", border: "0", width: "250px" }}></div>
        <div style={{ position: "relative", clear: "both", height: "1px", padding: "0", margin: "0", border: "0", width: "100%" }}></div>
        <iframe
            frameBorder="0"
            src="https://republic.com/widgets/header/amped-innovation"
            style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", background: "#0049ff" }}
        ></iframe>
    </div>,
];

const HeadComponents = [
    <script
        dangerouslySetInnerHTML={{
            __html: ` !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1164804407479110');
            fbq('track', 'PageView');`,
        }}
    />,
];

exports.onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
    setHeadComponents(HeadComponents);
    setPreBodyComponents(PreBodyComponents);
};
