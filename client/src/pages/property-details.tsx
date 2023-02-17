import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useShow, useDelete, useGetIdentity } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import { ChatBubble, Delete, Edit, Phone, Place, Star } from "@mui/icons-material";

import { CustomButton } from "components";

const PropertyDetails = () => {
  
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();
  const { queryResult } = useShow();

  const { data, isLoading, isError } = queryResult;

  const propertyDetails = data?.data ?? {};

  if(isLoading) return <div>Loading Property Details...</div>
  if(isError) return <div>Error</div>
  
  return (
    <Box
      borderRadius='15px'
      padding='20px'
      bgcolor='#AE0032'
      width='fit-content'
    >
      <Typography fontSize={25} fontWeight={700} color='ivory'>
        Property Details:
      </Typography>
      <Box mt='20px' display='flex' flexDirection={{ sx: 'column', lg: 'row'}} gap={4}>
        <Box flex={1} maxWidth={764}>
          <img 
            src={propertyDetails.photo}
            alt={propertyDetails.title}
            height={546}
            style={{ objectFit: 'cover', borderRadius: '10px'}}
            className='property_details-img'
          />
          <Box mt='15px'>
            <Stack direction='row' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
              <Typography fontSize={18} fontWeight={500} textTransform='capitalize' color='ivory'>
                {propertyDetails.propertyType}
              </Typography>
              <Box>
                {[1, 2, 3, 4, 5].map((star) => <Star key={`star-${star}`} sx={{ color: '#F2C94C'}}/>)}
              </Box>
            </Stack>
            <Stack direction='row' justifyContent='space-between' flexWrap='wrap' alignItems='center'>
              <Box>
                <Typography fontSize={22} fontWeight={600} textTransform='capitalize' color='ivory'>
                  {propertyDetails.title}
                </Typography>
                <Stack mt={0.5} direction='row' alignItems='center' gap={0.5}>
                  <Place sx={{ color: 'yellow'}}/>
                    <Typography fontSize={14} color='ivory'>
                      {propertyDetails.location}
                    </Typography>
                </Stack>
              </Box>
              <Box>

              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
};

export default PropertyDetails;