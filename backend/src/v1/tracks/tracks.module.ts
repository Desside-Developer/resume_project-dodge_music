import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';

@Module({
  providers: [TracksService]
})
export class TracksModule {}
