import useArticles from '../../../hooks/api/useArticles.ts';
import { useEffect } from 'react';
import { useUserId } from '../../../hooks/state/useUserId.ts';

const LandingPage = () => {
  const { articles } = useArticles();
  const { userId } = useUserId();

  useEffect(() => {
    console.log('LandingPage ==>', articles);
    console.log('Users ID ==>', userId);
  }, [articles, userId]);

  return (
    <div>
      <h1>Landing page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus
        nisi tellus, non fermentum lacus efficitur ac. Suspendisse potenti.
        Phasellus malesuada vitae lorem elementum ornare. Sed in lectus rhoncus,
        mollis ex a, suscipit diam. Integer interdum ut sem id malesuada.
        Quisque vitae est euismod, auctor metus sit amet, molestie nisl. Cras
        justo tellus, molestie at ultricies et, tempor eu nisi. Cras consectetur
        rutrum condimentum. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Duis eu neque quis lacus tincidunt
        porttitor. Aliquam ut eleifend mi, id molestie leo. Vestibulum eleifend
        ligula et lorem cursus pretium. Praesent at dignissim felis. Donec
        consequat non felis non posuere. Vivamus quis turpis sed diam
        ullamcorper euismod sed vel tellus. Sed tempor erat vel porta tristique.
        Mauris vestibulum urna ut ornare consectetur. Praesent dictum vehicula
        consectetur. Nullam malesuada orci et neque pulvinar interdum.
        Pellentesque bibendum orci ac gravida elementum. Fusce pulvinar ante ac
        est finibus, sit amet gravida elit porttitor. Sed bibendum ac leo ut
        lacinia. Cras sollicitudin lectus sed fringilla elementum. Curabitur
        tincidunt lacus non mattis sodales. Morbi pretium vel tellus eget
        aliquam. Fusce ullamcorper lacus at ligula dictum faucibus. Sed in orci
        mattis, imperdiet tortor nec, ullamcorper ipsum. Sed pretium metus sed
        magna viverra volutpat. Vivamus sed aliquet nisl, ac aliquet nisl.
        Aliquam in elit auctor, iaculis elit sit amet, porttitor nibh. Donec
        mattis pulvinar mauris, non condimentum lectus mollis tincidunt. Donec
        hendrerit maximus posuere. Maecenas iaculis enim nulla, blandit mattis
        dui accumsan nec. Aenean nec mi in enim vestibulum lacinia nec in nisi.
      </p>
    </div>
  );
};

export default LandingPage;
