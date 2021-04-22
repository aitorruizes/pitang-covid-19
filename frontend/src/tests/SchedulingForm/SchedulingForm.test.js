import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import SchedulingForm from "../../components/SchedulingForm";

describe("Tests for scheduling form component", () => {
   it("Should add new scheduling when form has been submitted", async () => {
      const { getByTestId } = render(<SchedulingForm />);
      const nameFieldNode = await waitFor(() => getByTestId("form-name-field"));
      const birthdateFieldNode = await waitFor(() =>
         getByTestId("form-birthdate-field")
      );
      const nameInput = "Aitor Ruiz Agra";
      const birthdateInput = "18/03/2000";

      fireEvent.change(nameFieldNode, { target : { value: nameInput }});

      await waitFor(() => {
        expect(nameFieldNode.value).toEqual(nameInput);
      });

      fireEvent.change(birthdateFieldNode, { target: { value: birthdateInput }});

      await waitFor(() => {
        expect(birthdateFieldNode.value).toEqual(birthdateInput);
      });
    });
});
