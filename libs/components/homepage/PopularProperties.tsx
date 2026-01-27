import React, { useState } from "react";
import { Stack, Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TrendPropertyCard from "./TrendPropertyCard";
import PopularPropertyCard from "./PopularPropertycard";

const PopularProperties = ({ initialInput, ...props }: any) => {
  const [popularProperties, setPopularProperties] =
    useState<number[]>(initialInput);
  return (
    <Stack className={"popular-properties"}>
      <Stack className={"container"}>
        <Stack className={"info-box"}>
          <Box className={"left"}>
            <span>Popular Properties</span>
            <p>Aliquam lacinia diam quis lacus euismod</p>
          </Box>

          <Box className={"right"}>
            <div className="more-box">
              <a href="/property">
                <span>See All Properties</span>
              </a>
              <img src="/img/icons/rightup.svg" alt="" />
            </div>
          </Box>
        </Stack>
        <Stack className={"card-box"}>
          {popularProperties?.length === 0 ? (
            <Box className={"empty-list"}>Trends Empty</Box>
          ) : (
            <Swiper
              className={"popular-property-swiper"}
              slidesPerView={"auto"}
              modules={[Navigation, Pagination]}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-popular-next",
                prevEl: ".swiper-popular-prev",
              }}
              pagination={{
                el: ".swiper-popular-pagination",
              }}
            >
              {popularProperties.map((property, index) => {
                return (
                  <SwiperSlide key={index} className={"popular-property-slide"}>
                    <PopularPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Stack>
        <Stack
          className="pagination-box"
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div
            className={"swiper-popular-prev"}
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            <WestIcon />
          </div>
          <div className={"swiper-popular-pagination"}></div>
          <div
            className={"swiper-popular-next"}
            style={{ marginLeft: "20px", cursor: "pointer" }}
          >
            <EastIcon />
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

PopularProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default PopularProperties;
