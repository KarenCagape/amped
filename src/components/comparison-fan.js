import * as React from "react";
import "twin.macro";
import SVGLight from "../assets/ico-light.svg";
import SVGSolarPanel from "../assets/ico-solar-panel.svg";
import SVGRadio from "../assets/ico-radio.svg";
import WowSolar from "./wowsolar";
import SVGBattery from "../assets/ico-batter.svg";
import {
  cellBorderStyle,
  cellBorderStyleAll,
  cellBorderStyleX,
  cellBorderStyleY,
} from "../helpers/table-style";

export function ComparisonTableFan() {
  return (
    <div
      style={{
        border: cellBorderStyle,
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <table className="table-auto" tw="text-base w-full">
        <thead tw="text-px16 text-left text-primary font-circular-bold">
          <tr>
            <th
              style={{ ...cellBorderStyleX, borderLeft: 0 }}
              tw="p-3.5 font-normal"
            >
              Products
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="mb-4">
                <SVGBattery css={[{ width: 40 }]} />
              </div>
              <div>Included Battery </div>
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="pb-4">
                <SVGSolarPanel css={[{ width: 40 }]} />
              </div>
              <div>Solar Panel</div>
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="mb-4">
                <SVGLight css={[{ width: 40 }]} />
              </div>
              <div>Lights </div>
            </th>
            <th tw="p-3.5 font-normal">
              <div tw="pb-4">
                <SVGRadio css={[{ width: 40 }]} />
              </div>
              <div>Radio and Torch Available</div>
            </th>
          </tr>
        </thead>
        <tbody tw="bg-white text-px18 font-circular-book">
          <tr>
            <td style={{ ...cellBorderStyleY }} tw="p-3.5">
              <WowSolar tw="text-px18" model={"FAN 16100"} />
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              100Whr
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              40W
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              3
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              Yes, Upon Request
            </td>
          </tr>
          <tr>
            <td style={{ ...cellBorderStyleY, borderBottom: 0 }} tw="p-3.5">
              <WowSolar tw="text-px18" model={"TV 32120"} />
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              120Whr
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              40W
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              4
            </td>
            <td
              style={{ ...cellBorderStyleAll, borderBottom: 0, borderRight: 0 }}
              tw="p-3.5"
            >
              Yes, Upon Request
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTableFan;
