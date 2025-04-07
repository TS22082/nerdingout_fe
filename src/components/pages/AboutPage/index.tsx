import { Container } from 'react-bootstrap';

const AboutPage = () => {
  const wrapperStyles = {
    height: '600px',
    backgroundImage:
      'url("https://res.cloudinary.com/geek-centric/image/upload/v1741812246/nerdingout/cyber_overview_fxoimz.jpg")',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <>
      <div style={wrapperStyles} />
      <Container style={{ marginTop: 10 }}>
        <h1 className="text-light text-center">Meet your host</h1>
        <p className="text-light">
          Welcome to my little corner of the internet! I'm Thomas, and I'm
          thrilled to share my thoughts, experiences, and adventures with you
          here.
        </p>
        <p className="text-light">
          {' '}
          When I'm not coding away on some new project or exploring the world
          through travel (more on that later!), you can find me sipping coffee,
          playing with my dogs, or simply enjoying the quiet moments in life. As
          someone who's been programming for over 10 years now, I've had my fair
          share of ups and downs – but it's always been an incredible journey.
        </p>
        <p className="text-light">
          As for coding, I've had the privilege of working on both front-end and
          back-end projects over the years. While I enjoy tinkering with various
          languages, Golang has become my go-to (pun intended!) when it comes to
          backend development – there's something about its simplicity, speed,
          and concurrency features that just clicks.
        </p>
        <p className="text-light">
          This blog is a reflection of my eclectic interests and passions. You
          won't find me following any specific theme or agenda; instead, I'll be
          sharing whatever sparks my curiosity at the moment! Whether it's
          travel stories, coding tips, skate adventures, or simply musings on
          life – you can expect an honest, unfiltered account from yours truly.
        </p>
        <p className="text-light">
          Thanks for joining me on this journey (pun intended again!). If you
          have any questions, comments, or just want to say hi, please don't
          hesitate to reach out. I'm excited to share my thoughts and
          experiences with you!
        </p>
      </Container>
    </>
  );
};

export default AboutPage;
