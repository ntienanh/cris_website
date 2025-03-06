'use client';
import { Collapse, Divider } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { FadeRight } from '../FramerMotion/FadeRight';

const CustomCollapse = styled(Collapse)`
  .ant-collapse-expand-icon > span svg {
    fill: black !important;
  }

  .ant-collapse-header:hover {
    transform: translateX(4px);
  }

  .ant-collapse-header {
    padding: 1rem 0 !important;
    transition: all 0.2s ease-in-out !important;
  }
`;

const items = [
  {
    key: '0',
    label: 'How should I dress for the spa?',
    content:
      'For the service, you will need to change into our spa clothes so we can get to your neck and shoulders. We recommend wearing a top and pants rather than a romper or jumpsuit because they are harder to change.',
  },
  {
    key: '1',
    label: 'Can textured hair be treated with a Head Spa?',
    content: `Yes, our specialists can work with all hair types, including textured and bald hair. However, we do require unobstructed access to the scalp for our services.
To ensure the best results, we kindly ask customers with extensions or dreadlocks to consider removing them before your Head Spa treatment. Please note that we cannot be held responsible for any damage if you choose to proceed with the service while keeping these in.
For dreadlocks, braids, and curly or coily hair types, we offer towel drying and brush out, or an optional simple blow dry.`,
  },
  {
    key: '2',
    label: 'Can I get the Head Spa done at the same time as my friends or family?',
    content:
      'Yes, we can accommodate up to 19 guests at once, but making an appointment in advance is strongly recommended.',
  },
  {
    key: '3',
    label: 'Is it safe for expecting mothers to try the Head Spa?',
    content: `Yes, it is safe for pregnant clients to enjoy our Head Spa! We use all-natural and organic ingredients. However, if you have concerns about specific oils, we recommend consulting your doctor beforehand and informing us in advance.
Please note that guests will lie flat on their backs during the service. If this position is uncomfortable for you, we suggest waiting until after delivery to book your appointment.`,
  },
  {
    key: '4',
    label: 'Will the Head Spa affect my keratin and color?',
    content:
      'To ensure the best results from our Head Spa treatment, we recommend waiting at least 7 days after any chemical treatment, such as coloring or keratin treatment. This allows the treatment to settle and minimize any potential fading during our detoxification process.',
  },
  {
    key: '5',
    label: 'Can I record myself during the service?',
    content: `Yes, you can record yourself for a few minutes with prior permission! However, we kindly ask that you set your phone to silent mode and refrain from talking, as there may be other clients in the spa room. If possible, please place your phone to the side so you can fully enjoy the experience!`,
  },
  {
    key: '6',
    label: 'Can I enjoy the Head Spa with friends or family?',
    content:
      'Absolutely! We can accommodate up to 19 guests at the same time depends on location. However, we strongly recommend making an appointment in advance to ensure availability.',
  },
  {
    key: '7',
    label: 'What is the minimum age requirement for children?',
    content:
      'Children aged 4 and older are welcome to enjoy our services when accompanied by an adult or guardian, provided they can remain quiet in the room. Please feel free to contact us in advance to discuss any specific accommodations.',
  },
];

const FAQSection = () => {
  const [active, setActive] = useState<number>(11);

  return (
    <div className='mx-auto w-full max-w-5xl'>
      {items?.map((item, index: number) => (
        <div key={index}>
          <CustomCollapse
            onChange={(key: any) => setActive(key)}
            activeKey={active}
            accordion
            ghost
            expandIconPosition='end'
            items={[
              {
                key: index,
                label: (
                  <div className='flex items-center gap-1'>
                    <FadeRight duration={0.8 + index / 2}>
                      <span className='font-hneu text-zelene-blue text-base font-medium sm:text-xl'>
                        {index + 1}.&nbsp;{item.label}
                      </span>
                    </FadeRight>
                  </div>
                ),
                children: <p className='font-hneu text-zelene-blue text-sm sm:text-base'>{item.content}</p>,
              },
            ]}
          />
          <Divider className='!border-zelene-yellow !my-0 !border-[0.5px] sm:border-[1.5px]' />
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
