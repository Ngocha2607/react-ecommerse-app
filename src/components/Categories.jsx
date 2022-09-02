import styled from "styled-components";
import { mobile } from "../responsive";

import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2022-23_ss4_p-13313262+u-8nhsa3vcjk95kdq67480+v-8dffa5ded49242148d8790219b2f62ba.jpg?_hv=2&w=340",
    title: "FOOTBALL KIT",
  },
  {
    id: 2,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-adidas-future-icons-3-stripe-full-zip-hoodie-shadow-red%C2%A0-mens_ss4_p-13303128+u-1hz4ows3cwggxduh5f02+v-e7f71f72ff5b4256b357251be3dcba07.jpg?_hv=2&w=340",
    title: "HOODIES & SWEATSHIRTS",
  },
  {
    id: 3,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-mini-football-white_ss4_p-13313391+u-oq460b9ziylxcr3ppxw+v-45d58f3e562c485386841e7fe48dc826.jpg?_hv=2&w=340",
    title: "EQUIPMENT",
  },
];

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
