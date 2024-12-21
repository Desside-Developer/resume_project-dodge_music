import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Music } from '../database/entities/music.entity';
import { User } from '../database/entities/user.entity';
import * as fs from 'fs';
import * as path from 'path';
import { Multer } from 'multer'; // Import Multer type

@Injectable()
export class MusicService {
  constructor(
    @InjectRepository(Music)
    private musicRepository: Repository<Music>,
  ) {}

  async uploadTrack(file: Multer.File, user: User, metadata?: string): Promise<Music> {
    const url = `/uploads/${file.filename}`;
    const newTrack = this.musicRepository.create({ filename: file.filename, url, user, metadata });
    return await this.musicRepository.save(newTrack);
  }

  async getTracks(): Promise<Music[]> {
    return await this.musicRepository.find({ relations: ['user'] });
  }

  async deleteTrack(id: number): Promise<void> {
    const track = await this.musicRepository.findOne({ where: { id } });
    if (track) {
      const filePath = path.join(__dirname, '..', '..', '..', 'uploads', track.filename);
      fs.unlinkSync(filePath);
      await this.musicRepository.remove(track);
    }
  }
}