import { useRef } from "react";
import { useEffect, forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="vw-95 h-auto">
      <h1>About</h1>
      <div id="placeholder">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
        molestie lorem. Sed eu libero ut eros dictum faucibus. Cras hendrerit ex
        ut risus elementum, a laoreet tortor aliquam. Morbi dictum tincidunt
        arcu, et porttitor massa elementum id. Sed semper libero quis diam
        pulvinar, lacinia mattis mi rhoncus. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Ut euismod a
        ligula et laoreet. Curabitur id massa eu elit pretium rhoncus non et
        velit. Duis vitae augue placerat, aliquam magna quis, pulvinar felis.
        Praesent tellus dui, fermentum ac diam finibus, rutrum eleifend quam.
        Proin quis venenatis ante, non iaculis dui. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Cras maximus
        in elit in vehicula. Donec faucibus ex ac turpis sodales, non finibus
        ipsum molestie. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Proin pretium magna sed justo malesuada,
        ac interdum ligula pretium. Vestibulum hendrerit malesuada luctus.
        Aenean non viverra risus. Nunc commodo vestibulum est. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Morbi molestie dictum porta. Nunc efficitur egestas arcu ac
        consequat. Duis placerat, sapien vel suscipit congue, dui dui lobortis
        risus, ac accumsan est felis ac arcu. Fusce vitae aliquet eros. Sed
        porttitor libero sem, vitae semper lectus lacinia id. Aliquam sodales
        nisi quis volutpat dignissim. Nunc vitae auctor purus. Vestibulum
        pharetra leo nibh, sit amet iaculis ligula lobortis non. Integer
        fermentum libero in lectus molestie, luctus faucibus purus lobortis.
        Etiam aliquam vel mi sit amet rutrum. Donec tincidunt posuere cursus.
        Suspendisse porta aliquet malesuada. Pellentesque luctus cursus enim, id
        vehicula purus vehicula et. Aenean quis porta neque. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Etiam porta nisi eget augue ullamcorper mattis. Donec eu odio
        congue, pharetra felis ac, finibus nulla. Nulla in semper justo, quis
        sollicitudin augue. Donec elementum bibendum mollis. Nunc vehicula odio
        nec risus porttitor, nec tincidunt ligula consectetur. Cras id lacus a
        nibh gravida rhoncus. Donec sit amet sapien commodo, auctor mauris at,
        mattis diam. Aenean cursus ante et leo posuere rutrum. Curabitur
        placerat volutpat odio, nec facilisis dui ultrices sed. Pellentesque ut
        nulla neque. In malesuada nisl eu vulputate facilisis. Duis rutrum ante
        interdum risus malesuada pulvinar in sit amet sem. Integer sagittis quis
        turpis vel vehicula. Donec rhoncus vitae elit a cursus. Mauris ut est ut
        nisl egestas finibus. Ut finibus ipsum nec ligula ullamcorper, nec
        vehicula purus aliquam. Integer quis vehicula elit. Curabitur et leo
        lorem. Nunc sit amet neque non diam condimentum hendrerit et ac libero.
        Nam semper, sem lacinia mollis varius, tellus dui accumsan risus, vel
        blandit mi nibh consectetur nunc. Fusce a ultrices mauris. Aenean ut
        commodo massa, vitae gravida nisi. Mauris volutpat libero sit amet
        blandit ullamcorper. Nullam augue purus, vulputate in pulvinar in,
        rutrum eu ante.
      </div>
    </div>
  );
});

export default About;
