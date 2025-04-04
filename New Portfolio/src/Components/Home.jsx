export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">My Bio</h1>
      <h3 className="home-bio">
        Hanif Muhammad Baaba is a frontend developer specializing in React, with
        a strong focus on building scalable and user-friendly applications. As
        the driving force behind HNF Tech and Co, he has developed innovative
        solutions in healthtech, fintech, and SaaS, leveraging his expertise to
        create impactful digital products. Hanif has successfully built
        user-centric platforms that enhance client interactions and improve
        workflow efficiency. His goal is to contribute to forward-thinking
        companies where he can apply his technical skills to solve real-world
        problems and drive technological innovation. With a passion for frontend
        excellence and crafting intuitive interfaces, Hanif is committed to
        delivering seamless digital experiences that boost user engagement and
        business growth.
      </h3>
      <br />
      <div className="home-elevator">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/VE8Oy1xBLto?si=gfsqoBEyQaOvxZti"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
