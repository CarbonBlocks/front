import React, { useState, ChangeEvent, FunctionComponent } from "react";
import styled from "styled-components";

interface Brand {
  "Company Name": string;
  Link: string;
}

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  border: 1px solid #35363b;
  background-color: #2b3036;
  color: white;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0.5em 0;
  border-bottom: 1px solid #35363b;
`;

const List = styled.ul`
  padding: 0;
`;

const BrandLink = styled.a`
  color: #61dafb; // Example color, adjust as needed
  text-decoration: none; // Remove underline from links

  &:hover {
    text-decoration: underline; // Add underline on hover
  }
`;

interface SearchableListProps {
  brands: Brand[];
}

const SearchableList: FunctionComponent<SearchableListProps> = ({ brands }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBrands = brands.filter((brand) =>
    brand["Company Name"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Search for a brand..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <List>
        {filteredBrands.map((brand, index) => (
          <ListItem key={index}>
            <BrandLink
              href={brand.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brand["Company Name"]}
            </BrandLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchableList;
