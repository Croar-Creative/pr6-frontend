export type GNBItemsType = {
   title: string;
   link: string;
   subItems?: GNBItemsType[];
};

const GNBItems: GNBItemsType[] = [
   {
      title: "브랜드 소개",
      link: "/brand",
   },
   {
      title: "포트폴리오",
      link: "/portfolio",
   },
   {
      title: "블로그",
      link: "/blog",
   },
   {
      title: "문의",
      link: "/contact",
   },
];

export default GNBItems;
