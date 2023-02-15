import ReactApexChart from 'react-apexcharts';
import { Typography, Box, Stack } from '@pankod/refine-mui';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor='#AE0032'
      id='chart'
      display='flex'
      flexDirection='column'
      borderRadius='15px'
    > 
      <Typography fontSize='18px' fontWeight={600} color='ivory' fontFamily='Manrope'>
        Total Revenue
      </Typography>
      <Stack my='20px' direction='row' gap={4} flexWrap='wrap'>
        <Typography fontSize={28} fontWeight={700} color='#FCC25D' fontFamily='Manrope'>
          $371,946
        </Typography>
        <Stack direction='row' alignItems='center' gap={1}>
          <TrendingUpIcon sx={{ fontSize: 25, color: '#AADB1E'}}/>
          <Stack>
            <Typography fontSize={15} color='#AADB1E' fontWeight={700}>
              4.8%
            </Typography>
            <Typography fontSize={12} color='ivory'>
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
  {/* ApexChart for Total Revenue Series */}
      <ReactApexChart 
        series={TotalRevenueSeries}
        type='bar'
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue