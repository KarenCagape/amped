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

exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(PreBodyComponents);
};
