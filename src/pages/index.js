import * as React from 'react';
import 'twin.macro';
import _ from 'lodash';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PrimaryHero from '../components/heroes/primary-hero';
import Brands from '../components/brands';
import HowWeDoIt from '../components/sections/how-we-do-it';
import MeetTheSolutions from '../components/sections/meet-the-solutions';
import PoweringYourPossibilities from '../components/sections/powering-your-possiblities';
import NoCompromises from '../components/sections/no-compromises';
import AmpedImpact from '../components/sections/amped-impact';
import ExtraInfoFill from '../components/extra-info-fill';

function MetricCard({ value, label }) {
  return (
    <div tw="bg-white px-8 pt-16 pb-8 rounded-md font-circular-bold">
      <div tw="text-px72 mb-8">{value}</div>
      <div tw="text-px16">{label}</div>
    </div>
  );
}

export default function IndexPage(props) {
  const bannerData = _.get(
    props,
    'data.allContentfulPageHome.edges[0].node.banner'
  );
  const sectionsData = _.get(
    props,
    'data.allContentfulPageHome.edges[0].node.sections'
  );
  const howWeDoItData = _.get(sectionsData, '[1]', null);
  const meetTheSolutionsData = _.get(sectionsData, '[2]', null);
  const poweringYourPossibilitiesData = _.get(sectionsData, '[3]', null);
  const noCompromisesData = _.get(sectionsData, '[4]', null);
  const ampedImpactData = _.get(sectionsData, '[5]', null);
  const extraData = _.get(sectionsData, '[6]', null);

  return (
    <Layout pageTitle="Home">
      <PrimaryHero data={bannerData} />
      <Brands />
      <HowWeDoIt data={howWeDoItData} />
      <MeetTheSolutions data={meetTheSolutionsData} />
      <PoweringYourPossibilities data={poweringYourPossibilitiesData} />
      <NoCompromises data={noCompromisesData} />
      <AmpedImpact data={ampedImpactData} />
      <div tw="pb-16 lg:pb-48">
        <div tw="w-full lg:w-9/12 m-auto">
          <ExtraInfoFill
            caption={
              <div>
                <div tw="text-px54 mb-16 font-sf-regular">
                  Our Climate Impact
                </div>
                <p tw="text-px21 mb-16 font-circular-regular leading-normal">
                  The climate crisis is an existential threat. Our innovations
                  that drives a reliable solar experience enables communities to
                  transform themselves from fossil and forests fuels to solar
                  energy radically reducing carbon emissions while growing their
                  economic potential. The climate crisis is our business.
                </p>

                <div>
                  <div tw="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-11/12 m-auto gap-8">
                    <MetricCard
                      value={
                        <div>
                          <span tw="text-primary ">100</span>
                          <sup tw="text-secondary">k</sup>
                        </div>
                      }
                      label={'Tons Black Carbon Averted'}
                    />
                    <MetricCard
                      value={
                        <div>
                          <span tw="text-primary">100</span>
                          <sup tw="text-secondary">mil</sup>
                        </div>
                      }
                      label={'Tons CO2 Averted'}
                    />
                    <MetricCard
                      value={
                        <div>
                          <span tw="text-primary">300</span>
                          <sup tw="text-secondary">k</sup>
                        </div>
                      }
                      label={'Whr Clean Energy Generated'}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulPageHome {
      edges {
        node {
          id
          banner {
            id
            banner
            captions {
              id
              text {
                text
              }
            }
            headings {
              id
              text {
                id
                text
              }
            }
          }
          sections {
            id
            block {
              block {
                block {
                  headings {
                    text {
                      text
                    }
                  }
                  links {
                    label
                    link
                    path {
                      path
                    }
                  }
                }
                captions {
                  text {
                    text
                  }
                }
                headings {
                  heading
                  text {
                    text
                  }
                }
              }
              captions {
                text {
                  text
                }
                caption
              }
              headings {
                text {
                  text
                }
              }
            }
            captions {
              caption
              text {
                text
              }
            }
            headings {
              heading
              text {
                text
              }
            }
            images {
              headings {
                heading
                text {
                  text
                }
              }
              image
            }
            links {
              path {
                path
              }
              link
              label
            }
            slider {
              contents {
                id
                headings {
                  heading
                  text {
                    text
                  }
                }
                sliderContent
              }
              slider
            }
            statistics {
              extra
              value
              captions {
                text {
                  text
                }
                caption
              }
              statistics
            }
          }
        }
      }
    }
  }
`;
