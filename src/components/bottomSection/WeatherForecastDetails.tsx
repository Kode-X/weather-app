import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Text, Group, Card } from "@mantine/core";
// import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { capitalizeFirstThreeChars, getCurrentDay } from "../utils/getUtils";
import { DayData, mockupData } from "../utils/getMockData";
import MyCard from "../MyCard";

const WeatherCarousel: React.FC = () => {
  const currentDay = getCurrentDay();
  const [selectedDay, setSelectedDay] = useState<DayData | null>(
    mockupData[currentDay]
  );

  const handleDayClick = (day: string) => {
    setSelectedDay(mockupData[day]);
  };

  return (
    <div className="container mx-auto p-4">
      <Carousel
        withIndicators
        height={200}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
      >
        {Object.keys(mockupData).map((day) => (
          <Carousel.Slide key={day} onClick={() => handleDayClick(day)}>
            <Card
             
              className="cursor-pointer"
            
            >
              <Text>{capitalizeFirstThreeChars(day)}</Text>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      {selectedDay && (
        <MyCard className="mt-4">
          <Text size="lg" mb="sm">
            Weather Details
          </Text>
          <Text>Real Feel: {selectedDay.realFeel.toFixed(2)}°C</Text>
          <Text>Wind: {selectedDay.wind.toFixed(2)} km/h</Text>
          <Text>Chance of Rain: {selectedDay.chanceOfRain.toFixed(2)}%</Text>
          <Text>UV Index: {selectedDay.uvIndex}</Text>
        </MyCard>
      )}
    </div>
  );
};

export default WeatherCarousel;
