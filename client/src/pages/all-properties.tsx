import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Stack, TextField, Typography, Select, MenuItem } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { PropertyCard, CustomButton } from "components";

const AllProperties = () => {

  const navigate = useNavigate();

  const { 
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable();

  const allProperties = data?.data ?? [];

  if(isLoading) return <Typography>Loading All Properties...</Typography>
  if(isError) return <Typography>Error Loading Properties...</Typography>

  return (
    <Box>
  {/* useTable */}
      <Box mt='20px' sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        <Stack direction='column' width='100%'>
          <Typography fontSize={25} fontWeight={700} fontFamily='Manrope'>
            {!allProperties.length ? 'There are no properties added yet!' : 'All Properties'}
          </Typography>
          <Box mb={2} mt={3} display='flex' width='84%' justifyContent='space-between' flexWrap='wrap'>
            <Box display='flex' gap={2} flexWrap='wrap' mb={{ xs: '20px', sm: 0 }}>
              <CustomButton 
                title={`Sort Price`}
                handleClick={() => {}}
                backgroundColor='#5B0768'
                color="ivory"
              />
              <TextField
                variant="outlined"
                color='info'
                placeholder="Search by title"
                value='' 
                onChange={() => {}}
              />
              <Select
                variant="outlined"
                color='info'
                displayEmpty
                required
                inputProps={{
                  'aria-label' : 'Without label'
                }}
                defaultValue=''
                value=''
                onChange={() => {}}
              >
                <MenuItem value=''>
                  All
                </MenuItem>
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
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
  {/* Pagination */}
      {allProperties.length > 0 && (
        <Box display='flex' gap={2} mt={3} flexWrap='wrap'>
          <CustomButton 
            title='Previous'
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor='#ED8B00'
            color='ivory'
            disabled={!(current > 1)}
          />
          <Box display={{ xs: 'hidden', sm: 'flex'}} alignItems='center' gap='5px'>
            Page{' '}<strong>{current} of {pageCount}</strong>
          </Box>
          <CustomButton 
            title='Next'
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor='#ED8B00'
            color='ivory'
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color='info'
            displayEmpty
            required
            inputProps={{
              'aria-label' : 'Without label'
            }}
            defaultValue={10}
            value=''
            onChange={() => {}}
          >
            {[10, 20, 30, 40, 50].map((size) => (
            <MenuItem key={size} value={size}>
              Show {size}
            </MenuItem>
            ))}
          </Select>  
        </Box>
      )}
    </Box>
  )
}

export default AllProperties