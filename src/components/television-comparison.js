import * as React from "react";
import "twin.macro";
import SvgLight from "../assets/ico-light.svg";

import SvgSolarPanel from "../assets/ico-solar-panel.svg";

import SvgBattery from "../assets/ico-batter.svg";
import SvgTv from "../assets/ico-tv.svg";
import WowSolar from "./wowsolar";
import {
  cellBorderStyle,
  cellBorderStyleAll,
  cellBorderStyleX,
  cellBorderStyleY,
} from "../helpers/table-style";

export function TelevisionComparison() {
  return (
    <div
      css={{
        border: cellBorderStyle,
        borderRadius: "5px",
        overflow: "hidden",
      }}
      style={{ overflow: "hidden" }}
    >
      <table className="table-auto" tw="text-base" width="100%">
        <thead tw="text-px14 lg:text-px16 text-left text-primary font-circular-bold">
          <tr>
            <th
              style={{ ...cellBorderStyleX, borderLeft: 0 }}
              tw="p-3.5 font-normal"
            >
              Products
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="mb-4">
                <SvgBattery css={[{ width: 40 }]} />
              </div>
              <div>Included Battery </div>
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="pb-4">
                <SvgSolarPanel css={[{ width: 40 }]} />
              </div>
              <div>Solar Panel</div>
            </th>
            <th style={{ ...cellBorderStyleX }} tw="p-3.5 font-normal">
              <div tw="pb-4">
                <SvgTv css={[{ width: 40 }]} />
              </div>
              <div>TV Screen Size</div>
            </th>
            <th tw="p-3.5 font-normal">
              <div tw="mb-4">
                <SvgLight css={[{ width: 40 }]} />
              </div>
              <div>Number of Lamps </div>
            </th>
          </tr>
        </thead>
        <tbody tw="text-default text-px14 lg:text-px18 bg-white">
          <tr>
            <td style={{ ...cellBorderStyleY }} tw="p-3.5">
              <WowSolar tw="text-px14 lg:text-px18" model={"TV 24100"} />
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              100Whr
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              40W
            </td>
            <td style={{ ...cellBorderStyleAll }} tw="p-3.5">
              24”
            </td>
            <td style={{ ...cellBorderStyleAll, borderRight: 0 }} tw="p-3.5">
              4 (10 Maximum)
            </td>
          </tr>
          <tr>
            <td style={{ ...cellBorderStyleY, borderBottom: 0 }} tw="p-3.5">
              <WowSolar tw="text-px14 lg:text-px18" model={"TV 32120"} />
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              120Whr
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              40W
            </td>
            <td style={{ ...cellBorderStyleAll, borderBottom: 0 }} tw="p-3.5">
              32”
            </td>
            <td
              style={{ ...cellBorderStyleAll, borderBottom: 0, borderRight: 0 }}
              tw="p-3.5"
            >
              4 (10 Maximum)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TelevisionComparison;
