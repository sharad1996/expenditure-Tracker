/** @format */

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TransactionForm from "../pages/expensetracker/TransactionForm";
import "@testing-library/jest-dom";

describe("TransactionForm", () => {
  it("renders with initial values and submits form data", () => {
    const onSubmit = jest.fn();
    const setModalOpen = jest.fn();

    render(
      <TransactionForm
        isModalOpen={true}
        setModalOpen={setModalOpen}
        onSubmit={onSubmit}
      />
    );

    const textField = screen.getByTestId("description");
    const textField1 = screen.getByTestId("amount");

    fireEvent.change(textField, { target: { value: "new_value" } });
    expect(textField).toHaveAttribute("value", "new_value");

    fireEvent.change(textField1, { target: { value: "new_amount" } });
    expect(textField1).toHaveAttribute("value", "new_amount");

    fireEvent.click(screen.getByTestId("submitbtn"));
    fireEvent.click(screen.getByTestId("closebtn"));
  });
});
