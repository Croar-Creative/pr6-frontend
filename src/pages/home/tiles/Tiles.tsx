import TileLg from "./TileLg";
import TilesComponents from "./TilesComponents.style";
import TileSmBlue from "./TileSmBlue";
import TileSmYellow from "./TileSmYellow";
import TileXl from "./TileXL";

function Tiles() {
   return (
      <TilesComponents.Container>
         <TilesComponents.InnerContainer>
            <TileXl />
            <TileLg />
            <TileSmBlue />
            <TileSmYellow />
         </TilesComponents.InnerContainer>
      </TilesComponents.Container>
   );
}

export default Tiles;
