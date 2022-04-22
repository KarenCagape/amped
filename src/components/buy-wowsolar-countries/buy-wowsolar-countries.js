import * as React from "react";
import SelectOption from "../../components/select-option";
import IcoPhone from "../../assets/ico-phone.svg";
import TeamMap from "../../assets/team-map.svg";
import "twin.macro";
import wowSolarCountries from "./wowsolar-countries";

function ContactCard({ email, contact, label }) {
  return (
    <div tw="bg-sitegray rounded p-8">
      <div tw="mb-8">
        <div>
          <IcoPhone />
        </div>
      </div>
      <div tw="text-px21 font-bold">
        <div tw="mb-6">
          <div tw="mb-4">{email}</div>
          <div>{contact}</div>
        </div>
      </div>
      <div tw="text-secondary text-px16">{label}</div>
    </div>
  );
}

export function BuyWowSolarCountries() {
  const [selectedCountry, setSelectedCountry] = React.useState(
    wowSolarCountries[0]
  );

  return (
    <div tw="px-4 lg:px-0 lg:w-9/12 mx-auto py-16 pb-48">
      <div tw="grid grid-cols-1 lg:grid-cols-5">
        <div tw="text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 pr-16 leading-normal">
          Buy WowSolar&trade;
        </div>
        <div tw="col-span-3 text-px21">
          <div tw="mb-8">
            Amped works with dozens of distributors in 23 countries on the
            Continent. Our sales team can connect you to any of our partners in
            your country
          </div>
          <div tw="mb-4">
            <div tw="mb-4">Select a Country</div>
            <SelectOption
              tw="w-full"
              name="selectedCountry"
              onChange={(e) => {
                const selectedIndex = e.target.value;
                console.log(wowSolarCountries[selectedIndex]);
                setSelectedCountry(wowSolarCountries[selectedIndex]);
              }}
            >
              {wowSolarCountries.map((country, i) => (
                <option value={i}>{country.name}</option>
              ))}
            </SelectOption>
            <div tw="flex justify-center items-center my-12">
              {selectedCountry.mapImg}
            </div>
            <div tw="grid grid-cols-2 justify-between gap-8">
              {selectedCountry.branches.map((branch) => (
                <ContactCard
                  email={branch.email}
                  contact={branch.contact}
                  label={branch.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyWowSolarCountries;
