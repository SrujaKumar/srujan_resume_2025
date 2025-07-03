const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const resumeData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/mocks/resumeData.json'), 'utf-8'));

const typeDefs = gql`
  type SkillCategory {
    category: String!
    skills: [String!]!
  }
  type Project {
    name: String!
    summary: String!
    technologies: [String!]!
    responsibilities: [String!]!
  }
  type Experience {
    company: String!
    location: String!
    role: String!
    duration: String!
    project: Project!
  }
  type Education {
    degree: String!
    university: String!
    duration: String!
  }
  type Resume {
    name: String!
    email: String!
    phone: String!
    summary: String!
    skills: [SkillCategory!]!
    education: [Education!]!
    experience: [Experience!]!
  }
  type Query {
    resume: Resume!
    experience: [Experience!]!
    skills: [SkillCategory!]!
    education: [Education!]!
  }
`;

const resolvers = {
  Query: {
    resume: () => ({
      ...resumeData,
      skills: Object.entries(resumeData.skills).map(([category, skills]) => ({ category, skills })),
    }),
    experience: () => resumeData.experience,
    skills: () => Object.entries(resumeData.skills).map(([category, skills]) => ({ category, skills })),
    education: () => resumeData.education,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
