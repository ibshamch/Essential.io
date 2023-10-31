import { ReactComponent as Teamwork } from "../../assets/teamwork-svgrepo-com.svg";
import "./mainbody.style.scss";
import { ReactComponent as Mail } from "../../assets/mail-svgrepo-com.svg";
import { ReactComponent as GroupChat } from "../../assets/message-svgrepo-com.svg";
import { ReactComponent as Boat } from "../../assets/boat-svgrepo-com.svg";
import { ReactComponent as CallManage } from "../../assets/call-in-svgrepo-com.svg";
import { ReactComponent as Tick } from "../../assets/tick-svgrepo-com.svg";
import Card from "./card/card.component";
import Extras from "./extras/extras.component";
const MainBody = () => {
  const extra = [
    { desc: "Free Signup", img: <Tick className="tick" />, id: 1 },
    { desc: "No Credit Card Required ", img: <Tick className="tick" />, id: 2 },
    { desc: "Cancel Anytime", img: <Tick className="tick" />, id: 3 },
  ];

  const cards = [
    {
      name: "Group Chat",
      image: <GroupChat />,
      id: 1,
    },
    {
      name: "Instant Mail",
      image: <Mail />,
      id: 2,
    },
    {
      name: "File Boat",
      image: <Boat />,
      id: 3,
    },
    {
      name: "Call Manage",
      image: <CallManage />,
      id: 4,
    },
    {
      name: "Teamwork",
      image: <Teamwork />,
      id: 5,
    },
  ];

  return (
    <main className="main-body">
      <div className="intro">
        <h3 className="api-integrate">
          <div className="line"></div>
          API INTEGRATION
          <div className="line"></div>
        </h3>
        <h1 className="main-body-heading">
          The Essential Api That Help <br /> Connecting Team
        </h1>
        <p className="main-body-desc">
          A platform delivering ultra-fast,dynamic & personalised project
          experiences.
        </p>
      </div>

      <div className="card-container">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>

      <button className="main-body-btn">
        Get Started <div className="button-line"></div> It's Free
      </button>
      <div className="extras-container">
        {extra.map((extra) => {
          return <Extras key={extra.id} extra={extra} />;
        })}
      </div>
    </main>
  );
};

export default MainBody;
