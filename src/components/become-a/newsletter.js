import * as React from "react";
import tw, { css } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import { useForm } from "react-hook-form";
import Button from "../_/button";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function Newsletter({ title, image, subText, formHeading, formSlug, formSubmit, navigate }) {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(data),
        })
            .then(() => navigate("/thank-you/"))
            .catch((error) => console.error(error));
    };

    return (
        <div tw="px-4 container mx-auto pt-10 pb-20 lg:py-16 lg:pb-32 2xl:pb-48">
            <div tw="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-8 2xl:gap-x-16">
                {title ? <div tw="text-px18 lg:text-px32 font-circular-bold col-span-2 mb-8 lg:mb-0 lg:mr-8">{title}</div> : ""}
                <div tw="col-span-3">
                    {image?.gatsbyImageData ? (
                        <div tw="mb-8">
                            <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} />
                        </div>
                    ) : (
                        ""
                    )}
                    {subText?.childMarkdownRemark?.html ? (
                        <div
                            tw="lg:text-px18 2xl:text-px21 mb-10"
                            css={[
                                css`
                                    p {
                                        ${tw`my-6`}
                                    }
                                `,
                            ]}
                            dangerouslySetInnerHTML={{ __html: subText.childMarkdownRemark.html }}
                        />
                    ) : (
                        ""
                    )}

                    <div tw="bg-sitegray p-12 text-center lg:text-left">
                        <div tw="text-px18 lg:text-px18 2xl:text-px21 mb-8">{formHeading}</div>
                        <form onSubmit={handleSubmit(onSubmit)} name={formSlug} method="POST" data-netlify data-netlify-honeypot="bot-field">
                            <input type="hidden" {...register("form-name")} defaultValue={formSlug} />
                            <div tw="lg:grid lg:grid-cols-5">
                                <input
                                    {...register("email")}
                                    required
                                    tw="text-px16 col-span-3 p-4 w-full lg:w-auto mb-8 lg:mb-0"
                                    placeholder="Enter your email address"
                                />
                                <Button tw="col-span-2 lg:rounded-tl-none rounded-bl-none w-full lg:w-auto">{formSubmit}</Button>
                            </div>
                            {errors["email"] && <small tw="text-[#FE3636]">{errors["email"]?.type === "required" && `Email is required`}</small>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
