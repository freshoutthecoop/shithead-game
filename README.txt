Shithead v25 - Firebase auth-ready fix

Changes:
- Host, Join, and Leaderboard buttons start disabled.
- The app signs in anonymously on page load.
- Buttons enable only after Firebase onAuthStateChanged confirms a real authenticated user.
- All room/leaderboard database access waits for confirmed auth.
- Single-player remains unchanged.
- Keep the authenticated Realtime Database rules from v24.
