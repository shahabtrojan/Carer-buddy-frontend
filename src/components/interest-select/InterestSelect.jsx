import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { sportsArray } from "../../utils/constant";

function InterestSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  
  const handleClick = useCallback(
    (option) => {
      let optionExist = false;
      selectedOptions.forEach((item, index) => {
        if (option === item) {
          optionExist = true;
          selectedOptions.splice(index, 1);
        }
      });
      if (optionExist === false) {
        selectedOptions.push(option);
      }
      setSelectedOptions([...selectedOptions]);
    },
    [selectedOptions]
  );
  const getSelectedOption = useCallback(
    (option) => {
      const result = selectedOptions.filter((item) => item === option);
      return result.length > 0 ? true : false;
    },
    [selectedOptions]
  );

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          padding: " 30px 100px",
          width: "100%",
        }}
      >
        <Typography variant="h5">Pick Your Interest</Typography>
        <Card sx={{ padding: 1, maxHeight: 350, overflow: "auto" }}>
          <Grid container>
            {sportsArray.map((item, index) => (
              <Box key={index} sx={{ padding: "3px 4px" }}>
                <Chip
                  label={item}
                  variant={getSelectedOption(item) ? "filled" : "outlined"}
                  onClick={() => handleClick(item)}
                  color={getSelectedOption(item) ? "primary" : "default"}
                />
              </Box>
            ))}
          </Grid>
        </Card>

        <Stack
          direction="row"
          spacing={2}
          className="mt-3 w-100 justify-content-end"
        >
          <Button
            className="text-capitalize"
            variant="outlined"
            size="small"
            sx={{ borderRadius: 10 }}
          >
            Cancel
          </Button>
          <Button
            className="text-capitalize"
            variant="contained"
            size="small"
            sx={{ borderRadius: 10 }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default InterestSelect;
