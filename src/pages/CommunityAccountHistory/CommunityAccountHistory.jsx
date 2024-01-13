import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";

const CommunityAccountHistory = () => {
    return (
        <>
            <h3>Community Account History</h3>
            <SegmentedSlider />
            <ExpensesList />
        </>
    )
};

export default CommunityAccountHistory;