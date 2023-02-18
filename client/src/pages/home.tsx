import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components';
import { config } from "process";


const Home = () => {
  
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 10
      }
    }
  })
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
      return <div>Something went wrong!</div>;
  }
  const latestProperties = data?.data ?? [];

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} fontFamily='Manrope'>
        Dashboard
      </Typography>
  {/* Pie Charts */}
      <Box mt='20px' display='flex' flexWrap='wrap' gap={4} color='ivory'>
        <PieChart 
          title='Properties for Sale'
          value={684}
          series={[35, 65]}
          colors={[ '#475BE8', '#C7Af0E']}
        />
        <PieChart 
          title='Properties for Rent'
          value={550}
          series={[60, 40]}
          colors={[ '#475AE8', '#800919']}
        />
        <PieChart 
          title='Total Customers'
          value={5602}
          series={[75, 25]}
          colors={[ '#275BE8', '#700980']}
        />
        <PieChart 
          title='Total Cities'
          value={556}
          series={[10, 90]}
          colors={[ '#475BE8', '#07682B']}
        />
      </Box>
  {/* Total Revenue & Property Referrals */}
      <Stack mt='25px' width='100%' direction={{ xs: 'column', lg: 'row'}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius='15px'
        padding='20px'
        bgcolor='#006b87'
        display='flex'
        flexDirection='column'
        minWidth='100%'
        mt='25px'
      >
        <Typography fontSize={22} fontWeight={600} color='ivory'>
          Latest Properties Listings:
        </Typography>
        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}} justifyContent='space-between' alignItems='center' padding={5}>
          {latestProperties.slice(0).reverse().map((property) => (
            <PropertyCard 
              key={property._id} 
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home