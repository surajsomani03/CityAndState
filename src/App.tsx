import "./App.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import indianStates from "./indianStates.json";

const indianCities: { [key: string]: string[] } = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Kurnool",
    "Rajahmundry",
    "Tirupati",
    "Kakinada",
    "Kadapa",
    "Anantapur",
    "Nandyal",
    "Ongole",
    "Eluru",
    "Srikakulam",
    "Vizianagaram",
    "Tenali",
    "Proddatur",
    "Chittoor",
    "Hindupur",
    "Machilipatnam",
    "Adoni",
    "Madanapalle",
    "Guntakal",
    "Dharmavaram",
    "Gudivada",
    "Narasaraopet",
    "Tadipatri",
    "Tadepalligudem",
    "Amaravati",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Pasighat",
    "Daporijo",
    "Ziro",
    "Along",
    "Tezu",
    "Bomdila",
    "Tawang",
    "Khonsa",
    "Anini",
    "Roing",
    "Aalo",
    "Jairampur",
    "Namsai",
    "Seppa",
    "Bordumsa",
    "Changlang",
    "Yingkiong",
  ],
  Assam: [
    "Guwahati",
    "Dibrugarh",
    "Jorhat",
    "Silchar",
    "Nagaon",
    "Tezpur",
    "Tinsukia",
    "Bongaigaon",
    "Goalpara",
    "Dhubri",
    "Sivasagar",
    "Barpeta",
    "Karimganj",
    "North Lakhimpur",
    "Diphu",
    "Hailakandi",
    "Nalbari",
    "Morigaon",
    "Dhemaji",
    "Lanka",
    "Bilasipara",
    "Dudhnai",
    "Gauripur",
    "Lumding",
    "Pathsala",
    "Rangia",
    "Sonari",
    "Naharkatiya",
  ],
  Bihar: [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Arrah",
    "Bihar Sharif",
    "Begusarai",
    "Katihar",
    "Chhapra",
    "Purnia",
    "Siwan",
    "Motihari",
    "Nalanda",
    "Hajipur",
    "Jamalpur",
    "Buxar",
    "Dehri",
    "Sasaram",
    "Danapur",
    "Saharsa",
    "Sasaram",
    "Munger",
    "Chhapra",
    "Bettiah",
  ],
  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Durg",
    "Bilaspur",
    "Korba",
    "Raigarh",
    "Jagdalpur",
    "Ambikapur",
    "Rajnandgaon",
    "Chirmiri",
    "Dhamtari",
    "Dalli-Rajhara",
    "Janjgir",
    "Kanker",
    "Mahasamund",
    "Naila Janjgir",
    "Tilda",
    "Bhatapara",
    "Kawardha",
    "Mungeli",
    "Saraipali",
  ],
};

function App() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [cities, setCities] = useState<string[]>([]);

  const handleStateChange = (event: SelectChangeEvent) => {
    const newState = event.target.value as string;
    setSelectedState(newState);
    setSelectedCity("");
  };

  const handleCityChange = (event: SelectChangeEvent) => {
    const newCity = event.target.value as string;
    setSelectedCity(newCity);
  };

  useEffect(() => {
    if (selectedState && indianCities[selectedState]) {
      setCities(indianCities[selectedState]);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  return (
    <Box>
      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="state-label">State</InputLabel>
        <Select
          labelId="state-label"
          id="state-select"
          value={selectedState}
          label="State"
          onChange={handleStateChange}
        >
          {indianStates.map((stateName, index) => (
            <MenuItem key={index} value={stateName}>
              {stateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedState && (
        <FormControl fullWidth>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={selectedCity}
            label="City"
            onChange={handleCityChange}
          >
            {cities.map((cityName: string, index: number) => (
              <MenuItem key={index} value={cityName}>
                {cityName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
}

export default App;
