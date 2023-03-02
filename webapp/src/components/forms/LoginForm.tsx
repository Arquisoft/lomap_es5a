import { ChangeEvent, KeyboardEvent } from "react";
import { Box, FormControl, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { signIn } from "src/helpers/AuthHelper";

export default function LoginForm() {
  const [webId, setWebId] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn(webId);
  };

  const handleWebId = (e: ChangeEvent<HTMLInputElement>) => {
    setWebId(e.currentTarget.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <FormControl>
        <TextField
          aria-describedby="my-helper-text"
          label="WebId"
          variant="outlined"
          value={webId}
          onChange={handleWebId}
        />
        <Button type="submit" variant="contained">
          Iniciar sesión
        </Button>
      </FormControl>
    </Box>
  );
}
