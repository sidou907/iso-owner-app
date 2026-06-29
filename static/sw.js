self.addEventListener('push', (event) => {
  let data = { title: 'ISO SYSTEM', body: 'لديك إشعار جديد' }
  try {
    data = event.data.json()
  } catch {
    // ignore malformed payloads
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/app/static/icon.png',
      badge: '/app/static/icon.png'
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(self.clients.openWindow('/'))
})
