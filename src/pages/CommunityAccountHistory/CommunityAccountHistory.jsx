import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedTwoSlider from "../../components/SegmentedTwoSlider/SegmentedTwoSlider";

const CommunityAccountHistory = () => {
    return (
        <>
            <h1>CommunityAccountHistory PAGE</h1>
            <SegmentedTwoSlider />
            <ExpensesList />
        </>
    )
};

export default CommunityAccountHistory;