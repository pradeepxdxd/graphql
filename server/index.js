import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { schema } from './schema.gql.js'
import { MONGO_URL } from './config.js';
import { resolvers } from './resolvers.js'
import {context} from './middleware/auth.js'

mongoose.connect(MONGO_URL)
    .then(() => console.log('db connected...'))
    .catch(err => console.log(err))

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
})

server.listen().then(({ url }) => {
    console.log('GraphQL Server is running on', url);
})