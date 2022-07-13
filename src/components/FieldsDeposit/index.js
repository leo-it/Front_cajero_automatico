import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export const FieldsDeposit = ({setInputFocus, value}) => {
  return (
    <Box sx={{ width: "40%", p: 1, ml: 6,mr:2, mb:6 }}>
          <Box sx={{ display: "flex", my: 5 }}>
            <Typography sx={{ mx: 10 }}>PESOS</Typography>
            <Typography sx={{ mx: 3 }}>CANTIDAD</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ ml: 10, mt: 2, width: "75px" }}>
              $ 100
            </Typography>
            <Typography variant="h5" sx={{ mx: 10 }}>
              <TextField
                onFocus={({ target }) => setInputFocus(target.name)}
                value={value.valueOne || 0}
                sx={{ mb: "10px" }}
                className="input__deposit"
                id="valueOne"
                placeholder="1"
                name="valueOne"
              ></TextField>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ ml: 10, mt: 2, width: "75px" }}>
              $ 200
            </Typography>
            <Typography variant="h5" sx={{ mx: 10 }}>
              <TextField
                onFocus={({ target }) => setInputFocus(target.name)}
                value={value.valueTwo || 0}
                sx={{ mb: "10px" }}
                className="input__deposit"
                id="valueTwo"
                placeholder="1"
                name="valueTwo"
              ></TextField>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ ml: 10, mt: 2, width: "75px" }}>
              $ 500
            </Typography>
            <Typography variant="h5" sx={{ mx: 10 }}>
              <TextField
                onFocus={({ target }) => setInputFocus(target.name)}
                value={value.valueTrhee || 0}
                sx={{ mb: "10px" }}
                className="input__deposit"
                id="valueTrhee"
                placeholder="1"
                name="valueTrhee"
              ></TextField>
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography variant="h5" sx={{ ml: 10, mt: 2, width: "75px" }}>
              $ 1000
            </Typography>
            <Typography variant="h5" sx={{ mx: 10 }}>
              <TextField
                onFocus={({ target }) => setInputFocus(target.name)}
                value={value.valueFour || 0}
                sx={{ mb: "10px" }}
                className="input__deposit"
                id="valueFour"
                placeholder="1"
                name="valueFour"
              ></TextField>
            </Typography>
          </Box>
        </Box>
  )
}
