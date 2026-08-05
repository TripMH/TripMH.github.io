# 🌸 TripMH – Ultimate Japan Travel Planner & PWA

[![GitHub Pages Status](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=for-the-badge&logo=github)](https://tripmh.github.io)
[![PWA Ready](https://img.shields.io/badge/PWA-Enabled-blueviolet?style=for-the-badge&logo=pwa)](https://tripmh.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **TripMH** הוא יישום רשת מתקדם (Progressive Web App) המנוהל כולה בקליינט-סייד, שנועד לתכנון, ניהול ומעקב מקיף אחר מסע מפורט ביפן (טוקיו, קיוטו, אוסקה והסביבה). המערכת בנויה לעבודה מלאה אופליין (Offline-First) ומשלבת מסדי נתונים עשירים המבוססים על קבצי CSV דינמיים.

🌐 **קישור לאפליקציה החיה:** [tripmh.github.io](https://tripmh.github.io)

---

## 🚀 תכונות עיקריות (Key Features)

* **📅 לוח זמנים ומסלול מפורט (`itinerary_v4.csv`):** מעקב יומי מדויק הכולל שעות מומלצות, זמני נסיעה, עלויות מוערכות בשקלים ובינים, קישורי ניווט ישירים לגוגל מפות, והנחיות לוגיסטיות.
* **🎒 רשימת ציוד וצ'ק-ליסט (`Checklist__v4.csv`):** רשימת אריזה ממוינת לפי קטגוריות ועדיפויות (קריטי, חשוב, רשות) הכוללת דגשים לטיסה ולשהייה ביפן.
* **🔄 חלופות ותוכניות גיבוי - Plan B (`options_v4.csv`):** מאגר יעדים חלופיים, אתרים מקורים לימים גשומים, ופעילויות גמישות לכל אזור במסלול.
* **💡 טיפים והנחיות מקצועיות (`tips_v5.csv`):** ריכוז מידע קריטי על בריאות, מים, מפות אופליין, מספרי חירום, אפליקציות חובה, חוקי התנהלות בדירות ובמלונות קפסולה.
* **🇯🇵 מילון ביטויים שימושיים (`מילון_v4.csv`):** מילון עברית-אנגלית-יפנית הכולל כתיב יפני (Kanji/Kana), רומאג'י, והגייה מדויקת בעברית עם ניקוד לסיטואציות נפוצות.
* **📱 תמיכה מלאה כ-PWA (Progressive Web App):** אפשרות להתקנה על כל מכשיר נייד, עבודה מלאה ללא חיבור לאינטרנט באמצעות Service Worker, וממשק מותאם אישית.

---

## 📁 מבנה הריפוזיטורי (Repository Structure)

```text
TripMH.github.io/
├── index.html            # ממשק המשתמש המרכזי של האפליקציה (Frontend SPA)
├── Checklist__v4.csv     # מסד נתונים: צ'ק-ליסט ורשימת ציוד לאריזה
├── itinerary_v4.csv      # מסד נתונים: תוכנית המסלול היומית והלוגיסטיקה
├── options_v4.csv        # מסד נתונים: חלופות ואטרקציות גיבוי (Plan B)
├── tips_v5.csv           # מסד נתונים: טיפים, הנחיות חירום וקישורים שימושיים
├── מילון_v4.csv           # מסד נתונים: מילון ביטויים ביפנית
├── sw.js                 # Service Worker לתמיכה באופליין ומטמון (Caching)
├── manifest.json         # הגדרות PWA (Manifest)
└── icon-*.png            # סמליל המערכת למובייל ולדסקטופ
```

---

## 🛠️ טכנולוגיות וכלים (Tech Stack)

* **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS.
* **Data Layer:** Structured CSV Datasets parsed dynamically.
* **PWA Features:** Service Workers (`sw.js`), Web App Manifest.
* **Hosting & Deployment:** GitHub Pages (`tripmh.github.io`).

---

## 📄 רישיון (License)

פרויקט זה מנוהל אישית על ידי **Meir Hadad** ומוגן תחת רישיון MIT.
