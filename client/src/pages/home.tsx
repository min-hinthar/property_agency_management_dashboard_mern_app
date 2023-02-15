import { useList } from "@pankod/refine-core/dist/hooks";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components';


const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700}>
        Dashboard
      </Typography>
      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart 
          title='Properties for Sale'
          value={684}
          series={[75, 25]}
          colors={[ '#475BE8', '#E4E8EF']}
        />
        <PieChart 
          title='Properties for Rent'
          value={550}
          series={[60, 40]}
          colors={[ '#475AE8', '#E4B8EF']}
        />
        <PieChart 
          title='Total Customers'
          value={5602}
          series={[75, 25]}
          colors={[ '#275BE8', '#C4E8EF']}
        />
        <PieChart 
          title='Total for Cities'
          value={556}
          series={[75, 25]}
          colors={[ '#475BE8', '#E4E8EF']}
        />
      </Box>
    </Box>
  )
}

export default home