/** @format */

import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface TransactionFormProps {
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  onSubmit: (formData: any) => void;
}

export default function TransactionForm({
  isModalOpen,
  setModalOpen,
  onSubmit,
}: TransactionFormProps) {
  const [formData, setFormData] = useState<any>({
    description: "",
    amount: "",
    category: "",
  });

  const [errors, setErrors] = useState<any>({
    description: "",
    amount: "",
  });

  useEffect(() => {
    setFormData({
      description: "",
      amount: "",
      category: "rent",
    });
    setErrors({
      description: "",
      amount: "",
    });
  }, [isModalOpen]);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    if (field === "amount") {
      if (!/^\d+$/.test(value)) {
        setErrors({
          ...errors,
          [field]: "Amount must be a number",
        });
      } else {
        setErrors({
          ...errors,
          [field]: "",
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.amount) {
      onSubmit(formData);
      handleClose();
    }
  };

  return (
    <Dialog open={isModalOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            required
            value={formData.description}
            error={!!errors.description}
            helperText={errors.description}
            onChange={(e) => handleChange("description", e.target.value)}
            inputProps={{ "data-testid": "description" }}
          />
          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            type="text"
            fullWidth
            variant="standard"
            required
            value={formData.amount}
            error={!!errors.amount}
            helperText={errors.amount}
            onChange={(e) => handleChange("amount", e.target.value)}
            inputProps={{ "data-testid": "amount" }}
          />
          <Select
            margin="dense"
            id="category"
            label="Category"
            fullWidth
            required
            data-testid="category1"
            variant="standard"
            value={formData.category}
            sx={{ marginTop: "20px" }}
            onChange={(e) => handleChange("category", e.target.value)}
            displayEmpty
            inputProps={{ "data-testid": "category", type: "select" }}
          >
            <MenuItem value="grocery">Grocery</MenuItem>
            <MenuItem value="rent">Rent</MenuItem>
            <MenuItem value="salary">Salary</MenuItem>
          </Select>
          <DialogActions>
            <Button data-testid="closebtn" onClick={handleClose}>
              Cancel
            </Button>
            <Button data-testid="submitbtn" type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
