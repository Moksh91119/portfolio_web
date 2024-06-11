import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Restaurant Web",
    url: "https://github.com/Moksh91119/restaurant-page-using-react",
    image: "projects/restaurant_react.png",
    description: "Use of React to create one page quick website for a restaurant",
  },
  {
    title: "Admin Dashboard",
    url: "https://github.com/Moksh91119/admin_dashboard_app",
    image: "projects/dashboard.png",
    description: "Use of ReactApi to create an Admin Dashboard",
  },
  {
    title: "GPT-3 Website",
    url: "https://github.com/Moksh91119/GPT-3_website_using_react",
    image: "projects/gpt3.png",
    description: "Use of React to create one page trial website for GPT-3",
  },
  {
    title: "Portfolio Website",
    url: "https://github.com/Moksh91119/portfolio_web",
    image: "projects/folio_web.png",
    description: "Use of React and Three.js to create a portfolio website",
  },
  {
    title: "Cafe Website",
    url: "https://github.com/Moksh91119/Restaurant_Management_System",
    image: "projects/symbi_eat.png",
    description: "Use of HTML, CSS and JS to create a website for a cafe",
  },
  {
    title: "Crypto Transfer",
    url: "https://github.com/Moksh91119/crypto_transfer",
    image: "projects/crypto_transfer.png",
    description: "WEB3 based Crypto Transfer using React and Solidity",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        position={[-1, -0.4, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 2.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
