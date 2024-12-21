import { IsEmail, ValidateIf, IsString, IsNotEmpty } from 'class-validator';


export class LoginUserDto {
    @ValidateIf(o => !o.email)
    @IsString()
    @IsNotEmpty({ message: 'Name cannot be empty if email is not provided' })
    name?: string;
  
    @ValidateIf(o => !o.name)
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email cannot be empty if name is not provided' })
    email?: string;
 
    @ValidateIf(o => !o.email && !o.password)
    @IsString()
    @IsNotEmpty({ message: 'Google token is required for Google registration' })
    gToken?: string;
    
    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    pass: string;
  }

//   Registered user DTO. This DTO will be used to validate the request body when a user registers.
export class RegisterUserDto {
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    name: string;
  
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;

    @ValidateIf(o => !o.email && !o.password)
    @IsString()
    @IsNotEmpty({ message: 'Google token is required for Google registration' })
    gToken?: string;

    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    pass: string;

    @IsString()
    @IsNotEmpty({ message: 'Password confirmation is required' })
    confirmPass: string;
}