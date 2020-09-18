import React from "react";
import { ContainerPayment, FormLabel} from './styled';
import { FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

function PaymentMethods() {
  return (
    <ContainerPayment component="fieldset">
      <FormLabel component="legend">Forma de pagamento</FormLabel>
      <hr />
      <RadioGroup
        defaultValue=""
        aria-label="PaymentMethods"
        name="customized-radios"
        color="primary"
      >
        <FormControlLabel
          value="Dinheiro"
          control={<Radio />}
          label="Dinheiro"
        />
        <FormControlLabel
          value="Cartão de crédito"
          control={<Radio />}
          label="Cartão de crédito"
        />
      </RadioGroup>
    </ContainerPayment>
  );
}

export default PaymentMethods;
