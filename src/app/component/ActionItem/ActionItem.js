"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

let dammyDataItems = [
  {
    id: 1,
    mainHeading: "Schedule a follow-up appointment",
    desc: "Your Zealthy provider requested you schedule a follow-up during your last visit.",
    img: "noun-time-clock",
  },
  {
    id: 2,
    mainHeading: "Reschedule Zealthy visit",
    desc: "We want to meet with you! Please go ahead and reschedule your visit.",
    img: "visit",
  },
  {
    id: 3,
    mainHeading: "Schedule lab work or upload recent labs",
    desc: "Zealthy ordered lab work for you. Schedule an appointment at a Quest or Labcorp location near you, or upload recent lab work that you completed.",
    img: "labs",
  },
  {
    id: 4,
    mainHeading: "Please update payment method",
    desc: "Your card information is no longer valid. To continue your Zealthy membership, please update your payment method.",
    img: "method",
  },
  {
    id: 5,
    mainHeading: "Please update insurance information",
    desc: "Your insurance information appears to be inactive. If it recently changed, please update here.",
    img: "information",
  },
  {
    id: 6,
    mainHeading: "Complete your anxiety or depression check-in ",
    desc: "It’s time for your anxiety or depression check-in. Please help us stay on top of your mental health journey.",
    img: "check-in",
  },
  {
    id: 7,
    mainHeading: "Schedule your next coaching session",
    desc: "Stay on top of your goals by scheduling your next 1:1 session with your [weight loss/mental health] coach.",
    img: "session",
  },
  {
    id: 8,
    mainHeading: "Establish primary care with Zealthy",
    desc: "Did you know that we can become your primary care provider? Schedule your first video visit with a Zealthy provider to get fully onboarded. ",
    img: "zealthy",
  },
];
const ActionItem = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: { sm: "600px", xs: "100%" } }}>
            <Typography
              variant="body1"
              component={"p"}
              gutterBottom
              fontFamily="Inter"
              fontWeight={700}
              fontSize="28px"
              lineHeight={"40px"}
            >
              Action items
            </Typography>
            {dammyDataItems.map((value) => {
              return (
                <Box
                  key={value.id}
                  width={"100%"}
                  py="24px"
                  px={"28px"}
                  bgcolor={"#FFEAE3"}
                  color={"#000"}
                  border="1px solid #CCCCCC"
                  borderRadius="16px"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  marginY="16px"
                  gap={"20px"}
                >
                  <Box
                    display={"flex"}
                    alignItems="center"
                    gap={"20px"}
                    fontFamily="Inter"
                  >
                    <Image
                      src={`/${value.img}.svg`}
                      alt={value.img}
                      width={48}
                      height={48}
                    />
                    <Typography
                      component={"div"}
                      gutterBottom
                      fontWeight={500}
                      fontSize="16px"
                      lineHeight={"24px"}
                    >
                      {value.mainHeading} <br />
                      <Typography
                        fontSize="14px"
                        fontWeight={400}
                        lineHeight={"20px"}
                        component={"p"}
                      >
                        {value.desc}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box>
                    <Image
                      src={"/rightblack.svg"}
                      alt="rightblack"
                      width={18}
                      height={10}
                      color="black"
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ActionItem;
