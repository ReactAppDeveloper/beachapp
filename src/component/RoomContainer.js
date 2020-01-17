import React from "react";
import RoomFilter from "../component/RoomFilter";
import RoomList from "../component/RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      Hello from room container
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             Hello from room container
//             <RoomFilter rooms={rooms}></RoomFilter>
//             <RoomList rooms={sortedRooms}></RoomList>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
