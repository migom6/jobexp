import { util } from "./util";
import { Queue } from "workbox-background-sync";

declare let self: ServiceWorkerGlobalScope;

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
//
// self.__WB_DISABLE_DEV_LOGS = true

// util();

// // listen to message event from window
// self.addEventListener("message", (event) => {
//   // HOW TO TEST THIS?
//   // Run this in your browser console:
//   //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
//   // OR use next-pwa injected workbox object
//   //     window.workbox.messageSW({command: 'log', message: 'hello world'})
//   console.log(event?.data);
// });

// self.addEventListener("push", (event) => {
//   const data = JSON.parse(event?.data.text() || "{}");
//   event?.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.message,
//       icon: "/icons/android-chrome-192x192.png",
//     })
//   );
// });

// self.addEventListener("notificationclick", (event) => {
//   event?.notification.close();
//   event?.waitUntil(
//     self.clients
//       .matchAll({ type: "window", includeUncontrolled: true })
//       .then(function (clientList) {
//         if (clientList.length > 0) {
//           let client = clientList[0];
//           for (let i = 0; i < clientList.length; i++) {
//             if (clientList[i].focused) {
//               client = clientList[i];
//             }
//           }
//           return client.focus();
//         }
//         return self.clients.openWindow("/");
//       })
//   );
// });

const queue = new Queue("myQueueName");

self.addEventListener("fetch", (event) => {
  // Add in your own criteria here to return early if this
  // isn't a request that should use background sync.
  if (!["POST", "PUT", "DELETE"].includes(event?.request.method ?? "")) {
    return;
  }

  if (!event?.request.url.includes("/api/")) {
    return;
  }

  const bgSyncLogic = async () => {
    try {
      const response = await fetch(event!.request.clone());
      return response;
    } catch (error) {
      await queue.pushRequest({ request: event!.request });
      return error;
    }
  };

  event!.respondWith(bgSyncLogic() as Response | Promise<Response>);
});

self.addEventListener("message", (event) => {
  if (event?.data === "replayRequests") {
    queue.size().then((size) => {
      if (size > 0) {
        queue.replayRequests();
        (event?.source as Client).postMessage("replayedRequests");
      }
    });
  }
});
