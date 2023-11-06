# Monorepo

*Scripts:*
We can run scripts from the root of the project using:  `pnpm nx run <script> <package>`
- test: `pnpm nx test api`

## Packages

### API

*Scripts:*
- lint `pnpm run lint`
- lint:fix `pnpm run lint`
- test `pnpm run test`


### Database

#### Local Development
- `packages/database` is a local mongodb database that can be used for development. It is not intended to be used in production.
- Up local mongo database: `docker compose up -d`

[ ⚠️ TO DO] - make a script to populate the database with test data
*Populate local mongo database:*
- docker ps -a (find the container id for the database)
- docker exec -it <container id> bash
- mongosh "mongodb://127.0.0.1:27017" --username `USER` --password `PASSWORD`
- use <database name> (if not exist, it will be created)
- now we are in the new database
- db.createCollection('<collection name>')
- db.<collection name>.insertOne({name: 'test'})