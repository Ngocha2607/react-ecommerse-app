import styled from "styled-components";
import Product from "./Product";

const popularProducts = [
  {
    id: 1,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23_ss4_p-13307715+u-5muuro76i0kukjj2r392+v-a22955b33acc4d29b6e5e72c3d4821c1.jpg?_hv=2&w=340",
  },
  {
    id: 2,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-third-shirt-2022-23_ss4_p-13313262+u-8nhsa3vcjk95kdq67480+v-8dffa5ded49242148d8790219b2f62ba.jpg?_hv=2&w=340",
  },
  {
    id: 3,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-away-authentic-shirt-2022-23_ss4_p-13307707+u-vtowsabcbujun2vbhc5x+v-56a1e81954f14f90a3f866183014b04d.jpg?_hv=2&w=340",
  },
  {
    id: 4,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-minikit-2022-23_ss4_p-13307744+u-xu13jdqf4z5s3xybm4l8+v-b9eaf1e8e5e7438383eee49b0704159a.jpg?_hv=2&w=340",
  },
  {
    id: 5,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-authentic-shirt-2022-23-long-sleeve_ss4_p-13307711+u-z22kpo0jlrh04gbtxkfk+v-f1509a38db6444159e911ea136630a69.jpg?_hv=2&w=340",
  },
  {
    id: 6,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-training-polo-navy_ss4_p-13313277+u-pv7nqjlygij0fv86n8b7+v-d2606a0312ad40d780e723afcce974cd.jpg?_hv=2&w=340",
  },
  {
    id: 7,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-old-trafford-lego-stadium_ss4_p-12017096+u-6fn9jv5bqlb69tk3yv7y+v-238b4785d12c4e7f816ef66ef6ca62ba.jpg?_hv=2&w=340",
  },
  {
    id: 8,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23-with-ronaldo-7-printing_ss4_p-13322480+u-17to258yn7p4d2wl322l+v-0251332823184dcc95ba552ac6cb1b77.jpg?_hv=2&w=340",
  },
  {
    id: 9,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-training-hoodie-navy_ss4_p-13313273+u-3hpsw32426jl746bgf7o+v-e65329d6da1f4ef4ac90569fcec34cce.jpg?_hv=2&w=340",
  },
  {
    id: 10,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-tag-heuer-carrera-calibre-automatic-watch-special-edition_ss4_p-12074740+u-yvrjf2gc963p69uc4r2l+v-69c3298e115e4cdaa78b878f30780950.jpg?_hv=2&w=340",
  },
  {
    id: 11,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-away-socks-2022-23_ss4_p-13307737+u-14anpmcxqrs0yobmb4se+v-081edcee733f42b2a86f91e0d397bff2.jpg?_hv=2&w=340",
  },
  {
    id: 12,
    img: "https://images.footballfanatics.com/manchester-united/manchester-united-x-adidas-ozweego-trainers-white_ss4_p-13314710+u-lsgieaqs6c6es6mxyys9+v-7f725a33a3c94e63b62ee02bf257ead5.jpg?_hv=2&w=340",
  },
];

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
