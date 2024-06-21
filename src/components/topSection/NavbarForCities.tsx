import { Button, Paper, Text } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { IconArrowRight, IconMapPin } from "@tabler/icons-react";
import React, { useState } from "react";
import { useAppStore } from "../../store/store";

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
    <div className="relative">
      {/* Εικονίδιο τοποθεσίας */}
      <Button onClick={handleTitleClick}>
        <div className="flex cursor-pointer text-white text-lg font-bold  items-center space-x-2">
          <IconMapPin size={24} />
          <Text className="pt-4" variant="h" style={{ marginBottom: "1rem" }}>
            {currentTabLabel}
          </Text>
          <IconArrowRight size={24} />
        </div>
      </Button>
      {/* Δεξιό βελάκι */}
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
  );
};

export default NavbarForCities;
