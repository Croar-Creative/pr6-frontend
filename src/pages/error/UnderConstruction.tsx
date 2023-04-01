import ErrorPage from "./ErrorPage";
import UnderConstructionIllust from "assets/images/underconstruction/Pr6-Preparingman-illust@2x.png";
import UnderConstructionMobileIllust from "assets/images/underconstruction/Pr6-Preparingman-illust.png";

function UnderConstruction() {
   return (
      <ErrorPage
         title="페이지 준비중입니다."
         subTitle={`보다 나은 서비스 제공을 위하여 페이지 준비 중에 있습니다. 
빠른 시일 내에 준비하여 찾아뵙겠습니다.`}
         imageSrc={UnderConstructionIllust}
         mobileImgSrc={UnderConstructionMobileIllust}
      />
   );
}

export default UnderConstruction;
