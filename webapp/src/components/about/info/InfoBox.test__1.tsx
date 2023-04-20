import { cleanup,render } from "@testing-library/react";
import { InfoBox } from "./InfoBox";
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded';


describe("Componente InfoBox",()=>{
    afterAll(cleanup);

    it("Comprobamos renderizado", ()=>{
        const {getByRole,getByText} = render(<InfoBox icon={<FingerprintRoundedIcon fontSize="large"/>} title={"titulo"} description={"descripcion"} />);
        expect(getByRole("infobox-main")).toBeInTheDocument();
        expect(getByRole("infobox-image")).toBeInTheDocument();
        expect(getByRole("infobox-title")).toBeInTheDocument();
        expect(getByRole("infobox-description")).toBeInTheDocument();
        expect(getByText("titulo")).toBeInTheDocument();
        expect(getByText("descripcion")).toBeInTheDocument(); 
        expect(getByRole("infobox-image").firstChild).toBeInTheDocument();
    });
});