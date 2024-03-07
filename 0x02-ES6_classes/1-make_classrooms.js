import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [19, 20, 34];
  const myRooms = rooms.map((size) => new ClassRoom(size));
  return myRooms;
}
