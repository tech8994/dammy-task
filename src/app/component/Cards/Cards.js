"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

let dammyData = [
  {
    id: 1,
    mainHeading: "Join [Video] Visit with Dr. Mark Greene",
    desc: "Today at 4:00 PM ET",
  },
  {
    id: 2,
    mainHeading: "Upcoming [Video] Visit with Dr. Mark Greene",
    desc: "Wednesday at 4:00 PM ET",
  },
];
const Cards = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            py: "48px",
          }}
        >
          <Box sx={{ width: { sm: "600px", xs: "100%" } }}>
            <Typography
            variant="body1"
            component={"div"}
              gutterBottom
              fontFamily="Abril Text"
              fontWeight={700}
              fontSize="28px"
              lineHeight={"40px"}
            >
              Hi, [Kyle]!
            </Typography>
            {dammyData.map((value) =>{
                return(
                    <Box
                    key={value.id}
                    width={"100%"}
                    py="24px"
                    px={"28px"}
                    bgcolor={"#00210B"}
                    color={"#fff"}
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
                      <Image src={"/man.svg"} alt="man_img" width={48} height={48} />
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
                        gutterBottom
                        >
                          {value.desc}
                        </Typography>
                      </Typography>
                    </Box>
                    <Box>
                      <Image
                        src={"/arrowright.svg"}
                        alt="arrowright"
                        width={18}
                        height={10}
                      />
                    </Box>
                  </Box>                    
                )
            })}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cards;
// sx={{width:{
//     sm: "600px",

// }}}
