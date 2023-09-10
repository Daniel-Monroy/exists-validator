import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from 'class-validator';
import { PrismaService } from './prisma.service';

async function existsValidator(value: any, args: ValidationArguments) {
  const [model, field] = args.constraints;
  const prisma: PrismaService = new PrismaService();
  const result = await prisma.getClient()[model].findFirst({
    where: {
      [field]: value,
      deletedAt: null,
    },
  });
  return !!result;
}

export function Exists(
  model: string,
  field: string,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'exists',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [model, field],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          return existsValidator(value, args);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} does not exist in the database`;
        },
      },
    });
  };
}