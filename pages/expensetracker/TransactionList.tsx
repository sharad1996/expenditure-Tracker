/** @format */

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import TransactionForm from "./TransactionForm";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  setTransactions,
}) => {
  const [isTransactionClicked, setIsTransactionClicked] = useState(false);

  const handleClick = () => {
    setIsTransactionClicked(true);
  };

  const handleSubmitForm = (formData: any) => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = String(currentDate.getFullYear()).slice(2);
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      date: `${day}/${month}/${year}`,
      description: formData?.description,
      amount: formData?.amount,
      category: formData?.category,
    };

    setTransactions([...transactions, newTransaction]);
    setIsTransactionClicked(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            fontFamily: "cursive",
          }}
        >
          Expenditure Tracker
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Button variant="contained" onClick={handleClick}>
            Add Transaction
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "80vw",

          background: "lightGrey",
          minHeight: "70vh",
          position: "absolute",
          top: "15%",
          left: "12%",
          padding: "20px",
        }}
      >
        {transactions.length === 0 ? (
          <Typography variant="h5" align="center" marginTop={8}>
            You don't have any transactions yet
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {transactions.map((transaction) => (
              <Grid key={transaction.id} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    width: "100%",
                    padding: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: "20px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Description : {transaction.description}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Expenditure: {transaction.amount}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Category: {transaction.category}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Date: {transaction.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {isTransactionClicked && (
          <TransactionForm
            isModalOpen={isTransactionClicked}
            setModalOpen={setIsTransactionClicked}
            onSubmit={handleSubmitForm}
          />
        )}
      </Box>
    </>
  );
};

export default TransactionList;
