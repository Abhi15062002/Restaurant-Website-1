import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 18.9,
          textAlign: "center",
          p: 3,
          "& h4": {
            fontWeight: "bold",
            my: 3,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify-center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>Welcome to our restaurant! We are dedicated to providing our guests with an exceptional dining experience in a warm and inviting atmosphere. 
        Our talented chefs use only the freshest and highest quality ingredients to create delicious and flavorful dishes that are sure to satisfy any palate.</p><br />
        <p>Whether you are joining us for a quick lunch or a romantic dinner, our friendly and knowledgeable staff is here to ensure that your 
        visit is a memorable one. We take pride in offering excellent service and attention to detail to make sure that you feel like a valued guest every time you dine with us.
        </p><br/>
        <p>Thank you for choosing our restaurant and we look forward to serving you soon!</p>
      </Box>
    </Layout>
  );
};
export default About;
