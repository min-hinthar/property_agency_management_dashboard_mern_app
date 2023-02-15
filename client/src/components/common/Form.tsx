import { Box, Typography, FormControl, FormHelperText, TextField, TextareaAutosize, Stack, Select, MenuItem, Button } from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({ type, register, handleSubmit, handleImageChange, formLoading, onFinishHandler, propertyImage}: FormProps) => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} fontFamily='Manrope'>
        {type} a Property
      </Typography>
  {/* Wrapper for Form */}
      <Box mt={2.5} borderRadius='15px' padding='20px' bgcolor='#AE0032'>
        <form style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}} onSubmit={handleSubmit(onFinishHandler)}>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#fff'}}>
              Enter Property Name
            </FormHelperText>
            <TextField 
              fullWidth
              required
              placeholder="Villa Del Sol"
              id='outlined-basic'
              color='info'
              style={{ background: '#ccc', borderRadius: 6, padding: 10}}
              variant='outlined'
              {...register('title', {
                required: true
              })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#fff'}}>
              Property Description
            </FormHelperText>
            <TextareaAutosize 
              minRows={5}
              required
              placeholder="Write description of property..."
              color='info'
              style={{ width: '100%', fontSize: '16px', borderColor: 'rgba(0,0,0,0.23)', borderRadius: 6, padding: 10, color: '#919191' }}
              {...register('description', {
                required: true
              })}
            />
          </FormControl>
  {/* Dropdown Menu & Price */}
          <Stack direction='row' gap={4}>
            <FormControl>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: '10px 0',
                  fontSize: 16,
                  color: 'ivory'
                }}
              >
                Select Property Type
              </FormHelperText>
              <Select
                variant='outlined'
                style={{ background: '#ccc'}}
                color='info'
                displayEmpty
                required
                inputProps={{ 'aria-label': 'Without label' }}
                defaultValue='apartment'
                {...register('propertyType', {required: true})}
              >
                <MenuItem value='apartment'>
                  Apartment
                </MenuItem>
                <MenuItem value='villa'>
                  Villa
                </MenuItem>
                <MenuItem value='farmhouse'>
                  Farmhouse
                </MenuItem>
                <MenuItem value='condos'>
                  Condos
                </MenuItem>
                <MenuItem value='townhouse'>
                  Townhouse
                </MenuItem>
                <MenuItem value='duplex'>
                  Duplex
                </MenuItem>
                <MenuItem value='studio'>
                  Studio
                </MenuItem>
                <MenuItem value='chalet'>
                  Chalet
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#fff'}}>
                Enter Property Price
              </FormHelperText>
              <TextField 
                fullWidth
                required
                type='number'
                placeholder="$1,799,000"
                id='outlined-basic'
                color='info'
                style={{ background: '#ccc', borderRadius: 6}}
                variant='outlined'
                {...register('price', {
                  required: true
                })}
              />
            </FormControl>
          </Stack>
  {/* Location Input*/}
          <FormControl>
              <FormHelperText sx={{ fontWeight: 500, margin: '10px 0', fontSize: 16, color: '#fff'}}>
                Enter Location
              </FormHelperText>
              <TextField 
                fullWidth
                required
                placeholder="E Ocean Blvd, Long Beach, CA"
                id='outlined-basic'
                color='info'
                style={{ background: '#ccc', borderRadius: 6}}
                variant='outlined'
                {...register('location', {
                  required: true
                })}
              />
            </FormControl>
  {/* Image Upload */}
            <Stack direction='column' gap={1} justifyContent='center' mb={2}>
              <Stack direction='row' gap={2}>
                <Typography color='ivory' fontSize={16} fontWeight={500} my='10px'>
                  Property Photo
                </Typography>

                <Button component='label' sx={{ width: 'fit-content', fontSize: 16, color: '#2ED480'}}>
                  Upload *
                  <input 
                    hidden
                    accept='image/*'
                    type='file'
                    onChange={(e) => {
                      // @ts-ignore
                      handleImageChange(e.target.files[0])
                    }}
                  />
                </Button>
              </Stack>
              <Typography fontSize={14} color='#808191' sx={{ wordBreak: 'break-all'}}>
                {propertyImage?.name}
              </Typography>
            </Stack>
  {/* Submit */}
            <CustomButton
              type='submit'
              title={formLoading ? 'Submitting...' : 'Submit'}
              backgroundColor='#475BE8'
              color='#FCFCFC'
            />
        </form>
      </Box>
    </Box>
  )
}

export default Form