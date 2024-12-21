// filepath: /c:/Users/HCU-2248-562/Documents/Closed Projects/resume_project-dodge_music/backend/src/v1/database/entities/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Unique, OneToMany } from 'typeorm';
import { Music } from './music.entity';
// import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;  

  @Column()
  pass: string;

  @OneToMany(() => Music, music => music.user)
  tracks: Music[];
}