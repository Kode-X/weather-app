import { Box, Text } from '@mantine/core';
import React from 'react';
import { leftTopNavbar } from '../../utils/getMockData';

const VerticalMenu: React.FC = () => {
    return (
      <div className="p- flex flex-col space-y-4">
        {leftTopNavbar.map((item) => {
          const IconComponent = item.icon;
          return (
            <Box key={item.label} className="items-center">
              <IconComponent className="h-6 w-6 mr-2 font-bold text-white" />
              <Text className="text-lg font-bold text-white">{item.label}</Text>
            </Box>
          );
        })}
      </div>
    );
  };

export default VerticalMenu;
