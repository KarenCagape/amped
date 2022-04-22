import tw, { styled } from 'twin.macro';

export const Header = tw.div`text-px72 text-default font-bold`;
export const SubHeader = styled(Header)(() => [tw`text-px24 lg:text-px54`]);
export const ProductCardHeader = tw.div`text-px32 text-default font-bold font-circular-bold`;
export const UpgradeStepCardHeader = tw.div`text-px21 text-default font-bold font-circular-bold`;
export const LinkCategoryHeader = tw.div`text-px21 text-default font-bold font-circular-bold`;
export const TableHeader = tw.div`text-px16 text-primary font-bold font-circular-bold`;
export const WhiteLinkCategoryHeader = styled(LinkCategoryHeader)(() => [
  tw`text-white`,
]);

export default Header;
