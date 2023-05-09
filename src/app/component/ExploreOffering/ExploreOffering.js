"use client";
import { Box, Container, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

var items = [
  {
    id: 1,
    img: "imageone",
    desc: "Get birth control online through Zealthy, all from the comfort of your home.",
  },
  {
    id: 2,
    img: "imagetwo",
    desc: "Try Zealthy’s weight loss program. We predict you’ll lose at least [30] lbs to achieve a weight of [170] lbs. "
  },
  {
    id: 3,
    img: "imagethree",
    desc: "Achieve better long-term outcomes through our mental health program (with coaching + medication options). "
  },
  {
    id: 4,
    img: "imagefour",
    desc: "Our Zealthy primary care providers offer exceptional,  individualized care for general health concerns."
  },
];
const ExploreOffering = () => {
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
              Explore our offerings
            </Typography>
            <Carousel animation="slide" className="carosal_section">
              {items.map((item, i) => {
                return (
                  <Box
                    key={item.id}
                    sx={{ width: "100%", height: "100%", position: "relative" }}
                  >
                    <Image
                      src={`/${item.img}.svg`}
                      alt={item.img}
                      width={0}
                      height={0}
                      //   sizes="100vw"
                      style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    />
                    <Box
                      position={"absolute"}
                      bottom="6px"
                      width={"100%"}
                      bgcolor="rgba(0, 33, 11, 0.8)"
                      display={"flex"}
                      justifyContent="space-between"
                      alignItems={"center"}
                      gap="20px"
                      px={"20px"}
                    >
                      <Typography
                        component={"p"}
                        p="24px"
                        fontWeight={500}
                        fontSize="16px"
                        lineHeight={"24px"}
                        color="#FFFFFF"
                        letterSpacing={"0.3px"}
                      >
                        {item.desc}
                      </Typography>
                      <Box>
                    <Image
                      src={"/arrowright.svg"}
                      alt="arrowright"
                      width={18}
                      height={10}
                    />
                  </Box>
                    </Box>
                  </Box>
                );
              })}
            </Carousel>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ExploreOffering;
