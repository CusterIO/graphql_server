# GraphQL Server
Schema-driven development. It all starts with extending your schema definition with the new operations that you want to add to the API.

## Prisma
Prisma lets you easily connect the GraphQL resolvers in your API server with your database.

After every change you’re making to the datamodel file, you need to redeploy the Prisma API to apply your changes and migrate the underlying database schema.

### "prisma deploy"
Updates the Prisma API

### "prisma generate"
Updates the auto-generated Prisma client so that it can expose CRUD methods.

### Post-deployment hook
The Prisma client will automatically be regenerated upon a datamodel change.

