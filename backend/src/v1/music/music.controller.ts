import { Controller, Post, Get, Delete, Param, UseInterceptors, UploadedFile, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MusicService } from './music.service';
import { User } from '../database/entities/user.entity';
import { diskStorage } from 'multer';
import { ApiConsumes, ApiBody, ApiTags } from '@nestjs/swagger';
import { Multer } from 'multer'; // Import Multer type

@ApiTags('music')
@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        user: {
          type: 'string',
        },
        metadata: {
          type: 'string',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(mp3)$/)) {
        return cb(new BadRequestException('Only mp3 files are allowed!'), false);
      }
      cb(null, true);
    },
  }))
  async uploadTrack(@UploadedFile() file: Multer.File, @Body('user') user: User, @Body('metadata') metadata?: string) {
    return await this.musicService.uploadTrack(file, user, metadata);
  }

  @Get('tracks')
  async getTracks() {
    return await this.musicService.getTracks();
  }

  @Delete('tracks/:id')
  async deleteTrack(@Param('id') id: number) {
    return await this.musicService.deleteTrack(id);
  }
}