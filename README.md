## My First Package! ❤️

# exists-validator

This npm package provides a decorator function `Exists` that can be used to validate if a value exists in the database. It uses the `class-validator` library and the Prisma ORM.

## Installation

To install this package, run the following command:

```
npm install exists-validator
```

## Usage

To use the `Exists` decorator, import it from the package and apply it to the property you want to validate. For example:

```typescript
import { Exists } from "exists-validator";

class User {
  @Exists("User", "email", {
    // ...
  })
  email: string;
}
```

In this example, the `email` property of the `User` class is validated to ensure that it exists in the `User` model's `email` field.

The `Exists` decorator takes three parameters:

- `model`: The name of the Prisma model to validate against.
- `field`: The name of the field in the model to validate against.
- `validationOptions` (optional): Additional validation options to pass to the `registerDecorator` function.

## PrismaService

The `PrismaService` class provides access to the Prisma ORM. To use it, import it from the package and create a new instance:

```typescript
import { PrismaService } from "exists-validator";

const prisma = new PrismaService();
```

The `PrismaService` class has a `getClient` method that returns a Prisma client instance:

```typescript
const client = prisma.getClient();
```

## Contributing

If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/Daniel-Monroy/exists-validator). Pull requests are also welcome.

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
