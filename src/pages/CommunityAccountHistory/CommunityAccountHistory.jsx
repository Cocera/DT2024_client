import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import { LeftOutlined } from "@ant-design/icons";
import ColumnsChart from "../../components/ColumnsChart/ColumnsChart";

const CommunityAccountHistory = () => {
    return (
        <>
            <a>
                {" "}
                <LeftOutlined />
                Historial
            </a>
            <ColumnsChart />
            <SegmentedSlider />
            <ExpensesList />
        </>
    )
};

export default CommunityAccountHistory;