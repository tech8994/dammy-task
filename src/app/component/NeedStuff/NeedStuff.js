"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

let dammyDataNeedy = [
  {
    id: 1,
    mainHeading: "Schedule a visit or request a new prescription",
    desc: "Same/next-day appointments over video, phone or message",
    img: "reqvisit",
  },
  {
    id: 2,
    mainHeading: "Messages",
    desc: "Feel free to message with our virtual care team 24/7 and get answers",
    img: "messages",
  },
  {
    id: 3,
    mainHeading: "Medication, prescription renewals & delivery",
    desc: "Manage prescriptions, request renewals, and track the delivery of medications",
    img: "medication",
  },
  {
    id: 4,
    mainHeading: "My health",
    desc: "View lab results, past appointments, vitals, and request records",
    img: "myhealth",
  },
  {
    id: 5,
    mainHeading: "Personal information",
    desc: "Update insurance, billing, password, and more",
    img: "userpersonal",
  },
];
const NeedStuff = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            pt: "18px",
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
              Get the care you need
            </Typography>
            {dammyDataNeedy.map((value) => {
              return (
                <Box
                  key={value.id}
                  width={"100%"}
                  py="24px"
                  px={"28px"}
                  bgcolor={"#FFFFFF"}
                  color={"#000"}
                  border="1px solid #CCCCCC"
                  borderRadius="16px"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"space-between"}
                  marginY="16px"
                >
                  <Box
                    display={"flex"}
                    alignItems="center"
                    gap={"20px"}
                    fontFamily="Inter"
                  >
                    {/* <Box bgcolor={"#E38869"} borderRadius="50%" width={40} height={40}> */}
                    <Image
                      src={`/${value.img}.svg`}
                      alt={value.img}
                      width={48}
                      height={48}
                    />
                    {/* </Box> */}
                    <Typography
                      // variant="body1"
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

export default NeedStuff;
