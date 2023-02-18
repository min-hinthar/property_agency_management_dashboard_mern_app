import { Email, Phone, Place } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, PropertyProps } from "interfaces/common";
import PropertyCard from "./PropertyCard";

function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}

const Profile = ({ type, name, avatar, email, properties }: ProfileProps) => (
    <Box>
        <Typography fontSize={25} fontWeight={700}>
            {type} Profile
        </Typography>

        <Box mt="20px" borderRadius="15px" padding="20px" bgcolor="#006b87">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5,
                }}
            >
                <img
                    src="https://1.bp.blogspot.com/-LIRC12Ji9bE/YKcFA67ewbI/AAAAAAAA7pc/tZz1Ab7Y56EmOWROsvyAksQgWqK7SUijACLcBGAsYHQ/s1024/25exterior.jpg"
                    width={340}
                    height={320}
                    alt="abstract"
                    className="my_profile-bg"
                    style={{ borderRadius: 8, objectFit: 'cover'}}
                />
                <Box
                    flex={1}
                    sx={{
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" },
                    }}
                >
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap="20px"
                    >
                        <img
                            src={
                                checkImage(avatar)
                                    ? avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            width={78}
                            height={78}
                            alt="user_profile"
                            className="my_profile_user-img"
                        />

                        <Box
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                        >
                            <Stack direction="column">
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    color="ivory"
                                >
                                    {name}
                                </Typography>
                                <Typography fontSize={16} color="yellow">
                                    Private Real-Estate Agent
                                </Typography>
                            </Stack>

                            <Stack direction="column" gap="30px">
                                <Stack gap="15px">
                                    <Typography
                                        fontSize={14}
                                        fontWeight={500}
                                        color="ivory"
                                    >
                                        Address
                                    </Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        alignItems="center"
                                        gap="10px"
                                    >
                                        <Place sx={{ color: "yellow" }} />
                                        <Typography
                                            fontSize={14}
                                            color="ivory"
                                        >
                                          Southern California
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="20px"
                                    pb={4}
                                >
                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="ivory"
                                        >
                                            Phone Number
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Phone sx={{ color: "yellow" }} />
                                            <Typography
                                                fontSize={14}
                                                color="ivory"
                                                noWrap
                                            >
                                              (626)510-2019
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="ivory"
                                        >
                                            Email
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Email sx={{ color: "yellow" }} />
                                            <Typography
                                                fontSize={14}
                                                color="ivory"
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

        {properties.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#006b87">
                <Typography fontSize={22} fontWeight={600} color="ivory">
                    {type} Properties
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {properties?.map((property: PropertyProps) => (
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
        )}
    </Box>
);

export default Profile;