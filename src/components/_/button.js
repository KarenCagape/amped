import tw, { styled } from 'twin.macro';

export const Button = tw.button`inline-block text-px14 lg:text-px16 bg-primary text-white font-bold font-kallisto rounded py-3 px-8`;
export const BannerButton = styled(Button)(() => [tw`px-20`]);

export default Button;
