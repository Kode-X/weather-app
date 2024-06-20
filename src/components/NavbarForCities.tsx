import React, { useState } from "react";
import { Box, Collapse, Paper, Text } from "@mantine/core";
import { useAppStore } from "../store/store";
import MusicPlayer from "./MusicPlayer";
import { useClickOutside } from "@mantine/hooks";

interface NavbarProps {
  tabs: { label: string; value: string }[];
  setCurrentSong: (songKey: string) => void;
}

interface NavItem {
  value: string;
  label: string;
}

const NavbarForCities: React.FC<NavbarProps> = ({ tabs, setCurrentSong }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const setActiveTab = useAppStore((state) => state.setActiveTab);

  const [currentTabLabel, setCurrentTabLabel] = useState<string | null>(
    tabs[3].label
  );
  const handleTitleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleNavItemClick = (item: NavItem) => {
    setIsOpen(false);
    setActiveTab(item.value);
    setCurrentSong(item.value);
    setCurrentTabLabel(item.label);
  };

  const dropdownRef = useClickOutside(() => {
    setIsOpen(false); // Close dropdown when clicking outside
  });

  return (
    <>
      <div className="relative">
        <Text
          className="cursor-pointer"
          onClick={handleTitleClick}
          variant="h"
          style={{ marginBottom: "1rem" }}
        >
          {currentTabLabel}
        </Text>
        {isOpen && (
          <Paper
            ref={dropdownRef}
            shadow="md"
            className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg"
          >
            {tabs.map((item) => (
              <Text
                key={item.value}
                onClick={() => handleNavItemClick(item)}
                className="cursor-pointer hover:bg-gray-100 rounded-md p-2"
              >
                {item.label}
              </Text>
            ))}
          </Paper>
        )}
      </div>
      {/* <div style={{ gap: "10px" }}>
        {tabs.map((tab) => (
          <Box>
            <Text
              key={tab.value}
              component="button"
              onClick={() => handleTabClick(tab.value)}
              variant="link"
              size="lg"
              style={{ fontWeight: "bold" }}
            >
              {tab.label}
            </Text>
          </Box>
        ))}

       
      </div> */}
    </>
  );
};

export default NavbarForCities;
