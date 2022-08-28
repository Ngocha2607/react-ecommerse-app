import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import React from "react";
import styled from "styled-components";
import { Select } from "antd";
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
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
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
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  margin-left: 20px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;
