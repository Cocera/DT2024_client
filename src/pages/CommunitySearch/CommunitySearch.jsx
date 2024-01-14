import React from "react";
import CardImage from "../../components/CardImage/CardImage";
import { LeftOutlined } from "@ant-design/icons";
import SearchBar from "../../components/SearchBar/SearchBar";

const CommunitySearch = () => {
    return (
        <>
            <a>
                {" "}
                <LeftOutlined />
                Comunidades
            </a>
            <SearchBar />
            <CardImage />
            <CardImage />
        </>
    )
};

export default CommunitySearch;