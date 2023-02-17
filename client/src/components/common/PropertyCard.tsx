import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import { Typography, Box, Card, CardMedia, CardContent, Stack } from "@pankod/refine-mui";

import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({ id, title, location, price, photo }: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth: '330px',
        padding: '10px',
        '&:hover': {
          boxShadow: '0 22px 45px 2px rbga(176, 176, 176, 0.2)'
        },
        bgcolor: '#AE0032',
        cursor: 'pointer',
        textDecoration: 'none'
      }}
    >
      <CardMedia 
        component='img'
        width='100%'
        height={210}
        image={photo}
        alt='card image'
        sx={{ borderRadius: '10px'}}
      />
        <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '10px', paddingX: '5px'}}>
          <Stack direction='column' gap={1}>
            <Typography fontSize={20} fontWeight={700} color='ivory'>
              {title}
            </Typography>
            <Stack direction='row' gap={0.5} alignItems='flex-start' color='yellow'>
              <Place 
                sx={{
                  fontSize: 18,
                  marginTop: 0.5,
                }}
              />
              <Typography fontSize={14} color='ivory'>
                {location}
              </Typography>
            </Stack>
          </Stack>
          <Box px={1.5} py={0.5} borderRadius={1} bgcolor='#5B0768' height='fit-content'>
            <Typography fontSize={12} fontWeight={600} color='ivory'>
              ${parseFloat(price).toLocaleString()}
            </Typography>
          </Box>
        </CardContent>
    </Card>
  )
}

export default PropertyCard