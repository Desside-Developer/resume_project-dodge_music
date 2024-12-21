// import { Test, TestingModule } from '@nestjs/testing';
// import { AuthController } from './auth.controller';
// import { AuthService } from '../services/auth.service';
// import { INestApplication } from '@nestjs/common';
// import { LoginUserDto } from '../dto/auth.dto';

// describe('AuthController', () => {
//   let app: INestApplication;
//   let authService: AuthService;
//   let controller: AuthController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [
//         {
//           provide: AuthService,
//           useValue: {
//             login: jest.fn(),
//           },
//         },
//       ], // checkUser: jest.fn(),
//     }).compile();

//     app = module.createNestApplication();
//     await app.init();

//     authService = module.get<AuthService>(AuthService);
//     controller = module.get<AuthController>(AuthController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('should call authService.login with correct parameters', async () => {
//     const user = { username: 'test', password: 'test' };
//     const loginUserDto = { username: 'test', password: 'test' } as LoginUserDto;
//     // jest.spyOn(authService, 'checkUser').mockResolvedValue(true);
//     jest.spyOn(authService, 'login').mockResolvedValue({ user: 'token' }); // checkUser: true

//     const result = await controller.login(loginUserDto);

//     // expect(authService.checkUser).toHaveBeenCalledWith(loginUserDto);
//     expect(authService.login).toHaveBeenCalledWith(loginUserDto);
//     // expect(result).toBe('token');
//   });
// });