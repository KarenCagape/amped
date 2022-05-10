import * as React from "react";
import SelectOption from "../../components/select-option";
import IcoPhone from "../../assets/ico-phone.svg";
import "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

function ContactCard({ email, contact, label }) {
    return (
        <div tw="bg-sitegray rounded p-8">
            <div tw="mb-8">
                <div>
                    <IcoPhone />
                </div>
            </div>
            <div tw="text-px18 lg:text-px21 font-bold">
                <div tw="mb-4 lg:mb-6">
                    <div>{email}</div>
                    {contact ? <div tw="mt-4">{contact}</div> : ""}
                </div>
            </div>
            <div tw="text-secondary text-px16">{label}</div>
        </div>
    );
}

export function BuyWowSolarCountries({ heading, countries }) {
    const [selectedCountry, setSelectedCountry] = React.useState(countries[0]);

    return (
        <div tw="px-4 container mx-auto lg:pt-16 pb-16 lg:pb-48">
            <div tw="grid grid-cols-1 lg:grid-cols-5">
                {heading?.heading ? (
                    <div tw="text-px21 lg:text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 lg:pr-16 leading-normal">{heading?.heading}</div>
                ) : (
                    ""
                )}
                <div tw="col-span-3 lg:text-px21">
                    {heading?.copy?.childMarkdownRemark?.html ? (
                        <div tw="mb-8" dangerouslySetInnerHTML={{ __html: heading?.copy?.childMarkdownRemark?.html }} />
                    ) : (
                        ""
                    )}
                    <div tw="mb-4">
                        <div tw="mb-4">Select a Country</div>
                        <SelectOption
                            tw="w-full"
                            name="selectedCountry"
                            onChange={(e) => {
                                const selectedIndex = e.target.value;
                                setSelectedCountry(countries[selectedIndex]);
                            }}
                        >
                            {countries.map((country, i) => (
                                <option key={i} value={i}>
                                    {country.name}
                                </option>
                            ))}
                        </SelectOption>
                        <div tw="flex justify-center items-center my-12">
                            {selectedCountry?.image?.gatsbyImageData ? (
                                <GatsbyImage image={selectedCountry?.image?.gatsbyImageData} alt={selectedCountry?.image?.title} />
                            ) : (
                                ""
                            )}
                        </div>
                        <div tw="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8">
                            {selectedCountry?.contacs?.map(({ name, emailAddress, phoneNumber }, i) => (
                                <ContactCard key={i} email={emailAddress} contact={phoneNumber} label={name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyWowSolarCountries;
