import * as React from "react";
import tw from "twin.macro";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/heroes/contact-us";
import Button from "../components/_/button";
import TextInput from "../components/text-input";
import SelectOption from "../components/select-option";
import TextArea from "../components/textarea";
import { GatsbyImage } from "gatsby-plugin-image";

function ContactCard({ icon, content, label }) {
    return (
        <div tw="bg-sitegray rounded p-8 min-h-full">
            <div tw="mb-4 lg:mb-8">{icon}</div>
            <div tw="text-px18 lg:text-px21 font-circular-bold">{content}</div>
            <div tw="text-secondary">{label}</div>
        </div>
    );
}

export default function ContactUs({ data }) {
    const { contentfulContactUsTemplate } = data;
    const { name, heroBanner, introCopy, formTitle, contactListHeading, contactList } = contentfulContactUsTemplate;

    return (
        <Layout pageTitle={name}>
            {/* BANNER */}
            <Banner {...heroBanner} />

            {/* INTRO SECTION */}
            <div tw="pt-16 lg:pt-48">
                <div tw="px-4 container mx-auto">
                    <div tw="grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-48">
                        {introCopy?.heading ? <div tw="col-span-2 text-px24 lg:text-px54 mb-4 lg:mb-0">{introCopy?.heading}</div> : ""}
                        {introCopy?.copy?.childMarkdownRemark?.html ? (
                            <div tw="col-span-3 lg:text-px21" dangerouslySetInnerHTML={{ __html: introCopy?.copy?.childMarkdownRemark?.html }} />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div tw="px-4 container mx-auto">
                <div tw="grid grid-cols-1 lg:grid-cols-5">
                    {formTitle ? <div tw="col-span-2 text-px18 lg:text-px32 mb-6 lg:mb-0 font-circular-bold">{formTitle}</div> : ""}
                    <div tw="col-span-3">
                        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div tw="mb-2 lg:mb-4">
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">First Name</div>
                                <TextInput tw="w-full" />
                            </div>
                            <div tw="mb-2 lg:mb-4">
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Last Name</div>
                                <TextInput tw="w-full" />
                            </div>
                            <div tw="mb-2 lg:mb-4">
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Email</div>
                                <TextInput tw="w-full" />
                            </div>
                            <div tw="mb-2 lg:mb-4">
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Mobile</div>
                                <TextInput tw="w-full" />
                            </div>
                            <div tw="mb-2 lg:mb-4">
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Size</div>
                                <SelectOption tw="w-full">
                                    <option>5-100</option>
                                </SelectOption>
                            </div>
                            <div>
                                <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Budget</div>
                                <SelectOption tw="w-full">
                                    <option>$1000-$2000</option>
                                </SelectOption>
                            </div>
                        </div>
                        <div tw="mt-4">
                            <div tw="text-px14 lg:text-px16 mb-2 lg:mb-4">Message</div>
                            <TextArea tw="w-full" />
                        </div>
                        <div tw="mt-8 lg:mt-24 text-right">
                            <Button tw="w-full lg:w-auto">SUBMIT</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT INFO */}
            {contactList?.length ? (
                <div tw="pb-16 lg:pb-48 pt-24 lg:pt-32">
                    <div tw="px-4 container mx-auto">
                        <div tw="grid grid-cols-1 lg:grid-cols-5">
                            {contactListHeading ? (
                                <div tw="col-span-2 text-px18 lg:text-px32 mb-8 font-circular-bold lg:mb-0">{contactListHeading}</div>
                            ) : (
                                ""
                            )}
                            <div tw="col-span-3">
                                <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {contactList?.map(({ name, address, emailAddress, phoneNumber, icon }, idx) => (
                                        <div key={idx} css={[idx === 0 ? tw`lg:col-span-2` : ""]}>
                                            <ContactCard
                                                icon={
                                                    <div>
                                                        {icon?.gatsbyImageData ? (
                                                            <GatsbyImage image={icon?.gatsbyImageData} alt={icon?.title} />
                                                        ) : (
                                                            <img src={icon?.file?.url} alt={icon?.title} />
                                                        )}
                                                    </div>
                                                }
                                                content={
                                                    <div>
                                                        {address ? <span>{address}</span> : ""}
                                                        {emailAddress ? <span>{emailAddress}</span> : ""}
                                                        {phoneNumber ? <span>{phoneNumber}</span> : ""}
                                                    </div>
                                                }
                                                label={name}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </Layout>
    );
}

export const query = graphql`
    query {
        contentfulContactUsTemplate(name: { eq: "Contact Us" }) {
            name
            heroBanner {
                ...ImageCopy
            }
            introCopy {
                ...HeadingCopy
            }
            formTitle
            contactListHeading
            contactList {
                ...ContactCard
            }
        }
    }
`;
