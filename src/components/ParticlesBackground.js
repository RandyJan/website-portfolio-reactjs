import Particles from "react-tsparticles";
import particlesconfig from "./config/particles-config";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            options={particlesconfig}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
        />
    );
}

export default ParticlesBackground;

