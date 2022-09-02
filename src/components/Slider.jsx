import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const sliderItems = [
  {
    id: 1,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23_ss4_p-13307701+u-skyjtpdsdifd85q7gn1a+v-5c38b7aedcfe43e79ad60b12d4e2e980.jpg?_hv=2&w=340",
    title: "SUMMER SALE",
    desc: "MANCHESTER UNITED HOME AUTHENTIC SHIRT 2022-23",
    bg: "f5fafd",
  },
  {
    id: 2,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23-long-sleeve_ss4_p-13307711+u-z22kpo0jlrh04gbtxkfk+v-f1509a38db6444159e911ea136630a69.jpg?_hv=2&w=340",
    title: "AUTUMN COLLECTION",
    desc: "MANCHESTER UNITED HOME AUTHENTIC SHIRT 2022-23 LONG SLEEVE",
    bg: "fcf1ed",
  },
  {
    id: 3,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23-with-casemiro-18-printing_ss4_p-13359596+u-tz4vhdj39d6zc46ujnk4+v-5aefc94a110948fca06eecfdd68e1591.jpg?_hv=2&w=340",
    title: "NEW COLLECTION",
    desc: "MANCHESTER UNITED HOME AUTHENTIC SHIRT 2022-23 WITH CASEMERO 18 PRINTING",
    bg: "fbf0f4",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 62px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #faefef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
