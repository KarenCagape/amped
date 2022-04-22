import * as React from 'react';
import 'twin.macro';
import Layout from '../components/layout';
import Banner from '../components/heroes/contact-us';
import Button from '../components/_/button';
import TextInput from '../components/text-input';
import SelectOption from '../components/select-option';
import TextArea from '../components/textarea';
import IcoPhone from '../assets/ico-phone.svg';
import IcoLocation from '../assets/ico-location.svg';
import IcoEmail from '../assets/ico-email.svg';

function ContactCard({ icon, content, label }) {
  return (
    <div tw="bg-sitegray rounded p-8">
      <div tw="mb-8">{icon}</div>
      <div tw="text-px21 font-bold">{content}</div>
      <div tw="text-secondary">{label}</div>
    </div>
  );
}

export default function ContactUs() {
  return (
    <Layout pageTitle="Contact Us">
      <Banner />
      <div tw="px-4 lg:px-0 pt-16 lg:pt-48">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5 mb-16 lg:mb-48">
          <div tw="col-span-2 text-px54 mb-8 lg:mb-0">Contact Us</div>
          <div tw="col-span-3 text-px21">
            At Amped Innovation – we are always looking to connect with future
            partners, distributors and change-makers looking to redefine solar.
            Interested in distributing Amped Product?
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="col-span-2 text-px32 mb-8 lg:mb-0">Leave us a message</div>
          <div tw="col-span-3">
            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div tw="mb-4">
                <div tw="mb-4">First Name</div>
                <TextInput tw="w-full" />
              </div>
              <div tw="mb-4">
                <div tw="mb-4">Last Name</div>
                <TextInput tw="w-full" />
              </div>
              <div tw="mb-4">
                <div tw="mb-4">Email</div>
                <TextInput tw="w-full" />
              </div>
              <div tw="mb-4">
                <div tw="mb-4">Mobile</div>
                <TextInput tw="w-full" />
              </div>
              <div tw="mb-4">
                <div tw="mb-4">Size</div>
                <SelectOption tw="w-full">
                  <option>5-100</option>
                </SelectOption>
              </div>
              <div>
                <div tw="mb-4">Budget</div>
                <SelectOption tw="w-full">
                  <option>$1000-$2000</option>
                </SelectOption>
              </div>
            </div>
            <div tw="mt-4">
              <div tw="mb-4">Message</div>
              <TextArea tw="w-full" />
            </div>
            <div tw="mt-8 lg:mt-24 text-right">
              <Button>SUBMIT</Button>
            </div>
          </div>
        </div>
      </div>
      <div tw="px-4 lg:px-0 pb-16 lg:pb-48 pt-16 lg:pt-32">
        <div tw="lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-5">
          <div tw="col-span-2 text-px32 mb-8 lg:mb-0">Reach out to us here</div>
          <div tw="col-span-3">
            <ContactCard
              icon={
                <div>
                  <IcoLocation />
                </div>
              }
              content={'48531 Warm Springs Blvd. Ste 408 Fremont, CA 94539'}
              label="Office"
            />
            <div tw="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
              <ContactCard
                icon={
                  <div>
                    <IcoEmail />
                  </div>
                }
                content={'info@ampedinnovation.com'}
                label="Customer Support"
              />
              <ContactCard
                icon={
                  <div>
                    <IcoPhone />
                  </div>
                }
                content={'Toll Free: 1-888-502-2236'}
                label="Telephone"
              />
              <ContactCard
                icon={
                  <div>
                    <IcoPhone />
                  </div>
                }
                content={'1-888-502-2236'}
                label="West Africa"
              />
              <ContactCard
                icon={
                  <div>
                    <IcoPhone />
                  </div>
                }
                content={'1-888-502-2236'}
                label="East Africa"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
