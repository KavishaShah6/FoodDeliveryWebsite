import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar/navbar";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const DeliveryInfo = styled.div`
  margin-bottom: 20px;
`;

const DeliveryTitle = styled.h1`
  margin-bottom: 10px;
`;

const DeliveryText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const DeliverySteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const DeliveryStep = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StepTitle = styled.h3`
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 14px;
`;

export default function Delivery() {
  return (
    <>
    <Navbar />
    <Container>
      <DeliveryInfo>
        <DeliveryTitle>Delivery Information</DeliveryTitle>
        <DeliveryText>
          We offer fast and reliable delivery services to bring delicious meals right to your doorstep.
        </DeliveryText>
      </DeliveryInfo>
      <DeliverySteps>
        <DeliveryStep>
          <StepTitle>Step 1: Browse Menu</StepTitle>
          <StepDescription>
            Browse our menu and select your favorite dishes.
          </StepDescription>
        </DeliveryStep>
        <DeliveryStep>
          <StepTitle>Step 2: Place Order</StepTitle>
          <StepDescription>
            Place your order online or by phone.
          </StepDescription>
        </DeliveryStep>
        <DeliveryStep>
          <StepTitle>Step 3: Delivery</StepTitle>
          <StepDescription>
            Sit back and relax while we prepare and deliver your order.
          </StepDescription>
        </DeliveryStep>
      </DeliverySteps>
    </Container>
    </>
  );
}
