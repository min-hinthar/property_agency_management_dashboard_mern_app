import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, Typography } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {

  const navigate = useNavigate();

  const { 
    tableQueryResult: { data, isLoading, isError }
  } = useTable();

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading All Properties...</Typography>
  if(isError) return <Typography>Error Loading Properties...</Typography>

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography fontSize={25} fontWeight={700} fontFamily='Manrope'>
          All Properties
        </Typography>
        <CustomButton 
          title='Add Property'
          handleClick={() => navigate('/properties/create')}
          backgroundColor='#AE0032'
          color='ivory'
          icon={<Add />}
        />
      </Stack>
  {/* Property Card */}
      <Box mt='20px' sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {allProperties.map((property) => (
          <PropertyCard 
            key={property._id} 
            id={property._id} 
            title={property.title} 
            price={property.price}
            location={property.location}
            photo={property.photo}            
          />

        ))}
      </Box>

    </Box>
  )
}

export default AllProperties