import ErrorPage from "./ErrorPage";
import NotFoundIllust from "assets/images/404/Pr6-404man-illust@2x.png";
import NotFoundIllustMobile from "assets/images/404/Pr6-404man-illust.png";

function NotFound() {
   return (
      <ErrorPage
         title="존재하지 않는 페이지입니다."
         subTitle={`이용에 불편을 드려 죄송합니다.
 본 페이지는 존재하지 않는 페이지입니다.`}
         imageSrc={NotFoundIllust}
         mobileImgSrc={NotFoundIllustMobile}
      />
   );
}

export default NotFound;
