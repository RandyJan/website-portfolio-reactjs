import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"
import { loadSlim } from "tsparticles-slim";

const Particlesbg = () =>{
    const options = useMemo(()=>{
        return {};
    },[]);
     const particlesInit = useCallback((engine)=>{
        loadSlim(engine);
        // loadFull(engine);
     },[]);
    return <Particles init={particlesInit} options={options}/>
}
export default Particlesbg;