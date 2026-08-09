Shithead v24 - Firebase Anonymous Authentication

Upload:
- index.html
- single.html
- multiplayer.html

Then in Firebase Realtime Database > Rules, replace the public test rules with the contents of firebase-rules.json and Publish.

Players do NOT create accounts. Firebase silently signs them in anonymously before room or leaderboard access.

These rules are substantially safer than public rules because unauthenticated internet traffic is denied.
They still allow any authenticated Shithead client to write room/leaderboard data; a later hardening step can restrict writes more narrowly by room membership/host.
