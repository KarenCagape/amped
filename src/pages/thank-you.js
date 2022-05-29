import React from "react";
import "twin.macro";

import Layout from "../components/layout";

export default function ThankYou() {
    return (
        <Layout pageTitle={`Thank You`}>
            <div tw="relative">
                <div tw="container mx-auto px-4 py-20 md:py-40 text-center min-h-[70vh]">
                    <div tw="md:w-8/12 xl:w-6/12 mx-auto">
                        <h1 tw="text-primary text-4xl md:text-6xl mb-8">Thank you!</h1>
                        <p>We'll be in touch soon.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
