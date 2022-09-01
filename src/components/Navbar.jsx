import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { mobile } from "../responsive";
const { Option } = Select;

const Navbar = () => {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Select
              showSearch
              placeholder="Select a language"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="EN">English</Option>
              <Option value="VN">Vietnamese</Option>
              <Option value="JP">Japanese</Option>
            </Select>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MU SHOP</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge size="small" count={5}>
              <ShoppingCartOutlined
                style={{ fontSize: "20px", color: "whitesmoke" }}
              />
            </Badge>
          </MenuItem>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
const Container = styled.div`
  height: 60px;
  background-color: #1f1e1e;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  color: whitesmoke;

  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  margin-left: 20px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  color: whitesmoke;

  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  color: whitesmoke;

  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
