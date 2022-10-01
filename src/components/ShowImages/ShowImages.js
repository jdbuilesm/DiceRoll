//traer las imagenes
//import one from "../../../public/images/one.png";
//import two from "../../../public/images/two.png";
//import three from "../../../public/images/three.png";
//import four from "../../../public/images/four.png";
//import five from "../../../public/images/five.png";
//import six from "../../../public/images/six.png";

export default function ShowImages({ roll }) {
  console.log(roll);
  const images = () => {
    if (roll === 1) {
      return <img src='/images/one.png' alt={"lado1"} />;
    }
    if (roll === 2) {
      return <img src='/images/two.png' alt={"lado2"} />;
    }
    if (roll === 3) {
      return <img src='/images/three.png' alt={"lado3"} />;
    }
    if (roll === 4) {
      return <img src='/images/four.png' alt={"lado4"} />;
    }
    if (roll === 5) {
      return <img src='/images/five.png' alt={"lado5"} />;
    }
    if (roll === 6) {
      return <img src='/images/six.png' alt={"lado6"} />;
    }
    //
    //switch (roll){
    //case 1:
    //return: //// imagen 1
    //break;
    //case 2:
    //return: //// imagen 1
    //break;

    //}
  };

  return <div>{images()}</div>;
}