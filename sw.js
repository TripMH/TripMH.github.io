const CACHE_NAME = 'tripmh-offline-v47';

// אירוע ההתקנה - משתלט מיד בלי לחכות
self.addEventListener('install', event => {
  self.skipWaiting();
});

// אירוע ההפעלה - מנקה קאשים ישנים
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// אירוע השליפה (Fetch) - אסטרטגיית "Stale-While-Revalidate" (מונע קיפאון)
self.addEventListener('fetch', event => {
  // מתעלמים לחלוטין מבקשות חיצוניות (כמו גוגל מפות או הקראה) כדי לא לתקוע את האפליקציה באופליין
  if (!event.request.url.startsWith(self.location.origin)) {
      return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request).then(networkResponse => {
          // ברגע שיש אינטרנט, שומרים עותק חדש לקאש מאחורי הקלעים
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }).catch(() => {
          // אם אין אינטרנט והקריאה נכשלה, נחזיר את העמוד הראשי (מונע קריסות בניווט)
          if (event.request.mode === 'navigate') {
            return cache.match('./index.html');
          }
        });
        
        // הסוד פה: מחזירים מיד את מה שיש בקאש (אם יש) ולא מחכים לרשת בכלל!
        return cachedResponse || fetchPromise;
      });
    })
  );
});