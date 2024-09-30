
import Image from "next/image";
import profile from "../../image/profile.jpeg";

export default function hi(){
  return(
    <div>
     <div className="first">
        <div className="leftSection">
          Hi, it's <span className="brown">Mehak</span>
          <div>
            and I am  passionate<span className="brown"><br />Front-end Developer</span>
          </div>
          <p>
            As a front-end developer with a strong foundation in HTML, CSS,
            <br />
            JavaScript, and TypeScript a focus on Nextjs and Tailwind CSS,
            <br /> I focus on writing clean, efficient, and maintainable code
          </p>
        </div>
        <div className="rightSection">
          <Image src={profile} alt="profile-pic"></Image>
        </div>
      </div>

    </div>
  )
}

