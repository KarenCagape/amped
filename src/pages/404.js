import * as React from "react";
import "twin.macro";
import Layout from "../components/layout";
import Button from "../components/button"

const NotFoundPage = () => {
    return (
        <Layout pageTitle={`404: Not found`}>
            <div>
                <div tw="container px-4 mx-auto text-center h-screen md:h-[400px] lg:h-[600px] flex items-center justify-center">
                    <div>
                        <h1 tw="text-2xl text-[40px] !leading-tight font-bold">We lost this page</h1>
                        <p tw="mt-4 mb-7">
                            We searched high and low but couldn't find what you're looking for. Let's find a better place for you to go.
                        </p>
                        <Button tw="uppercase" text={`Go home`} path={'/'} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
