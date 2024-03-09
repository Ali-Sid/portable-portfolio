import React from "react";
import { Container, Grid, GridItem, Box, Text, Center } from "@chakra-ui/react";

const techStack = [
  "HTML", "CSS", "JavaScript", "React.js", "Express.js", "MySQL", "SQLite", "Firebase", "Dexie.js", "Vite", "Node.js", "Redux Toolkit"
];

const TechStack = () => {
  return (
    <Container maxW="3xl" py={16} id="tech-stack">
      <Center>
        <Text fontSize="2xl" fontWeight="bold" mb={8}>
          My Tech Stack
        </Text>
      </Center>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {techStack.map((tech, index) => (
          <GridItem key={index}>
            <Box bg="gray.700" p={4} borderRadius="md" color="white">
              <Text textAlign="center" fontWeight="semibold">
                {tech}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default TechStack;
