/** @format */

import React, { useState } from "react";
import { Box } from "@mui/material";
import TransactionList from "./TransactionList";

function ExpenseTrackerPage() {
  const [transactions, setTransactions] = useState<any[]>([]);

  return (
    <Box sx={{ height: "100vh", width: "100vw", background: "white" }}>
      <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </Box>
  );
}

export default ExpenseTrackerPage;
