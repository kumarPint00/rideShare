// import endPoints from "../utils/endpoint";
// import sendApiReq from "../utils/sendapi";

// export async function startride(data, onSuccess) {
//   try {
//     const payload = await sendApiReq({
//       isAuthendicated: false,
//       method: 'post',
//       url: endPoints.startride,
//       data,
//     })
//     console.log(payload)
//     if (payload.status_code === 200)
//       onSuccess()
//   } catch (error) {
//     console.log(error)
//   }
// }

// export async function joinRide(data, onSuccess) {
//   try {
//     const payload = await sendApiReq({
//       isAuthendicated: false,
//       method: 'post',
//       url: endPoints.joinRide,
//       data,
//     })

//     console.log(payload)
//     if (payload.status_code === 200)
//       onSuccess()
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }
