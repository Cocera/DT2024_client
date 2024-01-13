import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";

const CommunityAccountHistory = () => {
    return (
        <>
            <h1>CommunityAccountHistory PAGE</h1>
            <SegmentedSlider />
            <ExpensesList />
        </>
    )
};

export default CommunityAccountHistory;